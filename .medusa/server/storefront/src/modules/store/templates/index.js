"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const skeleton_product_grid_1 = __importDefault(require("@modules/skeletons/templates/skeleton-product-grid"));
const refinement_list_1 = __importDefault(require("@modules/store/components/refinement-list"));
const paginated_products_1 = __importDefault(require("./paginated-products"));
const StoreTemplate = ({ sortBy, page, countryCode, }) => {
    const pageNumber = page ? parseInt(page) : 1;
    const sort = sortBy || "created_at";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:flex-row small:items-start py-6 content-container", "data-testid": "category-container", children: [(0, jsx_runtime_1.jsx)(refinement_list_1.default, { sortBy: sort }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-8 text-2xl-semi", children: (0, jsx_runtime_1.jsx)("h1", { "data-testid": "store-page-title", children: "All products" }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(skeleton_product_grid_1.default, {}), children: (0, jsx_runtime_1.jsx)(paginated_products_1.default, { sortBy: sort, page: pageNumber, countryCode: countryCode }) })] })] }));
};
exports.default = StoreTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3N0b3JlL3RlbXBsYXRlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQWdDO0FBRWhDLCtHQUFvRjtBQUNwRixnR0FBc0U7QUFHdEUsOEVBQW9EO0FBRXBELE1BQU0sYUFBYSxHQUFHLENBQUMsRUFDckIsTUFBTSxFQUNOLElBQUksRUFDSixXQUFXLEdBS1osRUFBRSxFQUFFO0lBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksWUFBWSxDQUFBO0lBRW5DLE9BQU8sQ0FDTCxpQ0FDRSxTQUFTLEVBQUMsdUVBQXVFLGlCQUNyRSxvQkFBb0IsYUFFaEMsdUJBQUMseUJBQWMsSUFBQyxNQUFNLEVBQUUsSUFBSSxHQUFJLEVBQ2hDLGlDQUFLLFNBQVMsRUFBQyxRQUFRLGFBQ3JCLGdDQUFLLFNBQVMsRUFBQyxvQkFBb0IsWUFDakMsOENBQWdCLGtCQUFrQiw2QkFBa0IsR0FDaEQsRUFDTix1QkFBQyxnQkFBUSxJQUFDLFFBQVEsRUFBRSx1QkFBQywrQkFBbUIsS0FBRyxZQUN6Qyx1QkFBQyw0QkFBaUIsSUFDaEIsTUFBTSxFQUFFLElBQUksRUFDWixJQUFJLEVBQUUsVUFBVSxFQUNoQixXQUFXLEVBQUUsV0FBVyxHQUN4QixHQUNPLElBQ1AsSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEifQ==