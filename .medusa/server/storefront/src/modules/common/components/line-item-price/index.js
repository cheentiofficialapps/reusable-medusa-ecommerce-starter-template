"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const get_percentage_diff_1 = require("@lib/util/get-percentage-diff");
const money_1 = require("@lib/util/money");
const ui_1 = require("@medusajs/ui");
const LineItemPrice = ({ item, style = "default", currencyCode, }) => {
    const { total, original_total } = item;
    const originalPrice = original_total;
    const currentPrice = total;
    const hasReducedPrice = currentPrice < originalPrice;
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-x-2 text-ui-fg-subtle items-end", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-left", children: [hasReducedPrice && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [style === "default" && ((0, jsx_runtime_1.jsx)("span", { className: "text-ui-fg-subtle", children: "Original: " })), (0, jsx_runtime_1.jsx)("span", { className: "line-through text-ui-fg-muted", "data-testid": "product-original-price", children: (0, money_1.convertToLocale)({
                                        amount: originalPrice,
                                        currency_code: currencyCode,
                                    }) })] }), style === "default" && ((0, jsx_runtime_1.jsxs)("span", { className: "text-ui-fg-interactive", children: ["-", (0, get_percentage_diff_1.getPercentageDiff)(originalPrice, currentPrice || 0), "%"] }))] })), (0, jsx_runtime_1.jsx)("span", { className: (0, ui_1.clx)("text-base-regular", {
                        "text-ui-fg-interactive": hasReducedPrice,
                    }), "data-testid": "product-price", children: (0, money_1.convertToLocale)({
                        amount: currentPrice,
                        currency_code: currencyCode,
                    }) })] }) }));
};
exports.default = LineItemPrice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2xpbmUtaXRlbS1wcmljZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUVBQWlFO0FBQ2pFLDJDQUFpRDtBQUVqRCxxQ0FBa0M7QUFRbEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUNyQixJQUFJLEVBQ0osS0FBSyxHQUFHLFNBQVMsRUFDakIsWUFBWSxHQUNPLEVBQUUsRUFBRTtJQUN2QixNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQTtJQUN0QyxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUE7SUFDcEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFBO0lBQzFCLE1BQU0sZUFBZSxHQUFHLFlBQVksR0FBRyxhQUFhLENBQUE7SUFFcEQsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyxtREFBbUQsWUFDaEUsaUNBQUssU0FBUyxFQUFDLFdBQVcsYUFDdkIsZUFBZSxJQUFJLENBQ2xCLDZEQUNFLDBDQUNHLEtBQUssS0FBSyxTQUFTLElBQUksQ0FDdEIsaUNBQU0sU0FBUyxFQUFDLG1CQUFtQiwyQkFBa0IsQ0FDdEQsRUFDRCxpQ0FDRSxTQUFTLEVBQUMsK0JBQStCLGlCQUM3Qix3QkFBd0IsWUFFbkMsSUFBQSx1QkFBZSxFQUFDO3dDQUNmLE1BQU0sRUFBRSxhQUFhO3dDQUNyQixhQUFhLEVBQUUsWUFBWTtxQ0FDNUIsQ0FBQyxHQUNHLElBQ0wsRUFDSCxLQUFLLEtBQUssU0FBUyxJQUFJLENBQ3RCLGtDQUFNLFNBQVMsRUFBQyx3QkFBd0Isa0JBQ3BDLElBQUEsdUNBQWlCLEVBQUMsYUFBYSxFQUFFLFlBQVksSUFBSSxDQUFDLENBQUMsU0FDaEQsQ0FDUixJQUNBLENBQ0osRUFDRCxpQ0FDRSxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQUMsbUJBQW1CLEVBQUU7d0JBQ2xDLHdCQUF3QixFQUFFLGVBQWU7cUJBQzFDLENBQUMsaUJBQ1UsZUFBZSxZQUUxQixJQUFBLHVCQUFlLEVBQUM7d0JBQ2YsTUFBTSxFQUFFLFlBQVk7d0JBQ3BCLGFBQWEsRUFBRSxZQUFZO3FCQUM1QixDQUFDLEdBQ0csSUFDSCxHQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQSJ9