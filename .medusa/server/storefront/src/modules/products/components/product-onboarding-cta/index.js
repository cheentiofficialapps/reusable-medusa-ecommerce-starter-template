"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const headers_1 = require("next/headers");
async function ProductOnboardingCta() {
    const cookies = await (0, headers_1.cookies)();
    const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true";
    if (!isOnboarding) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: "max-w-4xl h-full bg-ui-bg-subtle w-full p-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4 center", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-base text-xl", children: "Your demo product was successfully created! \uD83C\uDF89" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-subtle text-small-regular", children: "You can now continue setting up your store in the admin." }), (0, jsx_runtime_1.jsx)("a", { href: "http://localhost:7001/a/orders?onboarding_step=create_order_nextjs", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "w-full", children: "Continue setup in admin" }) })] }) }));
}
exports.default = ProductOnboardingCta;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1vbmJvYXJkaW5nLWN0YS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNEO0FBQ3RELDBDQUFxRDtBQUVyRCxLQUFLLFVBQVUsb0JBQW9CO0lBQ2pDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSxpQkFBVyxHQUFFLENBQUE7SUFFbkMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUE7SUFFeEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE9BQU8sQ0FDTCx1QkFBQyxjQUFTLElBQUMsU0FBUyxFQUFDLDZDQUE2QyxZQUNoRSxpQ0FBSyxTQUFTLEVBQUMsOEJBQThCLGFBQzNDLHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMseUJBQXlCLHlFQUVsQyxFQUNQLHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsc0NBQXNDLHlFQUUvQyxFQUNQLDhCQUFHLElBQUksRUFBQyxvRUFBb0UsWUFDMUUsdUJBQUMsV0FBTSxJQUFDLFNBQVMsRUFBQyxRQUFRLHdDQUFpQyxHQUN6RCxJQUNBLEdBQ0ksQ0FDYixDQUFBO0FBQ0gsQ0FBQztBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=