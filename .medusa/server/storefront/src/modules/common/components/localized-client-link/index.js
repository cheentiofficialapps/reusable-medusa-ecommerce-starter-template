"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({ children, href, ...props }) => {
    const { countryCode } = (0, navigation_1.useParams)();
    return ((0, jsx_runtime_1.jsx)(link_1.default, { href: `/${countryCode}${href}`, ...props, children: children }));
};
exports.default = LocalizedClientLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2xvY2FsaXplZC1jbGllbnQtbGluay9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVoscURBQTRCO0FBQzVCLGdEQUEyQztBQUczQzs7O0dBR0c7QUFDSCxNQUFNLG1CQUFtQixHQUFHLENBQUMsRUFDM0IsUUFBUSxFQUNSLElBQUksRUFDSixHQUFHLEtBQUssRUFRVCxFQUFFLEVBQUU7SUFDSCxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBQSxzQkFBUyxHQUFFLENBQUE7SUFFbkMsT0FBTyxDQUNMLHVCQUFDLGNBQUksSUFBQyxJQUFJLEVBQUUsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLEtBQU0sS0FBSyxZQUM1QyxRQUFRLEdBQ0osQ0FDUixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsbUJBQW1CLENBQUEifQ==