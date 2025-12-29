"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = OrderConfirmedPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const orders_1 = require("@lib/data/orders");
const order_completed_template_1 = __importDefault(require("@modules/order/templates/order-completed-template"));
const navigation_1 = require("next/navigation");
exports.metadata = {
    title: "Order Confirmed",
    description: "You purchase was successful",
};
async function OrderConfirmedPage(props) {
    const params = await props.params;
    const order = await (0, orders_1.retrieveOrder)(params.id).catch(() => null);
    if (!order) {
        return (0, navigation_1.notFound)();
    }
    return (0, jsx_runtime_1.jsx)(order_completed_template_1.default, { order: order });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9vcmRlci9baWRdL2NvbmZpcm1lZC9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFhQSxxQ0FTQzs7QUF0QkQsNkNBQWdEO0FBQ2hELGlIQUFzRjtBQUV0RixnREFBMEM7QUFLN0IsUUFBQSxRQUFRLEdBQWE7SUFDaEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixXQUFXLEVBQUUsNkJBQTZCO0NBQzNDLENBQUE7QUFFYyxLQUFLLFVBQVUsa0JBQWtCLENBQUMsS0FBWTtJQUMzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLHNCQUFhLEVBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUU5RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxPQUFPLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxPQUFPLHVCQUFDLGtDQUFzQixJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQTtBQUNqRCxDQUFDIn0=