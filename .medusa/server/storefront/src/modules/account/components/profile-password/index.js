"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const input_1 = __importDefault(require("@modules/common/components/input"));
const account_info_1 = __importDefault(require("../account-info"));
const ui_1 = require("@medusajs/ui");
const ProfilePassword = ({ customer }) => {
    const [successState, setSuccessState] = react_1.default.useState(false);
    // TODO: Add support for password updates
    const updatePassword = async () => {
        ui_1.toast.info("Password update is not implemented");
    };
    const clearState = () => {
        setSuccessState(false);
    };
    return ((0, jsx_runtime_1.jsx)("form", { action: updatePassword, onReset: () => clearState(), className: "w-full", children: (0, jsx_runtime_1.jsx)(account_info_1.default, { label: "Password", currentInfo: (0, jsx_runtime_1.jsx)("span", { children: "The password is not shown for security reasons" }), isSuccess: successState, isError: false, errorMessage: undefined, clearState: clearState, "data-testid": "account-password-editor", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)(input_1.default, { label: "Old password", name: "old_password", required: true, type: "password", "data-testid": "old-password-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "New password", type: "password", name: "new_password", required: true, "data-testid": "new-password-input" }), (0, jsx_runtime_1.jsx)(input_1.default, { label: "Confirm password", type: "password", name: "confirm_password", required: true, "data-testid": "confirm-password-input" })] }) }) }));
};
exports.default = ProfilePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9wcm9maWxlLXBhc3N3b3JkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixrREFBd0Q7QUFDeEQsNkVBQW9EO0FBQ3BELG1FQUF5QztBQUV6QyxxQ0FBb0M7QUFNcEMsTUFBTSxlQUFlLEdBQWlDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3RCx5Q0FBeUM7SUFDekMsTUFBTSxjQUFjLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDaEMsVUFBSyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQTtJQUVELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtRQUN0QixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLGlDQUNFLE1BQU0sRUFBRSxjQUFjLEVBQ3RCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDM0IsU0FBUyxFQUFDLFFBQVEsWUFFbEIsdUJBQUMsc0JBQVcsSUFDVixLQUFLLEVBQUMsVUFBVSxFQUNoQixXQUFXLEVBQ1QsOEZBQTJELEVBRTdELFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsWUFBWSxFQUFFLFNBQVMsRUFDdkIsVUFBVSxFQUFFLFVBQVUsaUJBQ1YseUJBQXlCLFlBRXJDLGlDQUFLLFNBQVMsRUFBQyx3QkFBd0IsYUFDckMsdUJBQUMsZUFBSyxJQUNKLEtBQUssRUFBQyxjQUFjLEVBQ3BCLElBQUksRUFBQyxjQUFjLEVBQ25CLFFBQVEsUUFDUixJQUFJLEVBQUMsVUFBVSxpQkFDSCxvQkFBb0IsR0FDaEMsRUFDRix1QkFBQyxlQUFLLElBQ0osS0FBSyxFQUFDLGNBQWMsRUFDcEIsSUFBSSxFQUFDLFVBQVUsRUFDZixJQUFJLEVBQUMsY0FBYyxFQUNuQixRQUFRLHVCQUNJLG9CQUFvQixHQUNoQyxFQUNGLHVCQUFDLGVBQUssSUFDSixLQUFLLEVBQUMsa0JBQWtCLEVBQ3hCLElBQUksRUFBQyxVQUFVLEVBQ2YsSUFBSSxFQUFDLGtCQUFrQixFQUN2QixRQUFRLHVCQUNJLHdCQUF3QixHQUNwQyxJQUNFLEdBQ00sR0FDVCxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUEifQ==