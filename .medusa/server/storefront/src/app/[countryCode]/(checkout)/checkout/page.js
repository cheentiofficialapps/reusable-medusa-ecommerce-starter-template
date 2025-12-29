"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Checkout;
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const customer_1 = require("@lib/data/customer");
const payment_wrapper_1 = __importDefault(require("@modules/checkout/components/payment-wrapper"));
const checkout_form_1 = __importDefault(require("@modules/checkout/templates/checkout-form"));
const checkout_summary_1 = __importDefault(require("@modules/checkout/templates/checkout-summary"));
const navigation_1 = require("next/navigation");
exports.metadata = {
    title: "Checkout",
};
async function Checkout() {
    const cart = await (0, cart_1.retrieveCart)();
    if (!cart) {
        return (0, navigation_1.notFound)();
    }
    const customer = await (0, customer_1.retrieveCustomer)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12", children: [(0, jsx_runtime_1.jsx)(payment_wrapper_1.default, { cart: cart, children: (0, jsx_runtime_1.jsx)(checkout_form_1.default, { cart: cart, customer: customer }) }), (0, jsx_runtime_1.jsx)(checkout_summary_1.default, { cart: cart })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhjaGVja291dCkvY2hlY2tvdXQvcGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBWUEsMkJBaUJDOztBQTdCRCx5Q0FBNkM7QUFDN0MsaURBQXFEO0FBQ3JELG1HQUF5RTtBQUN6RSw4RkFBb0U7QUFDcEUsb0dBQTBFO0FBRTFFLGdEQUEwQztBQUU3QixRQUFBLFFBQVEsR0FBYTtJQUNoQyxLQUFLLEVBQUUsVUFBVTtDQUNsQixDQUFBO0FBRWMsS0FBSyxVQUFVLFFBQVE7SUFDcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLG1CQUFZLEdBQUUsQ0FBQTtJQUVqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVixPQUFPLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsMkJBQWdCLEdBQUUsQ0FBQTtJQUV6QyxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLCtFQUErRSxhQUM1Rix1QkFBQyx5QkFBYyxJQUFDLElBQUksRUFBRSxJQUFJLFlBQ3hCLHVCQUFDLHVCQUFZLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFJLEdBQ2pDLEVBQ2pCLHVCQUFDLDBCQUFlLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxJQUMzQixDQUNQLENBQUE7QUFDSCxDQUFDIn0=