"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const native_select_1 = __importDefault(require("@modules/common/components/native-select"));
const CountrySelect = (0, react_1.forwardRef)(({ placeholder = "Country", region, defaultValue, ...props }, ref) => {
    const innerRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, () => innerRef.current);
    const countryOptions = (0, react_1.useMemo)(() => {
        if (!region) {
            return [];
        }
        return region.countries?.map((country) => ({
            value: country.iso_2,
            label: country.display_name,
        }));
    }, [region]);
    return ((0, jsx_runtime_1.jsx)(native_select_1.default, { ref: innerRef, placeholder: placeholder, defaultValue: defaultValue, ...props, children: countryOptions?.map(({ value, label }, index) => ((0, jsx_runtime_1.jsx)("option", { value: value, children: label }, index))) }));
});
CountrySelect.displayName = "CountrySelect";
exports.default = CountrySelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NoZWNrb3V0L2NvbXBvbmVudHMvY291bnRyeS1zZWxlY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUF3RTtBQUV4RSw2RkFFaUQ7QUFHakQsTUFBTSxhQUFhLEdBQUcsSUFBQSxrQkFBVSxFQUs5QixDQUFDLEVBQUUsV0FBVyxHQUFHLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckUsTUFBTSxRQUFRLEdBQUcsSUFBQSxjQUFNLEVBQW9CLElBQUksQ0FBQyxDQUFBO0lBRWhELElBQUEsMkJBQW1CLEVBQ2pCLEdBQUcsRUFDSCxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUN2QixDQUFBO0lBRUQsTUFBTSxjQUFjLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsWUFBWTtTQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFFWixPQUFPLENBQ0wsdUJBQUMsdUJBQVksSUFDWCxHQUFHLEVBQUUsUUFBUSxFQUNiLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLFlBQVksRUFBRSxZQUFZLEtBQ3RCLEtBQUssWUFFUixjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNoRCxtQ0FBb0IsS0FBSyxFQUFFLEtBQUssWUFDN0IsS0FBSyxJQURLLEtBQUssQ0FFVCxDQUNWLENBQUMsR0FDVyxDQUNoQixDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFRixhQUFhLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQTtBQUUzQyxrQkFBZSxhQUFhLENBQUEifQ==