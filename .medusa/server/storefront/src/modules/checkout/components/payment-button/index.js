"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const constants_1 = require("@lib/constants");
const cart_1 = require("@lib/data/cart");
const ui_1 = require("@medusajs/ui");
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const react_1 = require("react");
const error_message_1 = __importDefault(require("../error-message"));
const PaymentButton = ({ cart, "data-testid": dataTestId, }) => {
    const notReady = !cart ||
        !cart.shipping_address ||
        !cart.billing_address ||
        !cart.email ||
        (cart.shipping_methods?.length ?? 0) < 1;
    const paymentSession = cart.payment_collection?.payment_sessions?.[0];
    switch (true) {
        case (0, constants_1.isStripeLike)(paymentSession?.provider_id):
            return ((0, jsx_runtime_1.jsx)(StripePaymentButton, { notReady: notReady, cart: cart, "data-testid": dataTestId }));
        case (0, constants_1.isManual)(paymentSession?.provider_id):
            return ((0, jsx_runtime_1.jsx)(ManualTestPaymentButton, { notReady: notReady, "data-testid": dataTestId }));
        default:
            return (0, jsx_runtime_1.jsx)(ui_1.Button, { disabled: true, children: "Select a payment method" });
    }
};
const StripePaymentButton = ({ cart, notReady, "data-testid": dataTestId, }) => {
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(null);
    const onPaymentCompleted = async () => {
        await (0, cart_1.placeOrder)()
            .catch((err) => {
            setErrorMessage(err.message);
        })
            .finally(() => {
            setSubmitting(false);
        });
    };
    const stripe = (0, react_stripe_js_1.useStripe)();
    const elements = (0, react_stripe_js_1.useElements)();
    const card = elements?.getElement("card");
    const session = cart.payment_collection?.payment_sessions?.find((s) => s.status === "pending");
    const disabled = !stripe || !elements ? true : false;
    const handlePayment = async () => {
        setSubmitting(true);
        if (!stripe || !elements || !card || !cart) {
            setSubmitting(false);
            return;
        }
        await stripe
            .confirmCardPayment(session?.data.client_secret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: cart.billing_address?.first_name +
                        " " +
                        cart.billing_address?.last_name,
                    address: {
                        city: cart.billing_address?.city ?? undefined,
                        country: cart.billing_address?.country_code ?? undefined,
                        line1: cart.billing_address?.address_1 ?? undefined,
                        line2: cart.billing_address?.address_2 ?? undefined,
                        postal_code: cart.billing_address?.postal_code ?? undefined,
                        state: cart.billing_address?.province ?? undefined,
                    },
                    email: cart.email,
                    phone: cart.billing_address?.phone ?? undefined,
                },
            },
        })
            .then(({ error, paymentIntent }) => {
            if (error) {
                const pi = error.payment_intent;
                if ((pi && pi.status === "requires_capture") ||
                    (pi && pi.status === "succeeded")) {
                    onPaymentCompleted();
                }
                setErrorMessage(error.message || null);
                return;
            }
            if ((paymentIntent && paymentIntent.status === "requires_capture") ||
                paymentIntent.status === "succeeded") {
                return onPaymentCompleted();
            }
            return;
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { disabled: disabled || notReady, onClick: handlePayment, size: "large", isLoading: submitting, "data-testid": dataTestId, children: "Place order" }), (0, jsx_runtime_1.jsx)(error_message_1.default, { error: errorMessage, "data-testid": "stripe-payment-error-message" })] }));
};
const ManualTestPaymentButton = ({ notReady }) => {
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)(null);
    const onPaymentCompleted = async () => {
        await (0, cart_1.placeOrder)()
            .catch((err) => {
            setErrorMessage(err.message);
        })
            .finally(() => {
            setSubmitting(false);
        });
    };
    const handlePayment = () => {
        setSubmitting(true);
        onPaymentCompleted();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { disabled: notReady, isLoading: submitting, onClick: handlePayment, size: "large", "data-testid": "submit-order-button", children: "Place order" }), (0, jsx_runtime_1.jsx)(error_message_1.default, { error: errorMessage, "data-testid": "manual-payment-error-message" })] }));
};
exports.default = PaymentButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1idXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7OztBQUVaLDhDQUF1RDtBQUN2RCx5Q0FBMkM7QUFFM0MscUNBQXFDO0FBQ3JDLDZEQUFnRTtBQUNoRSxpQ0FBdUM7QUFDdkMscUVBQTJDO0FBTzNDLE1BQU0sYUFBYSxHQUFpQyxDQUFDLEVBQ25ELElBQUksRUFDSixhQUFhLEVBQUUsVUFBVSxHQUMxQixFQUFFLEVBQUU7SUFDSCxNQUFNLFFBQVEsR0FDWixDQUFDLElBQUk7UUFDTCxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7UUFDdEIsQ0FBQyxJQUFJLENBQUMsZUFBZTtRQUNyQixDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ1gsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUUxQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVyRSxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFBLHdCQUFZLEVBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQztZQUM1QyxPQUFPLENBQ0wsdUJBQUMsbUJBQW1CLElBQ2xCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLElBQUksRUFBRSxJQUFJLGlCQUNHLFVBQVUsR0FDdkIsQ0FDSCxDQUFBO1FBQ0gsS0FBSyxJQUFBLG9CQUFRLEVBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQztZQUN4QyxPQUFPLENBQ0wsdUJBQUMsdUJBQXVCLElBQUMsUUFBUSxFQUFFLFFBQVEsaUJBQWUsVUFBVSxHQUFJLENBQ3pFLENBQUE7UUFDSDtZQUNF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