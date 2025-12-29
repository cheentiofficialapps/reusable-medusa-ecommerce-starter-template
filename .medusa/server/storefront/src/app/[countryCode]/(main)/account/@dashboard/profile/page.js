"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Profile;
const jsx_runtime_1 = require("react/jsx-runtime");
const profile_phone_1 = __importDefault(require("@modules/account//components/profile-phone"));
const profile_billing_address_1 = __importDefault(require("@modules/account/components/profile-billing-address"));
const profile_email_1 = __importDefault(require("@modules/account/components/profile-email"));
const profile_name_1 = __importDefault(require("@modules/account/components/profile-name"));
const navigation_1 = require("next/navigation");
const regions_1 = require("@lib/data/regions");
const customer_1 = require("@lib/data/customer");
exports.metadata = {
    title: "Profile",
    description: "View and edit your Medusa Store profile.",
};
async function Profile() {
    const customer = await (0, customer_1.retrieveCustomer)();
    const regions = await (0, regions_1.listRegions)();
    if (!customer || !regions) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", "data-testid": "profile-page-wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-8 flex flex-col gap-y-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi", children: "Profile" }), (0, jsx_runtime_1.jsx)("p", { className: "text-base-regular", children: "View and update your profile information, including your name, email, and phone number. You can also update your billing address, or change your password." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-8 w-full", children: [(0, jsx_runtime_1.jsx)(profile_name_1.default, { customer: customer }), (0, jsx_runtime_1.jsx)(Divider, {}), (0, jsx_runtime_1.jsx)(profile_email_1.default, { customer: customer }), (0, jsx_runtime_1.jsx)(Divider, {}), (0, jsx_runtime_1.jsx)(profile_phone_1.default, { customer: customer }), (0, jsx_runtime_1.jsx)(Divider, {}), (0, jsx_runtime_1.jsx)(profile_billing_address_1.default, { customer: customer, regions: regions })] })] }));
}
const Divider = () => {
    return (0, jsx_runtime_1.jsx)("div", { className: "w-full h-px bg-gray-200" });
};
``;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9hY2NvdW50L0BkYXNoYm9hcmQvcHJvZmlsZS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFpQkEsMEJBK0JDOztBQTlDRCwrRkFBcUU7QUFDckUsa0hBQXVGO0FBQ3ZGLDhGQUFvRTtBQUNwRSw0RkFBa0U7QUFHbEUsZ0RBQTBDO0FBQzFDLCtDQUErQztBQUMvQyxpREFBcUQ7QUFFeEMsUUFBQSxRQUFRLEdBQWE7SUFDaEMsS0FBSyxFQUFFLFNBQVM7SUFDaEIsV0FBVyxFQUFFLDBDQUEwQztDQUN4RCxDQUFBO0FBRWMsS0FBSyxVQUFVLE9BQU87SUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLDJCQUFnQixHQUFFLENBQUE7SUFDekMsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLHFCQUFXLEdBQUUsQ0FBQTtJQUVuQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxRQUFRLGlCQUFhLHNCQUFzQixhQUN4RCxpQ0FBSyxTQUFTLEVBQUMsNEJBQTRCLGFBQ3pDLCtCQUFJLFNBQVMsRUFBQyxlQUFlLHdCQUFhLEVBQzFDLDhCQUFHLFNBQVMsRUFBQyxtQkFBbUIsMktBSTVCLElBQ0EsRUFDTixpQ0FBSyxTQUFTLEVBQUMsOEJBQThCLGFBQzNDLHVCQUFDLHNCQUFXLElBQUMsUUFBUSxFQUFFLFFBQVEsR0FBSSxFQUNuQyx1QkFBQyxPQUFPLEtBQUcsRUFDWCx1QkFBQyx1QkFBWSxJQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUksRUFDcEMsdUJBQUMsT0FBTyxLQUFHLEVBQ1gsdUJBQUMsdUJBQVksSUFBQyxRQUFRLEVBQUUsUUFBUSxHQUFJLEVBQ3BDLHVCQUFDLE9BQU8sS0FBRyxFQUdYLHVCQUFDLGlDQUFxQixJQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBSSxJQUMzRCxJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDbkIsT0FBTyxnQ0FBSyxTQUFTLEVBQUMseUJBQXlCLEdBQUcsQ0FBQTtBQUNwRCxDQUFDLENBQ0E7QUFBQSxFQUFFLENBQUEifQ==