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
const ItemsTemplate = ({ cart }) => {
    const items = cart?.items;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "pb-3 flex items-center", children: (0, jsx_runtime_1.jsx)(ui_1.Heading, { className: "text-[2rem] leading-[2.75rem]", children: "Cart" }) }), (0, jsx_runtime_1.jsxs)(ui_1.Table, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Header, { className: "border-t-0", children: (0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { className: "text-ui-fg-subtle txt-medium-plus", children: [(0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { className: "!pl-0", children: "Item" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, {}), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Quantity" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { className: "hidden small:table-cell", children: "Price" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { className: "!pr-0 text-right", children: "Total" })] }) }), (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { children: items
                            ? items
                                .sort((a, b) => {
                                return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1;
                            })
                                .map((item) => {
                                return ((0, jsx_runtime_1.jsx)(item_1.default, { item: item, currencyCode: cart?.currency_code }, item.id));
                            })
                            : (0, repeat_1.default)(5).map((i) => {
                                return (0, jsx_runtime_1.jsx)(skeleton_line_item_1.default, {}, i);
                            }) })] })] }));
};
exports.default = ItemsTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhcnQvdGVtcGxhdGVzL2l0ZW1zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBcUM7QUFFckMscUNBQTZDO0FBRTdDLHlFQUFnRDtBQUNoRCwwR0FBK0U7QUFNL0UsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBc0IsRUFBRSxFQUFFO0lBQ3JELE1BQU0sS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUE7SUFDekIsT0FBTyxDQUNMLDRDQUNFLGdDQUFLLFNBQVMsRUFBQyx3QkFBd0IsWUFDckMsdUJBQUMsWUFBTyxJQUFDLFNBQVMsRUFBQywrQkFBK0IscUJBQWUsR0FDN0QsRUFDTix3QkFBQyxVQUFLLGVBQ0osdUJBQUMsVUFBSyxDQUFDLE1BQU0sSUFBQyxTQUFTLEVBQUMsWUFBWSxZQUNsQyx3QkFBQyxVQUFLLENBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxtQ0FBbUMsYUFDdEQsdUJBQUMsVUFBSyxDQUFDLFVBQVUsSUFBQyxTQUFTLEVBQUMsT0FBTyxxQkFBd0IsRUFDM0QsdUJBQUMsVUFBSyxDQUFDLFVBQVUsS0FBb0IsRUFDckMsdUJBQUMsVUFBSyxDQUFDLFVBQVUsMkJBQTRCLEVBQzdDLHVCQUFDLFVBQUssQ0FBQyxVQUFVLElBQUMsU0FBUyxFQUFDLHlCQUF5QixzQkFFbEMsRUFDbkIsdUJBQUMsVUFBSyxDQUFDLFVBQVUsSUFBQyxTQUFTLEVBQUMsa0JBQWtCLHNCQUUzQixJQUNULEdBQ0MsRUFDZix1QkFBQyxVQUFLLENBQUMsSUFBSSxjQUNSLEtBQUs7NEJBQ0osQ0FBQyxDQUFDLEtBQUs7aUNBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDN0QsQ0FBQyxDQUFDO2lDQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUNaLE9BQU8sQ0FDTCx1QkFBQyxjQUFJLElBRUgsSUFBSSxFQUFFLElBQUksRUFDVixZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsSUFGNUIsSUFBSSxDQUFDLEVBQUUsQ0FHWixDQUNILENBQUE7NEJBQ0gsQ0FBQyxDQUFDOzRCQUNOLENBQUMsQ0FBQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2xCLE9BQU8sdUJBQUMsNEJBQWdCLE1BQU0sQ0FBQyxDQUFJLENBQUE7NEJBQ3JDLENBQUMsQ0FBQyxHQUNLLElBQ1AsSUFDSixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEifQ==