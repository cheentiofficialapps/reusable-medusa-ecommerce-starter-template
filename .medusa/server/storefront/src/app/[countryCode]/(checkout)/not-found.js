"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = NotFound;
const jsx_runtime_1 = require("react/jsx-runtime");
const interactive_link_1 = __importDefault(require("@modules/common/components/interactive-link"));
exports.metadata = {
    title: "404",
    description: "Something went wrong",
};
async function NotFound() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi text-ui-fg-base", children: "Page not found" }), (0, jsx_runtime_1.jsx)("p", { className: "text-small-regular text-ui-fg-base", children: "The page you tried to access does not exist." }), (0, jsx_runtime_1.jsx)(interactive_link_1.default, { href: "/", children: "Go to frontpage" })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvYXBwL1tjb3VudHJ5Q29kZV0vKGNoZWNrb3V0KS9ub3QtZm91bmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLDJCQVVDOztBQWxCRCxtR0FBeUU7QUFHNUQsUUFBQSxRQUFRLEdBQWE7SUFDaEMsS0FBSyxFQUFFLEtBQUs7SUFDWixXQUFXLEVBQUUsc0JBQXNCO0NBQ3BDLENBQUE7QUFFYyxLQUFLLFVBQVUsUUFBUTtJQUNwQyxPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDBFQUEwRSxhQUN2RiwrQkFBSSxTQUFTLEVBQUMsK0JBQStCLCtCQUFvQixFQUNqRSw4QkFBRyxTQUFTLEVBQUMsb0NBQW9DLDZEQUU3QyxFQUNKLHVCQUFDLDBCQUFlLElBQUMsSUFBSSxFQUFDLEdBQUcsZ0NBQWtDLElBQ3ZELENBQ1AsQ0FBQTtBQUNILENBQUMifQ==