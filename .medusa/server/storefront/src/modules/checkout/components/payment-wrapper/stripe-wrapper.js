"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const react_1 = require("react");
exports.StripeContext = (0, react_1.createContext)(false);
const StripeWrapper = ({ paymentSession, stripeKey, stripePromise, children, }) => {
    const options = {
        clientSecret: paymentSession.data?.client_secret,
    };
    if (!stripeKey) {
        throw new Error("Stripe key is missing. Set NEXT_PUBLIC_STRIPE_KEY environment variable.");
    }
    if (!stripePromise) {
        throw new Error("Stripe promise is missing. Make sure you have provided a valid Stripe key.");
    }
    if (!paymentSession?.data?.client_secret) {
        throw new Error("Stripe client secret is missing. Cannot initialize Stripe.");
    }
    return ((0, jsx_runtime_1.jsx)(exports.StripeContext.Provider, { value: true, children: (0, jsx_runtime_1.jsx)(react_stripe_js_1.Elements, { options: options, stripe: stripePromise, children: children }) }));
};
exports.default = StripeWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC13cmFwcGVyL3N0cmlwZS13cmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7O0FBR1osNkRBQWtEO0FBRWxELGlDQUFxQztBQVN4QixRQUFBLGFBQWEsR0FBRyxJQUFBLHFCQUFhLEVBQUMsS0FBSyxDQUFDLENBQUE7QUFFakQsTUFBTSxhQUFhLEdBQWlDLENBQUMsRUFDbkQsY0FBYyxFQUNkLFNBQVMsRUFDVCxhQUFhLEVBQ2IsUUFBUSxHQUNULEVBQUUsRUFBRTtJQUNILE1BQU0sT0FBTyxHQUEwQjtRQUNyQyxZQUFZLEVBQUUsY0FBZSxDQUFDLElBQUksRUFBRSxhQUFtQztLQUN4RSxDQUFBO0lBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FDYix5RUFBeUUsQ0FDMUUsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FDYiw0RUFBNEUsQ0FDN0UsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQztRQUN6QyxNQUFNLElBQUksS0FBSyxDQUNiLDREQUE0RCxDQUM3RCxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FDTCx1QkFBQyxxQkFBYSxDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsSUFBSSxZQUNqQyx1QkFBQywwQkFBUSxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsWUFDOUMsUUFBUSxHQUNBLEdBQ1ksQ0FDMUIsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQSJ9