"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const chevron_down_1 = __importDefault(require("@modules/common/icons/chevron-down"));
const CartItemSelect = (0, react_1.forwardRef)(({ placeholder = "Select...", className, children, ...props }, ref) => {
    const innerRef = (0, react_1.useRef)(null);
    const [isPlaceholder, setIsPlaceholder] = (0, react_1.useState)(false);
    (0, react_1.useImperativeHandle)(ref, () => innerRef.current);
    (0, react_1.useEffect)(() => {
        if (innerRef.current && innerRef.current.value === "") {
            setIsPlaceholder(true);
        }
        else {
            setIsPlaceholder(false);
        }
    }, [innerRef.current?.value]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(ui_1.IconBadge, { onFocus: () => innerRef.current?.focus(), onBlur: () => innerRef.current?.blur(), className: (0, ui_1.clx)("relative flex items-center txt-compact-small border text-ui-fg-base group", className, {
                "text-ui-fg-subtle": isPlaceholder,
            }), children: [(0, jsx_runtime_1.jsxs)("select", { ref: innerRef, ...props, className: "appearance-none bg-transparent border-none px-4 transition-colors duration-150 focus:border-gray-700 outline-none w-16 h-16 items-center justify-center", children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, value: "", children: placeholder }), children] }), (0, jsx_runtime_1.jsx)("span", { className: "absolute flex pointer-events-none justify-end w-8 group-hover:animate-pulse", children: (0, jsx_runtime_1.jsx)(chevron_down_1.default, {}) })] }) }));
});
CartItemSelect.displayName = "CartItemSelect";
exports.default = CartItemSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NhcnQvY29tcG9uZW50cy9jYXJ0LWl0ZW0tc2VsZWN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixxQ0FBNkM7QUFDN0MsaUNBT2M7QUFFZCxzRkFBNEQ7QUFRNUQsTUFBTSxjQUFjLEdBQUcsSUFBQSxrQkFBVSxFQUMvQixDQUFDLEVBQUUsV0FBVyxHQUFHLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEUsTUFBTSxRQUFRLEdBQUcsSUFBQSxjQUFNLEVBQW9CLElBQUksQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFekQsSUFBQSwyQkFBbUIsRUFDakIsR0FBRyxFQUNILEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3ZCLENBQUE7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3RELGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLENBQUM7YUFBTSxDQUFDO1lBQ04sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUU3QixPQUFPLENBQ0wsMENBQ0Usd0JBQUMsY0FBUyxJQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUN4QyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFDdEMsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLDJFQUEyRSxFQUMzRSxTQUFTLEVBQ1Q7Z0JBQ0UsbUJBQW1CLEVBQUUsYUFBYTthQUNuQyxDQUNGLGFBRUQsb0NBQ0UsR0FBRyxFQUFFLFFBQVEsS0FDVCxLQUFLLEVBQ1QsU0FBUyxFQUFDLHlKQUF5SixhQUVuSyxtQ0FBUSxRQUFRLFFBQUMsS0FBSyxFQUFDLEVBQUUsWUFDdEIsV0FBVyxHQUNMLEVBQ1IsUUFBUSxJQUNGLEVBQ1QsaUNBQU0sU0FBUyxFQUFDLDZFQUE2RSxZQUMzRix1QkFBQyxzQkFBVyxLQUFHLEdBQ1YsSUFDRyxHQUNSLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FDRixDQUFBO0FBRUQsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQTtBQUU3QyxrQkFBZSxjQUFjLENBQUEifQ==