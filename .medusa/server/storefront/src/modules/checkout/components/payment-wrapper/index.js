"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const stripe_js_1 = require("@stripe/stripe-js");
const stripe_wrapper_1 = __importDefault(require("./stripe-wrapper"));
const constants_1 = require("@lib/constants");
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY ||
    process.env.NEXT_PUBLIC_MEDUSA_PAYMENTS_PUBLISHABLE_KEY;
const medusaAccountId = process.env.NEXT_PUBLIC_MEDUSA_PAYMENTS_ACCOUNT_ID;
const stripePromise = stripeKey
    ? (0, stripe_js_1.loadStripe)(stripeKey, medusaAccountId ? { stripeAccount: medusaAccountId } : undefined)
    : null;
const PaymentWrapper = ({ cart, children }) => {
    const paymentSession = cart.payment_collection?.payment_sessions?.find((s) => s.status === "pending");
    if ((0, constants_1.isStripeLike)(paymentSession?.provider_id) &&
        paymentSession &&
        stripePromise) {
        return ((0, jsx_runtime_1.jsx)(stripe_wrapper_1.default, { paymentSession: paymentSession, stripeKey: stripeKey, stripePromise: stripePromise, children: children }));
    }
    return (0, jsx_runtime_1.jsx)("div", { children: children });
};
exports.default = PaymentWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC13cmFwcGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixpREFBOEM7QUFFOUMsc0VBQTRDO0FBRTVDLDhDQUE2QztBQU83QyxNQUFNLFNBQVMsR0FDYixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQjtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFBO0FBRXpELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUE7QUFDMUUsTUFBTSxhQUFhLEdBQUcsU0FBUztJQUM3QixDQUFDLENBQUMsSUFBQSxzQkFBVSxFQUNSLFNBQVMsRUFDVCxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2pFO0lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUVSLE1BQU0sY0FBYyxHQUFrQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDM0UsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FDcEUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUM5QixDQUFBO0lBRUQsSUFDRSxJQUFBLHdCQUFZLEVBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQztRQUN6QyxjQUFjO1FBQ2QsYUFBYSxFQUNiLENBQUM7UUFDRCxPQUFPLENBQ0wsdUJBQUMsd0JBQWEsSUFDWixjQUFjLEVBQUUsY0FBYyxFQUM5QixTQUFTLEVBQUUsU0FBUyxFQUNwQixhQUFhLEVBQUUsYUFBYSxZQUUzQixRQUFRLEdBQ0ssQ0FDakIsQ0FBQTtJQUNILENBQUM7SUFFRCxPQUFPLDBDQUFNLFFBQVEsR0FBTyxDQUFBO0FBQzlCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGNBQWMsQ0FBQSJ9