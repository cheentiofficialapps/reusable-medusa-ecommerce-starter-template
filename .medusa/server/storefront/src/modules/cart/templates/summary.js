"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const cart_totals_1 = __importDefault(require("@modules/common/components/cart-totals"));
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const discount_code_1 = __importDefault(require("@modules/checkout/components/discount-code"));
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
function getCheckoutStep(cart) {
    if (!cart?.shipping_address?.address_1 || !cart.email) {
        return "address";
    }
    else if (cart?.shipping_methods?.length === 0) {
        return "delivery";
    }
    else {
        return "payment";
    }
}
const Summary = ({ cart }) => {
    const step = getCheckoutStep(cart);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: "text-[2rem] leading-[2.75rem]", children: "Summary" }), (0, jsx_runtime_1.jsx)(discount_code_1.default, { cart: cart }), (0, jsx_runtime_1.jsx)(divider_1.default, {}), (0, jsx_runtime_1.jsx)(cart_totals_1.default, { totals: cart }), (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: "/checkout?step=" + step, "data-testid": "checkout-button", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "w-full h-10", children: "Go to checkout" }) })] }));
};
exports.default = Summary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL21vZHVsZXMvY2FydC90ZW1wbGF0ZXMvc3VtbWFyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVoscUNBQThDO0FBRTlDLHlGQUErRDtBQUMvRCxpRkFBd0Q7QUFDeEQsK0ZBQXFFO0FBQ3JFLDZHQUFrRjtBQVNsRixTQUFTLGVBQWUsQ0FBQyxJQUF5QjtJQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RCxPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO1NBQU0sSUFBSSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2hELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFnQixFQUFFLEVBQUU7SUFDekMsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRWxDLE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsdUJBQXVCLGFBQ3BDLHVCQUFDLFlBQU8sSUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQywrQkFBK0Isd0JBRW5ELEVBQ1YsdUJBQUMsdUJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLEVBQzVCLHVCQUFDLGlCQUFPLEtBQUcsRUFDWCx1QkFBQyxxQkFBVSxJQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUksRUFDNUIsdUJBQUMsK0JBQW1CLElBQ2xCLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLGlCQUNsQixpQkFBaUIsWUFFN0IsdUJBQUMsV0FBTSxJQUFDLFNBQVMsRUFBQyxhQUFhLCtCQUF3QixHQUNuQyxJQUNsQixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxPQUFPLENBQUEifQ==