"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CartButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const cart_dropdown_1 = __importDefault(require("../cart-dropdown"));
async function CartButton() {
    const cart = await (0, cart_1.retrieveCart)().catch(() => null);
    return (0, jsx_runtime_1.jsx)(cart_dropdown_1.default, { cart: cart });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL2NhcnQtYnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLDZCQUlDOztBQVBELHlDQUE2QztBQUM3QyxxRUFBMkM7QUFFNUIsS0FBSyxVQUFVLFVBQVU7SUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLG1CQUFZLEdBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFbkQsT0FBTyx1QkFBQyx1QkFBWSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksQ0FBQTtBQUNyQyxDQUFDIn0=