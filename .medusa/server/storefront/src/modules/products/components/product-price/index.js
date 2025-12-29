"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductPrice;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const get_product_price_1 = require("@lib/util/get-product-price");
function ProductPrice({ product, variant, }) {
    const { cheapestPrice, variantPrice } = (0, get_product_price_1.getProductPrice)({
        product,
        variantId: variant?.id,
    });
    const selectedPrice = variant ? variantPrice : cheapestPrice;
    if (!selectedPrice) {
        return (0, jsx_runtime_1.jsx)("div", { className: "block w-32 h-9 bg-gray-100 animate-pulse" });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col text-ui-fg-base", children: [(0, jsx_runtime_1.jsxs)("span", { className: (0, ui_1.clx)("text-xl-semi", {
                    "text-ui-fg-interactive": selectedPrice.price_type === "sale",
                }), children: [!variant && "From ", (0, jsx_runtime_1.jsx)("span", { "data-testid": "product-price", "data-value": selectedPrice.calculated_price_number, children: selectedPrice.calculated_price })] }), selectedPrice.price_type === "sale" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { className: "text-ui-fg-subtle", children: "Original: " }), (0, jsx_runtime_1.jsx)("span", { className: "line-through", "data-testid": "original-product-price", "data-value": selectedPrice.original_price_number, children: selectedPrice.original_price })] }), (0, jsx_runtime_1.jsxs)("span", { className: "text-ui-fg-interactive", children: ["-", selectedPrice.percentage_diff, "%"] })] }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1wcmljZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSwrQkFvREM7O0FBekRELHFDQUFrQztBQUVsQyxtRUFBNkQ7QUFHN0QsU0FBd0IsWUFBWSxDQUFDLEVBQ25DLE9BQU8sRUFDUCxPQUFPLEdBSVI7SUFDQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUEsbUNBQWUsRUFBQztRQUN0RCxPQUFPO1FBQ1AsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFO0tBQ3ZCLENBQUMsQ0FBQTtJQUVGLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7SUFFNUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25CLE9BQU8sZ0NBQUssU0FBUyxFQUFDLDBDQUEwQyxHQUFHLENBQUE7SUFDckUsQ0FBQztJQUVELE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsK0JBQStCLGFBQzVDLGtDQUNFLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFBQyxjQUFjLEVBQUU7b0JBQzdCLHdCQUF3QixFQUFFLGFBQWEsQ0FBQyxVQUFVLEtBQUssTUFBTTtpQkFDOUQsQ0FBQyxhQUVELENBQUMsT0FBTyxJQUFJLE9BQU8sRUFDcEIsZ0RBQ2MsZUFBZSxnQkFDZixhQUFhLENBQUMsdUJBQXVCLFlBRWhELGFBQWEsQ0FBQyxnQkFBZ0IsR0FDMUIsSUFDRixFQUNOLGFBQWEsQ0FBQyxVQUFVLEtBQUssTUFBTSxJQUFJLENBQ3RDLDZEQUNFLDBDQUNFLGlDQUFNLFNBQVMsRUFBQyxtQkFBbUIsMkJBQWtCLEVBQ3JELGlDQUNFLFNBQVMsRUFBQyxjQUFjLGlCQUNaLHdCQUF3QixnQkFDeEIsYUFBYSxDQUFDLHFCQUFxQixZQUU5QyxhQUFhLENBQUMsY0FBYyxHQUN4QixJQUNMLEVBQ0osa0NBQU0sU0FBUyxFQUFDLHdCQUF3QixrQkFDcEMsYUFBYSxDQUFDLGVBQWUsU0FDMUIsSUFDTixDQUNKLElBQ0csQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9