"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = OverviewTemplate;
const jsx_runtime_1 = require("react/jsx-runtime");
const overview_1 = __importDefault(require("@modules/account/components/overview"));
const navigation_1 = require("next/navigation");
const customer_1 = require("@lib/data/customer");
const orders_1 = require("@lib/data/orders");
exports.metadata = {
    title: "Account",
    description: "Overview of your account activity.",
};
async function OverviewTemplate() {
    const customer = await (0, customer_1.retrieveCustomer)().catch(() => null);
    const orders = (await (0, orders_1.listOrders)().catch(() => null)) || null;
    if (!customer) {
        (0, navigation_1.notFound)();
    }
    return (0, jsx_runtime_1.jsx)(overview_1.default, { customer: customer, orders: orders });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9hY2NvdW50L0BkYXNoYm9hcmQvcGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBWUEsbUNBU0M7O0FBbkJELG9GQUEyRDtBQUMzRCxnREFBMEM7QUFDMUMsaURBQXFEO0FBQ3JELDZDQUE2QztBQUVoQyxRQUFBLFFBQVEsR0FBYTtJQUNoQyxLQUFLLEVBQUUsU0FBUztJQUNoQixXQUFXLEVBQUUsb0NBQW9DO0NBQ2xELENBQUE7QUFFYyxLQUFLLFVBQVUsZ0JBQWdCO0lBQzVDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSwyQkFBZ0IsR0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRCxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBQSxtQkFBVSxHQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFBO0lBRTdELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNkLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBQ1osQ0FBQztJQUVELE9BQU8sdUJBQUMsa0JBQVEsSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksQ0FBQTtBQUN6RCxDQUFDIn0=