"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const constants_1 = require("@lib/constants");
const cart_1 = require("@lib/data/cart");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const error_message_1 = __importDefault(require("@modules/checkout/components/error-message"));
const payment_container_1 = __importStar(require("@modules/checkout/components/payment-container"));
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const navigation_1 = require("next/navigation");
const react_2 = require("react");
const Payment = ({ cart, availablePaymentMethods, }) => {
    const activeSession = cart.payment_collection?.payment_sessions?.find((paymentSession) => paymentSession.status === "pending");
    const [isLoading, setIsLoading] = (0, react_2.useState)(false);
    const [error, setError] = (0, react_2.useState)(null);
    const [cardBrand, setCardBrand] = (0, react_2.useState)(null);
    const [cardComplete, setCardComplete] = (0, react_2.useState)(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = (0, react_2.useState)(activeSession?.provider_id ?? "");
    const searchParams = (0, navigation_1.useSearchParams)();
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    const isOpen = searchParams.get("step") === "payment";
    const setPaymentMethod = async (method) => {
        setError(null);
        setSelectedPaymentMethod(method);
        if ((0, constants_1.isStripeLike)(method)) {
            await (0, cart_1.initiatePaymentSession)(cart, {
                provider_id: method,
            });
        }
    };
    const paidByGiftcard = cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0;
    const paymentReady = (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard;
    const createQueryString = (0, react_2.useCallback)((name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    const handleEdit = () => {
        router.push(pathname + "?" + createQueryString("step", "payment"), {
            scroll: false,
        });
    };
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const shouldInputCard = (0, constants_1.isStripeLike)(selectedPaymentMethod) && !activeSession;
            const checkActiveSession = activeSession?.provider_id === selectedPaymentMethod;
            if (!checkActiveSession) {
                await (0, cart_1.initiatePaymentSession)(cart, {
                    provider_id: selectedPaymentMethod,
                });
            }
            if (!shouldInputCard) {
                return router.push(pathname + "?" + createQueryString("step", "review"), {
                    scroll: false,
                });
            }
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    (0, react_2.useEffect)(() => {
        setError(null);
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-between mb-6", children: [(0, jsx_runtime_1.jsxs)(ui_1.Heading, { level: "h2", className: (0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
                            "opacity-50 pointer-events-none select-none": !isOpen && !paymentReady,
                        }), children: ["Payment", !isOpen && paymentReady && (0, jsx_runtime_1.jsx)(icons_1.CheckCircleSolid, {})] }), !isOpen && paymentReady && ((0, jsx_runtime_1.jsx)(ui_1.Text, { children: (0, jsx_runtime_1.jsx)("button", { onClick: handleEdit, className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover", "data-testid": "edit-payment-button", children: "Edit" }) }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: isOpen ? "block" : "hidden", children: [!paidByGiftcard && availablePaymentMethods?.length && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_1.RadioGroup, { value: selectedPaymentMethod, onChange: (value) => setPaymentMethod(value), children: availablePaymentMethods.map((paymentMethod) => ((0, jsx_runtime_1.jsx)("div", { children: (0, constants_1.isStripeLike)(paymentMethod.id) ? ((0, jsx_runtime_1.jsx)(payment_container_1.StripeCardContainer, { paymentProviderId: paymentMethod.id, selectedPaymentOptionId: selectedPaymentMethod, paymentInfoMap: constants_1.paymentInfoMap, setCardBrand: setCardBrand, setError: setError, setCardComplete: setCardComplete })) : ((0, jsx_runtime_1.jsx)(payment_container_1.default, { paymentInfoMap: constants_1.paymentInfoMap, paymentProviderId: paymentMethod.id, selectedPaymentOptionId: selectedPaymentMethod })) }, paymentMethod.id))) }) })), paidByGiftcard && ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-1/3", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Payment method" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium text-ui-fg-subtle", "data-testid": "payment-method-summary", children: "Gift card" })] })), (0, jsx_runtime_1.jsx)(error_message_1.default, { error: error, "data-testid": "payment-method-error-message" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "large", className: "mt-6", onClick: handleSubmit, isLoading: isLoading, disabled: ((0, constants_1.isStripeLike)(selectedPaymentMethod) && !cardComplete) ||
                                    (!selectedPaymentMethod && !paidByGiftcard), "data-testid": "submit-payment-button", children: !activeSession && (0, constants_1.isStripeLike)(selectedPaymentMethod)
                                    ? " Enter card details"
                                    : "Continue to review" })] }), (0, jsx_runtime_1.jsx)("div", { className: isOpen ? "hidden" : "block", children: cart && paymentReady && activeSession ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-x-1 w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-1/3", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Payment method" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium text-ui-fg-subtle", "data-testid": "payment-method-summary", children: constants_1.paymentInfoMap[activeSession?.provider_id]?.title ||
                                                activeSession?.provider_id })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-1/3", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Payment details" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 txt-medium text-ui-fg-subtle items-center", "data-testid": "payment-details-summary", children: [(0, jsx_runtime_1.jsx)(ui_1.Container, { className: "flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover", children: constants_1.paymentInfoMap[selectedPaymentMethod]?.icon || ((0, jsx_runtime_1.jsx)(icons_1.CreditCard, {})) }), (0, jsx_runtime_1.jsx)(ui_1.Text, { children: (0, constants_1.isStripeLike)(selectedPaymentMethod) && cardBrand
                                                        ? cardBrand
                                                        : "Another step will appear" })] })] })] })) : paidByGiftcard ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-1/3", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Payment method" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium text-ui-fg-subtle", "data-testid": "payment-method-summary", children: "Gift card" })] })) : null })] }), (0, jsx_runtime_1.jsx)(divider_1.default, { className: "mt-8" })] }));
};
exports.default = Payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosNkNBQThDO0FBQzlDLDhDQUE2RDtBQUM3RCx5Q0FBdUQ7QUFDdkQsMkNBQThEO0FBQzlELHFDQUFvRTtBQUNwRSwrRkFBcUU7QUFDckUsb0dBRXVEO0FBQ3ZELGlGQUF3RDtBQUN4RCxnREFBeUU7QUFDekUsaUNBQXdEO0FBRXhELE1BQU0sT0FBTyxHQUFHLENBQUMsRUFDZixJQUFJLEVBQ0osdUJBQXVCLEdBSXhCLEVBQUUsRUFBRTtJQUNILE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQ25FLENBQUMsY0FBbUIsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQzdELENBQUE7SUFFRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBZ0IsSUFBSSxDQUFDLENBQUE7SUFDdkQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQWdCLElBQUksQ0FBQyxDQUFBO0lBQy9ELE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSx3QkFBd0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFDaEUsYUFBYSxF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