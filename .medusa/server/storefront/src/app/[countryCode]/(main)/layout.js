"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = PageLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const customer_1 = require("@lib/data/customer");
const env_1 = require("@lib/util/env");
const cart_mismatch_banner_1 = __importDefault(require("@modules/layout/components/cart-mismatch-banner"));
const footer_1 = __importDefault(require("@modules/layout/templates/footer"));
const nav_1 = __importDefault(require("@modules/layout/templates/nav"));
const free_shipping_price_nudge_1 = __importDefault(require("@modules/shipping/components/free-shipping-price-nudge"));
exports.metadata = {
    metadataBase: new URL((0, env_1.getBaseURL)()),
};
async function PageLayout(props) {
    const customer = await (0, customer_1.retrieveCustomer)();
    const cart = await (0, cart_1.retrieveCart)();
    let shippingOptions = [];
    if (cart) {
        const { shipping_options } = await (0, cart_1.listCartOptions)();
        shippingOptions = shipping_options;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(nav_1.default, {}), customer && cart && ((0, jsx_runtime_1.jsx)(cart_mismatch_banner_1.default, { customer: customer, cart: cart })), cart && ((0, jsx_runtime_1.jsx)(free_shipping_price_nudge_1.default, { variant: "popup", cart: cart, shippingOptions: shippingOptions })), props.children, (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvYXBwL1tjb3VudHJ5Q29kZV0vKG1haW4pL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZUEsNkJBNkJDOztBQTFDRCx5Q0FBOEQ7QUFDOUQsaURBQXFEO0FBQ3JELHVDQUEwQztBQUUxQywyR0FBZ0Y7QUFDaEYsOEVBQXFEO0FBQ3JELHdFQUErQztBQUMvQyx1SEFBMkY7QUFFOUUsUUFBQSxRQUFRLEdBQWE7SUFDaEMsWUFBWSxFQUFFLElBQUksR0FBRyxDQUFDLElBQUEsZ0JBQVUsR0FBRSxDQUFDO0NBQ3BDLENBQUE7QUFFYyxLQUFLLFVBQVUsVUFBVSxDQUFDLEtBQW9DO0lBQzNFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSwyQkFBZ0IsR0FBRSxDQUFBO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxtQkFBWSxHQUFFLENBQUE7SUFDakMsSUFBSSxlQUFlLEdBQThCLEVBQUUsQ0FBQTtJQUVuRCxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxJQUFBLHNCQUFlLEdBQUUsQ0FBQTtRQUVwRCxlQUFlLEdBQUcsZ0JBQWdCLENBQUE7SUFDcEMsQ0FBQztJQUVELE9BQU8sQ0FDTCw2REFDRSx1QkFBQyxhQUFHLEtBQUcsRUFDTixRQUFRLElBQUksSUFBSSxJQUFJLENBQ25CLHVCQUFDLDhCQUFrQixJQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSSxDQUN2RCxFQUVBLElBQUksSUFBSSxDQUNQLHVCQUFDLG1DQUFzQixJQUNyQixPQUFPLEVBQUMsT0FBTyxFQUNmLElBQUksRUFBRSxJQUFJLEVBQ1YsZUFBZSxFQUFFLGVBQWUsR0FDaEMsQ0FDSCxFQUNBLEtBQUssQ0FBQyxRQUFRLEVBQ2YsdUJBQUMsZ0JBQU0sS0FBRyxJQUNULENBQ0osQ0FBQTtBQUNILENBQUMifQ==