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
    const { success, error } = await (0, orders_1.acceptTransferRequest)(id, token);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20", children: [(0, jsx_runtime_1.jsx)(transfer_image_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-6", children: [success && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", className: "text-xl text-zinc-900", children: "Order transfered!" }), (0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "text-zinc-600", children: ["Order ", id, " has been successfully transfered to the new owner."] })] })), !success && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-zinc-600", children: "There was an error accepting the transfer. Please try again." }), error && ((0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "text-red-500", children: ["Error message: ", error] }))] }))] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9vcmRlci9baWRdL3RyYW5zZmVyL1t0b2tlbl0vYWNjZXB0L3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBb0NDOztBQXhDRCw2Q0FBd0Q7QUFDeEQscUNBQTRDO0FBQzVDLDhGQUFvRTtBQUVyRCxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQ3pDLE1BQU0sR0FHUDtJQUNDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFBO0lBRTVCLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLDhCQUFxQixFQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUVqRSxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDZEQUE2RCxhQUMxRSx1QkFBQyx3QkFBYSxLQUFHLEVBQ2pCLGlDQUFLLFNBQVMsRUFBQyx1QkFBdUIsYUFDbkMsT0FBTyxJQUFJLENBQ1YsNkRBQ0UsdUJBQUMsWUFBTyxJQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLHVCQUF1QixrQ0FFM0MsRUFDVix3QkFBQyxTQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsdUJBQ3RCLEVBQUUsMkRBQ0osSUFDTixDQUNKLEVBQ0EsQ0FBQyxPQUFPLElBQUksQ0FDWCw2REFDRSx1QkFBQyxTQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsNkVBRXhCLEVBQ04sS0FBSyxJQUFJLENBQ1Isd0JBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLGdDQUFpQixLQUFLLElBQVEsQ0FDN0QsSUFDQSxDQUNKLElBQ0csSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDIn0=