"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.declineTransferRequest = exports.acceptTransferRequest = exports.createTransferRequest = exports.listOrders = exports.retrieveOrder = void 0;
const config_1 = require("@lib/config");
const medusa_error_1 = __importDefault(require("@lib/util/medusa-error"));
const cookies_1 = require("./cookies");
const retrieveOrder = async (id) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("orders")),
    };
    return config_1.sdk.client
        .fetch(`/store/orders/${id}`, {
        method: "GET",
        query: {
            fields: "*payment_collections.payments,*items,*items.metadata,*items.variant,*items.product",
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ order }) => order)
        .catch((err) => (0, medusa_error_1.default)(err));
};
exports.retrieveOrder = retrieveOrder;
const listOrders = async (limit = 10, offset = 0, filters) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("orders")),
    };
    return config_1.sdk.client
        .fetch(`/store/orders`, {
        method: "GET",
        query: {
            limit,
            offset,
            order: "-created_at",
            fields: "*items,+items.metadata,*items.variant,*items.product",
            ...filters,
        },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ orders }) => orders)
        .catch((err) => (0, medusa_error_1.default)(err));
};
exports.listOrders = listOrders;
const createTransferRequest = async (state, formData) => {
    const id = formData.get("order_id");
    if (!id) {
        return { success: false, error: "Order ID is required", order: null };
    }
    const headers = await (0, cookies_1.getAuthHeaders)();
    return await config_1.sdk.store.order
        .requestTransfer(id, {}, {
        fields: "id, email",
    }, headers)
        .then(({ order }) => ({ success: true, error: null, order }))
        .catch((err) => ({ success: false, error: err.message, order: null }));
};
exports.createTransferRequest = createTransferRequest;
const acceptTransferRequest = async (id, token) => {
    const headers = await (0, cookies_1.getAuthHeaders)();
    return await config_1.sdk.store.order
        .acceptTransfer(id, { token }, {}, headers)
        .then(({ order }) => ({ success: true, error: null, order }))
        .catch((err) => ({ success: false, error: err.message, order: null }));
};
exports.acceptTransferRequest = acceptTransferRequest;
const declineTransferRequest = async (id, token) => {
    const headers = await (0, cookies_1.getAuthHeaders)();
    return await config_1.sdk.store.order
        .declineTransfer(id, { token }, {}, headers)
        .then(({ order }) => ({ success: true, error: null, order }))
        .catch((err) => ({ success: false, error: err.message, order: null }));
};
exports.declineTransferRequest = declineTransferRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbGliL2RhdGEvb3JkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7OztBQUVaLHdDQUFpQztBQUNqQywwRUFBZ0Q7QUFDaEQsdUNBQTJEO0FBR3BELE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE9BQU8sR0FBRztRQUNkLEdBQUcsQ0FBQyxNQUFNLElBQUEsd0JBQWMsR0FBRSxDQUFDO0tBQzVCLENBQUE7SUFFRCxNQUFNLElBQUksR0FBRztRQUNYLEdBQUcsQ0FBQyxNQUFNLElBQUEseUJBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztLQUNyQyxDQUFBO0lBRUQsT0FBTyxZQUFHLENBQUMsTUFBTTtTQUNkLEtBQUssQ0FBK0IsaUJBQWlCLEVBQUUsRUFBRSxFQUFFO1FBQzFELE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUNKLG9GQUFvRjtTQUN2RjtRQUNELE9BQU87UUFDUCxJQUFJO1FBQ0osS0FBSyxFQUFFLGFBQWE7S0FDckIsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUMxQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUEsc0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQTtBQXRCWSxRQUFBLGFBQWEsaUJBc0J6QjtBQUVNLE1BQU0sVUFBVSxHQUFHLEtBQUssRUFDN0IsUUFBZ0IsRUFBRSxFQUNsQixTQUFpQixDQUFDLEVBQ2xCLE9BQTZCLEVBQzdCLEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRztRQUNkLEdBQUcsQ0FBQyxNQUFNLElBQUEsd0JBQWMsR0FBRSxDQUFDO0tBQzVC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