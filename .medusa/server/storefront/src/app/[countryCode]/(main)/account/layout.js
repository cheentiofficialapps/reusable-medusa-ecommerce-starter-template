"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountPageLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const customer_1 = require("@lib/data/customer");
const ui_1 = require("@medusajs/ui");
const account_layout_1 = __importDefault(require("@modules/account/templates/account-layout"));
async function AccountPageLayout({ dashboard, login, }) {
    const customer = await (0, customer_1.retrieveCustomer)().catch(() => null);
    return ((0, jsx_runtime_1.jsxs)(account_layout_1.default, { customer: customer, children: [customer ? dashboard : login, (0, jsx_runtime_1.jsx)(ui_1.Toaster, {})] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvYXBwL1tjb3VudHJ5Q29kZV0vKG1haW4pL2FjY291bnQvbGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLG9DQWVDOztBQW5CRCxpREFBcUQ7QUFDckQscUNBQXNDO0FBQ3RDLCtGQUFxRTtBQUV0RCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFDOUMsU0FBUyxFQUNULEtBQUssR0FJTjtJQUNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSwyQkFBZ0IsR0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUUzRCxPQUFPLENBQ0wsd0JBQUMsd0JBQWEsSUFBQyxRQUFRLEVBQUUsUUFBUSxhQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUM3Qix1QkFBQyxZQUFPLEtBQUcsSUFDRyxDQUNqQixDQUFBO0FBQ0gsQ0FBQyJ9