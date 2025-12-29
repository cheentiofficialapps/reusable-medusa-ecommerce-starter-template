"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = __importDefault(require("react"));
const cart_1 = require("@lib/data/cart");
const money_1 = require("@lib/util/money");
const trash_1 = __importDefault(require("@modules/common/icons/trash"));
const error_message_1 = __importDefault(require("../error-message"));
const submit_button_1 = require("../submit-button");
const DiscountCode = ({ cart }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const [errorMessage, setErrorMessage] = react_1.default.useState("");
    const { promotions = [] } = cart;
    const removePromotionCode = async (code) => {
        const validPromotions = promotions.filter((promotion) => promotion.code !== code);
        await (0, cart_1.applyPromotions)(validPromotions.filter((p) => p.code !== undefined).map((p) => p.code));
    };
    const addPromotionCode = async (formData) => {
        setErrorMessage("");
        const code = formData.get("code");
        if (!code) {
            return;
        }
        const input = document.getElementById("promotion-input");
        const codes = promotions
            .filter((p) => p.code !== undefined)
            .map((p) => p.code);
        codes.push(code.toString());
        try {
            await (0, cart_1.applyPromotions)(codes);
        }
        catch (e) {
            setErrorMessage(e.message);
        }
        if (input) {
            input.value = "";
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full bg-white flex flex-col", children: (0, jsx_runtime_1.jsxs)("div", { className: "txt-medium", children: [(0, jsx_runtime_1.jsxs)("form", { action: (a) => addPromotionCode(a), className: "w-full mb-5", children: [(0, jsx_runtime_1.jsx)(ui_1.Label, { className: "flex gap-x-1 my-2 items-center", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setIsOpen(!isOpen), type: "button", className: "txt-medium text-ui-fg-interactive hover:text-ui-fg-interactive-hover", "data-testid": "add-discount-button", children: "Add Promotion Code(s)" }) }), isOpen && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full gap-x-2", children: [(0, jsx_runtime_1.jsx)(ui_1.Input, { className: "size-full", id: "promotion-input", name: "code", type: "text", autoFocus: false, "data-testid": "discount-input" }), (0, jsx_runtime_1.jsx)(submit_button_1.SubmitButton, { variant: "secondary", "data-testid": "discount-apply-button", children: "Apply" })] }), (0, jsx_runtime_1.jsx)(error_message_1.default, { error: errorMessage, "data-testid": "discount-error-message" })] }))] }), promotions.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "w-full flex items-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full", children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { className: "txt-medium mb-2", children: "Promotion(s) applied:" }), promotions.map((promotion) => {
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between w-full max-w-full mb-2", "data-testid": "discount-row", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1", children: (0, jsx_runtime_1.jsxs)("span", { className: "truncate", "data-testid": "discount-code", children: [(0, jsx_runtime_1.jsx)(ui_1.Badge, { color: promotion.is_automatic ? "green" : "grey", size: "small", children: promotion.code }), " ", "(", promotion.application_method?.value !== undefined &&
                                                        promotion.application_method.currency_code !==
                                                            undefined && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: promotion.application_method.type ===
                                                            "percentage"
                                                            ? `${promotion.application_method.value}%`
                                                            : (0, money_1.convertToLocale)({
                                                                amount: +promotion.application_method.value,
                                                                currency_code: promotion.application_method
                                                                    .currency_code,
                                                            }) })), ")"] }) }), !promotion.is_automatic && ((0, jsx_runtime_1.jsxs)("button", { className: "flex items-center", onClick: () => {
                                                if (!promotion.code) {
                                                    return;
                                                }
                                                removePromotionCode(promotion.code);
                                            }, "data-testid": "remove-discount-button", children: [(0, jsx_runtime_1.jsx)(trash_1.default, { size: 14 }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Remove discount code from order" })] }))] }, promotion.id));
                            })] }) }))] }) }));
};
exports.default = DiscountCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvZGlzY291bnQtY29kZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVoscUNBQWlFO0FBQ2pFLGtEQUF5QjtBQUV6Qix5Q0FBZ0Q7QUFDaEQsMkNBQWlEO0FBRWpELHdFQUErQztBQUMvQyxxRUFBMkM7QUFDM0Msb0RBQStDO0FBUS9DLE1BQU0sWUFBWSxHQUFnQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUM3RCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFELE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ2hDLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFO1FBQ2pELE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQ3ZDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksQ0FDdkMsQ0FBQTtRQUVELE1BQU0sSUFBQSxzQkFBZSxFQUNuQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUN4RSxDQUFBO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsTUFBTSxnQkFBZ0IsR0FB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