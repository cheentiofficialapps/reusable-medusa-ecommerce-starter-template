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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
const Accordion = ({ children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Root, { ...props, children: children }));
};
const Item = ({ title, subtitle, description, children, className, headingSize = "large", customTrigger = undefined, forceMountContent = undefined, triggerable, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(AccordionPrimitive.Item, { ...props, className: (0, ui_1.clx)("border-grey-20 group border-t last:mb-0 last:border-b", "py-3", className), children: [(0, jsx_runtime_1.jsx)(AccordionPrimitive.Header, { className: "px-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-4", children: (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-subtle text-sm", children: title }) }), (0, jsx_runtime_1.jsx)(AccordionPrimitive.Trigger, { children: customTrigger || (0, jsx_runtime_1.jsx)(MorphingTrigger, {}) })] }), subtitle && ((0, jsx_runtime_1.jsx)(ui_1.Text, { as: "span", size: "small", className: "mt-1", children: subtitle }))] }) }), (0, jsx_runtime_1.jsx)(AccordionPrimitive.Content, { forceMount: forceMountContent, className: (0, ui_1.clx)("radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-1"), children: (0, jsx_runtime_1.jsxs)("div", { className: "inter-base-regular group-radix-state-closed:animate-accordion-close", children: [description && (0, jsx_runtime_1.jsx)(ui_1.Text, { children: description }), (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: children })] }) })] }));
};
Accordion.Item = Item;
const MorphingTrigger = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-5 w-5", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-grey-50 rounded-circle group-radix-state-open:rotate-90 absolute inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] duration-300" }), (0, jsx_runtime_1.jsx)("span", { className: "bg-grey-50 rounded-circle group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] duration-300" })] }) }));
};
exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtdGFicy9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF3QztBQUN4Qyw4RUFBK0Q7QUF3Qi9ELE1BQU0sU0FBUyxHQUVYLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQzdCLE9BQU8sQ0FDTCx1QkFBQyxrQkFBa0IsQ0FBQyxJQUFJLE9BQUssS0FBSyxZQUFHLFFBQVEsR0FBMkIsQ0FDekUsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sSUFBSSxHQUFpQyxDQUFDLEVBQzFDLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxHQUFHLE9BQU8sRUFDckIsYUFBYSxHQUFHLFNBQVMsRUFDekIsaUJBQWlCLEdBQUcsU0FBUyxFQUM3QixXQUFXLEVBQ1gsR0FBRyxLQUFLLEVBQ1QsRUFBRSxFQUFFO0lBQ0gsT0FBTyxDQUNMLHdCQUFDLGtCQUFrQixDQUFDLElBQUksT0FDbEIsS0FBSyxFQUNULFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFDWix1REFBdUQsRUFDdkQsTUFBTSxFQUNOLFNBQVMsQ0FDVixhQUVELHVCQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBQyxTQUFTLEVBQUMsTUFBTSxZQUN6QyxpQ0FBSyxTQUFTLEVBQUMsZUFBZSxhQUM1QixpQ0FBSyxTQUFTLEVBQUMsMENBQTBDLGFBQ3ZELGdDQUFLLFNBQVMsRUFBQyx5QkFBeUIsWUFDdEMsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQywyQkFBMkIsWUFBRSxLQUFLLEdBQVEsR0FDdEQsRUFDTix1QkFBQyxrQkFBa0IsQ0FBQyxPQUFPLGNBQ3hCLGFBQWEsSUFBSSx1QkFBQyxlQUFlLEtBQUcsR0FDVixJQUN6QixFQUNMLFFBQVEsSUFBSSxDQUNYLHVCQUFDLFNBQUksSUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sWUFDMUMsUUFBUSxHQUNKLENBQ1IsSUFDRyxHQUNvQixFQUM1Qix1QkFBQyxrQkFBa0IsQ0FBQyxPQUFPLElBQ3pCLFVBQVUsRUFBRSxpQkFBaUIsRUFDN0IsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLGdJQUFnSSxDQUNqSSxZQUVELGlDQUFLLFNBQVMsRUFBQyxxRUFBcUUsYUFDakYsV0FBVyxJQUFJLHVCQUFDLFNBQUksY0FBRSxXQUFXLEdBQVEsRUFDMUMsZ0NBQUssU0FBUyxFQUFDLFFBQVEsWUFBRSxRQUFRLEdBQU8sSUFDcEMsR0FDcUIsSUFDTCxDQUMzQixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFFckIsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO0lBQzNCLE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsZ01BQWdNLFlBQzdNLGlDQUFLLFNBQVMsRUFBQyxTQUFTLGFBQ3RCLGlDQUFNLFNBQVMsRUFBQyxrSUFBa0ksR0FBRyxFQUNySixpQ0FBTSxTQUFTLEVBQUMsbU1BQW1NLEdBQUcsSUFDbE4sR0FDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUEifQ==