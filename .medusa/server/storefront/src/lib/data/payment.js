"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCartPaymentMethods = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
const listCartPaymentMethods = async (regionId) => {
    const headers = {
        ...(await (0, cookies_1.getAuthHeaders)()),
    };
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("payment_providers")),
    };
    return config_1.sdk.client
        .fetch(`/store/payment-providers`, {
        method: "GET",
        query: { region_id: regionId },
        headers,
        next,
        cache: "force-cache",
    })
        .then(({ payment_providers }) => payment_providers.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
    }))
        .catch(() => {
        return null;
    });
};
exports.listCartPaymentMethods = listCartPaymentMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL3BheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7O0FBRVosd0NBQWlDO0FBQ2pDLHVDQUEyRDtBQUdwRCxNQUFNLHNCQUFzQixHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDL0QsTUFBTSxPQUFPLEdBQUc7UUFDZCxHQUFHLENBQUMsTUFBTSxJQUFBLHdCQUFjLEdBQUUsQ0FBQztLQUM1QixDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLENBQUMsTUFBTSxJQUFBLHlCQUFlLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUNoRCxDQUFBO0lBRUQsT0FBTyxZQUFHLENBQUMsTUFBTTtTQUNkLEtBQUssQ0FDSiwwQkFBMEIsRUFDMUI7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7UUFDOUIsT0FBTztRQUNQLElBQUk7UUFDSixLQUFLLEVBQUUsYUFBYTtLQUNyQixDQUNGO1NBQ0EsSUFBSSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FDOUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdCLENBQUMsQ0FBQyxDQUNIO1NBQ0EsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUE1QlksUUFBQSxzQkFBc0IsMEJBNEJsQyJ9