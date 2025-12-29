"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionByHandle = exports.listCollections = exports.retrieveCollection = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
const retrieveCollection = async (id) => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("collections")),
    };
    return config_1.sdk.client
        .fetch(`/store/collections/${id}`, {
        next,
        cache: "force-cache",
    })
        .then(({ collection }) => collection);
};
exports.retrieveCollection = retrieveCollection;
const listCollections = async (queryParams = {}) => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("collections")),
    };
    queryParams.limit = queryParams.limit || "100";
    queryParams.offset = queryParams.offset || "0";
    return config_1.sdk.client
        .fetch("/store/collections", {
        query: queryParams,
        next,
        cache: "force-cache",
    })
        .then(({ collections }) => ({ collections, count: collections.length }));
};
exports.listCollections = listCollections;
const getCollectionByHandle = async (handle) => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("collections")),
    };
    return config_1.sdk.client
        .fetch(`/store/collections`, {
        query: { handle, fields: "*products" },
        next,
        cache: "force-cache",
    })
        .then(({ collections }) => collections[0]);
};
exports.getCollectionByHandle = getCollectionByHandle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS9jb2xsZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWix3Q0FBaUM7QUFFakMsdUNBQTJDO0FBRXBDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFO0lBQ3JELE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDLENBQUE7SUFFRCxPQUFPLFlBQUcsQ0FBQyxNQUFNO1NBQ2QsS0FBSyxDQUNKLHNCQUFzQixFQUFFLEVBQUUsRUFDMUI7UUFDRSxJQUFJO1FBQ0osS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FDRjtTQUNBLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FBQTtBQWRZLFFBQUEsa0JBQWtCLHNCQWM5QjtBQUVNLE1BQU0sZUFBZSxHQUFHLEtBQUssRUFDbEMsY0FBc0MsRUFBRSxFQUM4QixFQUFFO0lBQ3hFLE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDLENBQUE7SUFFRCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFBO0lBQzlDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUE7SUFFOUMsT0FBTyxZQUFHLENBQUMsTUFBTTtTQUNkLEtBQUssQ0FDSixvQkFBb0IsRUFDcEI7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJO1FBQ0osS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FDRjtTQUNBLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDNUUsQ0FBQyxDQUFBO0FBcEJZLFFBQUEsZUFBZSxtQkFvQjNCO0FBRU0sTUFBTSxxQkFBcUIsR0FBRyxLQUFLLEVBQ3hDLE1BQWMsRUFDc0IsRUFBRTtJQUN0QyxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsQ0FBQyxNQUFNLElBQUEseUJBQWUsRUFBQyxhQUFhLENBQUMsQ0FBQztLQUMxQyxDQUFBO0lBRUQsT0FBTyxZQUFHLENBQUMsTUFBTTtTQUNkLEtBQUssQ0FBd0Msb0JBQW9CLEVBQUU7UUFDbEUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7UUFDdEMsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUE7QUFkWSxRQUFBLHFCQUFxQix5QkFjakMifQ==