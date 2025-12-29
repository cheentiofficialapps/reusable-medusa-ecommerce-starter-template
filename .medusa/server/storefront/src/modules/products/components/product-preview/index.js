"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductPreview;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const get_product_price_1 = require("@lib/util/get-product-price");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const thumbnail_1 = __importDefault(require("../thumbnail"));
const price_1 = __importDefault(require("./price"));
async function ProductPreview({ product, isFeatured, region, }) {
    // const pricedProduct = await listProducts({
    //   regionId: region.id,
    //   queryParams: { id: [product.id!] },
    // }).then(({ response }) => response.products[0])
    // if (!pricedProduct) {
    //   return null
    // }
    const { cheapestPrice } = (0, get_product_price_1.getProductPrice)({
        product,
    });
    return ((0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: `/products/${product.handle}`, className: "group", children: (0, jsx_runtime_1.jsxs)("div", { "data-testid": "product-wrapper", children: [(0, jsx_runtime_1.jsx)(thumbnail_1.default, { thumbnail: product.thumbnail, images: product.images, size: "full", isFeatured: isFeatured }), (0, jsx_runtime_1.jsxs)("div", { className: "flex txt-compact-medium mt-4 justify-between", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-subtle", "data-testid": "product-title", children: product.title }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-x-2", children: cheapestPrice && (0, jsx_runtime_1.jsx)(price_1.default, { price: cheapestPrice }) })] })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1wcmV2aWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLGlDQTBDQzs7QUFsREQscUNBQW1DO0FBRW5DLG1FQUE2RDtBQUU3RCw2R0FBa0Y7QUFDbEYsNkRBQW9DO0FBQ3BDLG9EQUFrQztBQUVuQixLQUFLLFVBQVUsY0FBYyxDQUFDLEVBQzNDLE9BQU8sRUFDUCxVQUFVLEVBQ1YsTUFBTSxHQUtQO0lBQ0MsNkNBQTZDO0lBQzdDLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0RBQWtEO0lBRWxELHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVKLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLG1DQUFlLEVBQUM7UUFDeEMsT0FBTztLQUNSLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FDTCx1QkFBQywrQkFBbUIsSUFBQyxJQUFJLEVBQUUsYUFBYSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFDLE9BQU8sWUFDekUsZ0RBQWlCLGlCQUFpQixhQUNoQyx1QkFBQyxtQkFBUyxJQUNSLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUM1QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFDdEIsSUFBSSxFQUFDLE1BQU0sRUFDWCxVQUFVLEVBQUUsVUFBVSxHQUN0QixFQUNGLGlDQUFLLFNBQVMsRUFBQyw4Q0FBOEMsYUFDM0QsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyxtQkFBbUIsaUJBQWEsZUFBZSxZQUM1RCxPQUFPLENBQUMsS0FBSyxHQUNULEVBQ1AsZ0NBQUssU0FBUyxFQUFDLDJCQUEyQixZQUN2QyxhQUFhLElBQUksdUJBQUMsZUFBWSxJQUFDLEtBQUssRUFBRSxhQUFhLEdBQUksR0FDcEQsSUFDRixJQUNGLEdBQ2MsQ0FDdkIsQ0FBQTtBQUNILENBQUMifQ==