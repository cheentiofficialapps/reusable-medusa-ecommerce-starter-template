"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveCart = retrieveCart;
exports.getOrSetCart = getOrSetCart;
exports.updateCart = updateCart;
exports.addToCart = addToCart;
exports.updateLineItem = updateLineItem;
exports.deleteLineItem = deleteLineItem;
exports.setShippingMethod = setShippingMethod;
exports.initiatePaymentSession = initiatePaymentSession;
exports.applyPromotions = applyPromotions;
exports.applyGiftCard = applyGiftCard;
exports.removeDiscount = removeDiscount;
exports.removeGiftCard = removeGiftCard;
exports.submitPromotionForm = submitPromotionForm;
exports.setAddresses = setAddresses;
exports.placeOrder = placeOrder;
exports.updateRegion = updateRegion;
exports.listCartOptions = listCartOptions;
const config_1 = require("@lib/config");
const medusa_error_1 = __importDefault(require("@lib/util/medusa-error"));
const cache_1 = require("next/cache");
const navigation_1 = require("next/navigation");
const cookies_1 = require("./cookies");
const regions_1 = require("./regions");
const locale_actions_1 = require("@lib/data/locale-actions");
/**
 * Retrieves a cart by its ID. If no ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to retrieve.
 * @returns The cart object if found, or null if not found.
 */
async function retrieveCart(cartId, fields) {
    const id = cartId || (await (0, cookies_1.getCartId)());
    fields ??=
        "*items, *region, *items.product, *items.variant, *items.thumbnail, *items.metadata, +items.total, *promotions, +shipping_methods.name";
    if (!id) {
        return null;
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("carts")),
    };
    return await config_1.sdk.client
        .fetch(`/store/carts/${id}`, {
        method: "GET",
        query: {
            fields,
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ cart }) => cart)
        .catch(() => null);
}
async function getOrSetCart(countryCode) {
    const region = await (0, regions_1.getRegion)(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    let cart = await retrieveCart(undefined, "id,region_id");
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    if (!cart) {
        const locale = await (0, locale_actions_1.getLocale)();
        const cartResp = await config_1.sdk.store.cart.create({ region_id: region.id, locale: locale || undefined }, {}, headers);
        cart = cartResp.cart;
        await (0, cookies_1.setCartId)(cart.id);
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
    }
    if (cart && cart?.region_id !== region.id) {
        await config_1.sdk.store.cart.update(cart.id, { region_id: region.id }, {}, headers);
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
    }
    return cart;
}
async function updateCart(data) {
    const cartId = await (0, cookies_1.getCartId)();
    if (!cartId) {
        throw new Error("No existing cart found, please create one before updating");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.cart
        .update(cartId, data, {}, headers)
        .then(async ({ cart }) => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        const fulfillmentCacheTag = await (0, cookies_1.getCacheTag)("fulfillment");
        (0, cache_1.revalidateTag)(fulfillmentCacheTag);
        return cart;
    })
        .catch(medusa_error_1.default);
}
async function addToCart({ variantId, quantity, countryCode, }) {
    if (!variantId) {
        throw new Error("Missing variant ID when adding to cart");
    }
    const cart = await getOrSetCart(countryCode);
    if (!cart) {
        throw new Error("Error retrieving or creating cart");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    await config_1.sdk.store.cart
        .createLineItem(cart.id, {
        variant_id: variantId,
        quantity,
    }, {}, headers)
        .then(async () => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        const fulfillmentCacheTag = await (0, cookies_1.getCacheTag)("fulfillment");
        (0, cache_1.revalidateTag)(fulfillmentCacheTag);
    })
        .catch(medusa_error_1.default);
}
async function updateLineItem({ lineId, quantity, }) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when updating line item");
    }
    const cartId = await (0, cookies_1.getCartId)();
    if (!cartId) {
        throw new Error("Missing cart ID when updating line item");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    await config_1.sdk.store.cart
        .updateLineItem(cartId, lineId, { quantity }, {}, headers)
        .then(async () => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        const fulfillmentCacheTag = await (0, cookies_1.getCacheTag)("fulfillment");
        (0, cache_1.revalidateTag)(fulfillmentCacheTag);
    })
        .catch(medusa_error_1.default);
}
async function deleteLineItem(lineId) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when deleting line item");
    }
    const cartId = await (0, cookies_1.getCartId)();
    if (!cartId) {
        throw new Error("Missing cart ID when deleting line item");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    await config_1.sdk.store.cart
        .deleteLineItem(cartId, lineId, {}, headers)
        .then(async () => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        const fulfillmentCacheTag = await (0, cookies_1.getCacheTag)("fulfillment");
        (0, cache_1.revalidateTag)(fulfillmentCacheTag);
    })
        .catch(medusa_error_1.default);
}
async function setShippingMethod({ cartId, shippingMethodId, }) {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.cart
        .addShippingMethod(cartId, { option_id: shippingMethodId }, {}, headers)
        .then(async () => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
    })
        .catch(medusa_error_1.default);
}
async function initiatePaymentSession(cart, data) {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.payment
        .initiatePaymentSession(cart, data, {}, headers)
        .then(async (resp) => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        return resp;
    })
        .catch(medusa_error_1.default);
}
async function applyPromotions(codes) {
    const cartId = await (0, cookies_1.getCartId)();
    if (!cartId) {
        throw new Error("No existing cart found");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.cart
        .update(cartId, { promo_codes: codes }, {}, headers)
        .then(async () => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        const fulfillmentCacheTag = await (0, cookies_1.getCacheTag)("fulfillment");
        (0, cache_1.revalidateTag)(fulfillmentCacheTag);
    })
        .catch(medusa_error_1.default);
}
async function applyGiftCard(code) {
    //   const cartId = getCartId()
    //   if (!cartId) return "No cartId cookie found"
    //   try {
    //     await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
    //       revalidateTag("cart")
    //     })
    //   } catch (error: any) {
    //     throw error
    //   }
}
async function removeDiscount(code) {
    // const cartId = getCartId()
    // if (!cartId) return "No cartId cookie found"
    // try {
    //   await deleteDiscount(cartId, code)
    //   revalidateTag("cart")
    // } catch (error: any) {
    //   throw error
    // }
}
async function removeGiftCard(codeToRemove, giftCards
// giftCards: GiftCard[]
) {
    //   const cartId = getCartId()
    //   if (!cartId) return "No cartId cookie found"
    //   try {
    //     await updateCart(cartId, {
    //       gift_cards: [...giftCards]
    //         .filter((gc) => gc.code !== codeToRemove)
    //         .map((gc) => ({ code: gc.code })),
    //     }).then(() => {
    //       revalidateTag("cart")
    //     })
    //   } catch (error: any) {
    //     throw error
    //   }
}
async function submitPromotionForm(currentState, formData) {
    const code = formData.get("code");
    try {
        await applyPromotions([code]);
    }
    catch (e) {
        return e.message;
    }
}
// TODO: Pass a POJO instead of a form entity here
async function setAddresses(currentState, formData) {
    try {
        if (!formData) {
            throw new Error("No form data found when setting addresses");
        }
        const cartId = (0, cookies_1.getCartId)();
        if (!cartId) {
            throw new Error("No existing cart found when setting addresses");
        }
        const data = {
            shipping_address: {
                first_name: formData.get("shipping_address.first_name"),
                last_name: formData.get("shipping_address.last_name"),
                address_1: formData.get("shipping_address.address_1"),
                address_2: "",
                company: formData.get("shipping_address.company"),
                postal_code: formData.get("shipping_address.postal_code"),
                city: formData.get("shipping_address.city"),
                country_code: formData.get("shipping_address.country_code"),
                province: formData.get("shipping_address.province"),
                phone: formData.get("shipping_address.phone"),
            },
            email: formData.get("email"),
        };
        const sameAsBilling = formData.get("same_as_billing");
        if (sameAsBilling === "on")
            data.billing_address = data.shipping_address;
        if (sameAsBilling !== "on")
            data.billing_address = {
                first_name: formData.get("billing_address.first_name"),
                last_name: formData.get("billing_address.last_name"),
                address_1: formData.get("billing_address.address_1"),
                address_2: "",
                company: formData.get("billing_address.company"),
                postal_code: formData.get("billing_address.postal_code"),
                city: formData.get("billing_address.city"),
                country_code: formData.get("billing_address.country_code"),
                province: formData.get("billing_address.province"),
                phone: formData.get("billing_address.phone"),
            };
        await updateCart(data);
    }
    catch (e) {
        return e.message;
    }
    (0, navigation_1.redirect)(`/${formData.get("shipping_address.country_code")}/checkout?step=delivery`);
}
/**
 * Places an order for a cart. If no cart ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to place an order for.
 * @returns The cart object if the order was successful, or null if not.
 */
async function placeOrder(cartId) {
    const id = cartId || (await (0, cookies_1.getCartId)());
    if (!id) {
        throw new Error("No existing cart found when placing an order");
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const cartRes = await config_1.sdk.store.cart
        .complete(id, {}, headers)
        .then(async (cartRes) => {
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
        return cartRes;
    })
        .catch(medusa_error_1.default);
    if (cartRes?.type === "order") {
        const countryCode = cartRes.order.shipping_address?.country_code?.toLowerCase();
        const orderCacheTag = await (0, cookies_1.getCacheTag)("orders");
        (0, cache_1.revalidateTag)(orderCacheTag);
        (0, cookies_1.removeCartId)();
        (0, navigation_1.redirect)(`/${countryCode}/order/${cartRes?.order.id}/confirmed`);
    }
    return cartRes.cart;
}
/**
 * Updates the countrycode param and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
async function updateRegion(countryCode, currentPath) {
    const cartId = await (0, cookies_1.getCartId)();
    const region = await (0, regions_1.getRegion)(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    if (cartId) {
        await updateCart({ region_id: region.id });
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        (0, cache_1.revalidateTag)(cartCacheTag);
    }
    const regionCacheTag = await (0, cookies_1.getCacheTag)("regions");
    (0, cache_1.revalidateTag)(regionCacheTag);
    const productsCacheTag = await (0, cookies_1.getCacheTag)("products");
    (0, cache_1.revalidateTag)(productsCacheTag);
    (0, navigation_1.redirect)(`/${countryCode}${currentPath}`);
}
async function listCartOptions() {
    const cartId = await (0, cookies_1.getCartId)();
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("shippingOptions")),
    };
    return await config_1.sdk.client.fetch("/store/shipping-options", {
        query: { cart_id: cartId },
        next,
        headers,
        cache: "force-cache",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL2NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7QUF1Qlosb0NBNkJDO0FBRUQsb0NBbUNDO0FBRUQsZ0NBdUJDO0FBRUQsOEJBeUNDO0FBRUQsd0NBK0JDO0FBRUQsd0NBeUJDO0FBRUQsOENBa0JDO0FBRUQsd0RBZ0JDO0FBRUQsMENBcUJDO0FBRUQsc0NBVUM7QUFFRCx3Q0FTQztBQUVELHdDQWtCQztBQUVELGtEQVVDO0FBR0Qsb0NBa0RDO0FBT0QsZ0NBZ0NDO0FBT0Qsb0NBcUJDO0FBRUQsMENBaUJDO0FBdGRELHdDQUFpQztBQUNqQywwRUFBZ0Q7QUFFaEQsc0NBQTBDO0FBQzFDLGdEQUEwQztBQUMxQyx1Q0FPa0I7QUFDbEIsdUNBQXFDO0FBQ3JDLDZEQUFvRDtBQUVwRDs7OztHQUlHO0FBQ0ksS0FBSyxVQUFVLFlBQVksQ0FBQyxNQUFlLEVBQUUsTUFBZTtJQUNqRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUEsbUJBQVMsR0FBRSxDQUFDLENBQUE7SUFDeEMsTUFBTTtRQUNKLHVJQUF1SSxDQUFBO0lBRXpJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNSLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRyxDQUFDLE1BQU0sSUFBQSx3QkFBYyxHQUFFLENBQUM7S0FDNUIsQ0FBQTtJQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1gsR0FBRyxDQUFDLE1BQU0sSUFBQSx5QkFBZSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDLENBQUE7SUFFRCxPQUFPLE1BQU0sWUFBRyxDQUFDLE1BQU07U0FDcEIsS0FBSyxDQUE4QixnQkFBZ0IsRUFBRSxFQUFFLEVBQUU7UUFDeEQsTUFBTSxFQUFFLEtBQUs7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