"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const onboarding_1 = require("@lib/data/onboarding");
const ui_1 = require("@medusajs/ui");
const OnboardingCta = ({ orderId }) => {
    return ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: "max-w-4xl h-full bg-ui-bg-subtle w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-4 center p-4 md:items-center", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-base text-xl", children: "Your test order was successfully created! \uD83C\uDF89" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-subtle text-small-regular", children: "You can now complete setting up your store in the admin." }), (0, jsx_runtime_1.jsx)(ui_1.Button, { className: "w-fit", size: "xlarge", onClick: () => (0, onboarding_1.resetOnboardingState)(orderId), children: "Complete setup in admin" })] }) }));
};
exports.default = OnboardingCta;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL29yZGVyL2NvbXBvbmVudHMvb25ib2FyZGluZy1jdGEvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7OztBQUVaLHFEQUEyRDtBQUMzRCxxQ0FBc0Q7QUFFdEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBdUIsRUFBRSxFQUFFO0lBQ3pELE9BQU8sQ0FDTCx1QkFBQyxjQUFTLElBQUMsU0FBUyxFQUFDLHlDQUF5QyxZQUM1RCxpQ0FBSyxTQUFTLEVBQUMsa0RBQWtELGFBQy9ELHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMseUJBQXlCLHVFQUVsQyxFQUNQLHVCQUFDLFNBQUksSUFBQyxTQUFTLEVBQUMsc0NBQXNDLHlFQUUvQyxFQUNQLHVCQUFDLFdBQU0sSUFDTCxTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsUUFBUSxFQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFBLGlDQUFvQixFQUFDLE9BQU8sQ0FBQyx3Q0FHckMsSUFDTCxHQUNJLENBQ2IsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQSJ9