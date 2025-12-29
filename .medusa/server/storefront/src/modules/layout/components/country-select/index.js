"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const react_2 = require("react");
const react_country_flag_1 = __importDefault(require("react-country-flag"));
const navigation_1 = require("next/navigation");
const cart_1 = require("@lib/data/cart");
const CountrySelect = ({ toggleState, regions }) => {
    const [current, setCurrent] = (0, react_2.useState)(undefined);
    const { countryCode } = (0, navigation_1.useParams)();
    const currentPath = (0, navigation_1.usePathname)().split(`/${countryCode}`)[1];
    const { state, close } = toggleState;
    const options = (0, react_2.useMemo)(() => {
        return regions
            ?.map((r) => {
            return r.countries?.map((c) => ({
                country: c.iso_2,
                region: r.id,
                label: c.display_name,
            }));
        })
            .flat()
            .sort((a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""));
    }, [regions]);
    (0, react_2.useEffect)(() => {
        if (countryCode) {
            const option = options?.find((o) => o?.country === countryCode);
            setCurrent(option);
        }
    }, [options, countryCode]);
    const handleChange = (option) => {
        (0, cart_1.updateRegion)(option.country, currentPath);
        close();
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_1.Listbox, { as: "span", onChange: handleChange, defaultValue: countryCode
                ? options?.find((o) => o?.country === countryCode)
                : undefined, children: [(0, jsx_runtime_1.jsx)(react_1.ListboxButton, { className: "py-1 w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "txt-compact-small flex items-start gap-x-2", children: [(0, jsx_runtime_1.jsx)("span", { children: "Shipping to:" }), current && ((0, jsx_runtime_1.jsxs)("span", { className: "txt-compact-small flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(react_country_flag_1.default, { svg: true, style: {
                                            width: "16px",
                                            height: "16px",
                                        }, countryCode: current.country ?? "" }), current.label] }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex relative w-full min-w-[320px]", children: (0, jsx_runtime_1.jsx)(react_1.Transition, { show: state, as: react_2.Fragment, leave: "transition ease-in duration-150", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, jsx_runtime_1.jsx)(react_1.ListboxOptions, { className: "absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular uppercase text-black no-scrollbar rounded-rounded w-full", static: true, children: options?.map((o, index) => {
                                return ((0, jsx_runtime_1.jsxs)(react_1.ListboxOption, { value: o, className: "py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2", children: [(0, jsx_runtime_1.jsx)(react_country_flag_1.default, { svg: true, style: {
                                                width: "16px",
                                                height: "16px",
                                            }, countryCode: o?.country ?? "" }), " ", o?.label] }, index));
                            }) }) }) })] }) }));
};
exports.default = CountrySelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL2NvdW50cnktc2VsZWN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7Ozs7Ozs7QUFFWiw2Q0FNMEI7QUFDMUIsaUNBQThEO0FBQzlELDRFQUFpRDtBQUdqRCxnREFBd0Q7QUFDeEQseUNBQTZDO0FBYzdDLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFzQixFQUFFLEVBQUU7SUFDckUsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBR3BDLFNBQVMsQ0FBQyxDQUFBO0lBRVosTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUEsc0JBQVMsR0FBRSxDQUFBO0lBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUEsd0JBQVcsR0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFN0QsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxXQUFXLENBQUE7SUFFcEMsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFO1FBQzNCLE9BQU8sT0FBTztZQUNaLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDVixPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLFlBQVk7YUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUM7YUFDRCxJQUFJ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