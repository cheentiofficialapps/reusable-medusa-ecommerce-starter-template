"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Cart;
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const customer_1 = require("@lib/data/customer");
const templates_1 = __importDefault(require("@modules/cart/templates"));
const navigation_1 = require("next/navigation");
exports.metadata = {
    title: "Cart",
    description: "View your cart",
};
async function Cart() {
    const cart = await (0, cart_1.retrieveCart)().catch((error) => {
        console.error(error);
        return (0, navigation_1.notFound)();
    });
    const customer = await (0, customer_1.retrieveCustomer)();
    return (0, jsx_runtime_1.jsx)(templates_1.default, { cart: cart, customer: customer });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9jYXJ0L3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBLHVCQVNDOztBQXBCRCx5Q0FBNkM7QUFDN0MsaURBQXFEO0FBQ3JELHdFQUFrRDtBQUVsRCxnREFBMEM7QUFFN0IsUUFBQSxRQUFRLEdBQWE7SUFDaEMsS0FBSyxFQUFFLE1BQU07SUFDYixXQUFXLEVBQUUsZ0JBQWdCO0NBQzlCLENBQUE7QUFFYyxLQUFLLFVBQVUsSUFBSTtJQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsbUJBQVksR0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsT0FBTyxJQUFBLHFCQUFRLEdBQUUsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSwyQkFBZ0IsR0FBRSxDQUFBO0lBRXpDLE9BQU8sdUJBQUMsbUJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUksQ0FBQTtBQUN6RCxDQUFDIn0=