"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLocales = void 0;
const config_1 = require("@lib/config");
const cookies_1 = require("./cookies");
/**
 * Fetches available locales from the backend.
 * Returns null if the endpoint returns 404 (locales not configured).
 */
const listLocales = async () => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("locales")),
    };
    return config_1.sdk.client
        .fetch(`/store/locales`, {
        method: "GET",
        next,
        cache: "force-cache",
    })
        .then(({ locales }) => locales)
        .catch(() => null);
};
exports.listLocales = listLocales;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL2xvY2FsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7O0FBRVosd0NBQWlDO0FBQ2pDLHVDQUEyQztBQU8zQzs7O0dBR0c7QUFDSSxNQUFNLFdBQVcsR0FBRyxLQUFLLElBQThCLEVBQUU7SUFDOUQsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLENBQUMsTUFBTSxJQUFBLHlCQUFlLEVBQUMsU0FBUyxDQUFDLENBQUM7S0FDdEMsQ0FBQTtJQUVELE9BQU8sWUFBRyxDQUFDLE1BQU07U0FDZCxLQUFLLENBQXdCLGdCQUFnQixFQUFFO1FBQzlDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDOUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQWJZLFFBQUEsV0FBVyxlQWF2QiJ9