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
const account_info_1 = __importDefault(require("../account-info"));
const customer_1 = require("@lib/data/customer");
const ProfileEmail = ({ customer }) => {
    const [successState, setSuccessState] = react_1.default.useState(false);
    const updateCustomerPhone = async (_currentState, formData) => {
        const customer = {
            phone: formData.get("phone"),
        };
        try {
            await (0, customer_1.updateCustomer)(customer);
            return { success: true, error: null };
        }
        catch (error) {
            return { success: false, error: error.toString() };
        }
    };
    const [state, formAction] = (0, react_1.useActionState)(updateCustomerPhone, {
        error: false,
        success: false,
    });
    const clearState = () => {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(() => {
        setSuccessState(state.success);
    }, [state]);
    return ((0, jsx_runtime_1.jsx)("form", { action: formAction, className: "w-full", children: (0, jsx_runtime_1.jsx)(account_info_1.default, { label: "Phone", currentInfo: `${customer.phone}`, isSuccess: successState, isError: !!state.error, errorMessage: state.error, clearState: clearState, "data-testid": "account-phone-editor", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-y-2", children: (0, jsx_runtime_1.jsx)(input_1.default, { label: "Phone", name: "phone", type: "phone", autoComplete: "phone", required: true, defaultValue: customer.phone ?? "", "data-testid": "phone-input" }) }) }) }));
};
exports.default = ProfileEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9wcm9maWxlLXBob25lL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWiwrQ0FBeUQ7QUFFekQsNkVBQW9EO0FBRXBELG1FQUF5QztBQUV6QyxpREFBbUQ7QUFNbkQsTUFBTSxZQUFZLEdBQWlDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3RCxNQUFNLG1CQUFtQixHQUFHLEtBQUssRUFDL0IsYUFBc0MsRUFDdEMsUUFBa0IsRUFDbEIsRUFBRTtRQUNGLE1BQU0sUUFBUSxHQUFHO1lBQ2YsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFXO1NBQ3ZDLENBQUE7UUFFRCxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUEseUJBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQTtZQUM5QixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDdkMsQ0FBQztRQUFDLE9BQU8sS0FBVSxFQUFFLENBQUM7WUFDcEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFBO1FBQ3BELENBQUM7SUFDSCxDQUFDLENBQUE7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUEsc0JBQWMsRUFBQyxtQkFBbUIsRUFBRTtRQUM5RCxLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO1FBQ3RCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUE7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNoQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBRVgsT0FBTyxDQUNMLGlDQUFNLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLFFBQVEsWUFDMUMsdUJBQUMsc0JBQVcsSUFDVixLQUFLLEVBQUMsT0FBTyxFQUNiLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFDaEMsU0FBUyxFQUFFLFlBQVksRUFDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDekIsVUFBVSxFQUFFLFVBQVUsaUJBQ1Ysc0JBQXNCLFlBRWxDLGdDQUFLLFNBQVMsRUFBQywwQkFBMEIsWUFDdkMsdUJBQUMsZUFBSyxJQUNKLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLEVBQUMsT0FBTyxFQUNaLFlBQVksRUFBQyxPQUFPLEVBQ3BCLFFBQVEsUUFDUixZQUFZLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLGlCQUN0QixhQUFhLEdBQ3pCLEdBQ0UsR0FDTSxHQUNULENBQ1IsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLFlBQVksQ0FBQSJ9