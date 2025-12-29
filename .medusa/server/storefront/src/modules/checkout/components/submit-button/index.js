"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = SubmitButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const react_dom_1 = require("react-dom");
function SubmitButton({ children, variant = "primary", className, "data-testid": dataTestId, }) {
    const { pending } = (0, react_dom_1.useFormStatus)();
    return ((0, jsx_runtime_1.jsx)(ui_1.Button, { size: "large", className: className, type: "submit", isLoading: pending, variant: variant || "primary", "data-testid": dataTestId, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvc3VibWl0LWJ1dHRvbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7QUFNWixvQ0F5QkM7O0FBN0JELHFDQUFxQztBQUVyQyx5Q0FBeUM7QUFFekMsU0FBZ0IsWUFBWSxDQUFDLEVBQzNCLFFBQVEsRUFDUixPQUFPLEdBQUcsU0FBUyxFQUNuQixTQUFTLEVBQ1QsYUFBYSxFQUFFLFVBQVUsR0FNMUI7SUFDQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBQSx5QkFBYSxHQUFFLENBQUE7SUFFbkMsT0FBTyxDQUNMLHVCQUFDLFdBQU0sSUFDTCxJQUFJLEVBQUMsT0FBTyxFQUNaLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFFLE9BQU8sRUFDbEIsT0FBTyxFQUFFLE9BQU8sSUFBSSxTQUFTLGlCQUNoQixVQUFVLFlBRXRCLFFBQVEsR0FDRixDQUNWLENBQUE7QUFDSCxDQUFDIn0=