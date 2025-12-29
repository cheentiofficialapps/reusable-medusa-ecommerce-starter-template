"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCartId = exports.setCartId = exports.getCartId = exports.removeAuthToken = exports.setAuthToken = exports.getCacheOptions = exports.getCacheTag = exports.getAuthHeaders = void 0;
require("server-only");
const headers_1 = require("next/headers");
const getAuthHeaders = async () => {
    try {
        const cookies = await (0, headers_1.cookies)();
        const token = cookies.get("_medusa_jwt")?.value;
        if (!token) {
            return {};
        }
        return { authorization: `Bearer ${token}` };
    }
    catch {
        return {};
    }
};
exports.getAuthHeaders = getAuthHeaders;
const getCacheTag = async (tag) => {
    try {
        const cookies = await (0, headers_1.cookies)();
        const cacheId = cookies.get("_medusa_cache_id")?.value;
        if (!cacheId) {
            return "";
        }
        return `${tag}-${cacheId}`;
    }
    catch (error) {
        return "";
    }
};
exports.getCacheTag = getCacheTag;
const getCacheOptions = async (tag) => {
    if (typeof window !== "undefined") {
        return {};
    }
    const cacheTag = await (0, exports.getCacheTag)(tag);
    if (!cacheTag) {
        return {};
    }
    return { tags: [`${cacheTag}`] };
};
exports.getCacheOptions = getCacheOptions;
const setAuthToken = async (token) => {
    const cookies = await (0, headers_1.cookies)();
    cookies.set("_medusa_jwt", token, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
};
exports.setAuthToken = setAuthToken;
const removeAuthToken = async () => {
    const cookies = await (0, headers_1.cookies)();
    cookies.set("_medusa_jwt", "", {
        maxAge: -1,
    });
};
exports.removeAuthToken = removeAuthToken;
const getCartId = async () => {
    const cookies = await (0, headers_1.cookies)();
    return cookies.get("_medusa_cart_id")?.value;
};
exports.getCartId = getCartId;
const setCartId = async (cartId) => {
    const cookies = await (0, headers_1.cookies)();
    cookies.set("_medusa_cart_id", cartId, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
};
exports.setCartId = setCartId;
const removeCartId = async () => {
    const cookies = await (0, headers_1.cookies)();
    cookies.set("_medusa_cart_id", "", {
        maxAge: -1,
    });
};
exports.removeCartId = removeCartId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL2Nvb2tpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUJBQW9CO0FBQ3BCLDBDQUFxRDtBQUU5QyxNQUFNLGNBQWMsR0FBRyxLQUFLLElBRWpDLEVBQUU7SUFDRixJQUFJLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsaUJBQVcsR0FBRSxDQUFBO1FBQ25DLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFBO1FBRS9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRSxDQUFBO0lBQzdDLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7QUFDSCxDQUFDLENBQUE7QUFmWSxRQUFBLGNBQWMsa0JBZTFCO0FBRU0sTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBbUIsRUFBRTtJQUNoRSxJQUFJLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsaUJBQVcsR0FBRSxDQUFBO1FBQ25DLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLENBQUE7UUFFdEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUE7UUFDWCxDQUFDO1FBRUQsT0FBTyxHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztBQUNILENBQUMsQ0FBQTtBQWJZLFFB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