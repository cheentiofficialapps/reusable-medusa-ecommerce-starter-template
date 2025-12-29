"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_VIEW = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const register_1 = __importDefault(require("@modules/account/components/register"));
const login_1 = __importDefault(require("@modules/account/components/login"));
var LOGIN_VIEW;
(function (LOGIN_VIEW) {
    LOGIN_VIEW["SIGN_IN"] = "sign-in";
    LOGIN_VIEW["REGISTER"] = "register";
})(LOGIN_VIEW || (exports.LOGIN_VIEW = LOGIN_VIEW = {}));
const LoginTemplate = () => {
    const [currentView, setCurrentView] = (0, react_1.useState)("sign-in");
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-start px-8 py-8", children: currentView === "sign-in" ? ((0, jsx_runtime_1.jsx)(login_1.default, { setCurrentView: setCurrentView })) : ((0, jsx_runtime_1.jsx)(register_1.default, { setCurrentView: setCurrentView })) }));
};
exports.default = LoginTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvdGVtcGxhdGVzL2xvZ2luLXRlbXBsYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7O0FBRVosaUNBQWdDO0FBRWhDLG9GQUEyRDtBQUMzRCw4RUFBcUQ7QUFFckQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxVQUFVLDBCQUFWLFVBQVUsUUFHckI7QUFFRCxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDekIsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsU0FBUyxDQUFDLENBQUE7SUFFekQsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyxxQ0FBcUMsWUFDakQsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsdUJBQUMsZUFBSyxJQUFDLGNBQWMsRUFBRSxjQUFjLEdBQUksQ0FDMUMsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyxrQkFBUSxJQUFDLGNBQWMsRUFBRSxjQUFjLEdBQUksQ0FDN0MsR0FDRyxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEifQ==