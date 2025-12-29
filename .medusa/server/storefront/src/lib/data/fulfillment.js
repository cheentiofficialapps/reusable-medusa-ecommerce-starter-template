"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePriceForShippingOption = exports.listCartShippingMethods = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
const listCartShippingMethods = async (cartId) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("fulfillment")),
    };
    return config_1.sdk.client
        .fetch(`/store/shipping-options`, {
        method: "GET",
        query: {
            cart_id: cartId,
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ shipping_options }) => shipping_options)
        .catch(() => {
        return null;
    });
};
exports.listCartShippingMethods = listCartShippingMethods;
const calculatePriceForShippingOption = async (optionId, cartId, data) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("fulfillment")),
    };
    const body = { cart_id: cartId, data };
    if (data) {
        body.data = data;
    }
    return config_1.sdk.client
        .fetch(`/store/shipping-options/${optionId}/calculate`, {
        method: "POST",
        body,
        headers,
        next,
    })
        .then(({ shipping_option }) => shipping_option)
        .catch((e) => {
        return null;
    });
};
exports.calculatePriceForShippingOption = calculatePriceForShippingOption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsZmlsbG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS9mdWxmaWxsbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWix3Q0FBaUM7QUFFakMsdUNBQTJEO0FBRXBELE1BQU0sdUJBQXVCLEdBQUcsS0FBSyxFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQzlELE1BQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRyxDQUFDLE1BQU0sSUFBQSx3QkFBYyxHQUFFLENBQUM7S0FDNUIsQ0FBQTtJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDLENBQUE7SUFFRCxPQUFPLFlBQUcsQ0FBQyxNQUFNO1NBQ2QsS0FBSyxDQUNKLHlCQUF5QixFQUN6QjtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxPQUFPO1FBQ1AsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQ0Y7U0FDQSxJQUFJLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQ2hELEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBMUJZLFFBQUEsdUJBQXVCLDJCQTBCbkM7QUFFTSxNQUFNLCtCQUErQixHQUFHLEtBQUssRUFDbEQsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQThCLEVBQzlCLEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRztRQUNkLEdBQUcsQ0FBQyxNQUFNLElBQUEsd0JBQWMsR0FBRSxDQUFDO0tBQzVCLENBQUE7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsQ0FBQyxNQUFNLElBQUEseUJBQWUsRUFBQyxhQUFhLENBQUMsQ0FBQztLQUMxQyxDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFBO0lBRXRDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsT0FBTyxZQUFHLENBQUMsTUFBTTtTQUNkLEtBQUssQ0FDSiwyQkFBMkIsUUFBUSxZQUFZLEVBQy9DO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJO1FBQ0osT0FBTztRQUNQLElBQUk7S0FDTCxDQUNGO1NBQ0EsSUFBSSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQWpDWSxRQUFBLCtCQUErQixtQ0FpQzNDIn0=