"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrderCompletedTemplate;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const headers_1 = require("next/headers");
const cart_totals_1 = __importDefault(require("@modules/common/components/cart-totals"));
const help_1 = __importDefault(require("@modules/order/components/help"));
const items_1 = __importDefault(require("@modules/order/components/items"));
const onboarding_cta_1 = __importDefault(require("@modules/order/components/onboarding-cta"));
const order_details_1 = __importDefault(require("@modules/order/components/order-details"));
const shipping_details_1 = __importDefault(require("@modules/order/components/shipping-details"));
const payment_details_1 = __importDefault(require("@modules/order/components/payment-details"));
async function OrderCompletedTemplate({ order, }) {
    const cookies = await (0, headers_1.cookies)();
    const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true";
    return ((0, jsx_runtime_1.jsx)("div", { className: "py-6 min-h-[calc(100vh-64px)]", children: (0, jsx_runtime_1.jsxs)("div", { className: "content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full", children: [isOnboarding && (0, jsx_runtime_1.jsx)(onboarding_cta_1.default, { orderId: order.id }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10", "data-testid": "order-complete-container", children: [(0, jsx_runtime_1.jsxs)(ui_1.Heading, { level: "h1", className: "flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4", children: [(0, jsx_runtime_1.jsx)("span", { children: "Thank you!" }), (0, jsx_runtime_1.jsx)("span", { children: "Your order was placed successfully." })] }), (0, jsx_runtime_1.jsx)(order_details_1.default, { order: order }), (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: "flex flex-row text-3xl-regular", children: "Summary" }), (0, jsx_runtime_1.jsx)(items_1.default, { order: order }), (0, jsx_runtime_1.jsx)(cart_totals_1.default, { totals: order }), (0, jsx_runtime_1.jsx)(shipping_details_1.default, { order: order }), (0, jsx_runtime_1.jsx)(payment_details_1.default, { order: order }), (0, jsx_runtime_1.jsx)(help_1.default, {})] })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29tcGxldGVkLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbW9kdWxlcy9vcmRlci90ZW1wbGF0ZXMvb3JkZXItY29tcGxldGVkLXRlbXBsYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWdCQSx5Q0FtQ0M7O0FBbkRELHFDQUFzQztBQUN0QywwQ0FBcUQ7QUFFckQseUZBQStEO0FBQy9ELDBFQUFpRDtBQUNqRCw0RUFBbUQ7QUFDbkQsOEZBQW9FO0FBQ3BFLDRGQUFrRTtBQUNsRSxrR0FBd0U7QUFDeEUsZ0dBQXNFO0FBT3ZELEtBQUssVUFBVSxzQkFBc0IsQ0FBQyxFQUNuRCxLQUFLLEdBQ3VCO0lBQzVCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSxpQkFBVyxHQUFFLENBQUE7SUFFbkMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUE7SUFFeEUsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQywrQkFBK0IsWUFDNUMsaUNBQUssU0FBUyxFQUFDLDhGQUE4RixhQUMxRyxZQUFZLElBQUksdUJBQUMsd0JBQWEsSUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBSSxFQUNyRCxpQ0FDRSxTQUFTLEVBQUMsNERBQTRELGlCQUMxRCwwQkFBMEIsYUFFdEMsd0JBQUMsWUFBTyxJQUNOLEtBQUssRUFBQyxJQUFJLEVBQ1YsU0FBUyxFQUFDLHFEQUFxRCxhQUUvRCwwREFBdUIsRUFDdkIsbUZBQWdELElBQ3hDLEVBQ1YsdUJBQUMsdUJBQVksSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLEVBQzlCLHVCQUFDLFlBQU8sSUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxnQ0FBZ0Msd0JBRXBELEVBQ1YsdUJBQUMsZUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksRUFDdkIsdUJBQUMscUJBQVUsSUFBQyxNQUFNLEVBQUUsS0FBSyxHQUFJLEVBQzdCLHVCQUFDLDBCQUFlLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxFQUNqQyx1QkFBQyx5QkFBYyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksRUFDaEMsdUJBQUMsY0FBSSxLQUFHLElBQ0osSUFDRixHQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMifQ==