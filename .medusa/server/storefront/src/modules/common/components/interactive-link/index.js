"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const localized_client_link_1 = __importDefault(require("../localized-client-link"));
const InteractiveLink = ({ href, children, onClick, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(localized_client_link_1.default, { className: "flex gap-x-1 items-center group", href: href, onClick: onClick, ...props, children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-interactive", children: children }), (0, jsx_runtime_1.jsx)(icons_1.ArrowUpRightMini, { className: "group-hover:rotate-45 ease-in-out duration-150", color: "var(--fg-interactive)" })] }));
};
exports.default = InteractiveLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2ludGVyYWN0aXZlLWxpbmsvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCxxQ0FBbUM7QUFDbkMscUZBQTBEO0FBUTFELE1BQU0sZUFBZSxHQUFHLENBQUMsRUFDdkIsSUFBSSxFQUNKLFFBQVEsRUFDUixPQUFPLEVBQ1AsR0FBRyxLQUFLLEVBQ2EsRUFBRSxFQUFFO0lBQ3pCLE9BQU8sQ0FDTCx3QkFBQywrQkFBbUIsSUFDbEIsU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxPQUFPLEtBQ1osS0FBSyxhQUVULHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsd0JBQXdCLFlBQUUsUUFBUSxHQUFRLEVBQzFELHVCQUFDLHdCQUFnQixJQUNmLFNBQVMsRUFBQyxnREFBZ0QsRUFDMUQsS0FBSyxFQUFDLHVCQUF1QixHQUM3QixJQUNrQixDQUN2QixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFBIn0=