"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Addresses;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const address_book_1 = __importDefault(require("@modules/account/components/address-book"));
const regions_1 = require("@lib/data/regions");
const customer_1 = require("@lib/data/customer");
exports.metadata = {
    title: "Addresses",
    description: "View your addresses",
};
async function Addresses(props) {
    const params = await props.params;
    const { countryCode } = params;
    const customer = await (0, customer_1.retrieveCustomer)();
    const region = await (0, regions_1.getRegion)(countryCode);
    if (!customer || !region) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", "data-testid": "addresses-page-wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-8 flex flex-col gap-y-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi", children: "Shipping Addresses" }), (0, jsx_runtime_1.jsx)("p", { className: "text-base-regular", children: "View and update your shipping addresses, you can add as many as you like. Saving your addresses will make them available during checkout." })] }), (0, jsx_runtime_1.jsx)(address_book_1.default, { customer: customer, region: region })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9hY2NvdW50L0BkYXNoYm9hcmQvYWRkcmVzc2VzL3BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLDRCQXdCQzs7QUFwQ0QsZ0RBQTBDO0FBRTFDLDRGQUFrRTtBQUVsRSwrQ0FBNkM7QUFDN0MsaURBQXFEO0FBRXhDLFFBQUEsUUFBUSxHQUFhO0lBQ2hDLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFdBQVcsRUFBRSxxQkFBcUI7Q0FDbkMsQ0FBQTtBQUVjLEtBQUssVUFBVSxTQUFTLENBQUMsS0FFdkM7SUFDQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDakMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQTtJQUM5QixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsMkJBQWdCLEdBQUUsQ0FBQTtJQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQTtJQUUzQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxRQUFRLGlCQUFhLHdCQUF3QixhQUMxRCxpQ0FBSyxTQUFTLEVBQUMsNEJBQTRCLGFBQ3pDLCtCQUFJLFNBQVMsRUFBQyxlQUFlLG1DQUF3QixFQUNyRCw4QkFBRyxTQUFTLEVBQUMsbUJBQW1CLDBKQUc1QixJQUNBLEVBQ04sdUJBQUMsc0JBQVcsSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksSUFDL0MsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9