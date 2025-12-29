"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const orders_1 = require("@lib/data/orders");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const TransferActions = ({ id, token }) => {
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(null);
    const [status, setStatus] = (0, react_1.useState)({
        accept: null,
        decline: null,
    });
    const acceptTransfer = async () => {
        setStatus({ accept: "pending", decline: null });
        setErrorMessage(null);
        const { success, error } = await (0, orders_1.acceptTransferRequest)(id, token);
        if (error)
            setErrorMessage(error);
        setStatus({ accept: success ? "success" : "error", decline: null });
    };
    const declineTransfer = async () => {
        setStatus({ accept: null, decline: "pending" });
        setErrorMessage(null);
        const { success, error } = await (0, orders_1.declineTransferRequest)(id, token);
        if (error)
            setErrorMessage(error);
        setStatus({ accept: null, decline: success ? "success" : "error" });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4", children: [status?.accept === "success" && ((0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-emerald-500", children: "Order transferred successfully!" })), status?.decline === "success" && ((0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-emerald-500", children: "Order transfer declined successfully!" })), status?.accept !== "success" && status?.decline !== "success" && ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4", children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { size: "large", onClick: acceptTransfer, isLoading: status?.accept === "pending", disabled: status?.accept === "pending" || status?.decline === "pending", children: "Accept transfer" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { size: "large", variant: "secondary", onClick: declineTransfer, isLoading: status?.decline === "pending", disabled: status?.accept === "pending" || status?.decline === "pending", children: "Decline transfer" })] })), errorMessage && (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-red-500", children: errorMessage })] }));
};
exports.default = TransferActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL29yZGVyL2NvbXBvbmVudHMvdHJhbnNmZXItYWN0aW9ucy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7O0FBRVosNkNBQWdGO0FBQ2hGLHFDQUEyQztBQUMzQyxpQ0FBZ0M7QUFJaEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQWlDLEVBQUUsRUFBRTtJQUN2RSxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBZ0IsSUFBSSxDQUFDLENBQUE7SUFDckUsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBRzFCO1FBQ1IsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQTtJQUVGLE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxFQUFFO1FBQ2hDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDL0MsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXJCLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLDhCQUFxQixFQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVqRSxJQUFJLEtBQUs7WUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDckUsQ0FBQyxDQUFBO0lBRUQsTUFBTSxlQUFlLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDakMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUMvQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFckIsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUEsK0JBQXNCLEVBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRWxFLElBQUksS0FBSztZQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUNyRSxDQUFDLENBQUE7SUFFRCxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHVCQUF1QixhQUNuQyxNQUFNLEVBQUUsTUFBTSxLQUFLLFNBQVMsSUFBSSxDQUMvQix1QkFBQyxTQUFJLElBQUMsU0FBUyxFQUFDLGtCQUFrQixnREFFM0IsQ0FDUixFQUNBLE1BQU0sRUFBRSxPQUFPLEtBQUssU0FBUyxJQUFJLENBQ2hDLHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsa0JBQWtCLHNEQUUzQixDQUNSLEVBQ0EsTUFBTSxFQUFFLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxFQUFFLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FDaEUsaUNBQUssU0FBUyxFQUFDLGNBQWMsYUFDM0IsdUJBQUMsV0FBTSxJQUNMLElBQUksRUFBQyxPQUFPLEVBQ1osT0FBTyxFQUFFLGNBQWMsRUFDdkIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssU0FBUyxFQUN2QyxRQUFRLEVBQ04sTUFBTSxFQUFFLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxFQUFFLE9BQU8sS0FBSyxTQUFTLGdDQUl4RCxFQUNULHVCQUFDLFdBQU0sSUFDTCxJQUFJLEVBQUMsT0FBTyxFQUNaLE9BQU8sRUFBQyxXQUFXLEVBQ25CLE9BQU8sRUFBRSxlQUFlLEVBQ3hCLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxLQUFLLFNBQVMsRUFDeEMsUUFBUSxFQUNOLE1BQU0sRUFBRSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sRUFBRSxPQUFPLEtBQUssU0FBUyxpQ0FJeEQsSUFDTCxDQUNQLEVBQ0EsWUFBWSxJQUFJLHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsY0FBYyxZQUFFLFlBQVksR0FBUSxJQUNqRSxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUEifQ==