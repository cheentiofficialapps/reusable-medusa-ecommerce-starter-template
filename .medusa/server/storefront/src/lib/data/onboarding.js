"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetOnboardingState = resetOnboardingState;
const headers_1 = require("next/headers");
const navigation_1 = require("next/navigation");
async function resetOnboardingState(orderId) {
    const cookies = await (0, headers_1.cookies)();
    cookies.set("_medusa_onboarding", "false", { maxAge: -1 });
    (0, navigation_1.redirect)(`http://localhost:7001/a/orders/${orderId}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL29uYm9hcmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7QUFJWixvREFJQztBQVBELDBDQUFxRDtBQUNyRCxnREFBMEM7QUFFbkMsS0FBSyxVQUFVLG9CQUFvQixDQUFDLE9BQWU7SUFDeEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLGlCQUFXLEdBQUUsQ0FBQTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUQsSUFBQSxxQkFBUSxFQUFDLGtDQUFrQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZELENBQUMifQ==