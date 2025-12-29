"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const cart_1 = require("@lib/data/cart");
const fulfillment_1 = require("@lib/data/fulfillment");
const money_1 = require("@lib/util/money");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const error_message_1 = __importDefault(require("@modules/checkout/components/error-message"));
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const radio_1 = __importDefault(require("@modules/common/components/radio"));
const navigation_1 = require("next/navigation");
const react_2 = require("react");
const PICKUP_OPTION_ON = "__PICKUP_ON";
const PICKUP_OPTION_OFF = "__PICKUP_OFF";
function formatAddress(address) {
    if (!address) {
        return "";
    }
    let ret = "";
    if (address.address_1) {
        ret += ` ${address.address_1}`;
    }
    if (address.address_2) {
        ret += `, ${address.address_2}`;
    }
    if (address.postal_code) {
        ret += `, ${address.postal_code} ${address.city}`;
    }
    if (address.country_code) {
        ret += `, ${address.country_code.toUpperCase()}`;
    }
    return ret;
}
const Shipping = ({ cart, availableShippingMethods, }) => {
    const [isLoading, setIsLoading] = (0, react_2.useState)(false);
    const [isLoadingPrices, setIsLoadingPrices] = (0, react_2.useState)(true);
    const [showPickupOptions, setShowPickupOptions] = (0, react_2.useState)(PICKUP_OPTION_OFF);
    const [calculatedPricesMap, setCalculatedPricesMap] = (0, react_2.useState)({});
    const [error, setError] = (0, react_2.useState)(null);
    const [shippingMethodId, setShippingMethodId] = (0, react_2.useState)(cart.shipping_methods?.at(-1)?.shipping_option_id || null);
    const searchParams = (0, navigation_1.useSearchParams)();
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    const isOpen = searchParams.get("step") === "delivery";
    const _shippingMethods = availableShippingMethods?.filter((sm) => sm.service_zone?.fulfillment_set?.type !== "pickup");
    const _pickupMethods = availableShippingMethods?.filter((sm) => sm.service_zone?.fulfillment_set?.type === "pickup");
    const hasPickupOptions = !!_pickupMethods?.length;
    (0, react_2.useEffect)(() => {
        setIsLoadingPrices(true);
        if (_shippingMethods?.length) {
            const promises = _shippingMethods
                .filter((sm) => sm.price_type === "calculated")
                .map((sm) => (0, fulfillment_1.calculatePriceForShippingOption)(sm.id, cart.id));
            if (promises.length) {
                Promise.allSettled(promises).then((res) => {
                    const pricesMap = {};
                    res
                        .filter((r) => r.status === "fulfilled")
                        .forEach((p) => (pricesMap[p.value?.id || ""] = p.value?.amount));
                    setCalculatedPricesMap(pricesMap);
                    setIsLoadingPrices(false);
                });
            }
        }
        if (_pickupMethods?.find((m) => m.id === shippingMethodId)) {
            setShowPickupOptions(PICKUP_OPTION_ON);
        }
    }, [availableShippingMethods]);
    const handleEdit = () => {
        router.push(pathname + "?step=delivery", { scroll: false });
    };
    const handleSubmit = () => {
        router.push(pathname + "?step=payment", { scroll: false });
    };
    const handleSetShippingMethod = async (id, variant) => {
        setError(null);
        if (variant === "pickup") {
            setShowPickupOptions(PICKUP_OPTION_ON);
        }
        else {
            setShowPickupOptions(PICKUP_OPTION_OFF);
        }
        let currentId = null;
        setIsLoading(true);
        setShippingMethodId((prev) => {
            currentId = prev;
            return id;
        });
        await (0, cart_1.setShippingMethod)({ cartId: cart.id, shippingMethodId: id })
            .catch((err) => {
            setShippingMethodId(currentId);
            setError(err.message);
        })
            .finally(() => {
            setIsLoading(false);
        });
    };
    (0, react_2.useEffect)(() => {
        setError(null);
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-between mb-6", children: [(0, jsx_runtime_1.jsxs)(ui_1.Heading, { level: "h2", className: (0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
                            "opacity-50 pointer-events-none select-none": !isOpen && cart.shipping_methods?.length === 0,
                        }), children: ["Delivery", !isOpen && (cart.shipping_methods?.length ?? 0) > 0 && ((0, jsx_runtime_1.jsx)(icons_1.CheckCircleSolid, {}))] }), !isOpen &&
                        cart?.shipping_address &&
                        cart?.billing_address &&
                        cart?.email && ((0, jsx_runtime_1.jsx)(ui_1.Text, { children: (0, jsx_runtime_1.jsx)("button", { onClick: handleEdit, className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover", "data-testid": "edit-delivery-button", children: "Edit" }) }))] }), isOpen ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-medium txt-medium text-ui-fg-base", children: "Shipping method" }), (0, jsx_runtime_1.jsx)("span", { className: "mb-4 text-ui-fg-muted txt-medium", children: "How would you like you order delivered" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "delivery-options-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "pb-8 md:pt-0 pt-2", children: [hasPickupOptions && ((0, jsx_runtime_1.jsx)(react_1.RadioGroup, { value: showPickupOptions, onChange: (value) => {
                                                const id = _pickupMethods.find((option) => !option.insufficient_inventory)?.id;
                                                if (id) {
                                                    handleSetShippingMethod(id, "pickup");
                                                }
                                            }, children: (0, jsx_runtime_1.jsxs)(react_1.Radio, { value: PICKUP_OPTION_ON, "data-testid": "delivery-option-radio", className: (0, ui_1.clx)("flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
                                                    "border-ui-border-interactive": showPickupOptions === PICKUP_OPTION_ON,
                                                }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-4", children: [(0, jsx_runtime_1.jsx)(radio_1.default, { checked: showPickupOptions === PICKUP_OPTION_ON }), (0, jsx_runtime_1.jsx)("span", { className: "text-base-regular", children: "Pick up your order" })] }), (0, jsx_runtime_1.jsx)("span", { className: "justify-self-end text-ui-fg-base", children: "-" })] }) })), (0, jsx_runtime_1.jsx)(react_1.RadioGroup, { value: shippingMethodId, onChange: (v) => {
                                                if (v) {
                                                    return handleSetShippingMethod(v, "shipping");
                                                }
                                            }, children: _shippingMethods?.map((option) => {
                                                const isDisabled = option.price_type === "calculated" &&
                                                    !isLoadingPrices &&
                                                    typeof calculatedPricesMap[option.id] !== "number";
                                                return ((0, jsx_runtime_1.jsxs)(react_1.Radio, { value: option.id, "data-testid": "delivery-option-radio", disabled: isDisabled, className: (0, ui_1.clx)("flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
                                                        "border-ui-border-interactive": option.id === shippingMethodId,
                                                        "hover:shadow-brders-none cursor-not-allowed": isDisabled,
                                                    }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-4", children: [(0, jsx_runtime_1.jsx)(radio_1.default, { checked: option.id === shippingMethodId }), (0, jsx_runtime_1.jsx)("span", { className: "text-base-regular", children: option.name })] }), (0, jsx_runtime_1.jsx)("span", { className: "justify-self-end text-ui-fg-base", children: option.price_type === "flat" ? ((0, money_1.convertToLocale)({
                                                                amount: option.amount,
                                                                currency_code: cart?.currency_code,
                                                            })) : calculatedPricesMap[option.id] ? ((0, money_1.convertToLocale)({
                                                                amount: calculatedPricesMap[option.id],
                                                                currency_code: cart?.currency_code,
                                                            })) : isLoadingPrices ? ((0, jsx_runtime_1.jsx)(icons_1.Loader, {})) : ("-") })] }, option.id));
                                            }) })] }) })] }), showPickupOptions === PICKUP_OPTION_ON && ((0, jsx_runtime_1.jsxs)("div", { className: "grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-medium txt-medium text-ui-fg-base", children: "Store" }), (0, jsx_runtime_1.jsx)("span", { className: "mb-4 text-ui-fg-muted txt-medium", children: "Choose a store near you" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "delivery-options-container", children: (0, jsx_runtime_1.jsx)("div", { className: "pb-8 md:pt-0 pt-2", children: (0, jsx_runtime_1.jsx)(react_1.RadioGroup, { value: shippingMethodId, onChange: (v) => {
                                            if (v) {
                                                return handleSetShippingMethod(v, "pickup");
                                            }
                                        }, children: _pickupMethods?.map((option) => {
                                            return ((0, jsx_runtime_1.jsxs)(react_1.Radio, { value: option.id, disabled: option.insufficient_inventory, "data-testid": "delivery-option-radio", className: (0, ui_1.clx)("flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
                                                    "border-ui-border-interactive": option.id === shippingMethodId,
                                                    "hover:shadow-brders-none cursor-not-allowed": option.insufficient_inventory,
                                                }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-x-4", children: [(0, jsx_runtime_1.jsx)(radio_1.default, { checked: option.id === shippingMethodId }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-base-regular", children: option.name }), (0, jsx_runtime_1.jsx)("span", { className: "text-base-regular text-ui-fg-muted", children: formatAddress(option.service_zone?.fulfillment_set?.location
                                                                            ?.address) })] })] }), (0, jsx_runtime_1.jsx)("span", { className: "justify-self-end text-ui-fg-base", children: (0, money_1.convertToLocale)({
                                                            amount: option.amount,
                                                            currency_code: cart?.currency_code,
                                                        }) })] }, option.id));
                                        }) }) }) })] })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(error_message_1.default, { error: error, "data-testid": "delivery-option-error-message" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "large", className: "mt", onClick: handleSubmit, isLoading: isLoading, disabled: !cart.shipping_methods?.[0], "data-testid": "submit-delivery-option-button", children: "Continue to payment" })] })] })) : ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { className: "text-small-regular", children: cart && (cart.shipping_methods?.length ?? 0) > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-1/3", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Method" }), (0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "txt-medium text-ui-fg-subtle", children: [cart.shipping_methods.at(-1).name, " ", (0, money_1.convertToLocale)({
                                        amount: cart.shipping_methods.at(-1).amount,
                                        currency_code: cart?.currency_code,
                                    })] })] })) }) })), (0, jsx_runtime_1.jsx)(divider_1.default, { className: "mt-8" })] }));
};
exports.default = Shipping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmcvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7OztBQUVaLDZDQUFxRDtBQUNyRCx5Q0FBa0Q7QUFDbEQsdURBQXVFO0FBQ3ZFLDJDQUFpRDtBQUNqRCwyQ0FBMEQ7QUFFMUQscUNBQXlEO0FBQ3pELCtGQUFxRTtBQUNyRSxpRkFBd0Q7QUFDeEQsNkVBQTBEO0FBQzFELGdEQUF5RTtBQUN6RSxpQ0FBMkM7QUFFM0MsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUE7QUFDdEMsTUFBTSxpQkFBaUIsR0FBRyxjQUFjLENBQUE7QUFPeEMsU0FBUyxhQUFhLENBQUMsT0FBbUM7SUFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBRVosSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEIsR0FBRyxJQUFJLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QixHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsSUFBSSxLQUFLLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25ELENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxF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