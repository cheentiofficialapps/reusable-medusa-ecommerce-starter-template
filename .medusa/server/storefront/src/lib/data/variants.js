"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveVariant = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
const retrieveVariant = async (variant_id) => {
    const authHeaders = await (0, cookies_1.getAuthHeaders)();
    if (!authHeaders)
        return null;
    const headers = {
        ...authHeaders,
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("variants")),
    };
    return await config_1.sdk.client
        .fetch(`/store/product-variants/${variant_id}`, {
        method: "GET",
        query: {
            fields: "*images",
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ variant }) => variant)
        .catch(() => null);
};
exports.retrieveVariant = retrieveVariant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS92YXJpYW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWix3Q0FBaUM7QUFHakMsdUNBQTJEO0FBRXBELE1BQU0sZUFBZSxHQUFHLEtBQUssRUFDbEMsVUFBa0IsRUFDNkIsRUFBRTtJQUNqRCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUEsd0JBQWMsR0FBRSxDQUFBO0lBRTFDLElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTyxJQUFJLENBQUE7SUFFN0IsTUFBTSxPQUFPLEdBQUc7UUFDZCxHQUFHLFdBQVc7S0FDZixDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLENBQUMsTUFBTSxJQUFBLHlCQUFlLEVBQUMsVUFBVSxDQUFDLENBQUM7S0FDdkMsQ0FBQTtJQUVELE9BQU8sTUFBTSxZQUFHLENBQUMsTUFBTTtTQUNwQixLQUFLLENBQ0osMkJBQTJCLFVBQVUsRUFBRSxFQUN2QztRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxPQUFPO1FBQ1AsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQ0Y7U0FDQSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDOUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQTlCWSxRQUFBLGVBQWUsbUJBOEIzQiJ9