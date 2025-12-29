"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RelatedProducts;
const jsx_runtime_1 = require("react/jsx-runtime");
const products_1 = require("@lib/data/products");
const regions_1 = require("@lib/data/regions");
const product_preview_1 = __importDefault(require("../product-preview"));
async function RelatedProducts({ product, countryCode, }) {
    const region = await (0, regions_1.getRegion)(countryCode);
    if (!region) {
        return null;
    }
    // edit this function to define your related products logic
    const queryParams = {};
    if (region?.id) {
        queryParams.region_id = region.id;
    }
    if (product.collection_id) {
        queryParams.collection_id = [product.collection_id];
    }
    if (product.tags) {
        queryParams.tag_id = product.tags
            .map((t) => t.id)
            .filter(Boolean);
    }
    queryParams.is_giftcard = false;
    const products = await (0, products_1.listProducts)({
        queryParams,
        countryCode,
    }).then(({ response }) => {
        return response.products.filter((responseProduct) => responseProduct.id !== product.id);
    });
    if (!products.length) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "product-page-constraint", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center text-center mb-16", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-base-regular text-gray-600 mb-6", children: "Related products" }), (0, jsx_runtime_1.jsx)("p", { className: "text-2xl-regular text-ui-fg-base max-w-lg", children: "You might also want to check out these products." })] }), (0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8", children: products.map((product) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(product_preview_1.default, { region: region, product: product }) }, product.id))) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcmVsYXRlZC1wcm9kdWN0cy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxrQ0EwREM7O0FBcEVELGlEQUFpRDtBQUNqRCwrQ0FBNkM7QUFFN0MseUVBQXdDO0FBT3pCLEtBQUssVUFBVSxlQUFlLENBQUMsRUFDNUMsT0FBTyxFQUNQLFdBQVcsR0FDVTtJQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQTtJQUUzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsTUFBTSxXQUFXLEdBQXFDLEVBQUUsQ0FBQTtJQUN4RCxJQUFJLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsV0FBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSTthQUM5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBYSxDQUFBO0lBQ2hDLENBQUM7SUFDRCxXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtJQUUvQixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsdUJBQVksRUFBQztRQUNsQyxXQUFXO1FBQ1gsV0FBVztLQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDdkIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDN0IsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FDdkQsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHlCQUF5QixhQUN0QyxpQ0FBSyxTQUFTLEVBQUMsOENBQThDLGFBQzNELGlDQUFNLFNBQVMsRUFBQyxzQ0FBc0MsaUNBRS9DLEVBQ1AsOEJBQUcsU0FBUyxFQUFDLDJDQUEyQyxpRUFFcEQsSUFDQSxFQUVOLCtCQUFJLFNBQVMsRUFBQyx1RUFBdUUsWUFDbEYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDekIseUNBQ0UsdUJBQUMseUJBQU8sSUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUksSUFEdEMsT0FBTyxDQUFDLEVBQUUsQ0FFZCxDQUNOLENBQUMsR0FDQyxJQUNELENBQ1AsQ0FBQTtBQUNILENBQUMifQ==