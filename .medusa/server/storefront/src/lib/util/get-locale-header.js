"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleHeader = getLocaleHeader;
const locale_actions_1 = require("@lib/data/locale-actions");
async function getLocaleHeader() {
    const locale = await (0, locale_actions_1.getLocale)();
    return {
        "x-medusa-locale": locale,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWxvY2FsZS1oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvdXRpbC9nZXQtbG9jYWxlLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBDQUtDO0FBUEQsNkRBQW9EO0FBRTdDLEtBQUssVUFBVSxlQUFlO0lBQ25DLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSwwQkFBUyxHQUFFLENBQUE7SUFDaEMsT0FBTztRQUNMLGlCQUFpQixFQUFFLE1BQU07S0FDakIsQ0FBQTtBQUNaLENBQUMifQ==