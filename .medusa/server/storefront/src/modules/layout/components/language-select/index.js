"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const react_2 = require("react");
const navigation_1 = require("next/navigation");
const react_country_flag_1 = __importDefault(require("react-country-flag"));
const locale_actions_1 = require("@lib/data/locale-actions");
const getCountryCodeFromLocale = (localeCode) => {
    try {
        const locale = new Intl.Locale(localeCode);
        if (locale.region) {
            return locale.region.toUpperCase();
        }
        const maximized = locale.maximize();
        return maximized.region?.toUpperCase() ?? localeCode.toUpperCase();
    }
    catch {
        const parts = localeCode.split(/[-_]/);
        return parts.length > 1 ? parts[1].toUpperCase() : parts[0].toUpperCase();
    }
};
/**
 * Gets the localized display name for a language code using Intl API.
 * Falls back to the provided name if Intl is unavailable.
 */
const getLocalizedLanguageName = (code, fallbackName, displayLocale = "en-US") => {
    try {
        const displayNames = new Intl.DisplayNames([displayLocale], {
            type: "language",
        });
        return displayNames.of(code) ?? fallbackName;
    }
    catch {
        return fallbackName;
    }
};
const DEFAULT_OPTION = {
    code: "",
    name: "Default",
    localizedName: "Default",
    countryCode: "",
};
const LanguageSelect = ({ toggleState, locales, currentLocale, }) => {
    const [current, setCurrent] = (0, react_2.useState)(undefined);
    const [isPending, startTransition] = (0, react_2.useTransition)();
    const router = (0, navigation_1.useRouter)();
    const { state, close } = toggleState;
    const options = (0, react_2.useMemo)(() => {
        const localeOptions = locales.map((locale) => ({
            code: locale.code,
            name: locale.name,
            localizedName: getLocalizedLanguageName(locale.code, locale.name, currentLocale ?? "en-US"),
            countryCode: getCountryCodeFromLocale(locale.code),
        }));
        return [DEFAULT_OPTION, ...localeOptions];
    }, [locales, currentLocale]);
    (0, react_2.useEffect)(() => {
        if (currentLocale) {
            const option = options.find((o) => o.code.toLowerCase() === currentLocale.toLowerCase());
            setCurrent(option ?? DEFAULT_OPTION);
        }
        else {
            setCurrent(DEFAULT_OPTION);
        }
    }, [options, currentLocale]);
    const handleChange = (option) => {
        startTransition(async () => {
            await (0, locale_actions_1.updateLocale)(option.code);
            close();
            router.refresh();
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_1.Listbox, { as: "span", onChange: handleChange, defaultValue: currentLocale
                ? options.find((o) => o.code.toLowerCase() === currentLocale.toLowerCase()) ?? DEFAULT_OPTION
                : DEFAULT_OPTION, disabled: isPending, children: [(0, jsx_runtime_1.jsx)(react_1.ListboxButton, { className: "py-1 w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "txt-compact-small flex items-start gap-x-2", children: [(0, jsx_runtime_1.jsx)("span", { children: "Language:" }), current && ((0, jsx_runtime_1.jsxs)("span", { className: "txt-compact-small flex items-center gap-x-2", children: [current.countryCode && (
                                    /* @ts-ignore */
                                    (0, jsx_runtime_1.jsx)(react_country_flag_1.default, { svg: true, style: {
                                            width: "16px",
                                            height: "16px",
                                        }, countryCode: current.countryCode })), isPending ? "..." : current.localizedName] }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex relative w-full min-w-[320px]", children: (0, jsx_runtime_1.jsx)(react_1.Transition, { show: state, as: react_2.Fragment, leave: "transition ease-in duration-150", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, jsx_runtime_1.jsx)(react_1.ListboxOptions, { className: "absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular uppercase text-black no-scrollbar rounded-rounded w-full", static: true, children: options.map((o) => ((0, jsx_runtime_1.jsxs)(react_1.ListboxOption, { value: o, className: "py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2", children: [o.countryCode ? (
                                    /* @ts-ignore */
                                    (0, jsx_runtime_1.jsx)(react_country_flag_1.default, { svg: true, style: {
                                            width: "16px",
                                            height: "16px",
                                        }, countryCode: o.countryCode })) : ((0, jsx_runtime_1.jsx)("span", { style: { width: "16px", height: "16px" } })), o.localizedName] }, o.code || "default"))) }) }) })] }) }));
};
exports.default = LanguageSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL2xhbmd1YWdlLXNlbGVjdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7O0FBRVosNkNBTTBCO0FBQzFCLGlDQUE2RTtBQUM3RSxnREFBMkM7QUFDM0MsNEVBQWlEO0FBR2pELDZEQUF1RDtBQVV2RCxNQUFNLHdCQUF3QixHQUFHLENBQUMsVUFBa0IsRUFBVSxFQUFFO0lBQzlELElBQUksQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDcEMsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNuQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BFLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RDLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzNFLENBQUM7QUFDSCxDQUFDLENBQUE7QUFRRDs7O0dBR0c7QUFDSCxNQUFNLHdCQUF3QixHQUFHLENBQy9CLElBQVksRUFDWixZQUFvQixFQUNwQixn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