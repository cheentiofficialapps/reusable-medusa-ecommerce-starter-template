"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const ui_1 = require("@medusajs/ui");
const react_2 = require("react");
const modal_context_1 = require("@lib/context/modal-context");
const x_1 = __importDefault(require("@modules/common/icons/x"));
const Modal = ({ isOpen, close, size = "medium", search = false, children, 'data-testid': dataTestId }) => {
    return ((0, jsx_runtime_1.jsx)(react_1.Transition, { appear: true, show: isOpen, as: react_2.Fragment, children: (0, jsx_runtime_1.jsxs)(react_1.Dialog, { as: "div", className: "relative z-[75]", onClose: close, children: [(0, jsx_runtime_1.jsx)(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-opacity-75 backdrop-blur-md  h-screen" }) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 overflow-y-hidden", children: (0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex min-h-full h-full justify-center p-4 text-center", {
                            "items-center": !search,
                            "items-start": search,
                        }), children: (0, jsx_runtime_1.jsx)(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: (0, jsx_runtime_1.jsx)(react_1.Dialog.Panel, { "data-testid": dataTestId, className: (0, ui_1.clx)("flex flex-col justify-start w-full transform p-5 text-left align-middle transition-all max-h-[75vh] h-fit", {
                                    "max-w-md": size === "small",
                                    "max-w-xl": size === "medium",
                                    "max-w-3xl": size === "large",
                                    "bg-transparent shadow-none": search,
                                    "bg-white shadow-xl border rounded-rounded": !search,
                                }), children: (0, jsx_runtime_1.jsx)(modal_context_1.ModalProvider, { close: close, children: children }) }) }) }) })] }) }));
};
const Title = ({ children }) => {
    const { close } = (0, modal_context_1.useModal)();
    return ((0, jsx_runtime_1.jsxs)(react_1.Dialog.Title, { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-large-semi", children: children }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: close, "data-testid": "close-modal-button", children: (0, jsx_runtime_1.jsx)(x_1.default, { size: 20 }) }) })] }));
};
const Description = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_1.Dialog.Description, { className: "flex text-small-regular text-ui-fg-base items-center justify-center pt-2 pb-4 h-full", children: children }));
};
const Body = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: children });
};
const Footer = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-end gap-x-4", children: children });
};
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2Q0FBc0Q7QUFDdEQscUNBQWtDO0FBQ2xDLGlDQUF1QztBQUV2Qyw4REFBb0U7QUFDcEUsZ0VBQXVDO0FBV3ZDLE1BQU0sS0FBSyxHQUFHLENBQUMsRUFDYixNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksR0FBRyxRQUFRLEVBQ2YsTUFBTSxHQUFHLEtBQUssRUFDZCxRQUFRLEVBQ1IsYUFBYSxFQUFFLFVBQVUsRUFDZCxFQUFFLEVBQUU7SUFDZixPQUFPLENBQ0wsdUJBQUMsa0JBQVUsSUFBQyxNQUFNLFFBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsZ0JBQVEsWUFDM0Msd0JBQUMsY0FBTSxJQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBRSxLQUFLLGFBQ3pELHVCQUFDLGtCQUFVLENBQUMsS0FBSyxJQUNmLEVBQUUsRUFBRSxnQkFBUSxFQUNaLEtBQUssRUFBQyx1QkFBdUIsRUFDN0IsU0FBUyxFQUFDLFdBQVcsRUFDckIsT0FBTyxFQUFDLGFBQWEsRUFDckIsS0FBSyxFQUFDLHNCQUFzQixFQUM1QixTQUFTLEVBQUMsYUFBYSxFQUN2QixPQUFPLEVBQUMsV0FBVyxZQUVuQixnQ0FBSyxTQUFTLEVBQUMsd0RBQXdELEdBQUcsR0FDekQsRUFFbkIsZ0NBQUssU0FBUyxFQUFDLGlDQUFpQyxZQUM5QyxnQ0FDRSxTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1osdURBQXVELEVBQ3ZEOzRCQUNFLGNBQWMsRUFBRSxDQUFDLE1BQU07NEJBQ3ZCLGFBQWEsRUFBRSxNQUFNO3lCQUN0QixDQUNGLFlBRUQsdUJBQUMsa0JBQVUsQ0FBQyxLQUFLLElBQ2YsRUFBRSxFQUFFLGdCQUFRLEVBQ1osS0FBSyxFQUFDLHVCQUF1QixFQUM3QixTQUFTLEVBQUMsb0JBQW9CLEVBQzlCLE9BQU8sRUFBQyx1QkFBdUIsRUFDL0IsS0FBSyxFQUFDLHNCQUFzQixFQUM1QixTQUFTLEVBQUMsdUJBQXVCLEVBQ2pDLE9BQU8sRUFBQyxvQkFBb0IsWUFFNUIsdUJBQUMsY0FBTSxDQUFDLEtBQUssbUJBQ0UsVUFBVSxFQUN2QixTQUFTLEVBQUUsSUFBQSxRQUFHLEVBQ1osMkdBQTJHLEVBQzNHO29DQUNFLFVBQVUsRUFBRSxJQUFJLEtBQUssT0FBTztvQ0FDNUIsVUFBVSxFQUFFLElBQUksS0FBSyxRQUFRO29DQUM3QixXQUFXLEVBQUUsSUFBSSxLQUFLLE9BQU87b0NBQzdCLDRCQUE0QixFQUFFLE1BQU07b0NBQ3BDLDJDQUEyQyxFQUFFLENBQUMsTUFBTTtpQ0FDckQsQ0FDRixZQUVELHVCQUFDLDZCQUFhLElBQUMsS0FBSyxFQUFFLEtBQUssWUFBRyxRQUFRLEdBQWlCLEdBQzFDLEdBQ0UsR0FDZixHQUNGLElBQ0MsR0FDRSxDQUNkLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxNQUFNLEtBQUssR0FBNEMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDdEUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsd0JBQVEsR0FBRSxDQUFBO0lBRTVCLE9BQU8sQ0FDTCx3QkFBQyxjQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxtQ0FBbUMsYUFDekQsZ0NBQUssU0FBUyxFQUFDLGlCQUFpQixZQUFFLFFBQVEsR0FBTyxFQUNqRCwwQ0FDRSxtQ0FBUSxPQUFPLEVBQUUsS0FBSyxpQkFBYyxvQkFBb0IsWUFDdEQsdUJBQUMsV0FBQyxJQUFDLElBQUksRUFBRSxFQUFFLEdBQUksR0FDUixHQUNMLElBQ08sQ0FDaEIsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUE0QyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUM1RSxPQUFPLENBQ0wsdUJBQUMsY0FBTSxDQUFDLFdBQVcsSUFBQyxTQUFTLEVBQUMsc0ZBQXNGLFlBQ2pILFFBQVEsR0FDVSxDQUN0QixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxJQUFJLEdBQTRDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ3JFLE9BQU8sZ0NBQUssU0FBUyxFQUFDLHFCQUFxQixZQUFFLFFBQVEsR0FBTyxDQUFBO0FBQzlELENBQUMsQ0FBQTtBQUVELE1BQU0sTUFBTSxHQUE0QyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUN2RSxPQUFPLGdDQUFLLFNBQVMsRUFBQyx1Q0FBdUMsWUFBRSxRQUFRLEdBQU8sQ0FBQTtBQUNoRixDQUFDLENBQUE7QUFFRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUNuQixLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtBQUMvQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNqQixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUVyQixrQkFBZSxLQUFLLENBQUEifQ==