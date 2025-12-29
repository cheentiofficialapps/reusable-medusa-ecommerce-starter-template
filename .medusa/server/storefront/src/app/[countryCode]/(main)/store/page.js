"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = StorePage;
const jsx_runtime_1 = require("react/jsx-runtime");
const templates_1 = __importDefault(require("@modules/store/templates"));
exports.metadata = {
    title: "Store",
    description: "Explore all of our products.",
};
async function StorePage(props) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const { sortBy, page } = searchParams;
    return ((0, jsx_runtime_1.jsx)(templates_1.default, { sortBy: sortBy, page: page, countryCode: params.countryCode }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9zdG9yZS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFvQkEsNEJBWUM7O0FBN0JELHlFQUFvRDtBQUV2QyxRQUFBLFFBQVEsR0FBYTtJQUNoQyxLQUFLLEVBQUUsT0FBTztJQUNkLFdBQVcsRUFBRSw4QkFBOEI7Q0FDNUMsQ0FBQTtBQVljLEtBQUssVUFBVSxTQUFTLENBQUMsS0FBYTtJQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEMsTUFBTSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFBO0lBRXJDLE9BQU8sQ0FDTCx1QkFBQyxtQkFBYSxJQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FDL0IsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyJ9