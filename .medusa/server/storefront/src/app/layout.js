"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const env_1 = require("@lib/util/env");
require("styles/globals.css");
exports.metadata = {
    metadataBase: new URL((0, env_1.getBaseURL)()),
};
function RootLayout(props) {
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", "data-mode": "light", children: (0, jsx_runtime_1.jsx)("body", { children: (0, jsx_runtime_1.jsx)("main", { className: "relative", children: props.children }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvYXBwL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsNkJBUUM7O0FBaEJELHVDQUEwQztBQUUxQyw4QkFBMkI7QUFFZCxRQUFBLFFBQVEsR0FBYTtJQUNoQyxZQUFZLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBQSxnQkFBVSxHQUFFLENBQUM7Q0FDcEMsQ0FBQTtBQUVELFNBQXdCLFVBQVUsQ0FBQyxLQUFvQztJQUNyRSxPQUFPLENBQ0wsaUNBQU0sSUFBSSxFQUFDLElBQUksZUFBVyxPQUFPLFlBQy9CLDJDQUNFLGlDQUFNLFNBQVMsRUFBQyxVQUFVLFlBQUUsS0FBSyxDQUFDLFFBQVEsR0FBUSxHQUM3QyxHQUNGLENBQ1IsQ0FBQTtBQUNILENBQUMifQ==