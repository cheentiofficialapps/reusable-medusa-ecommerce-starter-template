"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryByHandle = exports.listCategories = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
const listCategories = async (query) => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("categories")),
    };
    const limit = query?.limit || 100;
    return config_1.sdk.client
        .fetch("/store/product-categories", {
        query: {
            fields: "*category_children, *products, *parent_category, *parent_category.parent_category",
            limit,
            ...query,
        },
        next,
        cache: "force-cache",
    })
        .then(({ product_categories }) => product_categories);
};
exports.listCategories = listCategories;
const getCategoryByHandle = async (categoryHandle) => {
    const handle = `${categoryHandle.join("/")}`;
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("categories")),
    };
    return config_1.sdk.client
        .fetch(`/store/product-categories`, {
        query: {
            fields: "*category_children, *products",
            handle,
        },
        next,
        cache: "force-cache",
    })
        .then(({ product_categories }) => product_categories[0]);
};
exports.getCategoryByHandle = getCategoryByHandle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL2NhdGVnb3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQWlDO0FBRWpDLHVDQUEyQztBQUVwQyxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsS0FBMkIsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pDLENBQUE7SUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxJQUFJLEdBQUcsQ0FBQTtJQUVqQyxPQUFPLFlBQUcsQ0FBQyxNQUFNO1NBQ2QsS0FBSyxDQUNKLDJCQUEyQixFQUMzQjtRQUNFLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFDSixtRkFBbUY7WUFDckYsS0FBSztZQUNMLEdBQUcsS0FBSztTQUNUO1FBQ0QsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQ0Y7U0FDQSxJQUFJLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFBO0FBdEJZLFFBQUEsY0FBYyxrQkFzQjFCO0FBRU0sTUFBTSxtQkFBbUIsR0FBRyxLQUFLLEVBQUUsY0FBd0IsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBO0lBRTVDLE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pDLENBQUE7SUFFRCxPQUFPLFlBQUcsQ0FBQyxNQUFNO1NBQ2QsS0FBSyxDQUNKLDJCQUEyQixFQUMzQjtRQUNFLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsTUFBTTtTQUNQO1FBQ0QsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQ0Y7U0FDQSxJQUFJLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDNUQsQ0FBQyxDQUFBO0FBcEJZLFFBQUEsbUJBQW1CLHVCQW9CL0IifQ==