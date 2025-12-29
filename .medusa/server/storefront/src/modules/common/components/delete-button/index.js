"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const cart_1 = require("@lib/data/cart");
const icons_1 = require("@medusajs/icons");
const ui_1 = require("@medusajs/ui");
const react_1 = require("react");
const DeleteButton = ({ id, children, className, }) => {
    const [isDeleting, setIsDeleting] = (0, react_1.useState)(false);
    const handleDelete = async (id) => {
        setIsDeleting(true);
        await (0, cart_1.deleteLineItem)(id).catch((err) => {
            setIsDeleting(false);
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, ui_1.clx)("flex items-center justify-between text-small-regular", className), children: (0, jsx_runtime_1.jsxs)("button", { className: "flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer", onClick: () => handleDelete(id), children: [isDeleting ? (0, jsx_runtime_1.jsx)(icons_1.Spinner, { className: "animate-spin" }) : (0, jsx_runtime_1.jsx)(icons_1.Trash, {}), (0, jsx_runtime_1.jsx)("span", { children: children })] }) }));
};
exports.default = DeleteButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL2RlbGV0ZS1idXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUErQztBQUMvQywyQ0FBZ0Q7QUFDaEQscUNBQWtDO0FBQ2xDLGlDQUFnQztBQUVoQyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQ3BCLEVBQUUsRUFDRixRQUFRLEVBQ1IsU0FBUyxHQUtWLEVBQUUsRUFBRTtJQUNILE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRW5ELE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRTtRQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsTUFBTSxJQUFBLHFCQUFjLEVBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDckMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLGdDQUNFLFNBQVMsRUFBRSxJQUFBLFFBQUcsRUFDWixzREFBc0QsRUFDdEQsU0FBUyxDQUNWLFlBRUQsb0NBQ0UsU0FBUyxFQUFDLHFFQUFxRSxFQUMvRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxhQUU5QixVQUFVLENBQUMsQ0FBQyxDQUFDLHVCQUFDLGVBQU8sSUFBQyxTQUFTLEVBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVCQUFDLGFBQUssS0FBRyxFQUM5RCwyQ0FBTyxRQUFRLEdBQVEsSUFDaEIsR0FDTCxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUEifQ==