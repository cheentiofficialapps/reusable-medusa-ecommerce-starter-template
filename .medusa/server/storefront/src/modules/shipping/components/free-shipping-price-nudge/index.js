"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShippingPriceNudge;
const jsx_runtime_1 = require("react/jsx-runtime");
const money_1 = require("@lib/util/money");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const react_1 = require("react");
const computeTarget = (cart, price) => {
    const priceRule = (price.price_rules || []).find((pr) => pr.attribute === "item_total");
    const currentAmount = cart.item_total;
    const targetAmount = parseFloat(priceRule.value);
    if (priceRule.operator === "gt") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount > targetAmount,
            target_remaining: currentAmount > targetAmount ? 0 : targetAmount + 1 - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "gte") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount > targetAmount,
            target_remaining: currentAmount > targetAmount ? 0 : targetAmount - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "lt") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: targetAmount > currentAmount,
            target_remaining: targetAmount > currentAmount ? 0 : currentAmount + 1 - targetAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else if (priceRule.operator === "lte") {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: targetAmount > currentAmount,
            target_remaining: targetAmount > currentAmount ? 0 : currentAmount - targetAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
    else {
        return {
            current_amount: currentAmount,
            target_amount: targetAmount,
            target_reached: currentAmount === targetAmount,
            target_remaining: targetAmount > currentAmount ? 0 : targetAmount - currentAmount,
            remaining_percentage: (currentAmount / targetAmount) * 100,
        };
    }
};
function ShippingPriceNudge({ variant = "inline", cart, shippingOptions, }) {
    if (!cart || !shippingOptions?.length) {
        return;
    }
    // Check if any shipping options have a conditional price based on item_total
    const freeShippingPrice = shippingOptions
        .map((shippingOption) => {
        const calculatedPrice = shippingOption.calculated_price;
        if (!calculatedPrice) {
            return;
        }
        // Get all prices that are:
        // 1. Currency code is same as the cart's
        // 2. Have a rule that is set on item_total
        const validCurrencyPrices = shippingOption.prices.filter((price) => price.currency_code === cart.currency_code &&
            (price.price_rules || []).some((priceRule) => priceRule.attribute === "item_total"));
        return validCurrencyPrices.map((price) => {
            return {
                ...price,
                shipping_option_id: shippingOption.id,
                ...computeTarget(cart, price),
            };
        });
    })
        .flat(1)
        .filter(Boolean)
        // We focus here entirely on free shipping, but this can be edited to handle multiple layers
        // of reduced shipping prices.
        .find((price) => price?.amount === 0);
    if (!freeShippingPrice) {
        return;
    }
    if (variant === "popup") {
        return (0, jsx_runtime_1.jsx)(FreeShippingPopup, { cart: cart, price: freeShippingPrice });
    }
    else {
        return (0, jsx_runtime_1.jsx)(FreeShippingInline, { cart: cart, price: freeShippingPrice });
    }
}
function FreeShippingInline({ cart, price, }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-neutral-100 p-2 rounded-lg border", children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-1.5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-xs text-neutral-600", children: [(0, jsx_runtime_1.jsx)("div", { children: price.target_reached ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1.5", children: [(0, jsx_runtime_1.jsx)(icons_1.CheckCircleSolid, { className: "text-green-500 inline-block" }), " ", "Free Shipping unlocked!"] })) : (`Unlock Free Shipping`) }), (0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("visible", {
                                "opacity-0 invisible": price.target_reached,
                            }), children: ["Only", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-neutral-950", children: (0, money_1.convertToLocale)({
                                        amount: price.target_remaining,
                                        currency_code: cart.currency_code,
                                    }) }), " ", "away"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("bg-gradient-to-r from-zinc-400 to-zinc-500 h-1 rounded-full max-w-full duration-500 ease-in-out", {
                                "from-green-400 to-green-500": price.target_reached,
                            }), style: { width: `${price.remaining_percentage}%` } }), (0, jsx_runtime_1.jsx)("div", { className: "bg-neutral-300 h-1 rounded-full w-fit flex-grow" })] })] }) }));
}
function FreeShippingPopup({ cart, price, }) {
    const [isClosed, setIsClosed] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("fixed bottom-5 right-5 flex flex-col items-end gap-2 transition-all duration-500 ease-in-out z-10", {
            "opacity-0 invisible delay-1000": price.target_reached,
            "opacity-0 invisible": isClosed,
            "opacity-100 visible": !price.target_reached && !isClosed,
        }), children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "rounded-full bg-neutral-900 shadow-none outline-none border-none text-[15px] p-2", onClick: () => setIsClosed(true), children: (0, jsx_runtime_1.jsx)(icons_1.XMark, {}) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "w-[400px] bg-black text-white p-6 rounded-lg ", children: [(0, jsx_runtime_1.jsx)("div", { className: "pb-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-[15px] text-neutral-400", children: [(0, jsx_runtime_1.jsx)("div", { children: price.target_reached ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1.5", children: [(0, jsx_runtime_1.jsx)(icons_1.CheckCircleSolid, { className: "text-green-500 inline-block" }), " ", "Free Shipping unlocked!"] })) : (`Unlock Free Shipping`) }), (0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("visible", {
                                                "opacity-0 invisible": price.target_reached,
                                            }), children: ["Only", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-white", children: (0, money_1.convertToLocale)({
                                                        amount: price.target_remaining,
                                                        currency_code: cart.currency_code,
                                                    }) }), " ", "away"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("bg-gradient-to-r from-zinc-400 to-zinc-500 h-1.5 rounded-full max-w-full duration-500 ease-in-out", {
                                                "from-green-400 to-green-500": price.target_reached,
                                            }), style: { width: `${price.remaining_percentage}%` } }), (0, jsx_runtime_1.jsx)("div", { className: "bg-zinc-600 h-1.5 rounded-full w-fit flex-grow" })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-3", children: [(0, jsx_runtime_1.jsx)(localized_client_link_1.default, { className: "rounded-2xl bg-transparent shadow-none outline-none border-[1px] border-white text-[15px] py-2.5 px-4", href: "/cart", children: "View cart" }), (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { className: "flex-grow rounded-2xl bg-white text-neutral-950 shadow-none outline-none border-[1px] border-white text-[15px] py-2.5 px-4 text-center", href: "/store", children: "View products" })] })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3NoaXBwaW5nL2NvbXBvbmVudHMvZnJlZS1zaGlwcGluZy1wcmljZS1udWRnZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7QUEwRVoscUNBd0RDOztBQWhJRCwyQ0FBaUQ7QUFDakQsMkNBQXlEO0FBT3pELHFDQUEwQztBQUMxQyw2R0FBa0Y7QUFDbEYsaUNBQWdDO0FBR2hDLE1BQU0sYUFBYSxHQUFHLENBQ3BCLElBQXlCLEVBQ3pCLEtBQTJCLEVBQzNCLEVBQUU7SUFDRixNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM5QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxZQUFZLENBQ3JDLENBQUE7SUFFRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3JDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2hDLE9BQU87WUFDTCxjQUFjLEVBQUUsYUFBYTtZQUM3QixhQUFhLEVBQUUsWUFBWTtZQUMzQixjQUFjLEVBQUUsYUFBYSxHQUFHLFlBQVk7WUFDNUMsZ0JBQWdCLEVBQ2QsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLGFBQWE7WUFDckUsb0JBQW9CLEVBQUUsQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRztTQUMzRCxDQUFBO0lBQ0gsQ0FBQztTQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxLQUFL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