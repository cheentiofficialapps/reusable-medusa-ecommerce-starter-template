"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Nav;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const regions_1 = require("@lib/data/regions");
const locales_1 = require("@lib/data/locales");
const locale_actions_1 = require("@lib/data/locale-actions");
const localized_client_link_1 = __importDefault(require("@modules/common/components/localized-client-link"));
const cart_button_1 = __importDefault(require("@modules/layout/components/cart-button"));
const side_menu_1 = __importDefault(require("@modules/layout/components/side-menu"));
async function Nav() {
    const [regions, locales, currentLocale] = await Promise.all([
        (0, regions_1.listRegions)().then((regions) => regions),
        (0, locales_1.listLocales)(),
        (0, locale_actions_1.getLocale)(),
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "sticky top-0 inset-x-0 z-50 group", children: (0, jsx_runtime_1.jsx)("header", { className: "relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base", children: (0, jsx_runtime_1.jsxs)("nav", { className: "content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 basis-0 h-full flex items-center", children: (0, jsx_runtime_1.jsx)("div", { className: "h-full", children: (0, jsx_runtime_1.jsx)(side_menu_1.default, { regions: regions, locales: locales, currentLocale: currentLocale }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center h-full", children: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { href: "/", className: "txt-compact-xlarge-plus hover:text-ui-fg-base uppercase", "data-testid": "nav-store-link", children: "Medusa Store" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-x-6 h-full flex-1 basis-0 justify-end", children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden small:flex items-center gap-x-6 h-full", children: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { className: "hover:text-ui-fg-base", href: "/account", "data-testid": "nav-account-link", children: "Account" }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(localized_client_link_1.default, { className: "hover:text-ui-fg-base flex gap-2", href: "/cart", "data-testid": "nav-cart-link", children: "Cart (0)" }), children: (0, jsx_runtime_1.jsx)(cart_button_1.default, {}) })] })] }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2xheW91dC90ZW1wbGF0ZXMvbmF2L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVVBLHNCQXVEQzs7QUFqRUQsaUNBQWdDO0FBRWhDLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsNkRBQW9EO0FBRXBELDZHQUFrRjtBQUNsRix5RkFBK0Q7QUFDL0QscUZBQTJEO0FBRTVDLEtBQUssVUFBVSxHQUFHO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxJQUFBLHFCQUFXLEdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDdkQsSUFBQSxxQkFBVyxHQUFFO1FBQ2IsSUFBQSwwQkFBUyxHQUFFO0tBQ1osQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyxtQ0FBbUMsWUFDaEQsbUNBQVEsU0FBUyxFQUFDLDRFQUE0RSxZQUM1RixpQ0FBSyxTQUFTLEVBQUMsd0hBQXdILGFBQ3JJLGdDQUFLLFNBQVMsRUFBQyx5Q0FBeUMsWUFDdEQsZ0NBQUssU0FBUyxFQUFDLFFBQVEsWUFDckIsdUJBQUMsbUJBQVEsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsR0FBSSxHQUMxRSxHQUNGLEVBRU4sZ0NBQUssU0FBUyxFQUFDLDBCQUEwQixZQUN2Qyx1QkFBQywrQkFBbUIsSUFDbEIsSUFBSSxFQUFDLEdBQUcsRUFDUixTQUFTLEVBQUMseURBQXlELGlCQUN2RCxnQkFBZ0IsNkJBR1IsR0FDbEIsRUFFTixpQ0FBSyxTQUFTLEVBQUMsNkRBQTZELGFBQzFFLGdDQUFLLFNBQVMsRUFBQywrQ0FBK0MsWUFDNUQsdUJBQUMsK0JBQW1CLElBQ2xCLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsSUFBSSxFQUFDLFVBQVUsaUJBQ0gsa0JBQWtCLHdCQUdWLEdBQ2xCLEVBQ04sdUJBQUMsZ0JBQVEsSUFDUCxRQUFRLEVBQ04sdUJBQUMsK0JBQW1CLElBQ2xCLFNBQVMsRUFBQyxrQ0FBa0MsRUFDNUMsSUFBSSxFQUFDLE9BQU8saUJBQ0EsZUFBZSx5QkFHUCxZQUd4Qix1QkFBQyxxQkFBVSxLQUFHLEdBQ0wsSUFDUCxJQUNGLEdBQ0MsR0FDTCxDQUNQLENBQUE7QUFDSCxDQUFDIn0=