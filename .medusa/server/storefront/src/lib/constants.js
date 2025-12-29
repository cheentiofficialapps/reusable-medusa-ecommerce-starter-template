"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noDivisionCurrencies = exports.isManual = exports.isPaypal = exports.isStripeLike = exports.paymentInfoMap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ideal_1 = __importDefault(require("@modules/common/icons/ideal"));
const bancontact_1 = __importDefault(require("@modules/common/icons/bancontact"));
const paypal_1 = __importDefault(require("@modules/common/icons/paypal"));
/* Map of payment provider_id to their title and icon. Add in any payment providers you want to use. */
exports.paymentInfoMap = {
    pp_stripe_stripe: {
        title: "Credit card",
        icon: (0, jsx_runtime_1.jsx)(icons_1.CreditCard, {}),
    },
    "pp_medusa-payments_default": {
        title: "Credit card",
        icon: (0, jsx_runtime_1.jsx)(icons_1.CreditCard, {}),
    },
    "pp_stripe-ideal_stripe": {
        title: "iDeal",
        icon: (0, jsx_runtime_1.jsx)(ideal_1.default, {}),
    },
    "pp_stripe-bancontact_stripe": {
        title: "Bancontact",
        icon: (0, jsx_runtime_1.jsx)(bancontact_1.default, {}),
    },
    pp_paypal_paypal: {
        title: "PayPal",
        icon: (0, jsx_runtime_1.jsx)(paypal_1.default, {}),
    },
    pp_system_default: {
        title: "Manual Payment",
        icon: (0, jsx_runtime_1.jsx)(icons_1.CreditCard, {}),
    },
    // Add more payment providers here
};
// This only checks if it is native stripe or medusa payments for card payments, it ignores the other stripe-based providers
const isStripeLike = (providerId) => {
    return (providerId?.startsWith("pp_stripe_") || providerId?.startsWith("pp_medusa-"));
};
exports.isStripeLike = isStripeLike;
const isPaypal = (providerId) => {
    return providerId?.startsWith("pp_paypal");
};
exports.isPaypal = isPaypal;
const isManual = (providerId) => {
    return providerId?.startsWith("pp_system_default");
};
exports.isManual = isManual;
// Add currencies that don't need to be divided by 100
exports.noDivisionCurrencies = [
    "krw",
    "jpy",
    "vnd",
    "clp",
    "pyg",
    "xaf",
    "xof",
    "bif",
    "djf",
    "gnf",
    "kmf",
    "mga",
    "rwf",
    "xpf",
    "htg",
    "vuv",
    "xag",
    "xdr",
    "xau",
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbGliL2NvbnN0YW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLDJDQUE0QztBQUU1Qyx3RUFBK0M7QUFDL0Msa0ZBQXlEO0FBQ3pELDBFQUFpRDtBQUVqRCx1R0FBdUc7QUFDMUYsUUFBQSxjQUFjLEdBR3ZCO0lBQ0YsZ0JBQWdCLEVBQUU7UUFDaEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsSUFBSSxFQUFFLHVCQUFDLGtCQUFVLEtBQUc7S0FDckI7SUFDRCw0QkFBNEIsRUFBRTtRQUM1QixLQUFLLEVBQUUsYUFBYTtRQUNwQixJQUFJLEVBQUUsdUJBQUMsa0JBQVUsS0FBRztLQUNyQjtJQUNELHdCQUF3QixFQUFFO1FBQ3hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLHVCQUFDLGVBQUssS0FBRztLQUNoQjtJQUNELDZCQUE2QixFQUFFO1FBQzdCLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSx1QkFBQyxvQkFBVSxLQUFHO0tBQ3JCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsdUJBQUMsZ0JBQU0sS0FBRztLQUNqQjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsSUFBSSxFQUFFLHVCQUFDLGtCQUFVLEtBQUc7S0FDckI7SUFDRCxrQ0FBa0M7Q0FDbkMsQ0FBQTtBQUVELDRIQUE0SDtBQUNySCxNQUFNLFlBQVksR0FBRyxDQUFDLFVBQW1CLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQ0wsVUFBVSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUM3RSxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBSlksUUFBQSxZQUFZLGdCQUl4QjtBQUVNLE1BQU0sUUFBUSxHQUFHLENBQUMsVUFBbUIsRUFBRSxFQUFFO0lBQzlDLE9BQU8sVUFBVSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUM1QyxDQUFDLENBQUE7QUFGWSxRQUFBLFFBQVEsWUFFcEI7QUFDTSxNQUFNLFFBQVEsR0FBRyxDQUFDLFVBQW1CLEVBQUUsRUFBRTtJQUM5QyxPQUFPLFVBQVUsRUFBRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCxDQUFDLENBQUE7QUFGWSxRQUFBLFFBQVEsWUFFcEI7QUFFRCxzREFBc0Q7QUFDekMsUUFBQSxvQkFBb0IsR0FBRztJQUNsQyxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0NBQ04sQ0FBQSJ9