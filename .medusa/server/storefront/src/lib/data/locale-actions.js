"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLocale = exports.setLocaleCookie = exports.getLocale = void 0;
const config_1 = require("@lib/config");
const cache_1 = require("next/cache");
const headers_1 = require("next/headers");
const cookies_1 = require("./cookies");
const LOCALE_COOKIE_NAME = "_medusa_locale";
/**
 * Gets the current locale from cookies
 */
const getLocale = async () => {
    try {
        const cookies = await (0, headers_1.cookies)();
        return cookies.get(LOCALE_COOKIE_NAME)?.value ?? null;
    }
    catch {
        return null;
    }
};
exports.getLocale = getLocale;
/**
 * Sets the locale cookie
 */
const setLocaleCookie = async (locale) => {
    const cookies = await (0, headers_1.cookies)();
    cookies.set(LOCALE_COOKIE_NAME, locale, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false, // Allow client-side access
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
};
exports.setLocaleCookie = setLocaleCookie;
/**
 * Updates the locale preference via SDK and stores in cookie.
 * Also updates the cart with the new locale if one exists.
 */
const updateLocale = async (localeCode) => {
    await (0, exports.setLocaleCookie)(localeCode);
    // Update cart with the new locale if a cart exists
    const cartId = await (0, cookies_1.getCartId)();
    if (cartId) {
        const headers = {
            ...(await (0, cookies_1.getAuthHeaders)()),
        };
        await config_1.sdk.store.cart.update(cartId, { locale: localeCode }, {}, headers);
        const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
        if (cartCacheTag) {
            (0, cache_1.revalidateTag)(cartCacheTag);
        }
    }
    // Revalidate relevant caches to refresh content
    const productsCacheTag = await (0, cookies_1.getCacheTag)("products");
    if (productsCacheTag) {
        (0, cache_1.revalidateTag)(productsCacheTag);
    }
    const categoriesCacheTag = await (0, cookies_1.getCacheTag)("categories");
    if (categoriesCacheTag) {
        (0, cache_1.revalidateTag)(categoriesCacheTag);
    }
    const collectionsCacheTag = await (0, cookies_1.getCacheTag)("collections");
    if (collectionsCacheTag) {
        (0, cache_1.revalidateTag)(collectionsCacheTag);
    }
    return localeCode;
};
exports.updateLocale = updateLocale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS9sb2NhbGUtYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7QUFFWix3Q0FBaUM7QUFDakMsc0NBQTBDO0FBQzFDLDBDQUFxRDtBQUNyRCx1Q0FBa0U7QUFFbEUsTUFBTSxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQTtBQUUzQzs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLEtBQUssSUFBNEIsRUFBRTtJQUMxRCxJQUFJLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsaUJBQVcsR0FBRSxDQUFBO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUE7SUFDdkQsQ0FBQztJQUFDLE1BQU0sQ0FBQztRQUNQLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztBQUNILENBQUMsQ0FBQTtBQVBZLFFBQUEsU0FBUyxhQU9yQjtBQUVEOztHQUVHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQ3RELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSxpQkFBVyxHQUFFLENBQUE7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7UUFDdEMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxTQUFTO1FBQ3JDLFFBQVEsRUFBRSxLQUFLLEVBQUUsMkJBQTJCO1FBQzVDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZO0tBQzlDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQVJZLFFBQUEsZUFBZSxtQkFRM0I7QUFFRDs7O0dBR0c7QUFDSSxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsVUFBa0IsRUFBbUIsRUFBRTtJQUN4RSxNQUFNLElBQUEsdUJBQWUsRUFBQyxVQUFVLENBQUMsQ0FBQTtJQUVqQyxtREFBbUQ7SUFDbkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLG1CQUFTLEdBQUUsQ0FBQTtJQUNoQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHLENBQUMsTUFBTSxJQUFBLHdCQUFjLEdBQUUsQ0FBQztTQUM1QixDQUFBO1FBRUQsTUFBTSxZQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUV4RSxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUEscUJBQVcsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2pCLElBQUEscUJBQWEsRUFBQyxZQUFZLENBQUMsQ0FBQTtRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELGdEQUFnRDtJQUNoRCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sSUFBQSxxQkFBVyxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RELElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNyQixJQUFBLHFCQUFhLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLElBQUEscUJBQVcsRUFBQyxZQUFZLENBQUMsQ0FBQTtJQUMxRCxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDdkIsSUFBQSxxQkFBYSxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxJQUFBLHFCQUFXLEVBQUMsYUFBYSxDQUFDLENBQUE7SUFDNUQsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLElBQUEscUJBQWEsRUFBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxPQUFPLFVBQVUsQ0FBQTtBQUNuQixDQUFDLENBQUE7QUFuQ1ksUUFBQSxZQUFZLGdCQW1DeEIifQ==