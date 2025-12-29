"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const skeleton_order_confirmed_header_1 = __importDefault(require("@modules/skeletons/components/skeleton-order-confirmed-header"));
const skeleton_order_information_1 = __importDefault(require("@modules/skeletons/components/skeleton-order-information"));
const skeleton_order_items_1 = __importDefault(require("@modules/skeletons/components/skeleton-order-items"));
const SkeletonOrderConfirmed = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-gray-50 py-6 min-h-[calc(100vh-64px)] animate-pulse", children: (0, jsx_runtime_1.jsx)("div", { className: "content-container flex justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl h-full bg-white w-full p-10", children: [(0, jsx_runtime_1.jsx)(skeleton_order_confirmed_header_1.default, {}), (0, jsx_runtime_1.jsx)(skeleton_order_items_1.default, {}), (0, jsx_runtime_1.jsx)(skeleton_order_information_1.default, {})] }) }) }));
};
exports.default = SkeletonOrderConfirmed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3NrZWxldG9ucy90ZW1wbGF0ZXMvc2tlbGV0b24tb3JkZXItY29uZmlybWVkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvSUFBd0c7QUFDeEcsMEhBQStGO0FBQy9GLDhHQUFtRjtBQUVuRixNQUFNLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUNsQyxPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFDLHdEQUF3RCxZQUNyRSxnQ0FBSyxTQUFTLEVBQUMsdUNBQXVDLFlBQ3BELGlDQUFLLFNBQVMsRUFBQyx1Q0FBdUMsYUFDcEQsdUJBQUMseUNBQTRCLEtBQUcsRUFFaEMsdUJBQUMsOEJBQWtCLEtBQUcsRUFFdEIsdUJBQUMsb0NBQXdCLEtBQUcsSUFDeEIsR0FDRixHQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLHNCQUFzQixDQUFBIn0=