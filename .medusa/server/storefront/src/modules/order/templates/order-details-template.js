"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const help_1 = __importDefault(require("@modules/order/components/help"));
const items_1 = __importDefault(require("@modules/order/components/items"));
const order_details_1 = __importDefault(require("@modules/order/components/order-details"));
const order_summary_1 = __importDefault(require("@modules/order/components/order-summary"));
const shipping_details_1 = __importDefault(require("@modules/order/components/shipping-details"));
const OrderDetailsTemplate = ({ order, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col justify-center gap-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 justify-between items-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi", children: "Order details" }), (0, jsx_runtime_1.jsxs)(localized_client_link_1.default, { href: "/account/orders", className: "flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base", "data-testid": "back-to-overview-button", children: [(0, jsx_runtime_1.jsx)(icons_1.XMark, {}), " Back to overview"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 h-full bg-white w-full", "data-testid": "order-details-container", children: [(0, jsx_runtime_1.jsx)(order_details_1.default, { order: order, showStatus: true }), (0, jsx_runtime_1.jsx)(items_1.default, { order: order }), (0, jsx_runtime_1.jsx)(shipping_details_1.default, { order: order }), (0, jsx_runtime_1.jsx)(order_summary_1.default, { order: order }), (0, jsx_runtime_1.jsx)(help_1.default, {})] })] }));
};
exports.default = OrderDetailsTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL21vZHVsZXMvb3JkZXIvdGVtcGxhdGVzL29yZGVyLWRldGFpbHMtdGVtcGxhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7OztBQUVaLDJDQUF1QztBQUV2Qyw2R0FBa0Y7QUFDbEYsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUNuRCw0RkFBa0U7QUFDbEUsNEZBQWtFO0FBQ2xFLGtHQUF3RTtBQU94RSxNQUFNLG9CQUFvQixHQUF3QyxDQUFDLEVBQ2pFLEtBQUssR0FDTixFQUFFLEVBQUU7SUFDSCxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHNDQUFzQyxhQUNuRCxpQ0FBSyxTQUFTLEVBQUMseUNBQXlDLGFBQ3RELCtCQUFJLFNBQVMsRUFBQyxlQUFlLDhCQUFtQixFQUNoRCx3QkFBQywrQkFBbUIsSUFDbEIsSUFBSSxFQUFDLGlCQUFpQixFQUN0QixTQUFTLEVBQUMsaUVBQWlFLGlCQUMvRCx5QkFBeUIsYUFFckMsdUJBQUMsYUFBSyxLQUFHLHlCQUNXLElBQ2xCLEVBQ04saUNBQ0UsU0FBUyxFQUFDLDRDQUE0QyxpQkFDMUMseUJBQXlCLGFBRXJDLHVCQUFDLHVCQUFZLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLFNBQUcsRUFDekMsdUJBQUMsZUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksRUFDdkIsdUJBQUMsMEJBQWUsSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLEVBQ2pDLHVCQUFDLHVCQUFZLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxFQUM5Qix1QkFBQyxjQUFJLEtBQUcsSUFDSixJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=