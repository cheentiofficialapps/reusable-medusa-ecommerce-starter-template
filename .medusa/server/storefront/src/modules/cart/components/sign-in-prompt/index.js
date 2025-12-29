"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const SignInPrompt = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: "txt-xlarge", children: "Already have an account?" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium text-ui-fg-subtle mt-2", children: "Sign in for a better experience." })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: "/account", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", className: "h-10", "data-testid": "sign-in-button", children: "Sign in" }) }) })] }));
};
exports.default = SignInPrompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhcnQvY29tcG9uZW50cy9zaWduLWluLXByb21wdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELDZHQUFrRjtBQUVsRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7SUFDeEIsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyw0Q0FBNEMsYUFDekQsNENBQ0UsdUJBQUMsWUFBTyxJQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFlBQVkseUNBRWhDLEVBQ1YsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxtQ0FBbUMsaURBRTVDLElBQ0gsRUFDTiwwQ0FDRSx1QkFBQywrQkFBbUIsSUFBQyxJQUFJLEVBQUMsVUFBVSxZQUNsQyx1QkFBQyxXQUFNLElBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBYSxnQkFBZ0Isd0JBRWhFLEdBQ1csR0FDbEIsSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUEifQ==