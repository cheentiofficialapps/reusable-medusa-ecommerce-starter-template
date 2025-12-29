"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransferPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const orders_1 = require("@lib/data/orders");
const ui_1 = require("@medusajs/ui");
const transfer_image_1 = __importDefault(require("@modules/order/components/transfer-image"));
async function TransferPage({ params, }) {
    const { id, token } = params;
    const { success, error } = await (0, orders_1.declineTransferRequest)(id, token);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20", children: [(0, jsx_runtime_1.jsx)(transfer_image_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-6", children: [success && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", className: "text-xl text-zinc-900", children: "Order transfer declined!" }), (0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "text-zinc-600", children: ["Transfer of order ", id, " has been successfully declined."] })] })), !success && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-zinc-600", children: "There was an error declining the transfer. Please try again." }), error && ((0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "text-red-500", children: ["Error message: ", error] }))] }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9vcmRlci9baWRdL3RyYW5zZmVyL1t0b2tlbl0vZGVjbGluZS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQW9DQzs7QUF4Q0QsNkNBQXlEO0FBQ3pELHFDQUE0QztBQUM1Qyw4RkFBb0U7QUFFckQsS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUN6QyxNQUFNLEdBR1A7SUFDQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQTtJQUU1QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSwrQkFBc0IsRUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFbEUsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyw2REFBNkQsYUFDMUUsdUJBQUMsd0JBQWEsS0FBRyxFQUNqQixpQ0FBSyxTQUFTLEVBQUMsdUJBQXVCLGFBQ25DLE9BQU8sSUFBSSxDQUNWLDZEQUNFLHVCQUFDLFlBQU8sSUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyx1QkFBdUIseUNBRTNDLEVBQ1Ysd0JBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxlQUFlLG1DQUNWLEVBQUUsd0NBQ2hCLElBQ04sQ0FDSixFQUNBLENBQUMsT0FBTyxJQUFJLENBQ1gsNkRBQ0UsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxlQUFlLDZFQUV4QixFQUNOLEtBQUssSUFBSSxDQUNSLHdCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsY0FBYyxnQ0FBaUIsS0FBSyxJQUFRLENBQzdELElBQ0EsQ0FDSixJQUNHLElBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9