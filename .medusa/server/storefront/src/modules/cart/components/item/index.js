"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const cart_1 = require("@lib/data/cart");
const cart_item_select_1 = __importDefault(require("@modules/cart/components/cart-item-select"));
const error_message_1 = __importDefault(require("@modules/checkout/components/error-message"));
const delete_button_1 = __importDefault(require("@modules/common/components/delete-button"));
const line_item_options_1 = __importDefault(require("@modules/common/components/line-item-options"));
const line_item_price_1 = __importDefault(require("@modules/common/components/line-item-price"));
const line_item_unit_price_1 = __importDefault(require("@modules/common/components/line-item-unit-price"));
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const spinner_1 = __importDefault(require("@modules/common/icons/spinner"));
const thumbnail_1 = __importDefault(require("@modules/products/components/thumbnail"));
const react_1 = require("react");
const Item = ({ item, type = "full", currencyCode }) => {
    const [updating, setUpdating] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const changeQuantity = async (quantity) => {
        setError(null);
        setUpdating(true);
        await (0, cart_1.updateLineItem)({
            lineId: item.id,
            quantity,
        })
            .catch((err) => {
            setError(err.message);
        })
            .finally(() => {
            setUpdating(false);
        });
    };
    // TODO: Update this to grab the actual max inventory
    const maxQtyFromInventory = 10;
    const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory;
    return ((0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { className: "w-full", "data-testid": "product-row", children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { className: "!pl-0 p-4 w-24", children: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: `/products/${item.product_handle}`, className: (0, ui_1.clx)("flex", {
                        "w-16": type === "preview",
                        "small:w-24 w-12": type === "full",
                    }), children: (0, jsx_runtime_1.jsx)(thumbnail_1.default, { thumbnail: item.thumbnail, images: item.variant?.product?.images, size: "square" }) }) }), (0, jsx_runtime_1.jsxs)(ui_1.Table.Cell, { className: "text-left", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "txt-medium-plus text-ui-fg-base", "data-testid": "product-title", children: item.product_title }), (0, jsx_runtime_1.jsx)(line_item_options_1.default, { variant: item.variant, "data-testid": "product-variant" })] }), type === "full" && ((0, jsx_runtime_1.jsxs)(ui_1.Table.Cell, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 items-center w-28", children: [(0, jsx_runtime_1.jsx)(delete_button_1.default, { id: item.id, "data-testid": "product-delete-button" }), (0, jsx_runtime_1.jsxs)(cart_item_select_1.default, { value: item.quantity, onChange: (value) => changeQuantity(parseInt(value.target.value)), className: "w-14 h-10 p-4", "data-testid": "product-select-button", children: [Array.from({
                                        length: Math.min(maxQuantity, 10),
                                    }, (_, i) => ((0, jsx_runtime_1.jsx)("option", { value: i + 1, children: i + 1 }, i))), (0, jsx_runtime_1.jsx)("option", { value: 1, children: "1" }, 1)] }), updating && (0, jsx_runtime_1.jsx)(spinner_1.default, {})] }), (0, jsx_runtime_1.jsx)(error_message_1.default, { error: error, "data-testid": "product-error-message" })] })), type === "full" && ((0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { className: "hidden small:table-cell", children: (0, jsx_runtime_1.jsx)(line_item_unit_price_1.default, { item: item, style: "tight", currencyCode: currencyCode }) })), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { className: "!pr-0", children: (0, jsx_runtime_1.jsxs)("span", { className: (0, ui_1.clx)("!pr-0", {
                        "flex flex-col items-end h-full justify-center": type === "preview",
                    }), children: [type === "preview" && ((0, jsx_runtime_1.jsxs)("span", { className: "flex gap-x-1 ", children: [(0, jsx_runtime_1.jsxs)(ui_1.Text, { className: "text-ui-fg-muted", children: [item.quantity, "x "] }), (0, jsx_runtime_1.jsx)(line_item_unit_price_1.default, { item: item, style: "tight", currencyCode: currencyCode })] })), (0, jsx_runtime_1.jsx)(line_item_price_1.default, { item: item, style: "tight", currencyCode: currencyCode })] }) })] }));
};
exports.default = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhcnQvY29tcG9uZW50cy9pdGVtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixxQ0FBK0M7QUFDL0MseUNBQStDO0FBRS9DLGlHQUFzRTtBQUN0RSwrRkFBcUU7QUFDckUsNkZBQW1FO0FBQ25FLHFHQUEwRTtBQUMxRSxpR0FBc0U7QUFDdEUsMkdBQStFO0FBQy9FLDZHQUFrRjtBQUNsRiw0RUFBbUQ7QUFDbkQsdUZBQThEO0FBQzlELGlDQUFnQztBQVFoQyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxNQUFNLEVBQUUsWUFBWSxFQUFhLEVBQUUsRUFBRTtJQUNoRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUMvQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBZ0IsSUFBSSxDQUFDLENBQUE7SUFFdkQsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtRQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFakIsTUFBTSxJQUFBLHFCQUFjLEVBQUM7WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2YsUUFBUTtTQUNULENBQUM7YUFDQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNaLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNw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