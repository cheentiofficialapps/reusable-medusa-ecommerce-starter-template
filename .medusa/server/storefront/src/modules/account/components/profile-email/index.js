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
const ProfileEmail = ({ customer }) => {
    const [successState, setSuccessState] = react_1.default.useState(false);
    // TODO: It seems we don't support updating emails now?
    const updateCustomerEmail = (_currentState, formData) => {
        const customer = {
            email: formData.get("email"),
        };
        try {
            // await updateCustomer(customer)
            return { success: true, error: null };
        }
        catch (error) {
            return { success: false, error: error.toString() };
        }
    };
    const [state, formAction] = (0, react_1.useActionState)(updateCustomerEmail, {
        error: false,
        success: false,
    });
    const clearState = () => {
        setSuccessState(false);
    };
    (0, react_1.useEffect)(() => {
        setSuccessState(state.success);
    }, [state]);
    return ((0, jsx_runtime_1.jsx)("form", { action: formAction, className: "w-full", children: (0, jsx_runtime_1.jsx)(account_info_1.default, { label: "Email", currentInfo: `${customer.email}`, isSuccess: successState, isError: !!state.error, errorMessage: state.error, clearState: clearState, "data-testid": "account-email-editor", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-y-2", children: (0, jsx_runtime_1.jsx)(input_1.default, { label: "Email", name: "email", type: "email", autoComplete: "email", required: true, defaultValue: customer.email, "data-testid": "email-input" }) }) }) }));
};
exports.default = ProfileEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9wcm9maWxlLWVtYWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWiwrQ0FBeUQ7QUFFekQsNkVBQW9EO0FBRXBELG1FQUF5QztBQVF6QyxNQUFNLFlBQVksR0FBaUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdELHVEQUF1RDtJQUN2RCxNQUFNLG1CQUFtQixHQUFHLENBQzFCLGFBQXNDLEVBQ3RDLFFBQWtCLEVBQ2xCLEVBQUU7UUFDRixNQUFNLFFBQVEsR0FBRztZQUNmLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBVztTQUN2QyxDQUFBO1FBRUQsSUFBSSxDQUFDO1lBQ0gsaUNBQWlDO1lBQ2pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQTtRQUN2QyxDQUFDO1FBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztZQUNwQixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUE7UUFDcEQsQ0FBQztJQUNILENBQUMsQ0FBQTtJQUVELE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBQSxzQkFBYyxFQUFDLG1CQUFtQixFQUFFO1FBQzlELEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDLENBQUE7SUFFRixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7UUFDdEIsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hCLENBQUMsQ0FBQTtJQUVELElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFFWCxPQUFPLENBQ0wsaUNBQU0sTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsUUFBUSxZQUMxQyx1QkFBQyxzQkFBVyxJQUNWLEtBQUssRUFBQyxPQUFPLEVBQ2IsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUNoQyxTQUFTLEVBQUUsWUFBWSxFQUN2QixPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUN6QixVQUFVLEVBQUUsVUFBVSxpQkFDVixzQkFBc0IsWUFFbEMsZ0NBQUssU0FBUyxFQUFDLDBCQUEwQixZQUN2Qyx1QkFBQyxlQUFLLElBQ0osS0FBSyxFQUFDLE9BQU8sRUFDYixJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksRUFBQyxPQUFPLEVBQ1osWUFBWSxFQUFDLE9BQU8sRUFDcEIsUUFBUSxRQUNSLFlBQVksRUFBRSxRQUFRLENBQUMsS0FBSyxpQkFDaEIsYUFBYSxHQUN6QixHQUNFLEdBQ00sR0FDVCxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUEifQ==