"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_gallery_1 = __importDefault(require("@modules/products/components/image-gallery"));
const product_actions_1 = __importDefault(require("@modules/products/components/product-actions"));
const product_onboarding_cta_1 = __importDefault(require("@modules/products/components/product-onboarding-cta"));
const product_tabs_1 = __importDefault(require("@modules/products/components/product-tabs"));
const related_products_1 = __importDefault(require("@modules/products/components/related-products"));
const product_info_1 = __importDefault(require("@modules/products/templates/product-info"));
const skeleton_related_products_1 = __importDefault(require("@modules/skeletons/templates/skeleton-related-products"));
const navigation_1 = require("next/navigation");
const product_actions_wrapper_1 = __importDefault(require("./product-actions-wrapper"));
const ProductTemplate = ({ product, region, countryCode, images, }) => {
    if (!product || !product.id) {
        return (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "content-container  flex flex-col small:flex-row small:items-start py-6 relative", "data-testid": "product-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6", children: [(0, jsx_runtime_1.jsx)(product_info_1.default, { product: product }), (0, jsx_runtime_1.jsx)(product_tabs_1.default, { product: product })] }), (0, jsx_runtime_1.jsx)("div", { className: "block w-full relative", children: (0, jsx_runtime_1.jsx)(image_gallery_1.default, { images: images }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12", children: [(0, jsx_runtime_1.jsx)(product_onboarding_cta_1.default, {}), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(product_actions_1.default, { disabled: true, product: product, region: region }), children: (0, jsx_runtime_1.jsx)(product_actions_wrapper_1.default, { id: product.id, region: region }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "content-container my-16 small:my-32", "data-testid": "related-products-container", children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(skeleton_related_products_1.default, {}), children: (0, jsx_runtime_1.jsx)(related_products_1.default, { product: product, countryCode: countryCode }) }) })] }));
};
exports.default = ProductTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3RlbXBsYXRlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQXVDO0FBRXZDLCtGQUFxRTtBQUNyRSxtR0FBeUU7QUFDekUsaUhBQXNGO0FBQ3RGLDZGQUFtRTtBQUNuRSxxR0FBMkU7QUFDM0UsNEZBQWtFO0FBQ2xFLHVIQUE0RjtBQUM1RixnREFBMEM7QUFHMUMsd0ZBQTZEO0FBUzdELE1BQU0sZUFBZSxHQUFtQyxDQUFDLEVBQ3ZELE9BQU8sRUFDUCxNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sR0FDUCxFQUFFLEVBQUU7SUFDSCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVCLE9BQU8sSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FDTCw2REFDRSxpQ0FDRSxTQUFTLEVBQUMsaUZBQWlGLGlCQUMvRSxtQkFBbUIsYUFFL0IsaUNBQUssU0FBUyxFQUFDLDRGQUE0RixhQUN6Ryx1QkFBQyxzQkFBVyxJQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUksRUFDakMsdUJBQUMsc0JBQVcsSUFBQyxPQUFPLEVBQUUsT0FBTyxHQUFJLElBQzdCLEVBQ04sZ0NBQUssU0FBUyxFQUFDLHVCQUF1QixZQUNwQyx1QkFBQyx1QkFBWSxJQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUksR0FDNUIsRUFDTixpQ0FBSyxTQUFTLEVBQUMsNkZBQTZGLGFBQzFHLHVCQUFDLGdDQUFvQixLQUFHLEVBQ3hCLHVCQUFDLGdCQUFRLElBQ1AsUUFBUSxFQUNOLHVCQUFDLHlCQUFjLElBQ2IsUUFBUSxFQUFFLElBQUksRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixNQUFNLEVBQUUsTUFBTSxHQUNkLFlBR0osdUJBQUMsaUNBQXFCLElBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBSSxHQUNoRCxJQUNQLElBQ0YsRUFDTixnQ0FDRSxTQUFTLEVBQUMscUNBQXFDLGlCQUNuQyw0QkFBNEIsWUFFeEMsdUJBQUMsZ0JBQVEsSUFBQyxRQUFRLEVBQUUsdUJBQUMsbUNBQXVCLEtBQUcsWUFDN0MsdUJBQUMsMEJBQWUsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEdBQUksR0FDdEQsR0FDUCxJQUNMLENBQ0osQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGVBQWUsQ0FBQSJ9