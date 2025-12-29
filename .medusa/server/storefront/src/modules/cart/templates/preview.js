"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const repeat_1 = __importDefault(require("@lib/util/repeat"));
const ui_1 = require("@medusajs/ui");
const item_1 = __importDefault(require("@modules/cart/components/item"));
const skeleton_line_item_1 = __importDefault(require("@modules/skeletons/components/skeleton-line-item"));
const ItemsPreviewTemplate = ({ cart }) => {
    const items = cart.items;
    const hasOverflow = items && items.length > 4;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)({
            "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]": hasOverflow,
        }), children: (0, jsx_runtime_1.jsx)(ui_1.Table, { children: (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { "data-testid": "items-table", children: items
                    ? items
                        .sort((a, b) => {
                        return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1;
                    })
                        .map((item) => {
                        return ((0, jsx_runtime_1.jsx)(item_1.default, { item: item, type: "preview", currencyCode: cart.currency_code }, item.id));
                    })
                    : (0, repeat_1.default)(5).map((i) => {
                        return (0, jsx_runtime_1.jsx)(skeleton_line_item_1.default, {}, i);
                    }) }) }) }));
};
exports.default = ItemsPreviewTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL21vZHVsZXMvY2FydC90ZW1wbGF0ZXMvcHJldmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVosOERBQXFDO0FBRXJDLHFDQUF5QztBQUV6Qyx5RUFBZ0Q7QUFDaEQsMEdBQStFO0FBTS9FLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBc0IsRUFBRSxFQUFFO0lBQzVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDeEIsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBRTdDLE9BQU8sQ0FDTCxnQ0FDRSxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQUM7WUFDYix5RUFBeUUsRUFDdkUsV0FBVztTQUNkLENBQUMsWUFFRix1QkFBQyxVQUFLLGNBQ0osdUJBQUMsVUFBSyxDQUFDLElBQUksbUJBQWEsYUFBYSxZQUNsQyxLQUFLO29CQUNKLENBQUMsQ0FBQyxLQUFLO3lCQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDYixPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzdELENBQUMsQ0FBQzt5QkFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDWixPQUFPLENBQ0wsdUJBQUMsY0FBSSxJQUVILElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFDLFNBQVMsRUFDZCxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFIM0IsSUFBSSxDQUFDLEVBQUUsQ0FJWixDQUNILENBQUE7b0JBQ0gsQ0FBQyxDQUFDO29CQUNOLENBQUMsQ0FBQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ2xCLE9BQU8sdUJBQUMsNEJBQWdCLE1BQU0sQ0FBQyxDQUFJLENBQUE7b0JBQ3JDLENBQUMsQ0FBQyxHQUNLLEdBQ1AsR0FDSixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQSJ9