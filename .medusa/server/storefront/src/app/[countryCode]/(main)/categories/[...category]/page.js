"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStaticParams = generateStaticParams;
exports.generateMetadata = generateMetadata;
exports.default = CategoryPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const categories_1 = require("@lib/data/categories");
const regions_1 = require("@lib/data/regions");
const templates_1 = __importDefault(require("@modules/categories/templates"));
async function generateStaticParams() {
    const product_categories = await (0, categories_1.listCategories)();
    if (!product_categories) {
        return [];
    }
    const countryCodes = await (0, regions_1.listRegions)().then((regions) => regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat());
    const categoryHandles = product_categories.map((category) => category.handle);
    const staticParams = countryCodes
        ?.map((countryCode) => categoryHandles.map((handle) => ({
        countryCode,
        category: [handle],
    })))
        .flat();
    return staticParams;
}
async function generateMetadata(props) {
    const params = await props.params;
    try {
        const productCategory = await (0, categories_1.getCategoryByHandle)(params.category);
        const title = productCategory.name + " | Medusa Store";
        const description = productCategory.description ?? `${title} category.`;
        return {
            title: `${title} | Medusa Store`,
            description,
            alternates: {
                canonical: `${params.category.join("/")}`,
            },
        };
    }
    catch (error) {
        (0, navigation_1.notFound)();
    }
}
async function CategoryPage(props) {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const { sortBy, page } = searchParams;
    const productCategory = await (0, categories_1.getCategoryByHandle)(params.category);
    if (!productCategory) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsx)(templates_1.default, { category: productCategory, sortBy: sortBy, page: page, countryCode: params.countryCode }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9jYXRlZ29yaWVzL1suLi5jYXRlZ29yeV0vcGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFpQkEsb0RBeUJDO0FBRUQsNENBbUJDO0FBRUQsK0JBbUJDOztBQW5GRCxnREFBMEM7QUFFMUMscURBQTBFO0FBQzFFLCtDQUErQztBQUUvQyw4RUFBNEQ7QUFXckQsS0FBSyxVQUFVLG9CQUFvQjtJQUN4QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBQSwyQkFBYyxHQUFFLENBQUE7SUFFakQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFBLHFCQUFXLEdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FDdkUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUM3RCxDQUFBO0lBRUQsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUM1QyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbkMsQ0FBQTtJQUVELE1BQU0sWUFBWSxHQUFHLFlBQVk7UUFDL0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUErQixFQUFFLEVBQUUsQ0FDeEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxXQUFXO1FBQ1gsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ25CLENBQUMsQ0FBQyxDQUNKO1NBQ0EsSUFBSSxFQUFFLENBQUE7SUFFVCxPQUFPLFlBQVksQ0FBQTtBQUNyQixDQUFDO0FBRU0sS0FBSyxVQUFVLGdCQUFnQixDQUFDLEtBQVk7SUFDakQsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQ2pDLElBQUksQ0FBQztRQUNILE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBQSxnQ0FBbUIsRUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFbEUsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQTtRQUV0RCxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxJQUFJLEdBQUcsS0FBSyxZQUFZLENBQUE7UUFFdkUsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssaUJBQWlCO1lBQ2hDLFdBQVc7WUFDWCxVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7YUFDMUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixJQUFBLHFCQUFRLEdBQUUsQ0FBQTtJQUNaLENBQUM7QUFDSCxDQUFDO0FBRWMsS0FBSyxVQUFVLFlBQVksQ0FBQyxLQUFZO0lBQ3JELE1BQU0sWUFBWSxHQUFHLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQTtJQUM3QyxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUE7SUFFckMsTUFBTSxlQUFlLEdBQUcsTUFBTSxJQUFBLGdDQUFtQixFQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUVsRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckIsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyxDQUNMLHVCQUFDLG1CQUFnQixJQUNmLFFBQVEsRUFBRSxlQUFlLEVBQ3pCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FDL0IsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyJ9