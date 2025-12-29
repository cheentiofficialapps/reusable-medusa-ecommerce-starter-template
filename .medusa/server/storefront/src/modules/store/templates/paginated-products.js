"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PaginatedProducts;
const jsx_runtime_1 = require("react/jsx-runtime");
const products_1 = require("@lib/data/products");
const regions_1 = require("@lib/data/regions");
const product_preview_1 = __importDefault(require("@modules/products/components/product-preview"));
const pagination_1 = require("@modules/store/components/pagination");
const PRODUCT_LIMIT = 12;
async function PaginatedProducts({ sortBy, page, collectionId, categoryId, productsIds, countryCode, }) {
    const queryParams = {
        limit: 12,
    };
    if (collectionId) {
        queryParams["collection_id"] = [collectionId];
    }
    if (categoryId) {
        queryParams["category_id"] = [categoryId];
    }
    if (productsIds) {
        queryParams["id"] = productsIds;
    }
    if (sortBy === "created_at") {
        queryParams["order"] = "created_at";
    }
    const region = await (0, regions_1.getRegion)(countryCode);
    if (!region) {
        return null;
    }
    let { response: { products, count }, } = await (0, products_1.listProductsWithSort)({
        page,
        queryParams,
        sortBy,
        countryCode,
    });
    const totalPages = Math.ceil(count / PRODUCT_LIMIT);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8", "data-testid": "products-list", children: products.map((p) => {
                    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(product_preview_1.default, { product: p, region: region }) }, p.id));
                }) }), totalPages > 1 && ((0, jsx_runtime_1.jsx)(pagination_1.Pagination, { "data-testid": "product-pagination", page: page, totalPages: totalPages }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGVkLXByb2R1Y3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbW9kdWxlcy9zdG9yZS90ZW1wbGF0ZXMvcGFnaW5hdGVkLXByb2R1Y3RzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWdCQSxvQ0EyRUM7O0FBM0ZELGlEQUF5RDtBQUN6RCwrQ0FBNkM7QUFDN0MsbUdBQXlFO0FBQ3pFLHFFQUFpRTtBQUdqRSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFVVCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFDOUMsTUFBTSxFQUNOLElBQUksRUFDSixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxXQUFXLEdBUVo7SUFDQyxNQUFNLFdBQVcsR0FBNEI7UUFDM0MsS0FBSyxFQUFFLEVBQUU7S0FDVixDQUFBO0lBRUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNmLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUE7SUFDakMsQ0FBQztJQUVELElBQUksTUFBTSxLQUFLLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUE7SUFDckMsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxtQkFBUyxFQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRTNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELElBQUksRUFDRixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQzlCLEdBQUcsTUFBTSxJQUFBLCtCQUFvQixFQUFDO1FBQzdCLElBQUk7UUFDSixXQUFXO1FBQ1gsTUFBTTtRQUNOLFdBQVc7S0FDWixDQUFDLENBQUE7SUFFRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQTtJQUVuRCxPQUFPLENBQ0wsNkRBQ0UsK0JBQ0UsU0FBUyxFQUFDLDhFQUE4RSxpQkFDNUUsZUFBZSxZQUUxQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2xCLE9BQU8sQ0FDTCx5Q0FDRSx1QkFBQyx5QkFBYyxJQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBSSxJQUR2QyxDQUFDLENBQUMsRUFBRSxDQUVSLENBQ04sQ0FBQTtnQkFDSCxDQUFDLENBQUMsR0FDQyxFQUNKLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FDakIsdUJBQUMsdUJBQVUsbUJBQ0csb0JBQW9CLEVBQ2hDLElBQUksRUFBRSxJQUFJLEVBQ1YsVUFBVSxFQUFFLFVBQVUsR0FDdEIsQ0FDSCxJQUNBLENBQ0osQ0FBQTtBQUNILENBQUMifQ==