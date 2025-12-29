"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const NativeSelect = (0, react_1.forwardRef)(({ placeholder = "Select...", defaultValue, className, children, ...props }, ref) => {
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
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { onFocus: () => innerRef.current?.focus(), onBlur: () => innerRef.current?.blur(), className: (0, ui_1.clx)("relative flex items-center text-base-regular border border-ui-border-base bg-ui-bg-subtle rounded-md hover:bg-ui-bg-field-hover", className, {
                "text-ui-fg-muted": isPlaceholder,
            }), children: [(0, jsx_runtime_1.jsxs)("select", { ref: innerRef, defaultValue: defaultValue, ...props, className: "appearance-none flex-1 bg-transparent border-none px-4 py-2.5 transition-colors duration-150 outline-none ", children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, value: "", children: placeholder }), children] }), (0, jsx_runtime_1.jsx)("span", { className: "absolute right-4 inset-y-0 flex items-center pointer-events-none ", children: (0, jsx_runtime_1.jsx)(icons_1.ChevronUpDown, {}) })] }) }));
});
NativeSelect.displayName = "NativeSelect";
exports.default = NativeSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL25hdGl2ZS1zZWxlY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUErQztBQUMvQyxxQ0FBa0M7QUFDbEMsaUNBT2M7QUFRZCxNQUFNLFlBQVksR0FBRyxJQUFBLGtCQUFVLEVBQzdCLENBQ0UsRUFBRSxXQUFXLEdBQUcsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQzFFLEdBQUcsRUFDSCxFQUFFO0lBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBQSxjQUFNLEVBQW9CLElBQUksQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFekQsSUFBQSwyQkFBbUIsRUFDakIsR0FBRyxFQUNILEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3ZCLENBQUE7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3RELGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLENBQUM7YUFBTSxDQUFDO1lBQ04sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUU3QixPQUFPLENBQ0wsMENBQ0UsaUNBQ0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3hDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUN0QyxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1osaUlBQWlJLEVBQ2pJLFNBQVMsRUFDVDtnQkFDRSxrQkFBa0IsRUFBRSxhQUFhO2FBQ2xDLENBQ0YsYUFFRCxvQ0FDRSxHQUFHLEVBQUUsUUFBUSxFQUNiLFlBQVksRUFBRSxZQUFZLEtBQ3RCLEtBQUssRUFDVCxTQUFTLEVBQUMsNEdBQTRHLGFBRXRILG1DQUFRLFFBQVEsUUFBQyxLQUFLLEVBQUMsRUFBRSxZQUN0QixXQUFXLEdBQ0wsRUFDUixRQUFRLElBQ0YsRUFDVCxpQ0FBTSxTQUFTLEVBQUMsbUVBQW1FLFlBQ2pGLHVCQUFDLHFCQUFhLEtBQUcsR0FDWixJQUNILEdBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUNGLENBQUE7QUFFRCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQTtBQUV6QyxrQkFBZSxZQUFZLENBQUEifQ==