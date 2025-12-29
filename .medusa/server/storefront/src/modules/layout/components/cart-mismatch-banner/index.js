"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const customer_1 = require("@lib/data/customer");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
function CartMismatchBanner(props) {
    const { customer, cart } = props;
    const [isPending, setIsPending] = (0, react_1.useState)(false);
    const [actionText, setActionText] = (0, react_1.useState)("Run transfer again");
    if (!customer || !!cart.customer_id) {
        return;
    }
    const handleSubmit = async () => {
        try {
            setIsPending(true);
            setActionText("Transferring..");
            await (0, customer_1.transferCart)();
        }
        catch {
            setActionText("Run transfer again");
            setIsPending(false);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center small:p-4 p-2 text-center bg-orange-300 small:gap-2 gap-1 text-sm mt-2 text-orange-800", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:flex-row small:gap-2 gap-1 items-center", children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(icons_1.ExclamationCircleSolid, { className: "inline" }), "Something went wrong when we tried to transfer your cart"] }), (0, jsx_runtime_1.jsx)("span", { children: "\u00B7" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "transparent", className: "hover:bg-transparent active:bg-transparent focus:bg-transparent disabled:text-orange-500 text-orange-950 p-0 bg-transparent", size: "base", disabled: isPending, onClick: handleSubmit, children: actionText })] }) }));
}
exports.default = CartMismatchBanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL2NhcnQtbWlzbWF0Y2gtYmFubmVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWixpREFBaUQ7QUFDakQsMkNBQXdEO0FBRXhELHFDQUFxQztBQUNyQyxpQ0FBZ0M7QUFFaEMsU0FBUyxrQkFBa0IsQ0FBQyxLQUczQjtJQUNDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQ2hDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLG9CQUFvQixDQUFDLENBQUE7SUFFbEUsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE9BQU07SUFDUixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDOUIsSUFBSSxDQUFDO1lBQ0gsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBRS9CLE1BQU0sSUFBQSx1QkFBWSxHQUFFLENBQUE7UUFDdEIsQ0FBQztRQUFDLE1BQU0sQ0FBQztZQUNQLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQixDQUFDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyx5SEFBeUgsWUFDdEksaUNBQUssU0FBUyxFQUFDLDZEQUE2RCxhQUMxRSxrQ0FBTSxTQUFTLEVBQUMseUJBQXlCLGFBQ3ZDLHVCQUFDLDhCQUFzQixJQUFDLFNBQVMsRUFBQyxRQUFRLEdBQUcsZ0VBRXhDLEVBRVAsc0RBQWMsRUFFZCx1QkFBQyxXQUFNLElBQ0wsT0FBTyxFQUFDLGFBQWEsRUFDckIsU0FBUyxFQUFDLDZIQUE2SCxFQUN2SSxJQUFJLEVBQUMsTUFBTSxFQUNYLFFBQVEsRUFBRSxTQUFTLEVBQ25CLE9BQU8sRUFBRSxZQUFZLFlBRXBCLFVBQVUsR0FDSixJQUNMLEdBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQztBQUVELGtCQUFlLGtCQUFrQixDQUFBIn0=