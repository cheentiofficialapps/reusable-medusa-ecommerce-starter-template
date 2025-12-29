"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const preview_1 = __importDefault(require("@modules/cart/templates/preview"));
const discount_code_1 = __importDefault(require("@modules/checkout/components/discount-code"));
const cart_totals_1 = __importDefault(require("@modules/common/components/cart-totals"));
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const CheckoutSummary = ({ cart }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0 ", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full bg-white flex flex-col", children: [(0, jsx_runtime_1.jsx)(divider_1.default, { className: "my-6 small:hidden" }), (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: "flex flex-row text-3xl-regular items-baseline", children: "In your Cart" }), (0, jsx_runtime_1.jsx)(divider_1.default, { className: "my-6" }), (0, jsx_runtime_1.jsx)(cart_totals_1.default, { totals: cart }), (0, jsx_runtime_1.jsx)(preview_1.default, { cart: cart }), (0, jsx_runtime_1.jsx)("div", { className: "my-6", children: (0, jsx_runtime_1.jsx)(discount_code_1.default, { cart: cart }) })] }) }));
};
exports.default = CheckoutSummary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L3RlbXBsYXRlcy9jaGVja291dC1zdW1tYXJ5L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQ0FBc0M7QUFFdEMsOEVBQWtFO0FBQ2xFLCtGQUFxRTtBQUNyRSx5RkFBK0Q7QUFDL0QsaUZBQXdEO0FBRXhELE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQWlCLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFDLDRFQUE0RSxZQUN6RixpQ0FBSyxTQUFTLEVBQUMsK0JBQStCLGFBQzVDLHVCQUFDLGlCQUFPLElBQUMsU0FBUyxFQUFDLG1CQUFtQixHQUFHLEVBQ3pDLHVCQUFDLFlBQU8sSUFDTixLQUFLLEVBQUMsSUFBSSxFQUNWLFNBQVMsRUFBQywrQ0FBK0MsNkJBR2pELEVBQ1YsdUJBQUMsaUJBQU8sSUFBQyxTQUFTLEVBQUMsTUFBTSxHQUFHLEVBQzVCLHVCQUFDLHFCQUFVLElBQUMsTUFBTSxFQUFFLElBQUksR0FBSSxFQUM1Qix1QkFBQyxpQkFBb0IsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLEVBQ3BDLGdDQUFLLFNBQVMsRUFBQyxNQUFNLFlBQ25CLHVCQUFDLHVCQUFZLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxHQUN4QixJQUNGLEdBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFBIn0=