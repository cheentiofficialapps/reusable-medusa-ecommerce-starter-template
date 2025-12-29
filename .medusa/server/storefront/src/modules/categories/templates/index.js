"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryTemplate;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const interactive_link_1 = __importDefault(require("@modules/common/components/interactive-link"));
const skeleton_product_grid_1 = __importDefault(require("@modules/skeletons/templates/skeleton-product-grid"));
const refinement_list_1 = __importDefault(require("@modules/store/components/refinement-list"));
const paginated_products_1 = __importDefault(require("@modules/store/templates/paginated-products"));
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
function CategoryTemplate({ category, sortBy, page, countryCode, }) {
    const pageNumber = page ? parseInt(page) : 1;
    const sort = sortBy || "created_at";
    if (!category || !countryCode)
        (0, navigation_1.notFound)();
    const parents = [];
    const getParents = (category) => {
        if (category.parent_category) {
            parents.push(category.parent_category);
            getParents(category.parent_category);
        }
    };
    getParents(category);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col small:flex-row small:items-start py-6 content-container", "data-testid": "category-container", children: [(0, jsx_runtime_1.jsx)(refinement_list_1.default, { sortBy: sort, "data-testid": "sort-by-container" }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row mb-8 text-2xl-semi gap-4", children: [parents &&
                                parents.map((parent) => ((0, jsx_runtime_1.jsxs)("span", { className: "text-ui-fg-subtle", children: [(0, jsx_runtime_1.jsx)(localized_client_link_1.default, { className: "mr-4 hover:text-black", href: `/categories/${parent.handle}`, "data-testid": "sort-by-link", children: parent.name }), "/"] }, parent.id))), (0, jsx_runtime_1.jsx)("h1", { "data-testid": "category-page-title", children: category.name })] }), category.description && ((0, jsx_runtime_1.jsx)("div", { className: "mb-8 text-base-regular", children: (0, jsx_runtime_1.jsx)("p", { children: category.description }) })), category.category_children && ((0, jsx_runtime_1.jsx)("div", { className: "mb-8 text-base-large", children: (0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-1 gap-2", children: category.category_children?.map((c) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(interactive_link_1.default, { href: `/categories/${c.handle}`, children: c.name }) }, c.id))) }) })), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(skeleton_product_grid_1.default, { numberOfProducts: category.products?.length ?? 8 }), children: (0, jsx_runtime_1.jsx)(paginated_products_1.default, { sortBy: sort, page: pageNumber, categoryId: category.id, countryCode: countryCode }) })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMvdGVtcGxhdGVzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVdBLG1DQXFGQzs7QUFoR0QsZ0RBQTBDO0FBQzFDLGlDQUFnQztBQUVoQyxtR0FBeUU7QUFDekUsK0dBQW9GO0FBQ3BGLGdHQUFzRTtBQUV0RSxxR0FBMkU7QUFDM0UsNkdBQWtGO0FBR2xGLFNBQXdCLGdCQUFnQixDQUFDLEVBQ3ZDLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLFdBQVcsR0FNWjtJQUNDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLFlBQVksQ0FBQTtJQUVuQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsV0FBVztRQUFFLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBRXpDLE1BQU0sT0FBTyxHQUFHLEVBQXNDLENBQUE7SUFFdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUF3QyxFQUFFLEVBQUU7UUFDOUQsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDdEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN0QyxDQUFDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRXBCLE9BQU8sQ0FDTCxpQ0FDRSxTQUFTLEVBQUMsdUVBQXVFLGlCQUNyRSxvQkFBb0IsYUFFaEMsdUJBQUMseUJBQWMsSUFBQyxNQUFNLEVBQUUsSUFBSSxpQkFBYyxtQkFBbUIsR0FBRyxFQUNoRSxpQ0FBSyxTQUFTLEVBQUMsUUFBUSxhQUNyQixpQ0FBSyxTQUFTLEVBQUMsd0NBQXdDLGFBQ3BELE9BQU87Z0NBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FDdEIsa0NBQXNCLFNBQVMsRUFBQyxtQkFBbUIsYUFDakQsdUJBQUMsK0JBQW1CLElBQ2xCLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsSUFBSSxFQUFFLGVBQWUsTUFBTSxDQUFDLE1BQU0sRUFBRSxpQkFDeEIsY0FBYyxZQUV6QixNQUFNLENBQUMsSUFBSSxHQUNRLFVBUGIsTUFBTSxDQUFDLEVBQUUsQ0FTYixDQUNSLENBQUMsRUFDSiw4Q0FBZ0IscUJBQXFCLFlBQUUsUUFBUSxDQUFDLElBQUksR0FBTSxJQUN0RCxFQUNMLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FDdkIsZ0NBQUssU0FBUyxFQUFDLHdCQUF3QixZQUNyQyx3Q0FBSSxRQUFRLENBQUMsV0FBVyxHQUFLLEdBQ3pCLENBQ1AsRUFDQSxRQUFRLENBQUMsaUJBQWlCLElBQUksQ0FDN0IsZ0NBQUssU0FBUyxFQUFDLHNCQUFzQixZQUNuQywrQkFBSSxTQUFTLEVBQUMsd0JBQXdCLFlBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3RDLHlDQUNFLHVCQUFDLDBCQUFlLElBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxZQUM3QyxDQUFDLENBQUMsSUFBSSxHQUNTLElBSFgsQ0FBQyxDQUFDLEVBQUUsQ0FJUixDQUNOLENBQUMsR0FDQyxHQUNELENBQ1AsRUFDRCx1QkFBQyxnQkFBUSxJQUNQLFFBQVEsRUFDTix1QkFBQywrQkFBbUIsSUFDbEIsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxHQUNoRCxZQUdKLHVCQUFDLDRCQUFpQixJQUNoQixNQUFNLEVBQUUsSUFBSSxFQUNaLElBQUksRUFBRSxVQUFVLEVBQ2hCLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUN2QixXQUFXLEVBQUUsV0FBVyxHQUN4QixHQUNPLElBQ1AsSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDIn0=