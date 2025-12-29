"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const interactive_link_1 = __importDefault(require("@modules/common/components/interactive-link"));
const EmptyCartMessage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "py-48 px-2 flex flex-col justify-center items-start", "data-testid": "empty-cart-message", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", className: "flex flex-row text-3xl-regular gap-x-2 items-baseline", children: "Cart" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-base-regular mt-4 mb-6 max-w-[32rem]", children: "You don't have anything in your cart. Let's change that, use the link below to start browsing our products." }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(interactive_link_1.default, { href: "/store", children: "Explore products" }) })] }));
};
exports.default = EmptyCartMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhcnQvY29tcG9uZW50cy9lbXB0eS1jYXJ0LW1lc3NhZ2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUE0QztBQUU1QyxtR0FBeUU7QUFFekUsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDNUIsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxxREFBcUQsaUJBQWEsb0JBQW9CLGFBQ25HLHVCQUFDLFlBQU8sSUFDTixLQUFLLEVBQUMsSUFBSSxFQUNWLFNBQVMsRUFBQyx1REFBdUQscUJBR3pELEVBQ1YsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQywyQ0FBMkMsNEhBR3BELEVBQ1AsMENBQ0UsdUJBQUMsMEJBQWUsSUFBQyxJQUFJLEVBQUMsUUFBUSxpQ0FBbUMsR0FDN0QsSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQSJ9