"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const OptionSelect = ({ option, current, updateOption, title, "data-testid": dataTestId, disabled, }) => {
    const filteredOptions = (option.values ?? []).map((v) => v.value);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-3", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-sm", children: ["Select ", title] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-between gap-2", "data-testid": dataTestId, children: filteredOptions.map((v) => {
                    return ((0, jsx_runtime_1.jsx)("button", { onClick: () => updateOption(option.id, v), className: (0, ui_1.clx)("border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ", {
                            "border-ui-border-interactive": v === current,
                            "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150": v !== current,
                        }), disabled: disabled, "data-testid": "option-button", children: v }, v));
                }) })] }));
};
exports.default = OptionSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWFjdGlvbnMvb3B0aW9uLXNlbGVjdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQWtDO0FBWWxDLE1BQU0sWUFBWSxHQUFnQyxDQUFDLEVBQ2pELE1BQU0sRUFDTixPQUFPLEVBQ1AsWUFBWSxFQUNaLEtBQUssRUFDTCxhQUFhLEVBQUUsVUFBVSxFQUN6QixRQUFRLEdBQ1QsRUFBRSxFQUFFO0lBQ0gsTUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWpFLE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUMsdUJBQXVCLGFBQ3BDLGtDQUFNLFNBQVMsRUFBQyxTQUFTLHdCQUFTLEtBQUssSUFBUSxFQUMvQyxnQ0FDRSxTQUFTLEVBQUMsc0NBQXNDLGlCQUNuQyxVQUFVLFlBRXRCLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDekIsT0FBTyxDQUNMLG1DQUNFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFFekMsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLGtHQUFrRyxFQUNsRzs0QkFDRSw4QkFBOEIsRUFBRSxDQUFDLEtBQUssT0FBTzs0QkFDN0MsNkVBQTZFLEVBQzNFLENBQUMsS0FBSyxPQUFPO3lCQUNoQixDQUNGLEVBQ0QsUUFBUSxFQUFFLFFBQVEsaUJBQ04sZUFBZSxZQUUxQixDQUFDLElBWkcsQ0FBQyxDQWFDLENBQ1YsQ0FBQTtnQkFDSCxDQUFDLENBQUMsR0FDRSxJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLFlBQVksQ0FBQSJ9