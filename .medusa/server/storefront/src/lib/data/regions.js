"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegion = exports.retrieveRegion = exports.listRegions = void 0;
const config_1 = require("@lib/config");
const medusa_error_1 = __importDefault(require("@lib/util/medusa-error"));
const cookies_1 = require("./cookies");
const listRegions = async () => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)("regions")),
    };
    return config_1.sdk.client
        .fetch(`/store/regions`, {
        method: "GET",
        next,
        cache: "force-cache",
    })
        .then(({ regions }) => regions)
        .catch(medusa_error_1.default);
};
exports.listRegions = listRegions;
const retrieveRegion = async (id) => {
    const next = {
        ...(await (0, cookies_1.getCacheOptions)(["regions", id].join("-"))),
    };
    return config_1.sdk.client
        .fetch(`/store/regions/${id}`, {
        method: "GET",
        next,
        cache: "force-cache",
    })
        .then(({ region }) => region)
        .catch(medusa_error_1.default);
};
exports.retrieveRegion = retrieveRegion;
const regionMap = new Map();
const getRegion = async (countryCode) => {
    try {
        if (regionMap.has(countryCode)) {
            return regionMap.get(countryCode);
        }
        const regions = await (0, exports.listRegions)();
        if (!regions) {
            return null;
        }
        regions.forEach((region) => {
            region.countries?.forEach((c) => {
                regionMap.set(c?.iso_2 ?? "", region);
            });
        });
        const region = countryCode
            ? regionMap.get(countryCode)
            : regionMap.get("us");
        return region;
    }
    catch (e) {
        return null;
    }
};
exports.getRegion = getRegion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9kYXRhL3JlZ2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVosd0NBQWlDO0FBQ2pDLDBFQUFnRDtBQUVoRCx1Q0FBMkM7QUFFcEMsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEMsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLENBQUMsTUFBTSxJQUFBLHlCQUFlLEVBQUMsU0FBUyxDQUFDLENBQUM7S0FDdEMsQ0FBQTtJQUVELE9BQU8sWUFBRyxDQUFDLE1BQU07U0FDZCxLQUFLLENBQXVDLGdCQUFnQixFQUFFO1FBQzdELE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSTtRQUNKLEtBQUssRUFBRSxhQUFhO0tBQ3JCLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDOUIsS0FBSyxDQUFDLHNCQUFXLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFiWSxRQUFBLFdBQVcsZUFhdkI7QUFFTSxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUU7SUFDakQsTUFBTSxJQUFJLEdBQUc7UUFDWCxHQUFHLENBQUMsTUFBTSxJQUFBLHlCQUFlLEVBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQsQ0FBQTtJQUVELE9BQU8sWUFBRyxDQUFDLE1BQU07U0FDZCxLQUFLLENBQW9DLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtRQUNoRSxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUk7UUFDSixLQUFLLEVBQUUsYUFBYTtLQUNyQixDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzVCLEtBQUssQ0FBQyxzQkFBVyxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBYlksUUFBQSxjQUFjLGtCQWExQjtBQUVELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFBO0FBRW5ELE1BQU0sU0FBUyxHQUFHLEtBQUssRUFBRSxXQUFtQixFQUFFLEVBQUU7SUFDckQsSUFBSSxDQUFDO1FBQ0gsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDL0IsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ25DLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsbUJBQVcsR0FBRSxDQUFBO1FBRW5DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN6QixNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM5QixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixNQUFNLE1BQU0sR0FBRyxXQUFXO1lBQ3hCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV2QixPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFBQyxPQUFPLENBQU0sRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztBQUNILENBQUMsQ0FBQTtBQTFCWSxRQUFBLFNBQVMsYUEwQnJCIn0=