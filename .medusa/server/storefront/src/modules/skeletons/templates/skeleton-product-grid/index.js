"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const repeat_1 = __importDefault(require("@lib/util/repeat"));
const skeleton_product_preview_1 = __importDefault(require("@modules/skeletons/components/skeleton-product-preview"));
const SkeletonProductGrid = ({ numberOfProducts = 8, }) => {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1", "data-testid": "products-list-loader", children: (0, repeat_1.default)(numberOfProducts).map((index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(skeleton_product_preview_1.default, {}) }, index))) }));
};
exports.default = SkeletonProductGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3NrZWxldG9ucy90ZW1wbGF0ZXMvc2tlbGV0b24tcHJvZHVjdC1ncmlkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBcUM7QUFDckMsc0hBQTJGO0FBRTNGLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxFQUMzQixnQkFBZ0IsR0FBRyxDQUFDLEdBR3JCLEVBQUUsRUFBRTtJQUNILE9BQU8sQ0FDTCwrQkFDRSxTQUFTLEVBQUMsOEVBQThFLGlCQUM1RSxzQkFBc0IsWUFFakMsSUFBQSxnQkFBTSxFQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUN2Qyx5Q0FDRSx1QkFBQyxrQ0FBc0IsS0FBRyxJQURuQixLQUFLLENBRVQsQ0FDTixDQUFDLEdBQ0MsQ0FDTixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsbUJBQW1CLENBQUEifQ==