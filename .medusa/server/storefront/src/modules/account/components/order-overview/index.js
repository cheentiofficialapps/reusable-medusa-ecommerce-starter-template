"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const order_card_1 = __importDefault(require("../order-card"));
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const OrderOverview = ({ orders }) => {
    if (orders?.length) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-y-8 w-full", children: orders.map((o) => ((0, jsx_runtime_1.jsx)("div", { className: "border-b border-gray-200 pb-6 last:pb-0 last:border-none", children: (0, jsx_runtime_1.jsx)(order_card_1.default, { order: o }) }, o.id))) }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col items-center gap-y-4", "data-testid": "no-orders-container", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-large-semi", children: "Nothing to see here" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-base-regular", children: ["You don't have any orders yet, let us change that ", ":)"] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-4", children: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: "/", passHref: true, children: (0, jsx_runtime_1.jsx)(ui_1.Button, { "data-testid": "continue-shopping-button", children: "Continue shopping" }) }) })] }));
};
exports.default = OrderOverview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9vcmRlci1vdmVydmlldy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVoscUNBQXFDO0FBRXJDLCtEQUFxQztBQUNyQyw2R0FBa0Y7QUFHbEYsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBc0MsRUFBRSxFQUFFO0lBQ3ZFLElBQUksTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsOEJBQThCLFlBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ2pCLGdDQUVFLFNBQVMsRUFBQywwREFBMEQsWUFFcEUsdUJBQUMsb0JBQVMsSUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFJLElBSGxCLENBQUMsQ0FBQyxFQUFFLENBSUwsQ0FDUCxDQUFDLEdBQ0UsQ0FDUCxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FDTCxpQ0FDRSxTQUFTLEVBQUMsMkNBQTJDLGlCQUN6QyxxQkFBcUIsYUFFakMsK0JBQUksU0FBUyxFQUFDLGlCQUFpQixvQ0FBeUIsRUFDeEQsK0JBQUcsU0FBUyxFQUFDLG1CQUFtQixtRUFDMEIsSUFBSSxJQUMxRCxFQUNKLGdDQUFLLFNBQVMsRUFBQyxNQUFNLFlBQ25CLHVCQUFDLCtCQUFtQixJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsUUFBUSxrQkFDcEMsdUJBQUMsV0FBTSxtQkFBYSwwQkFBMEIsa0NBRXJDLEdBQ1csR0FDbEIsSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEifQ==