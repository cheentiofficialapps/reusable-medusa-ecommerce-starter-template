"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const payment_button_1 = __importDefault(require("../payment-button"));
const navigation_1 = require("next/navigation");
const Review = ({ cart }) => {
    const searchParams = (0, navigation_1.useSearchParams)();
    const isOpen = searchParams.get("step") === "review";
    const paidByGiftcard = cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0;
    const previousStepsCompleted = cart.shipping_address &&
        cart.shipping_methods.length > 0 &&
        (cart.payment_collection || paidByGiftcard);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-row items-center justify-between mb-6", children: (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: (0, ui_1.clx)("flex flex-row text-3xl-regular gap-x-2 items-baseline", {
                        "opacity-50 pointer-events-none select-none": !isOpen,
                    }), children: "Review" }) }), isOpen && previousStepsCompleted && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-start gap-x-1 w-full mb-6", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base mb-1", children: "By clicking the Place Order button, you confirm that you have read, understand and accept our Terms of Use, Terms of Sale and Returns Policy and acknowledge that you have read Medusa Store's Privacy Policy." }) }) }), (0, jsx_runtime_1.jsx)(payment_button_1.default, { cart: cart, "data-testid": "submit-order-button" })] }))] }));
};
exports.default = Review;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcmV2aWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixxQ0FBaUQ7QUFFakQsdUVBQTZDO0FBQzdDLGdEQUFpRDtBQUVqRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFpQixFQUFFLEVBQUU7SUFDekMsTUFBTSxZQUFZLEdBQUcsSUFBQSw0QkFBZSxHQUFFLENBQUE7SUFFdEMsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUE7SUFFcEQsTUFBTSxjQUFjLEdBQ2xCLElBQUksRUFBRSxVQUFVLElBQUksSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFBO0lBRXZFLE1BQU0sc0JBQXNCLEdBQzFCLElBQUksQ0FBQyxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxDQUFBO0lBRTdDLE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsVUFBVSxhQUN2QixnQ0FBSyxTQUFTLEVBQUMsaURBQWlELFlBQzlELHVCQUFDLFlBQU8sSUFDTixLQUFLLEVBQUMsSUFBSSxFQUNWLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFDWix1REFBdUQsRUFDdkQ7d0JBQ0UsNENBQTRDLEVBQUUsQ0FBQyxNQUFNO3FCQUN0RCxDQUNGLHVCQUdPLEdBQ04sRUFDTCxNQUFNLElBQUksc0JBQXNCLElBQUksQ0FDbkMsNkRBQ0UsZ0NBQUssU0FBUyxFQUFDLHNDQUFzQyxZQUNuRCxnQ0FBSyxTQUFTLEVBQUMsUUFBUSxZQUNyQix1QkFBQyxTQUFJLElBQUMsU0FBUyxFQUFDLHNDQUFzQywrTkFLL0MsR0FDSCxHQUNGLEVBQ04sdUJBQUMsd0JBQWEsSUFBQyxJQUFJLEVBQUUsSUFBSSxpQkFBYyxxQkFBcUIsR0FBRyxJQUM5RCxDQUNKLElBQ0csQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFBIn0=