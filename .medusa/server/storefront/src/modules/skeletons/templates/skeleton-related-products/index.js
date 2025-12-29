"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const repeat_1 = __importDefault(require("@lib/util/repeat"));
const skeleton_product_preview_1 = __importDefault(require("@modules/skeletons/components/skeleton-product-preview"));
const SkeletonRelatedProducts = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "product-page-constraint", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-8 items-center text-center mb-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-6 animate-pulse bg-gray-100" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 items-center text-center mb-16", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-96 h-10 animate-pulse bg-gray-100" }), (0, jsx_runtime_1.jsx)("div", { className: "w-48 h-10 animate-pulse bg-gray-100" })] })] }), (0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1", children: (0, repeat_1.default)(3).map((index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(skeleton_product_preview_1.default, {}) }, index))) })] }));
};
exports.default = SkeletonRelatedProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3NrZWxldG9ucy90ZW1wbGF0ZXMvc2tlbGV0b24tcmVsYXRlZC1wcm9kdWN0cy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLHNIQUEyRjtBQUUzRixNQUFNLHVCQUF1QixHQUFHLEdBQUcsRUFBRTtJQUNuQyxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHlCQUF5QixhQUN0QyxpQ0FBSyxTQUFTLEVBQUMsbURBQW1ELGFBQ2hFLGdDQUFLLFNBQVMsRUFBQyxvQ0FBb0MsR0FBTyxFQUMxRCxpQ0FBSyxTQUFTLEVBQUMsb0RBQW9ELGFBQ2pFLGdDQUFLLFNBQVMsRUFBQyxxQ0FBcUMsR0FBTyxFQUMzRCxnQ0FBSyxTQUFTLEVBQUMscUNBQXFDLEdBQU8sSUFDdkQsSUFDRixFQUNOLCtCQUFJLFNBQVMsRUFBQyw4RUFBOEUsWUFDekYsSUFBQSxnQkFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDeEIseUNBQ0UsdUJBQUMsa0NBQXNCLEtBQUcsSUFEbkIsS0FBSyxDQUVULENBQ04sQ0FBQyxHQUNDLElBQ0QsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsdUJBQXVCLENBQUEifQ==