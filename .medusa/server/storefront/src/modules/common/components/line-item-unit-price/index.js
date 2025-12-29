"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const money_1 = require("@lib/util/money");
const ui_1 = require("@medusajs/ui");
const LineItemUnitPrice = ({ item, style = "default", currencyCode, }) => {
    const { total, original_total } = item;
    const hasReducedPrice = total < original_total;
    const percentage_diff = Math.round(((original_total - total) / original_total) * 100);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col text-ui-fg-muted justify-center h-full", children: [hasReducedPrice && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [style === "default" && ((0, jsx_runtime_1.jsx)("span", { className: "text-ui-fg-muted", children: "Original: " })), (0, jsx_runtime_1.jsx)("span", { className: "line-through", "data-testid": "product-unit-original-price", children: (0, money_1.convertToLocale)({
                                    amount: original_total / item.quantity,
                                    currency_code: currencyCode,
                                }) })] }), style === "default" && ((0, jsx_runtime_1.jsxs)("span", { className: "text-ui-fg-interactive", children: ["-", percentage_diff, "%"] }))] })), (0, jsx_runtime_1.jsx)("span", { className: (0, ui_1.clx)("text-base-regular", {
                    "text-ui-fg-interactive": hasReducedPrice,
                }), "data-testid": "product-unit-price", children: (0, money_1.convertToLocale)({
                    amount: total / item.quantity,
                    currency_code: currencyCode,
                }) })] }));
};
exports.default = LineItemUnitPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2xpbmUtaXRlbS11bml0LXByaWNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBaUQ7QUFFakQscUNBQWtDO0FBUWxDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxFQUN6QixJQUFJLEVBQ0osS0FBSyxHQUFHLFNBQVMsRUFDakIsWUFBWSxHQUNXLEVBQUUsRUFBRTtJQUMzQixNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQTtJQUN0QyxNQUFNLGVBQWUsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFBO0lBRTlDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ2hDLENBQUMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUNsRCxDQUFBO0lBRUQsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxzREFBc0QsYUFDbEUsZUFBZSxJQUFJLENBQ2xCLDZEQUNFLDBDQUNHLEtBQUssS0FBSyxTQUFTLElBQUksQ0FDdEIsaUNBQU0sU0FBUyxFQUFDLGtCQUFrQiwyQkFBa0IsQ0FDckQsRUFDRCxpQ0FDRSxTQUFTLEVBQUMsY0FBYyxpQkFDWiw2QkFBNkIsWUFFeEMsSUFBQSx1QkFBZSxFQUFDO29DQUNmLE1BQU0sRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVE7b0NBQ3RDLGFBQWEsRUFBRSxZQUFZO2lDQUM1QixDQUFDLEdBQ0csSUFDTCxFQUNILEtBQUssS0FBSyxTQUFTLElBQUksQ0FDdEIsa0NBQU0sU0FBUyxFQUFDLHdCQUF3QixrQkFBRyxlQUFlLFNBQVMsQ0FDcEUsSUFDQSxDQUNKLEVBQ0QsaUNBQ0UsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUFDLG1CQUFtQixFQUFFO29CQUNsQyx3QkFBd0IsRUFBRSxlQUFlO2lCQUMxQyxDQUFDLGlCQUNVLG9CQUFvQixZQUUvQixJQUFBLHVCQUFlLEVBQUM7b0JBQ2YsTUFBTSxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFDN0IsYUFBYSxFQUFFLFlBQVk7aUJBQzVCLENBQUMsR0FDRyxJQUNILENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=