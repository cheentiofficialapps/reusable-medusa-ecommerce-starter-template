"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Orders;
const jsx_runtime_1 = require("react/jsx-runtime");
const order_overview_1 = __importDefault(require("@modules/account/components/order-overview"));
const navigation_1 = require("next/navigation");
const orders_1 = require("@lib/data/orders");
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const transfer_request_form_1 = __importDefault(require("@modules/account/components/transfer-request-form"));
exports.metadata = {
    title: "Orders",
    description: "Overview of your previous orders.",
};
async function Orders() {
    const orders = await (0, orders_1.listOrders)();
    if (!orders) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", "data-testid": "orders-page-wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-8 flex flex-col gap-y-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi", children: "Orders" }), (0, jsx_runtime_1.jsx)("p", { className: "text-base-regular", children: "View your previous orders and their status. You can also create returns or exchanges for your orders if needed." })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(order_overview_1.default, { orders: orders }), (0, jsx_runtime_1.jsx)(divider_1.default, { className: "my-16" }), (0, jsx_runtime_1.jsx)(transfer_request_form_1.default, {})] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9hY2NvdW50L0BkYXNoYm9hcmQvb3JkZXJzL3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLHlCQXVCQzs7QUFsQ0QsZ0dBQXNFO0FBQ3RFLGdEQUEwQztBQUMxQyw2Q0FBNkM7QUFDN0MsaUZBQXdEO0FBQ3hELDhHQUFtRjtBQUV0RSxRQUFBLFFBQVEsR0FBYTtJQUNoQyxLQUFLLEVBQUUsUUFBUTtJQUNmLFdBQVcsRUFBRSxtQ0FBbUM7Q0FDakQsQ0FBQTtBQUVjLEtBQUssVUFBVSxNQUFNO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxtQkFBVSxHQUFFLENBQUE7SUFFakMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1osSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxRQUFRLGlCQUFhLHFCQUFxQixhQUN2RCxpQ0FBSyxTQUFTLEVBQUMsNEJBQTRCLGFBQ3pDLCtCQUFJLFNBQVMsRUFBQyxlQUFlLHVCQUFZLEVBQ3pDLDhCQUFHLFNBQVMsRUFBQyxtQkFBbUIsZ0lBRzVCLElBQ0EsRUFDTiw0Q0FDRSx1QkFBQyx3QkFBYSxJQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUksRUFDakMsdUJBQUMsaUJBQU8sSUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHLEVBQzdCLHVCQUFDLCtCQUFtQixLQUFHLElBQ25CLElBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9