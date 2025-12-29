"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const ProductInfo = ({ product }) => {
    return ((0, jsx_runtime_1.jsx)("div", { id: "product-info", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4 lg:max-w-[500px] mx-auto", children: [product.collection && ((0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: `/collections/${product.collection.handle}`, className: "text-medium text-ui-fg-muted hover:text-ui-fg-subtle", children: product.collection.title })), (0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h2", className: "text-3xl leading-10 text-ui-fg-base", "data-testid": "product-title", children: product.title }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-medium text-ui-fg-subtle whitespace-pre-line", "data-testid": "product-description", children: product.description })] }) }));
};
exports.default = ProductInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3RlbXBsYXRlcy9wcm9kdWN0LWluZm8vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFDQUE0QztBQUM1Qyw2R0FBa0Y7QUFNbEYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBb0IsRUFBRSxFQUFFO0lBQ3BELE9BQU8sQ0FDTCxnQ0FBSyxFQUFFLEVBQUMsY0FBYyxZQUNwQixpQ0FBSyxTQUFTLEVBQUMsZ0RBQWdELGFBQzVELE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FDckIsdUJBQUMsK0JBQW1CLElBQ2xCLElBQUksRUFBRSxnQkFBZ0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFDakQsU0FBUyxFQUFDLHNEQUFzRCxZQUUvRCxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssR0FDTCxDQUN2QixFQUNELHVCQUFDLFlBQU8sSUFDTixLQUFLLEVBQUMsSUFBSSxFQUNWLFNBQVMsRUFBQyxxQ0FBcUMsaUJBQ25DLGVBQWUsWUFFMUIsT0FBTyxDQUFDLEtBQUssR0FDTixFQUVWLHVCQUFDLFNBQUksSUFDSCxTQUFTLEVBQUMsbURBQW1ELGlCQUNqRCxxQkFBcUIsWUFFaEMsT0FBTyxDQUFDLFdBQVcsR0FDZixJQUNILEdBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFBIn0=