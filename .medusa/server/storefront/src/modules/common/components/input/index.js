"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_1 = __importStar(require("react"));
const eye_1 = __importDefault(require("@modules/common/icons/eye"));
const eye_off_1 = __importDefault(require("@modules/common/icons/eye-off"));
const Input = react_1.default.forwardRef(({ type, name, label, touched, required, topLabel, ...props }, ref) => {
    const inputRef = react_1.default.useRef(null);
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [inputType, setInputType] = (0, react_1.useState)(type);
    (0, react_1.useEffect)(() => {
        if (type === "password" && showPassword) {
            setInputType("text");
        }
        if (type === "password" && !showPassword) {
            setInputType("password");
        }
    }, [type, showPassword]);
    (0, react_1.useImperativeHandle)(ref, () => inputRef.current);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full", children: [topLabel && ((0, jsx_runtime_1.jsx)(ui_1.Label, { className: "mb-2 txt-compact-medium-plus", children: topLabel })), (0, jsx_runtime_1.jsxs)("div", { className: "flex relative z-0 w-full txt-compact-medium", children: [(0, jsx_runtime_1.jsx)("input", { type: inputType, name: name, placeholder: " ", required: required, className: "pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover", ...props, ref: inputRef }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: name, onClick: () => inputRef.current?.focus(), className: "flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-ui-fg-subtle", children: [label, required && (0, jsx_runtime_1.jsx)("span", { className: "text-rose-500", children: "*" })] }), type === "password" && ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-3", children: showPassword ? (0, jsx_runtime_1.jsx)(eye_1.default, {}) : (0, jsx_runtime_1.jsx)(eye_off_1.default, {}) }))] })] }));
});
Input.displayName = "Input";
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFDcEMsK0NBQXVFO0FBRXZFLG9FQUEyQztBQUMzQyw0RUFBa0Q7QUFhbEQsTUFBTSxLQUFLLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDNUIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEUsTUFBTSxRQUFRLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBbUIsSUFBSSxDQUFDLENBQUE7SUFDckQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFFaEQsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksSUFBSSxLQUFLLFVBQVUsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN4QyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsQ0FBQztRQUVELElBQUksSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMxQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFFeEIsSUFBQSwyQkFBbUIsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQVEsQ0FBQyxDQUFBO0lBRWpELE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsc0JBQXNCLGFBQ2xDLFFBQVEsSUFBSSxDQUNYLHVCQUFDLFVBQUssSUFBQyxTQUFTLEVBQUMsOEJBQThCLFlBQUUsUUFBUSxHQUFTLENBQ25FLEVBQ0QsaUNBQUssU0FBUyxFQUFDLDZDQUE2QyxhQUMxRCxrQ0FDRSxJQUFJLEVBQUUsU0FBUyxFQUNmLElBQUksRUFBRSxJQUFJLEVBQ1YsV0FBVyxFQUFDLEdBQUcsRUFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixTQUFTLEVBQUMsc05BQXNOLEtBQzVOLEtBQUssRUFDVCxHQUFHLEVBQUUsUUFBUSxHQUNiLEVBQ0YsbUNBQ0UsT0FBTyxFQUFFLElBQUksRUFDYixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDeEMsU0FBUyxFQUFDLHVIQUF1SCxhQUVoSSxLQUFLLEVBQ0wsUUFBUSxJQUFJLGlDQUFNLFNBQVMsRUFBQyxlQUFlLGtCQUFTLElBQy9DLEVBQ1AsSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUN0QixtQ0FDRSxJQUFJLEVBQUMsUUFBUSxFQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFDN0MsU0FBUyxFQUFDLGlJQUFpSSxZQUUxSSxZQUFZLENBQUMsQ0FBQyxDQUFDLHVCQUFDLGFBQUcsS0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBQyxpQkFBTSxLQUFHLEdBQzdCLENBQ1YsSUFDRyxJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FDRixDQUFBO0FBRUQsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7QUFFM0Isa0JBQWUsS0FBSyxDQUFBIn0=