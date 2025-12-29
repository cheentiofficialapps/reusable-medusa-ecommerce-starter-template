"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const add_address_1 = __importDefault(require("../address-card/add-address"));
const edit_address_modal_1 = __importDefault(require("../address-card/edit-address-modal"));
const AddressBook = ({ customer, region }) => {
    const { addresses } = customer;
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4", children: [(0, jsx_runtime_1.jsx)(add_address_1.default, { region: region, addresses: addresses }), addresses.map((address) => {
                    return ((0, jsx_runtime_1.jsx)(edit_address_modal_1.default, { region: region, address: address }, address.id));
                })] }) }));
};
exports.default = AddressBook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2FjY291bnQvY29tcG9uZW50cy9hZGRyZXNzLWJvb2svaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhFQUFvRDtBQUNwRCw0RkFBNEQ7QUFRNUQsTUFBTSxXQUFXLEdBQStCLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsUUFBUSxDQUFBO0lBQzlCLE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsUUFBUSxZQUNyQixpQ0FBSyxTQUFTLEVBQUMsbURBQW1ELGFBQ2hFLHVCQUFDLHFCQUFVLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxHQUFJLEVBQ25ELFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDekIsT0FBTyxDQUNMLHVCQUFDLDRCQUFXLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUksQ0FDbkUsQ0FBQTtnQkFDSCxDQUFDLENBQUMsSUFDRSxHQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQSJ9