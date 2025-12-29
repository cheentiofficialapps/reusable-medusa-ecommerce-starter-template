"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Home;
const jsx_runtime_1 = require("react/jsx-runtime");
const featured_products_1 = __importDefault(require("@modules/home/components/featured-products"));
const hero_1 = __importDefault(require("@modules/home/components/hero"));
const collections_1 = require("@lib/data/collections");
const regions_1 = require("@lib/data/regions");
exports.metadata = {
    title: "Medusa Next.js Starter Template",
    description: "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
};
async function Home(props) {
    const params = await props.params;
    const { countryCode } = params;
    const region = await (0, regions_1.getRegion)(countryCode);
    const { collections } = await (0, collections_1.listCollections)({
        fields: "id, handle, title",
    });
    if (!collections || !region) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(hero_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "py-12", children: (0, jsx_runtime_1.jsx)("ul", { className: "flex flex-col gap-x-6", children: (0, jsx_runtime_1.jsx)(featured_products_1.default, { collections: collections, region: region }) }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFhQSx1QkEyQkM7O0FBdENELG1HQUF5RTtBQUN6RSx5RUFBZ0Q7QUFDaEQsdURBQXVEO0FBQ3ZELCtDQUE2QztBQUVoQyxRQUFBLFFBQVEsR0FBYTtJQUNoQyxLQUFLLEVBQUUsaUNBQWlDO0lBQ3hDLFdBQVcsRUFDVCw4RUFBOEU7Q0FDakYsQ0FBQTtBQUVjLEtBQUssVUFBVSxJQUFJLENBQUMsS0FFbEM7SUFDQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFFakMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQTtJQUU5QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxXQUFXLENBQUMsQ0FBQTtJQUUzQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxJQUFBLDZCQUFlLEVBQUM7UUFDNUMsTUFBTSxFQUFFLG1CQUFtQjtLQUM1QixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsT0FBTyxDQUNMLDZEQUNFLHVCQUFDLGNBQUksS0FBRyxFQUNSLGdDQUFLLFNBQVMsRUFBQyxPQUFPLFlBQ3BCLCtCQUFJLFNBQVMsRUFBQyx1QkFBdUIsWUFDbkMsdUJBQUMsMkJBQWdCLElBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFJLEdBQzNELEdBQ0QsSUFDTCxDQUNKLENBQUE7QUFDSCxDQUFDIn0=