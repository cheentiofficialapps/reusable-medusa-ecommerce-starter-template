"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsWithSort = exports.listProducts = void 0;
const config_1 = require("@lib/config");
const sort_products_1 = require("@lib/util/sort-products");
const cookies_1 = require("./cookies");
const regions_1 = require("./regions");
const listProducts = async ({ pageParam = 1, queryParams, countryCode, regionId, }) => {
    if (!countryCode && !regionId) {
        throw new Error("Country code or region ID is required");
    }
    const limit = queryParams?.limit || 12;
    const _pageParam = Math.max(pageParam, 1);
    const offset = _pageParam === 1 ? 0 : (_pageParam - 1) * limit;
    let region;
    if (countryCode) {
        region = await (0, regions_1.getRegion)(countryCode);
    }
    else {
        region = await (0, regions_1.retrieveRegion)(regionId);
    }
    if (!region) {
        return {
            response: { products: [], count: 0 },
            nextPage: null,
        };
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("products")),
    };
    return config_1.sdk.client
        .fetch(`/store/products`, {
        method: "GET",
        query: {
            limit,
            offset,
            region_id: region?.id,
            fields: "*variants.calculated_price,+variants.inventory_quantity,*variants.images,+metadata,+tags,",
            ...queryParams,
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ products, count }) => {
        const nextPage = count > offset + limit ? pageParam + 1 : null;
        return {
            response: {
                products,
                count,
            },
            nextPage: nextPage,
            queryParams,
        };
    });
};
exports.listProducts = listProducts;
/**
 * This will fetch 100 products to the Next.js cache and sort them based on the sortBy parameter.
 * It will then return the paginated products based on the page and limit parameters.
 */
const listProductsWithSort = async ({ page = 0, queryParams, sortBy = "created_at", countryCode, }) => {
    const limit = queryParams?.limit || 12;
    const { response: { products, count }, } = await (0, exports.listProducts)({
        pageParam: 0,
        queryParams: {
            ...queryParams,
            limit: 100,
        },
        countryCode,
    });
    const sortedProducts = (0, sort_products_1.sortProducts)(products, sortBy);
    const pageParam = (page - 1) * limit;
    const nextPage = count > pageParam + limit ? pageParam + limit : null;
    const paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit);
    return {
        response: {
            products: paginatedProducts,
            count,
        },
        nextPage,
        queryParams,
    };
};
exports.listProductsWithSort = listProductsWithSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS9wcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWix3Q0FBaUM7QUFDakMsMkRBQXNEO0FBR3RELHVDQUEyRDtBQUMzRCx1Q0FBcUQ7QUFFOUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLEVBQ2pDLFNBQVMsR0FBRyxDQUFDLEVBQ2IsV0FBVyxFQUNYLFdBQVcsRUFDWCxRQUFRLEdBTVQsRUFJRSxFQUFFO0lBQ0gsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUE7SUFDdEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekMsTUFBTSxNQUFNLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUE7SUFFOUQsSUFBSSxNQUFnRCxDQUFBO0lBRXBELElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEIsTUFBTSxHQUFHLE1BQU0sSUFBQSxtQkFBUyxFQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7U0FBTSxDQUFDO1FBQ04sTUFBTSxHQUFHLE1BQU0sSUFBQSx3QkFBYyxFQUFDLFFBQVMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFL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