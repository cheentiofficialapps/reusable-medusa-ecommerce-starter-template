"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const filter_radio_group_1 = __importDefault(require("@modules/common/components/filter-radio-group"));
const sortOptions = [
    {
        value: "created_at",
        label: "Latest Arrivals",
    },
    {
        value: "price_asc",
        label: "Price: Low -> High",
    },
    {
        value: "price_desc",
        label: "Price: High -> Low",
    },
];
const SortProducts = ({ "data-testid": dataTestId, sortBy, setQueryParams, }) => {
    const handleChange = (value) => {
        setQueryParams("sortBy", value);
    };
    return ((0, jsx_runtime_1.jsx)(filter_radio_group_1.default, { title: "Sort by", items: sortOptions, value: sortBy, handleChange: handleChange, "data-testid": dataTestId }));
};
exports.default = SortProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3N0b3JlL2NvbXBvbmVudHMvcmVmaW5lbWVudC1saXN0L3NvcnQtcHJvZHVjdHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7OztBQUVaLHVHQUE0RTtBQVU1RSxNQUFNLFdBQVcsR0FBRztJQUNsQjtRQUNFLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxpQkFBaUI7S0FDekI7SUFDRDtRQUNFLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEtBQUssRUFBRSxvQkFBb0I7S0FDNUI7SUFDRDtRQUNFLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxvQkFBb0I7S0FDNUI7Q0FDRixDQUFBO0FBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUNwQixhQUFhLEVBQUUsVUFBVSxFQUN6QixNQUFNLEVBQ04sY0FBYyxHQUNJLEVBQUUsRUFBRTtJQUN0QixNQUFNLFlBQVksR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtRQUMxQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2pDLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDTCx1QkFBQyw0QkFBZ0IsSUFDZixLQUFLLEVBQUMsU0FBUyxFQUNmLEtBQUssRUFBRSxXQUFXLEVBQ2xCLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLFlBQVksaUJBQ2IsVUFBVSxHQUN2QixDQUNILENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUEifQ==