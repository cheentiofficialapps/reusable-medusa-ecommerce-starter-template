"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductActions;
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const use_in_view_1 = require("@lib/hooks/use-in-view");
const ui_1 = require("@medusajs/ui");
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const option_select_1 = __importDefault(require("@modules/products/components/product-actions/option-select"));
const lodash_1 = require("lodash");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const product_price_1 = __importDefault(require("../product-price"));
const mobile_actions_1 = __importDefault(require("./mobile-actions"));
const navigation_2 = require("next/navigation");
const optionsAsKeymap = (variantOptions) => {
    return variantOptions?.reduce((acc, varopt) => {
        acc[varopt.option_id] = varopt.value;
        return acc;
    }, {});
};
function ProductActions({ product, disabled, }) {
    const router = (0, navigation_2.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const [options, setOptions] = (0, react_1.useState)({});
    const [isAdding, setIsAdding] = (0, react_1.useState)(false);
    const countryCode = (0, navigation_1.useParams)().countryCode;
    // If there is only 1 variant, preselect the options
    (0, react_1.useEffect)(() => {
        if (product.variants?.length === 1) {
            const variantOptions = optionsAsKeymap(product.variants[0].options);
            setOptions(variantOptions ?? {});
        }
    }, [product.variants]);
    const selectedVariant = (0, react_1.useMemo)(() => {
        if (!product.variants || product.variants.length === 0) {
            return;
        }
        return product.variants.find((v) => {
            const variantOptions = optionsAsKeymap(v.options);
            return (0, lodash_1.isEqual)(variantOptions, options);
        });
    }, [product.variants, options]);
    // update the options when a variant is selected
    const setOptionValue = (optionId, value) => {
        setOptions((prev) => ({
            ...prev,
            [optionId]: value,
        }));
    };
    //check if the selected options produce a valid variant
    const isValidVariant = (0, react_1.useMemo)(() => {
        return product.variants?.some((v) => {
            const variantOptions = optionsAsKeymap(v.options);
            return (0, lodash_1.isEqual)(variantOptions, options);
        });
    }, [product.variants, options]);
    (0, react_1.useEffect)(() => {
        const params = new URLSearchParams(searchParams.toString());
        const value = isValidVariant ? selectedVariant?.id : null;
        if (params.get("v_id") === value) {
            return;
        }
        if (value) {
            params.set("v_id", value);
        }
        else {
            params.delete("v_id");
        }
        router.replace(pathname + "?" + params.toString());
    }, [selectedVariant, isValidVariant]);
    // check if the selected variant is in stock
    const inStock = (0, react_1.useMemo)(() => {
        // If we don't manage inventory, we can always add to cart
        if (selectedVariant && !selectedVariant.manage_inventory) {
            return true;
        }
        // If we allow back orders on the variant, we can add to cart
        if (selectedVariant?.allow_backorder) {
            return true;
        }
        // If there is inventory available, we can add to cart
        if (selectedVariant?.manage_inventory &&
            (selectedVariant?.inventory_quantity || 0) > 0) {
            return true;
        }
        // Otherwise, we can't add to cart
        return false;
    }, [selectedVariant]);
    const actionsRef = (0, react_1.useRef)(null);
    const inView = (0, use_in_view_1.useIntersection)(actionsRef, "0px");
    // add the selected variant to the cart
    const handleAddToCart = async () => {
        if (!selectedVariant?.id)
            return null;
        setIsAdding(true);
        await (0, cart_1.addToCart)({
            variantId: selectedVariant.id,
            quantity: 1,
            countryCode,
        });
        setIsAdding(false);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-2", ref: actionsRef, children: [(0, jsx_runtime_1.jsx)("div", { children: (product.variants?.length ?? 0) > 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4", children: [(product.options || []).map((option) => {
                                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(option_select_1.default, { option: option, current: options[option.id], updateOption: setOptionValue, title: option.title ?? "", "data-testid": "product-options", disabled: !!disabled || isAdding }) }, option.id));
                            }), (0, jsx_runtime_1.jsx)(divider_1.default, {})] })) }), (0, jsx_runtime_1.jsx)(product_price_1.default, { product: product, variant: selectedVariant }), (0, jsx_runtime_1.jsx)(ui_1.Button, { onClick: handleAddToCart, disabled: !inStock ||
                        !selectedVariant ||
                        !!disabled ||
                        isAdding ||
                        !isValidVariant, variant: "primary", className: "w-full h-10", isLoading: isAdding, "data-testid": "add-product-button", children: !selectedVariant && !options
                        ? "Select variant"
                        : !inStock || !isValidVariant
                            ? "Out of stock"
                            : "Add to cart" }), (0, jsx_runtime_1.jsx)(mobile_actions_1.default, { product: product, variant: selectedVariant, options: options, updateOptions: setOptionValue, inStock: inStock, handleAddToCart: handleAddToCart, isAdding: isAdding, show: !inView, optionsDisabled: !!disabled || isAdding })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1hY3Rpb25zL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7OztBQThCWixpQ0F3S0M7O0FBcE1ELHlDQUEwQztBQUMxQyx3REFBd0Q7QUFFeEQscUNBQXFDO0FBQ3JDLGlGQUF3RDtBQUN4RCwrR0FBcUY7QUFDckYsbUNBQWdDO0FBQ2hDLGdEQUF5RTtBQUN6RSxpQ0FBNEQ7QUFDNUQscUVBQTJDO0FBQzNDLHNFQUE0QztBQUM1QyxnREFBMkM7QUFRM0MsTUFBTSxlQUFlLEdBQUcsQ0FDdEIsY0FBd0QsRUFDeEQsRUFBRTtJQUNGLE9BQU8sY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQTJCLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3BDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUFBO0FBRUQsU0FBd0IsY0FBYyxDQUFDLEVBQ3JDLE9BQU8sRUFDUCxRQUFRLEdBQ1k7SUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBQSxzQkFBUyxHQUFFLENBQUE7SUFDMUIsTUFBTSxRQUFRLEdBQUcsSUFBQSx3QkFBVyxHQUFFLENBQUE7SUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBQSw0QkFBZSxHQUFFLENBQUE7SUFFdEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQXFDLEVBQUUsQ0FBQyxDQUFBO0lBQzlFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxD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