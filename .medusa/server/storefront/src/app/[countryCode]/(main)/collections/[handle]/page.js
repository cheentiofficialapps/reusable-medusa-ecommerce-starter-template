"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_LIMIT = void 0;
exports.generateStaticParams = generateStaticParams;
exports.generateMetadata = generateMetadata;
exports.default = CollectionPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const collections_1 = require("@lib/data/collections");
const regions_1 = require("@lib/data/regions");
const templates_1 = __importDefault(require("@modules/collections/templates"));
exports.PRODUCT_LIMIT = 12;
async function generateStaticParams() {
    const { collections } = await (0, collections_1.listCollections)({
        fields: "*products",
    });
    if (!collections) {
        return [];
    }
    const countryCodes = await (0, regions_1.listRegions)().then((regions) => regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean));
    const collectionHandles = collections.map((collection) => collection.handle);
    const staticParams = countryCodes
        ?.map((countryCode) => collectionHandles.map((handle) => ({
        countryCode,
        handle,
    })))
        .flat();
    return staticParams;
}
async function generateMetadata(props) {
    const params = await props.params;
    const collection = await (0, collections_1.getCollectionByHandle)(params.handle);
    if (!collection) {
        (0, navigation_1.notFound)();
    }
    const metadata = {
        title: `${collection.title} | Medusa Store`,
        description: `${collection.title} collection`,
    };
    return metadata;
}
async function CollectionPage(props) {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const { sortBy, page } = searchParams;
    const collection = await (0, collections_1.getCollectionByHandle)(params.handle).then((collection) => collection);
    if (!collection) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsx)(templates_1.default, { collection: collection, page: page, sortBy: sortBy, countryCode: params.countryCode }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9jb2xsZWN0aW9ucy9baGFuZGxlXS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFtQkEsb0RBK0JDO0FBRUQsNENBY0M7QUFFRCxpQ0FxQkM7O0FBeEZELGdEQUEwQztBQUUxQyx1REFBOEU7QUFDOUUsK0NBQStDO0FBRS9DLCtFQUErRDtBQVdsRCxRQUFBLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFFeEIsS0FBSyxVQUFVLG9CQUFvQjtJQUN4QyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxJQUFBLDZCQUFlLEVBQUM7UUFDNUMsTUFBTSxFQUFFLFdBQVc7S0FDcEIsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSxxQkFBVyxHQUFFLENBQUMsSUFBSSxDQUMzQyxDQUFDLE9BQXNCLEVBQUUsRUFBRSxDQUN6QixPQUFPO1FBQ0wsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0MsSUFBSSxFQUFFO1NBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBYSxDQUNqQyxDQUFBO0lBRUQsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUN2QyxDQUFDLFVBQTJCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ25ELENBQUE7SUFFRCxNQUFNLFlBQVksR0FBRyxZQUFZO1FBQy9CLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQzVCLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsV0FBVztRQUNYLE1BQU07S0FDUCxDQUFDLENBQUMsQ0FDSjtTQUNBLElBQUksRUFBRSxDQUFBO0lBRVQsT0FBTyxZQUFZLENBQUE7QUFDckIsQ0FBQztBQUVNLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUNqQyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEsbUNBQXFCLEVBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTdELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixJQUFBLHFCQUFRLEdBQUUsQ0FBQTtJQUNaLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRztRQUNmLEtBQUssRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLGlCQUFpQjtRQUMzQyxXQUFXLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxhQUFhO0tBQ2xDLENBQUE7SUFFYixPQUFPLFFBQVEsQ0FBQTtBQUNqQixDQUFDO0FBRWMsS0FBSyxVQUFVLGNBQWMsQ0FBQyxLQUFZO0lBQ3ZELE1BQU0sWUFBWSxHQUFHLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQTtJQUM3QyxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUE7SUFFckMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFBLG1DQUFxQixFQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2hFLENBQUMsVUFBMkIsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUM1QyxDQUFBO0lBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hCLElBQUEscUJBQVEsR0FBRSxDQUFBO0lBQ1osQ0FBQztJQUVELE9BQU8sQ0FDTCx1QkFBQyxtQkFBa0IsSUFDakIsVUFBVSxFQUFFLFVBQVUsRUFDdEIsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsTUFBTSxFQUNkLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUMvQixDQUNILENBQUE7QUFDSCxDQUFDIn0=