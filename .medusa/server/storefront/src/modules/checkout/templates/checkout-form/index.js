"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckoutForm;
const jsx_runtime_1 = require("react/jsx-runtime");
const fulfillment_1 = require("@lib/data/fulfillment");
const payment_1 = require("@lib/data/payment");
const addresses_1 = __importDefault(require("@modules/checkout/components/addresses"));
const payment_2 = __importDefault(require("@modules/checkout/components/payment"));
const review_1 = __importDefault(require("@modules/checkout/components/review"));
const shipping_1 = __importDefault(require("@modules/checkout/components/shipping"));
async function CheckoutForm({ cart, customer, }) {
    if (!cart) {
        return null;
    }
    const shippingMethods = await (0, fulfillment_1.listCartShippingMethods)(cart.id);
    const paymentMethods = await (0, payment_1.listCartPaymentMethods)(cart.region?.id ?? "");
    if (!shippingMethods || !paymentMethods) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full grid grid-cols-1 gap-y-8", children: [(0, jsx_runtime_1.jsx)(addresses_1.default, { cart: cart, customer: customer }), (0, jsx_runtime_1.jsx)(shipping_1.default, { cart: cart, availableShippingMethods: shippingMethods }), (0, jsx_runtime_1.jsx)(payment_2.default, { cart: cart, availablePaymentMethods: paymentMethods }), (0, jsx_runtime_1.jsx)(review_1.default, { cart: cart })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L3RlbXBsYXRlcy9jaGVja291dC1mb3JtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLCtCQTZCQzs7QUFyQ0QsdURBQStEO0FBQy9ELCtDQUEwRDtBQUUxRCx1RkFBOEQ7QUFDOUQsbUZBQTBEO0FBQzFELGlGQUF3RDtBQUN4RCxxRkFBNEQ7QUFFN0MsS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUN6QyxJQUFJLEVBQ0osUUFBUSxHQUlUO0lBQ0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFBLHFDQUF1QixFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM5RCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUEsZ0NBQXNCLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFFMUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsaUNBQWlDLGFBQzlDLHVCQUFDLG1CQUFTLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFJLEVBRTdDLHVCQUFDLGtCQUFRLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxlQUFlLEdBQUksRUFFbkUsdUJBQUMsaUJBQU8sSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsR0FBSSxFQUVoRSx1QkFBQyxnQkFBTSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksSUFDbEIsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9