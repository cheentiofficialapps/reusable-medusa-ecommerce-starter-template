"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
const get_locale_header_1 = require("@lib/util/get-locale-header");
const js_sdk_1 = __importDefault(require("@medusajs/js-sdk"));
// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000";
if (process.env.MEDUSA_BACKEND_URL) {
    MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL;
}
exports.sdk = new js_sdk_1.default({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: process.env.NODE_ENV === "development",
    publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
});
const originalFetch = exports.sdk.client.fetch.bind(exports.sdk.client);
exports.sdk.client.fetch = async (input, init) => {
    const headers = init?.headers ?? {};
    let localeHeader;
    try {
        localeHeader = await (0, get_locale_header_1.getLocaleHeader)();
        headers["x-medusa-locale"] ??= localeHeader["x-medusa-locale"];
    }
    catch { }
    const newHeaders = {
        ...localeHeader,
        ...headers,
    };
    init = {
        ...init,
        headers: newHeaders,
    };
    return originalFetch(input, init);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbGliL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtRUFBNkQ7QUFDN0QsOERBQWdFO0FBRWhFLDhDQUE4QztBQUM5QyxJQUFJLGtCQUFrQixHQUFHLHVCQUF1QixDQUFBO0FBRWhELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ25DLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUE7QUFDckQsQ0FBQztBQUVZLFFBQUEsR0FBRyxHQUFHLElBQUksZ0JBQU0sQ0FBQztJQUM1QixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhO0lBQzdDLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQztDQUMvRCxDQUFDLENBQUE7QUFFRixNQUFNLGFBQWEsR0FBRyxXQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXZELFdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssRUFDdEIsS0FBaUIsRUFDakIsSUFBZ0IsRUFDSixFQUFFO0lBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDbkMsSUFBSSxZQUF1RCxDQUFBO0lBQzNELElBQUksQ0FBQztRQUNILFlBQVksR0FBRyxNQUFNLElBQUEsbUNBQWUsR0FBRSxDQUFBO1FBQ3RDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO0lBRVYsTUFBTSxVQUFVLEdBQUc7UUFDakIsR0FBRyxZQUFZO1FBQ2YsR0FBRyxPQUFPO0tBQ1gsQ0FBQTtJQUNELElBQUksR0FBRztRQUNMLEdBQUcsSUFBSTtRQUNQLE9BQU8sRUFBRSxVQUFVO0tBQ3BCLENBQUE7SUFDRCxPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBIn0=