"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerAddress = exports.deleteCustomerAddress = exports.addCustomerAddress = exports.updateCustomer = exports.retrieveCustomer = void 0;
exports.signup = signup;
exports.login = login;
exports.signout = signout;
exports.transferCart = transferCart;
const config_1 = require("@lib/config");
const medusa_error_1 = __importDefault(require("@lib/util/medusa-error"));
const cache_1 = require("next/cache");
const navigation_1 = require("next/navigation");
const cookies_1 = require("./cookies");
const retrieveCustomer = async () => {
    const authHeaders = await (0, cookies_1.getAuthHeaders)();
    if (!authHeaders)
        return null;
    const headers = {
        ...authHeaders,
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("customers")),
    };
    return await config_1.sdk.client
        .fetch(`/store/customers/me`, {
        method: "GET",
        query: {
            fields: "*orders",
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ customer }) => customer)
        .catch(() => null);
};
exports.retrieveCustomer = retrieveCustomer;
const updateCustomer = async (body) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const updateRes = await config_1.sdk.store.customer
        .update(body, {}, headers)
        .then(({ customer }) => customer)
        .catch(medusa_error_1.default);
    const cacheTag = await (0, cookies_1.getCacheTag)("customers");
    (0, cache_1.revalidateTag)(cacheTag);
    return updateRes;
};
exports.updateCustomer = updateCustomer;
async function signup(_currentState, formData) {
    const password = formData.get("password");
    const customerForm = {
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        phone: formData.get("phone"),
    };
    try {
        const token = await config_1.sdk.auth.register("customer", "emailpass", {
            email: customerForm.email,
            password: password,
        });
        await (0, cookies_1.setAuthToken)(token);
        const headers = {
            ...(await (0, cookies_1.getAuthHeaders)()),
        };
        const { customer: createdCustomer } = await config_1.sdk.store.customer.create(customerForm, {}, headers);
        const loginToken = await config_1.sdk.auth.login("customer", "emailpass", {
            email: customerForm.email,
            password,
        });
        await (0, cookies_1.setAuthToken)(loginToken);
        const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
        (0, cache_1.revalidateTag)(customerCacheTag);
        await transferCart();
        return createdCustomer;
    }
    catch (error) {
        return error.toString();
    }
}
async function login(_currentState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        await config_1.sdk.auth
            .login("customer", "emailpass", { email, password })
            .then(async (token) => {
            await (0, cookies_1.setAuthToken)(token);
            const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
            (0, cache_1.revalidateTag)(customerCacheTag);
        });
    }
    catch (error) {
        return error.toString();
    }
    try {
        await transferCart();
    }
    catch (error) {
        return error.toString();
    }
}
async function signout(countryCode) {
    await config_1.sdk.auth.logout();
    await (0, cookies_1.removeAuthToken)();
    const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
    (0, cache_1.revalidateTag)(customerCacheTag);
    await (0, cookies_1.removeCartId)();
    const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
    (0, cache_1.revalidateTag)(cartCacheTag);
    (0, navigation_1.redirect)(`/${countryCode}/account`);
}
async function transferCart() {
    const cartId = await (0, cookies_1.getCartId)();
    if (!cartId) {
        return;
    }
    const headers = await (0, cookies_1.getAuthHeaders)();
    await config_1.sdk.store.cart.transferCart(cartId, {}, headers);
    const cartCacheTag = await (0, cookies_1.getCacheTag)("carts");
    (0, cache_1.revalidateTag)(cartCacheTag);
}
const addCustomerAddress = async (currentState, formData) => {
    const isDefaultBilling = currentState.isDefaultBilling || false;
    const isDefaultShipping = currentState.isDefaultShipping || false;
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code"),
        phone: formData.get("phone"),
        is_default_billing: isDefaultBilling,
        is_default_shipping: isDefaultShipping,
    };
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.customer
        .createAddress(address, {}, headers)
        .then(async ({ customer }) => {
        const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
        (0, cache_1.revalidateTag)(customerCacheTag);
        return { success: true, error: null };
    })
        .catch((err) => {
        return { success: false, error: err.toString() };
    });
};
exports.addCustomerAddress = addCustomerAddress;
const deleteCustomerAddress = async (addressId) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    await config_1.sdk.store.customer
        .deleteAddress(addressId, headers)
        .then(async () => {
        const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
        (0, cache_1.revalidateTag)(customerCacheTag);
        return { success: true, error: null };
    })
        .catch((err) => {
        return { success: false, error: err.toString() };
    });
};
exports.deleteCustomerAddress = deleteCustomerAddress;
const updateCustomerAddress = async (currentState, formData) => {
    const addressId = currentState.addressId || formData.get("addressId");
    if (!addressId) {
        return { success: false, error: "Address ID is required" };
    }
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code"),
    };
    const phone = formData.get("phone");
    if (phone) {
        address.phone = phone;
    }
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    return config_1.sdk.store.customer
        .updateAddress(addressId, address, {}, headers)
        .then(async () => {
        const customerCacheTag = await (0, cookies_1.getCacheTag)("customers");
        (0, cache_1.revalidateTag)(customerCacheTag);
        return { success: true, error: null };
    })
        .catch((err) => {
        return { success: false, error: err.toString() };
    });
};
exports.updateCustomerAddress = updateCustomerAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvZGF0YS9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUE2RFosd0JBMkNDO0FBRUQsc0JBcUJDO0FBRUQsMEJBY0M7QUFFRCxvQ0FhQztBQTVKRCx3Q0FBaUM7QUFDakMsMEVBQWdEO0FBRWhELHNDQUEwQztBQUMxQyxnREFBMEM7QUFDMUMsdUNBUWtCO0FBRVgsTUFBTSxnQkFBZ0IsR0FDM0IsS0FBSyxJQUE2QyxFQUFFO0lBQ2xELE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBQSx3QkFBYyxHQUFFLENBQUE7SUFFMUMsSUFBSSxDQUFDLFdBQVc7UUFBRSxPQUFPLElBQUksQ0FBQTtJQUU3QixNQUFNLE9BQU8sR0FBRztRQUNkLEdBQUcsV0FBVztLQUNmLENBQUE7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsQ0FBQyxNQUFNLElBQUEseUJBQWUsRUFBQyxXQUFXLENBQUMsQ0FBQztLQUN4QyxDQUFBO0lBRUQsT0FBTyxNQUFNLFlBQUcsQ0FBQyxNQUFNO1NBQ3BCLEtBQUssQ0FBd0MscUJBQXFCLEVBQUU7UUFDbkUsTUFBTSxFQUFFLEtBQUs7UUFDYixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsU0FBUztTQUNsQjtRQUNELE9BQU87UUFDUCxJQUFJO1FBQ0osS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBMUJVLFFBQUEsZ0JBQWdCLG9CQTBCMUI7QUFFSSxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsSUFBbUMsRUFBRSxFQUFFO0lBQzFF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