"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductActionsWrapper;
const jsx_runtime_1 = require("react/jsx-runtime");
const products_1 = require("@lib/data/products");
const product_actions_1 = __importDefault(require("@modules/products/components/product-actions"));
/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
async function ProductActionsWrapper({ id, region, }) {
    const product = await (0, products_1.listProducts)({
        queryParams: { id: [id] },
        regionId: region.id,
    }).then(({ response }) => response.products[0]);
    if (!product) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(product_actions_1.default, { product: product, region: region });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3RlbXBsYXRlcy9wcm9kdWN0LWFjdGlvbnMtd3JhcHBlci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSx3Q0FpQkM7O0FBeEJELGlEQUFpRDtBQUVqRCxtR0FBeUU7QUFFekU7O0dBRUc7QUFDWSxLQUFLLFVBQVUscUJBQXFCLENBQUMsRUFDbEQsRUFBRSxFQUNGLE1BQU0sR0FJUDtJQUNDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSx1QkFBWSxFQUFDO1FBQ2pDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtLQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRS9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE9BQU8sdUJBQUMseUJBQWMsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksQ0FBQTtBQUM3RCxDQUFDIn0=