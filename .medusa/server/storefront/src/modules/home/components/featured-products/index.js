"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturedProducts;
const jsx_runtime_1 = require("react/jsx-runtime");
const product_rail_1 = __importDefault(require("@modules/home/components/featured-products/product-rail"));
async function FeaturedProducts({ collections, region, }) {
    return collections.map((collection) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(product_rail_1.default, { collection: collection, region: region }) }, collection.id)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxtQ0FZQzs7QUFkRCwyR0FBaUY7QUFFbEUsS0FBSyxVQUFVLGdCQUFnQixDQUFDLEVBQzdDLFdBQVcsRUFDWCxNQUFNLEdBSVA7SUFDQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQ3JDLHlDQUNFLHVCQUFDLHNCQUFXLElBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFJLElBRGhELFVBQVUsQ0FBQyxFQUFFLENBRWpCLENBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9