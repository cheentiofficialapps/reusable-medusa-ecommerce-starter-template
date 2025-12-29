"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductRail;
const jsx_runtime_1 = require("react/jsx-runtime");
const products_1 = require("@lib/data/products");
const ui_1 = require("@medusajs/ui");
const interactive_link_1 = __importDefault(require("@modules/common/components/interactive-link"));
const product_preview_1 = __importDefault(require("@modules/products/components/product-preview"));
async function ProductRail({ collection, region, }) {
    const { response: { products: pricedProducts }, } = await (0, products_1.listProducts)({
        regionId: region.id,
        queryParams: {
            collection_id: collection.id,
            fields: "*variants.calculated_price",
        },
    });
    if (!pricedProducts) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "content-container py-12 small:py-24", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-8", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-xlarge", children: collection.title }), (0, jsx_runtime_1.jsx)(interactive_link_1.default, { href: `/collections/${collection.handle}`, children: "View all" })] }), (0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36", children: pricedProducts &&
                    pricedProducts.map((product) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(product_preview_1.default, { product: product, region: region, isFeatured: true }) }, product.id))) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9wcm9kdWN0LXJhaWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsOEJBdUNDOztBQTlDRCxpREFBaUQ7QUFFakQscUNBQW1DO0FBRW5DLG1HQUF5RTtBQUN6RSxtR0FBeUU7QUFFMUQsS0FBSyxVQUFVLFdBQVcsQ0FBQyxFQUN4QyxVQUFVLEVBQ1YsTUFBTSxHQUlQO0lBQ0MsTUFBTSxFQUNKLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FDdkMsR0FBRyxNQUFNLElBQUEsdUJBQVksRUFBQztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFO1lBQ1gsYUFBYSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sRUFBRSw0QkFBNEI7U0FDckM7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxxQ0FBcUMsYUFDbEQsaUNBQUssU0FBUyxFQUFDLDJCQUEyQixhQUN4Qyx1QkFBQyxTQUFJLElBQUMsU0FBUyxFQUFDLFlBQVksWUFBRSxVQUFVLENBQUMsS0FBSyxHQUFRLEVBQ3RELHVCQUFDLDBCQUFlLElBQUMsSUFBSSxFQUFFLGdCQUFnQixVQUFVLENBQUMsTUFBTSxFQUFFLHlCQUV4QyxJQUNkLEVBQ04sK0JBQUksU0FBUyxFQUFDLG9FQUFvRSxZQUMvRSxjQUFjO29CQUNiLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQzlCLHlDQUNFLHVCQUFDLHlCQUFjLElBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsU0FBRyxJQUR4RCxPQUFPLENBQUMsRUFBRSxDQUVkLENBQ04sQ0FBQyxHQUNELElBQ0QsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9