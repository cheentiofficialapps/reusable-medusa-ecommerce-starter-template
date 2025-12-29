"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCardContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const ui_1 = require("@medusajs/ui");
const react_2 = require("react");
const radio_1 = __importDefault(require("@modules/common/components/radio"));
const constants_1 = require("@lib/constants");
const skeleton_card_details_1 = __importDefault(require("@modules/skeletons/components/skeleton-card-details"));
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const payment_test_1 = __importDefault(require("../payment-test"));
const stripe_wrapper_1 = require("../payment-wrapper/stripe-wrapper");
const PaymentContainer = ({ paymentProviderId, selectedPaymentOptionId, paymentInfoMap, disabled = false, children, }) => {
    const isDevelopment = process.env.NODE_ENV === "development";
    return ((0, jsx_runtime_1.jsxs)(react_1.Radio, { value: paymentProviderId, disabled: disabled, className: (0, ui_1.clx)("flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active", {
            "border-ui-border-interactive": selectedPaymentOptionId === paymentProviderId,
        }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-4", children: [(0, jsx_runtime_1.jsx)(radio_1.default, { checked: selectedPaymentOptionId === paymentProviderId }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-base-regular", children: paymentInfoMap[paymentProviderId]?.title || paymentProviderId }), (0, constants_1.isManual)(paymentProviderId) && isDevelopment && ((0, jsx_runtime_1.jsx)(payment_test_1.default, { className: "hidden small:block" }))] }), (0, jsx_runtime_1.jsx)("span", { className: "justify-self-end text-ui-fg-base", children: paymentInfoMap[paymentProviderId]?.icon })] }), (0, constants_1.isManual)(paymentProviderId) && isDevelopment && ((0, jsx_runtime_1.jsx)(payment_test_1.default, { className: "small:hidden text-[10px]" })), children] }, paymentProviderId));
};
exports.default = PaymentContainer;
const StripeCardContainer = ({ paymentProviderId, selectedPaymentOptionId, paymentInfoMap, disabled = false, setCardBrand, setError, setCardComplete, }) => {
    const stripeReady = (0, react_2.useContext)(stripe_wrapper_1.StripeContext);
    const useOptions = (0, react_2.useMemo)(() => {
        return {
            style: {
                base: {
                    fontFamily: "Inter, sans-serif",
                    color: "#424270",
                    "::placeholder": {
                        color: "rgb(107 114 128)",
                    },
                },
            },
            classes: {
                base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
            },
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)(PaymentContainer, { paymentProviderId: paymentProviderId, selectedPaymentOptionId: selectedPaymentOptionId, paymentInfoMap: paymentInfoMap, disabled: disabled, children: selectedPaymentOptionId === paymentProviderId &&
            (stripeReady ? ((0, jsx_runtime_1.jsxs)("div", { className: "my-4 transition-all duration-150 ease-in-out", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "Enter your card details:" }), (0, jsx_runtime_1.jsx)(react_stripe_js_1.CardElement, { options: useOptions, onChange: (e) => {
                            setCardBrand(e.brand && e.brand.charAt(0).toUpperCase() + e.brand.slice(1));
                            setError(e.error?.message || null);
                            setCardComplete(e.complete);
                        } })] })) : ((0, jsx_runtime_1.jsx)(skeleton_card_details_1.default, {}))) }));
};
exports.StripeCardContainer = StripeCardContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1jb250YWluZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2Q0FBNkQ7QUFDN0QscUNBQXdDO0FBQ3hDLGlDQUE0RDtBQUU1RCw2RUFBb0Q7QUFFcEQsOENBQXlDO0FBQ3pDLGdIQUFxRjtBQUNyRiw2REFBcUQ7QUFFckQsbUVBQXlDO0FBQ3pDLHNFQUFpRTtBQVVqRSxNQUFNLGdCQUFnQixHQUFvQyxDQUFDLEVBQ3pELGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLFFBQVEsR0FDVCxFQUFFLEVBQUU7SUFDSCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUE7SUFFNUQsT0FBTyxDQUNMLHdCQUFDLGFBQWdCLElBRWYsS0FBSyxFQUFFLGlCQUFpQixFQUN4QixRQUFRLEVBQUUsUUFBUSxFQUNsQixTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1osNElBQTRJLEVBQzVJO1lBQ0UsOEJBQThCLEVBQzVCLHVCQUF1QixLQUFLLGlCQUFpQjtTQUNoRCxDQUNGLGFBRUQsaUNBQUssU0FBUyxFQUFDLG9DQUFvQyxhQUNqRCxpQ0FBSyxTQUFTLEVBQUMsMkJBQTJCLGFBQ3hDLHVCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUUsdUJBQXVCLEtBQUssaUJBQWlCLEdBQUksRUFDakUsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxtQkFBbUIsWUFDaEMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxJQUFJLGlCQUFpQixHQUN6RCxFQUNOLElBQUEsb0JBQVEsRUFBQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUMvQyx1QkFBQyxzQkFBVyxJQUFDLFNBQVMsRUFBQyxvQkFBb0IsR0FBRyxDQUMvQyxJQUNHLEVBQ04saUNBQU0sU0FBUyxFQUFDLGtDQUFrQyxZQUMvQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEdBQ25DLElBQ0gsRUFDTCxJQUFBLG9CQUFRLEVBQUMsaUJBQWlCLENBQUMsSUFBSSxhQUFhLElBQUksQ0FDL0MsdUJBQUMsc0JBQVcsSUFBQyxTQUFTLEVBQUMsMEJBQTBCLEdBQUcsQ0FDckQsRUFDQSxRQUFRLEtBNUJKLGlCQUFpQixDQTZCTCxDQUNwQixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUE7QUFFeEIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEVBQ2xDLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLFlBQVksRUFDWixRQUFRLEVBQ1IsZUFBZSxHQUtoQixFQUFFLEVBQUU7SUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFBLGtCQUFVLEVBQUMsOEJBQWEsQ0FBQyxDQUFBO0lBRTdDLE1BQU0sVUFBVSxHQUE2QixJQUFBLGVBQU8sRUFBQyxHQUFHLEVBQUU7UUFDeEQsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFFLG1CQUFtQjtvQkFDL0IsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGVBQWUsRUFBRTt3QkFDZixLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSw4UEFBOFA7YUFDclE7U0FDRixDQUFBO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRU4sT0FBTyxDQUNMLHVCQUFDLGdCQUFnQixJQUNmLGlCQUFpQixFQUFFLGlCQUFpQixFQUNwQyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFDaEQsY0FBYyxFQUFFLGNBQWMsRUFDOUIsUUFBUSxFQUFFLFFBQVEsWUFFakIsdUJBQXVCLEtBQUssaUJBQWlCO1lBQzVDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNiLGlDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsYUFDM0QsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxzQ0FBc0MseUNBRS9DLEVBQ1AsdUJBQUMsNkJBQVcsSUFDVixPQUFPLEVBQUUsVUFBc0MsRUFDL0MsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7NEJBQ2QsWUFBWSxDQUNWLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzlELENBQUE7NEJBQ0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBOzRCQUNsQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO3dCQUM3QixDQUFDLEdBQ0QsSUFDRSxDQUNQLENBQUMsQ0FBQyxDQUFDLENBQ0YsdUJBQUMsK0JBQW1CLEtBQUcsQ0FDeEIsQ0FBQyxHQUNhLENBQ3BCLENBQUE7QUFDSCxDQUFDLENBQUE7QUE3RFksUUFBQSxtQkFBbUIsdUJBNkQvQiJ9