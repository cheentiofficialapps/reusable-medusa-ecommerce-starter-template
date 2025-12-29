"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const repeat_1 = __importDefault(require("@lib/util/repeat"));
const ui_1 = require("@medusajs/ui");
const divider_1 = __importDefault(require("@modules/common/components/divider"));
const item_1 = __importDefault(require("@modules/order/components/item"));
const skeleton_line_item_1 = __importDefault(require("@modules/skeletons/components/skeleton-line-item"));
const Items = ({ order }) => {
    const items = order.items;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)(divider_1.default, { className: "!mb-0" }), (0, jsx_runtime_1.jsx)(ui_1.Table, { children: (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { "data-testid": "products-table", children: items?.length
                        ? items
                            .sort((a, b) => {
                            return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1;
                        })
                            .map((item) => {
                            return ((0, jsx_runtime_1.jsx)(item_1.default, { item: item, currencyCode: order.currency_code }, item.id));
                        })
                        : (0, repeat_1.default)(5).map((i) => {
                            return (0, jsx_runtime_1.jsx)(skeleton_line_item_1.default, {}, i);
                        }) }) })] }));
};
exports.default = Items;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL29yZGVyL2NvbXBvbmVudHMvaXRlbXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFxQztBQUVyQyxxQ0FBb0M7QUFFcEMsaUZBQXdEO0FBQ3hELDBFQUFpRDtBQUNqRCwwR0FBK0U7QUFNL0UsTUFBTSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUU7SUFDdEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUV6QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLGVBQWUsYUFDNUIsdUJBQUMsaUJBQU8sSUFBQyxTQUFTLEVBQUMsT0FBTyxHQUFHLEVBQzdCLHVCQUFDLFVBQUssY0FDSix1QkFBQyxVQUFLLENBQUMsSUFBSSxtQkFBYSxnQkFBZ0IsWUFDckMsS0FBSyxFQUFFLE1BQU07d0JBQ1osQ0FBQyxDQUFDLEtBQUs7NkJBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDN0QsQ0FBQyxDQUFDOzZCQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUNaLE9BQU8sQ0FDTCx1QkFBQyxjQUFJLElBRUgsSUFBSSxFQUFFLElBQUksRUFDVixZQUFZLEVBQUUsS0FBSyxDQUFDLGFBQWEsSUFGNUIsSUFBSSxDQUFDLEVBQUUsQ0FHWixDQUNILENBQUE7d0JBQ0gsQ0FBQyxDQUFDO3dCQUNOLENBQUMsQ0FBQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7NEJBQ2xCLE9BQU8sdUJBQUMsNEJBQWdCLE1BQU0sQ0FBQyxDQUFJLENBQUE7d0JBQ3JDLENBQUMsQ0FBQyxHQUNLLEdBQ1AsSUFDSixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxLQUFLLENBQUEifQ==