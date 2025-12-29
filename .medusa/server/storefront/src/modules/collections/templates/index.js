"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CollectionTemplate;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const skeleton_product_grid_1 = __importDefault(require("@modules/skeletons/templates/skeleton-product-grid"));
const refinement_list_1 = __importDefault(require("@modules/store/components/refinement-list"));
const paginated_products_1 = __importDefault(require("@modules/store/templates/paginated-products"));
function CollectionTemplate({ sortBy, collection, page, countryCode, }) {
    const pageNumber = page ? parseInt(page) : 1;
    const sort = sortBy || "created_at";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:flex-row small:items-start py-6 content-container", children: [(0, jsx_runtime_1.jsx)(refinement_list_1.default, { sortBy: sort }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-8 text-2xl-semi", children: (0, jsx_runtime_1.jsx)("h1", { children: collection.title }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(skeleton_product_grid_1.default, { numberOfProducts: collection.products?.length }), children: (0, jsx_runtime_1.jsx)(paginated_products_1.default, { sortBy: sort, page: pageNumber, collectionId: collection.id, countryCode: countryCode }) })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbGxlY3Rpb25zL3RlbXBsYXRlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxxQ0FzQ0M7O0FBOUNELGlDQUFnQztBQUVoQywrR0FBb0Y7QUFDcEYsZ0dBQXNFO0FBRXRFLHFHQUEyRTtBQUczRSxTQUF3QixrQkFBa0IsQ0FBQyxFQUN6QyxNQUFNLEVBQ04sVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEdBTVo7SUFDQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxZQUFZLENBQUE7SUFFbkMsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyx1RUFBdUUsYUFDcEYsdUJBQUMseUJBQWMsSUFBQyxNQUFNLEVBQUUsSUFBSSxHQUFJLEVBQ2hDLGlDQUFLLFNBQVMsRUFBQyxRQUFRLGFBQ3JCLGdDQUFLLFNBQVMsRUFBQyxvQkFBb0IsWUFDakMseUNBQUssVUFBVSxDQUFDLEtBQUssR0FBTSxHQUN2QixFQUNOLHVCQUFDLGdCQUFRLElBQ1AsUUFBUSxFQUNOLHVCQUFDLCtCQUFtQixJQUNsQixnQkFBZ0IsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sR0FDN0MsWUFHSix1QkFBQyw0QkFBaUIsSUFDaEIsTUFBTSxFQUFFLElBQUksRUFDWixJQUFJLEVBQUUsVUFBVSxFQUNoQixZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFDM0IsV0FBVyxFQUFFLFdBQVcsR0FDeEIsR0FDTyxJQUNQLElBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9