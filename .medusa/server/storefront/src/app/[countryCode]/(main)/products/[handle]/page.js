"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStaticParams = generateStaticParams;
exports.generateMetadata = generateMetadata;
exports.default = ProductPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const products_1 = require("@lib/data/products");
const regions_1 = require("@lib/data/regions");
const templates_1 = __importDefault(require("@modules/products/templates"));
async function generateStaticParams() {
    try {
        const countryCodes = await (0, regions_1.listRegions)().then((regions) => regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat());
        if (!countryCodes) {
            return [];
        }
        const promises = countryCodes.map(async (country) => {
            const { response } = await (0, products_1.listProducts)({
                countryCode: country,
                queryParams: { limit: 100, fields: "handle" },
            });
            return {
                country,
                products: response.products,
            };
        });
        const countryProducts = await Promise.all(promises);
        return countryProducts
            .flatMap((countryData) => countryData.products.map((product) => ({
            countryCode: countryData.country,
            handle: product.handle,
        })))
            .filter((param) => param.handle);
    }
    catch (error) {
        console.error(`Failed to generate static paths for product pages: ${error instanceof Error ? error.message : "Unknown error"}.`);
        return [];
    }
}
function getImagesForVariant(product, selectedVariantId) {
    if (!selectedVariantId || !product.variants) {
        return product.images;
    }
    const variant = product.variants.find((v) => v.id === selectedVariantId);
    if (!variant || !variant.images.length) {
        return product.images;
    }
    const imageIdsMap = new Map(variant.images.map((i) => [i.id, true]));
    return product.images.filter((i) => imageIdsMap.has(i.id));
}
async function generateMetadata(props) {
    const params = await props.params;
    const { handle } = params;
    const region = await (0, regions_1.getRegion)(params.countryCode);
    if (!region) {
        (0, navigation_1.notFound)();
    }
    const product = await (0, products_1.listProducts)({
        countryCode: params.countryCode,
        queryParams: { handle },
    }).then(({ response }) => response.products[0]);
    if (!product) {
        (0, navigation_1.notFound)();
    }
    return {
        title: `${product.title} | Medusa Store`,
        description: `${product.title}`,
        openGraph: {
            title: `${product.title} | Medusa Store`,
            description: `${product.title}`,
            images: product.thumbnail ? [product.thumbnail] : [],
        },
    };
}
async function ProductPage(props) {
    const params = await props.params;
    const region = await (0, regions_1.getRegion)(params.countryCode);
    const searchParams = await props.searchParams;
    const selectedVariantId = searchParams.v_id;
    if (!region) {
        (0, navigation_1.notFound)();
    }
    const pricedProduct = await (0, products_1.listProducts)({
        countryCode: params.countryCode,
        queryParams: { handle: params.handle },
    }).then(({ response }) => response.products[0]);
    const images = getImagesForVariant(pricedProduct, selectedVariantId);
    if (!pricedProduct) {
        (0, navigation_1.notFound)();
    }
    return ((0, jsx_runtime_1.jsx)(templates_1.default, { product: pricedProduct, region: region, countryCode: params.countryCode, images: images }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2FwcC9bY291bnRyeUNvZGVdLyhtYWluKS9wcm9kdWN0cy9baGFuZGxlXS9wYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBLG9EQXdDQztBQW1CRCw0Q0EyQkM7QUFFRCw4QkE4QkM7O0FBaklELGdEQUEwQztBQUMxQyxpREFBaUQ7QUFDakQsK0NBQTBEO0FBQzFELDRFQUF5RDtBQVFsRCxLQUFLLFVBQVUsb0JBQW9CO0lBQ3hDLElBQUksQ0FBQztRQUNILE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSxxQkFBVyxHQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDeEQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUM3RCxDQUFBO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ2xELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLElBQUEsdUJBQVksRUFBQztnQkFDdEMsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTthQUM5QyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE9BQU87Z0JBQ1AsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2FBQzVCLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sZUFBZSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVuRCxPQUFPLGVBQWU7YUFDbkIsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FDdkIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxPQUFPO1lBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUMsQ0FDSjthQUNBLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FDWCxzREFDRSxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUMzQyxHQUFHLENBQ0osQ0FBQTtRQUNELE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUMxQixPQUErQixFQUMvQixpQkFBMEI7SUFFMUIsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQTtJQUN2QixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssaUJBQWlCLENBQUMsQ0FBQTtJQUN6RSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUE7SUFDdkIsQ0FBQztJQUVELE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLE9BQU8sT0FBTyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDN0QsQ0FBQztBQUVNLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUNqQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFBO0lBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxtQkFBUyxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUVsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixJQUFBLHFCQUFRLEdBQUUsQ0FBQTtJQUNaLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsdUJBQVksRUFBQztRQUNqQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7UUFDL0IsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFO0tBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFL0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2IsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTztRQUNMLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLGlCQUFpQjtRQUN4QyxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQy9CLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLGlCQUFpQjtZQUN4QyxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQy9CLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNyRDtLQUNGLENBQUE7QUFDSCxDQUFDO0FBRWMsS0FBSyxVQUFVLFdBQVcsQ0FBQyxLQUFZO0lBQ3BELE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQTtJQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsbUJBQVMsRUFBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDbEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFBO0lBRTdDLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQTtJQUUzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixJQUFBLHFCQUFRLEdBQUUsQ0FBQTtJQUNaLENBQUM7SUFFRCxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUEsdUJBQVksRUFBQztRQUN2QyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7UUFDL0IsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7S0FDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUUvQyxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtJQUVwRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkIsSUFBQSxxQkFBUSxHQUFFLENBQUE7SUFDWixDQUFDO0lBRUQsT0FBTyxDQUNMLHVCQUFDLG1CQUFlLElBQ2QsT0FBTyxFQUFFLGFBQWEsRUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFDZCxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFDL0IsTUFBTSxFQUFFLE1BQU0sR0FDZCxDQUNILENBQUE7QUFDSCxDQUFDIn0=