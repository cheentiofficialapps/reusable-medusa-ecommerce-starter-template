"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PreviewPrice;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
async function PreviewPrice({ price }) {
    if (!price) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [price.price_type === "sale" && ((0, jsx_runtime_1.jsx)(ui_1.Text, { className: "line-through text-ui-fg-muted", "data-testid": "original-price", children: price.original_price })), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: (0, ui_1.clx)("text-ui-fg-muted", {
                    "text-ui-fg-interactive": price.price_type === "sale",
                }), "data-testid": "price", children: price.calculated_price })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1wcmV2aWV3L3ByaWNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQXlCQzs7QUE1QkQscUNBQXdDO0FBR3pCLEtBQUssVUFBVSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQTJCO0lBQzNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE9BQU8sQ0FDTCw2REFDRyxLQUFLLENBQUMsVUFBVSxLQUFLLE1BQU0sSUFBSSxDQUM5Qix1QkFBQyxTQUFJLElBQ0gsU0FBUyxFQUFDLCtCQUErQixpQkFDN0IsZ0JBQWdCLFlBRTNCLEtBQUssQ0FBQyxjQUFjLEdBQ2hCLENBQ1IsRUFDRCx1QkFBQyxTQUFJLElBQ0gsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUFDLGtCQUFrQixFQUFFO29CQUNqQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLE1BQU07aUJBQ3RELENBQUMsaUJBQ1UsT0FBTyxZQUVsQixLQUFLLENBQUMsZ0JBQWdCLEdBQ2xCLElBQ04sQ0FDSixDQUFBO0FBQ0gsQ0FBQyJ9