"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const sort_products_1 = __importDefault(require("./sort-products"));
const RefinementList = ({ sortBy, 'data-testid': dataTestId }) => {
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const createQueryString = (0, react_1.useCallback)((name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    const setQueryParams = (name, value) => {
        const query = createQueryString(name, value);
        router.push(`${pathname}?${query}`);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]", children: (0, jsx_runtime_1.jsx)(sort_products_1.default, { sortBy: sortBy, setQueryParams: setQueryParams, "data-testid": dataTestId }) }));
};
exports.default = RefinementList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3N0b3JlL2NvbXBvbmVudHMvcmVmaW5lbWVudC1saXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWixnREFBeUU7QUFDekUsaUNBQW1DO0FBRW5DLG9FQUEyRDtBQVEzRCxNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQXVCLEVBQUUsRUFBRTtJQUNwRixNQUFNLE1BQU0sR0FBRyxJQUFBLHNCQUFTLEdBQUUsQ0FBQTtJQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFBLHdCQUFXLEdBQUUsQ0FBQTtJQUM5QixNQUFNLFlBQVksR0FBRyxJQUFBLDRCQUFlLEdBQUUsQ0FBQTtJQUV0QyxNQUFNLGlCQUFpQixHQUFHLElBQUEsbUJBQVcsRUFDbkMsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFdkIsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDMUIsQ0FBQyxFQUNELENBQUMsWUFBWSxDQUFDLENBQ2YsQ0FBQTtJQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQ3JELE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQyw4RkFBOEYsWUFDM0csdUJBQUMsdUJBQVksSUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLGlCQUFlLFVBQVUsR0FBSSxHQUNyRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxjQUFjLENBQUEifQ==