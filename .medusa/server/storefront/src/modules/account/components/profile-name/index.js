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
const ProfileName = ({ customer }) => {
    const [successState, setSuccessState] = react_1.default.useState(false);
    const updateCustomerName = async (_currentState, formData) => {
        const customer = {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
        };
        try {
            await (0, customer_1.updateCustomer)(customer);
            return { success: true, error: null };
        }
        catch (error) {
            return { success: false, error: error.toString() };
        }
    };
    const [state, formAction] = (0, react_1.useActionState)(updateCustomerName, {
        error: false,
        success: false,
    });
    const clearState = () => {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(() => {
        setSuccessState(state.success);
    }, [state]);
    return ((0, jsx_runtime_1.jsx)("form", { action: formAction, className: "w-full overflow-visible", children: (0, jsx_runtime_1.jsx)(account_info_1.default, { label: "Name", currentInfo: `${customer.first_name} ${customer.last_name}`, isSuccess: successState, isError: !!state?.error, clearState: clearState, "data-testid": "account-name-editor", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-x-4", children: [(0, jsx_runtime_1.jsx)(input_1.default, { label: "First name", name: "first_name", required: true, defaultValue: customer.first_name ?? "", "data-testid": "first-name-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Last name", name: "last_name", required: true, defaultValue: customer.last_name ?? "", "data-testid": "last-name-input" })] }) }) }));
};
exports.default = ProfileName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9wcm9maWxlLW5hbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLCtDQUF5RDtBQUV6RCw2RUFBb0Q7QUFFcEQsbUVBQXlDO0FBRXpDLGlEQUFtRDtBQU1uRCxNQUFNLFdBQVcsR0FBaUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDakUsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUM5QixhQUFzQyxFQUN0QyxRQUFrQixFQUNsQixFQUFFO1FBQ0YsTUFBTSxRQUFRLEdBQUc7WUFDZixVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQVc7WUFDaEQsU0FBUyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFXO1NBQy9DLENBQUE7UUFFRCxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUEseUJBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQTtZQUM5QixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDdkMsQ0FBQztRQUFDLE9BQU8sS0FBVSxFQUFFLENBQUM7WUFDcEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFBO1FBQ3BELENBQUM7SUFDSCxDQUFDLENBQUE7SUFFRCxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUEsc0JBQWMsRUFBQyxrQkFBa0IsRUFBRTtRQUM3RCxLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO1FBQ3RCLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUE7SUFFRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNoQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBRVgsT0FBTyxDQUNMLGlDQUFNLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLHlCQUF5QixZQUMzRCx1QkFBQyxzQkFBVyxJQUNWLEtBQUssRUFBQyxNQUFNLEVBQ1osV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQzNELFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFDdkIsVUFBVSxFQUFFLFVBQVUsaUJBQ1YscUJBQXFCLFlBRWpDLGlDQUFLLFNBQVMsRUFBQywwQkFBMEIsYUFDdkMsdUJBQUMsZUFBSyxJQUNKLEtBQUssRUFBQyxZQUFZLEVBQ2xCLElBQUksRUFBQyxZQUFZLEVBQ2pCLFFBQVEsUUFDUixZQUFZLEVBQUUsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLGlCQUMzQixrQkFBa0IsR0FDOUIsRUFDRix1QkFBQyxlQUFLLElBQ0osS0FBSyxFQUFDLFdBQVcsRUFDakIsSUFBSSxFQUFDLFdBQVcsRUFDaEIsUUFBUSxRQUNSLFlBQVksRUFBRSxRQUFRLENBQUMsU0FBUyxJQUFJLEVBQUUsaUJBQzFCLGlCQUFpQixHQUM3QixJQUNFLEdBQ00sR0FDVCxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUEifQ==