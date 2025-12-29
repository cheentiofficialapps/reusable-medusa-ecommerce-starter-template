"use client";
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
const react_1 = __importStar(require("react"));
const input_1 = __importDefault(require("@modules/common/components/input"));
const native_select_1 = __importDefault(require("@modules/common/components/native-select"));
const account_info_1 = __importDefault(require("../account-info"));
const customer_1 = require("@lib/data/customer");
const ProfileBillingAddress = ({ customer, regions, }) => {
    const regionOptions = (0, react_1.useMemo)(() => {
        return (regions
            ?.map((region) => {
            return region.countries?.map((country) => ({
                value: country.iso_2,
                label: country.display_name,
            }));
        })
            .flat() || []);
    }, [regions]);
    const [successState, setSuccessState] = react_1.default.useState(false);
    const billingAddress = customer.addresses?.find((addr) => addr.is_default_billing);
    const initialState = {
        isDefaultBilling: true,
        isDefaultShipping: false,
        error: false,
        success: false,
    };
    if (billingAddress) {
        initialState.addressId = billingAddress.id;
    }
    const [state, formAction] = (0, react_1.useActionState)(billingAddress ? customer_1.updateCustomerAddress : customer_1.addCustomerAddress, initialState);
    const clearState = () => {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(() => {
        setSuccessState(state.success);
    }, [state]);
    const currentInfo = (0, react_1.useMemo)(() => {
        if (!billingAddress) {
            return "No billing address";
        }
        const country = regionOptions?.find((country) => country?.value === billingAddress.country_code)?.label || billingAddress.country_code?.toUpperCase();
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col font-semibold", "data-testid": "current-info", children: [(0, jsx_runtime_1.jsxs)("span", { children: [billingAddress.first_name, " ", billingAddress.last_name] }), (0, jsx_runtime_1.jsx)("span", { children: billingAddress.company }), (0, jsx_runtime_1.jsxs)("span", { children: [billingAddress.address_1, billingAddress.address_2 ? `, ${billingAddress.address_2}` : ""] }), (0, jsx_runtime_1.jsxs)("span", { children: [billingAddress.postal_code, ", ", billingAddress.city] }), (0, jsx_runtime_1.jsx)("span", { children: country })] }));
    }, [billingAddress, regionOptions]);
    return ((0, jsx_runtime_1.jsxs)("form", { action: formAction, onReset: () => clearState(), className: "w-full", children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "addressId", value: billingAddress?.id }), (0, jsx_runtime_1.jsx)(account_info_1.default, { label: "Billing address", currentInfo: currentInfo, isSuccess: successState, isError: !!state.error, clearState: clearState, "data-testid": "account-billing-address-editor", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-y-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-x-2", children: [(0, jsx_runtime_1.jsx)(input_1.default, { label: "First name", name: "first_name", defaultValue: billingAddress?.first_name || undefined, required: true, "data-testid": "billing-first-name-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Last name", name: "last_name", defaultValue: billingAddress?.last_name || undefined, required: true, "data-testid": "billing-last-name-input" })] }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Company", name: "company", defaultValue: billingAddress?.company || undefined, "data-testid": "billing-company-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Phone", name: "phone", type: "phone", autoComplete: "phone", required: true, defaultValue: billingAddress?.phone ?? customer?.phone ?? "", "data-testid": "billing-phone-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Address", name: "address_1", defaultValue: billingAddress?.address_1 || undefined, required: true, "data-testid": "billing-address-1-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Apartment, suite, etc.", name: "address_2", defaultValue: billingAddress?.address_2 || undefined, "data-testid": "billing-address-2-input" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-[144px_1fr] gap-x-2", children: [(0, jsx_runtime_1.jsx)(input_1.default, { label: "Postal code", name: "postal_code", defaultValue: billingAddress?.postal_code || undefined, required: true, "data-testid": "billing-postcal-code-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "City", name: "city", defaultValue: billingAddress?.city || undefined, required: true, "data-testid": "billing-city-input" })] }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Province", name: "province", defaultValue: billingAddress?.province || undefined, "data-testid": "billing-province-input" }), (0, jsx_runtime_1.jsxs)(native_select_1.default, { name: "country_code", defaultValue: billingAddress?.country_code || undefined, required: true, "data-testid": "billing-country-code-select", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "-" }), regionOptions.map((option, i) => {
                                    return ((0, jsx_runtime_1.jsx)("option", { value: option?.value, children: option?.label }, i));
                                })] })] }) })] }));
};
exports.default = ProfileBillingAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9wcm9maWxlLWJpbGxpbmctYWRkcmVzcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosK0NBQWlFO0FBRWpFLDZFQUFvRDtBQUNwRCw2RkFBbUU7QUFFbkUsbUVBQXlDO0FBRXpDLGlEQUE4RTtBQU85RSxNQUFNLHFCQUFxQixHQUFpQyxDQUFDLEVBQzNELFFBQVEsRUFDUixPQUFPLEdBQ1IsRUFBRSxFQUFFO0lBQ0gsTUFBTSxhQUFhLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sQ0FDTCxPQUFPO1lBQ0wsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQkFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxZQUFZO2FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFBO0lBQ0gsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUViLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3RCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FDN0MsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FDbEMsQ0FBQTtJ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