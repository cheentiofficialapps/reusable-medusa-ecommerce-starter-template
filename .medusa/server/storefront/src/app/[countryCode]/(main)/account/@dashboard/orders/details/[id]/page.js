"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = generateMetadata;
exports.default = OrderDetailPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const orders_1 = require("@lib/data/orders");
const order_details_template_1 = __importDefault(require("@modules/order/templates/order-details-template"));
const navigation_1 = require("next/navigation");
async function generateMetadata(props) {
    const params = await props.params;
    const order = await (0, orders_1.retrieveOrder)(params.id).catch(() => null);
    if (!order) {
        (0, navigation_1.notFound)();
    }
    return {
        title: `Order #${order.display_id}`,
        description: `View your order`,
    };
}
async function OrderDetailPage(props) {
    const params = await props.params;
    const order = await (0, orders_1.retrieveOrder)(params.id).catch(() => null);
    if (!order) {
        (0, navigation_1.notFound)();
    }
    return (0, jsx_runtime_1.jsx)(order_details_template_1.default, { order: order });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9hY2NvdW50L0BkYXNoYm9hcmQvb3JkZXJzL2RldGFpbHMvW2lkXS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLDRDQVlDO0FBRUQsa0NBU0M7O0FBaENELDZDQUFnRDtBQUNoRCw2R0FBa0Y7QUFFbEYsZ0RBQTBDO0FBTW5DLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUNqQyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsc0JBQWEsRUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRTlELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBQ1osQ0FBQztJQUVELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ25DLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0IsQ0FBQTtBQUNILENBQUM7QUFFYyxLQUFLLFVBQVUsZUFBZSxDQUFDLEtBQVk7SUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBQSxzQkFBYSxFQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFOUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyx1QkFBQyxnQ0FBb0IsSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUE7QUFDL0MsQ0FBQyJ9