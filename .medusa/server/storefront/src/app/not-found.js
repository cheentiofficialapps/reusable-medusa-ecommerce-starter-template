"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = NotFound;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const link_1 = __importDefault(require("next/link"));
exports.metadata = {
    title: "404",
    description: "Something went wrong",
};
function NotFound() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl-semi text-ui-fg-base", children: "Page not found" }), (0, jsx_runtime_1.jsx)("p", { className: "text-small-regular text-ui-fg-base", children: "The page you tried to access does not exist." }), (0, jsx_runtime_1.jsxs)(link_1.default, { className: "flex gap-x-1 items-center group", href: "/", children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { className: "text-ui-fg-interactive", children: "Go to frontpage" }), (0, jsx_runtime_1.jsx)(icons_1.ArrowUpRightMini, { className: "group-hover:rotate-45 ease-in-out duration-150", color: "var(--fg-interactive)" })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvYXBwL25vdC1mb3VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBVUEsMkJBbUJDOztBQTdCRCwyQ0FBa0Q7QUFDbEQscUNBQW1DO0FBRW5DLHFEQUE0QjtBQUVmLFFBQUEsUUFBUSxHQUFhO0lBQ2hDLEtBQUssRUFBRSxLQUFLO0lBQ1osV0FBVyxFQUFFLHNCQUFzQjtDQUNwQyxDQUFBO0FBRUQsU0FBd0IsUUFBUTtJQUM5QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDBFQUEwRSxhQUN2RiwrQkFBSSxTQUFTLEVBQUMsK0JBQStCLCtCQUFvQixFQUNqRSw4QkFBRyxTQUFTLEVBQUMsb0NBQW9DLDZEQUU3QyxFQUNKLHdCQUFDLGNBQUksSUFDSCxTQUFTLEVBQUMsaUNBQWlDLEVBQzNDLElBQUksRUFBQyxHQUFHLGFBRVIsdUJBQUMsU0FBSSxJQUFDLFNBQVMsRUFBQyx3QkFBd0IsZ0NBQXVCLEVBQy9ELHVCQUFDLHdCQUFnQixJQUNmLFNBQVMsRUFBQyxnREFBZ0QsRUFDMUQsS0FBSyxFQUFDLHVCQUF1QixHQUM3QixJQUNHLElBQ0gsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyJ9