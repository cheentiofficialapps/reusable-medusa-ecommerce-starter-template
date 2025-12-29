"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const skeleton_button_1 = __importDefault(require("@modules/skeletons/components/skeleton-button"));
const skeleton_cart_totals_1 = __importDefault(require("@modules/skeletons/components/skeleton-cart-totals"));
const SkeletonOrderSummary = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid-cols-1", children: [(0, jsx_runtime_1.jsx)(skeleton_cart_totals_1.default, { header: false }), (0, jsx_runtime_1.jsx)("div", { className: "mt-4", children: (0, jsx_runtime_1.jsx)(skeleton_button_1.default, {}) })] }));
};
exports.default = SkeletonOrderSummary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3NrZWxldG9ucy9jb21wb25lbnRzL3NrZWxldG9uLW9yZGVyLXN1bW1hcnkvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9HQUEwRTtBQUMxRSw4R0FBbUY7QUFFbkYsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxhQUFhLGFBQzFCLHVCQUFDLDhCQUFrQixJQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUksRUFDckMsZ0NBQUssU0FBUyxFQUFDLE1BQU0sWUFDbkIsdUJBQUMseUJBQWMsS0FBRyxHQUNkLElBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsb0JBQW9CLENBQUEifQ==