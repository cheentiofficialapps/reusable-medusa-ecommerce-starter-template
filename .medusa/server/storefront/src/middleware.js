"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
const server_1 = require("next/server");
const BACKEND_URL = process.env.MEDUSA_BACKEND_URL;
const PUBLISHABLE_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY;
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us";
const regionMapCache = {
    regionMap: new Map(),
    regionMapUpdated: Date.now(),
};
async function getRegionMap(cacheId) {
    const { regionMap, regionMapUpdated } = regionMapCache;
    if (!BACKEND_URL) {
        throw new Error("Middleware.ts: Error fetching regions. Did you set up regions in your Medusa Admin and define a MEDUSA_BACKEND_URL environment variable? Note that the variable is no longer named NEXT_PUBLIC_MEDUSA_BACKEND_URL.");
    }
    if (!regionMap.keys().next().value ||
        regionMapUpdated < Date.now() - 3600 * 1000) {
        // Fetch regions from Medusa. We can't use the JS client here because middleware is running on Edge and the client needs a Node environment.
        const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
            headers: {
                "x-publishable-api-key": PUBLISHABLE_API_KEY,
            },
            next: {
                revalidate: 3600,
                tags: [`regions-${cacheId}`],
            },
            cache: "force-cache",
        }).then(async (response) => {
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.message);
            }
            return json;
        });
        if (!regions?.length) {
            throw new Error("No regions found. Please set up regions in your Medusa Admin.");
        }
        // Create a map of country codes to regions.
        regions.forEach((region) => {
            region.countries?.forEach((c) => {
                regionMapCache.regionMap.set(c.iso_2 ?? "", region);
            });
        });
        regionMapCache.regionMapUpdated = Date.now();
    }
    return regionMapCache.regionMap;
}
/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param response
 */
async function getCountryCode(request, regionMap) {
    try {
        let countryCode;
        const vercelCountryCode = request.headers
            .get("x-vercel-ip-country")
            ?.toLowerCase();
        const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase();
        if (urlCountryCode && regionMap.has(urlCountryCode)) {
            countryCode = urlCountryCode;
        }
        else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
            countryCode = vercelCountryCode;
        }
        else if (regionMap.has(DEFAULT_REGION)) {
            countryCode = DEFAULT_REGION;
        }
        else if (regionMap.keys().next().value) {
            countryCode = regionMap.keys().next().value;
        }
        return countryCode;
    }
    catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a MEDUSA_BACKEND_URL environment variable? Note that the variable is no longer named NEXT_PUBLIC_MEDUSA_BACKEND_URL.");
        }
    }
}
/**
 * Middleware to handle region selection and onboarding status.
 */
async function middleware(request) {
    let redirectUrl = request.nextUrl.href;
    let response = server_1.NextResponse.redirect(redirectUrl, 307);
    let cacheIdCookie = request.cookies.get("_medusa_cache_id");
    let cacheId = cacheIdCookie?.value || crypto.randomUUID();
    const regionMap = await getRegionMap(cacheId);
    const countryCode = regionMap && (await getCountryCode(request, regionMap));
    const urlHasCountryCode = countryCode && request.nextUrl.pathname.split("/")[1].includes(countryCode);
    // if one of the country codes is in the url and the cache id is set, return next
    if (urlHasCountryCode && cacheIdCookie) {
        return server_1.NextResponse.next();
    }
    // if one of the country codes is in the url and the cache id is not set, set the cache id and redirect
    if (urlHasCountryCode && !cacheIdCookie) {
        response.cookies.set("_medusa_cache_id", cacheId, {
            maxAge: 60 * 60 * 24,
        });
        return response;
    }
    // check if the url is a static asset
    if (request.nextUrl.pathname.includes(".")) {
        return server_1.NextResponse.next();
    }
    const redirectPath = request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname;
    const queryString = request.nextUrl.search ? request.nextUrl.search : "";
    // If no country code is set, we redirect to the relevant region.
    if (!urlHasCountryCode && countryCode) {
        redirectUrl = `${request.nextUrl.origin}/${countryCode}${redirectPath}${queryString}`;
        response = server_1.NextResponse.redirect(`${redirectUrl}`, 307);
    }
    else if (!urlHasCountryCode && !countryCode) {
        // Handle case where no valid country code exists (empty regions)
        return new server_1.NextResponse("No valid regions configured. Please set up regions with countries in your Medusa Admin.", { status: 500 });
    }
    return response;
}
exports.config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)",
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBeUdBLGdDQXFEQztBQTdKRCx3Q0FBdUQ7QUFFdkQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQTtBQUNsRCxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUE7QUFDMUUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUE7QUFFckUsTUFBTSxjQUFjLEdBQUc7SUFDckIsU0FBUyxFQUFFLElBQUksR0FBRyxFQUFpQztJQUNuRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO0NBQzdCLENBQUE7QUFFRCxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWU7SUFDekMsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLGNBQWMsQ0FBQTtJQUV0RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FDYixvTkFBb04sQ0FDck4sQ0FBQTtJQUNILENBQUM7SUFFRCxJQUNFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDOUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQzNDLENBQUM7UUFDRCw0SUFBNEk7UUFDNUksTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsV0FBVyxnQkFBZ0IsRUFBRTtZQUM5RCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQXVCLEVBQUUsbUJBQW9CO2FBQzlDO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJ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