"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const image_1 = __importDefault(require("next/image"));
const ImageGallery = ({ images }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-start relative", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col flex-1 small:mx-16 gap-y-4", children: images.map((image, index) => {
                return ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: "relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle", id: image.id, children: !!image.url && ((0, jsx_runtime_1.jsx)(image_1.default, { src: image.url, priority: index <= 2 ? true : false, className: "absolute inset-0 rounded-rounded", alt: `Product image ${index + 1}`, fill: true, sizes: "(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px", style: {
                            objectFit: "cover",
                        } })) }, image.id));
            }) }) }));
};
exports.default = ImageGallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvaW1hZ2UtZ2FsbGVyeS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscUNBQXdDO0FBQ3hDLHVEQUE4QjtBQU05QixNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFxQixFQUFFLEVBQUU7SUFDckQsT0FBTyxDQUNMLGdDQUFLLFNBQVMsRUFBQywyQkFBMkIsWUFDeEMsZ0NBQUssU0FBUyxFQUFDLDBDQUEwQyxZQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMzQixPQUFPLENBQ0wsdUJBQUMsY0FBUyxJQUVSLFNBQVMsRUFBQyxnRUFBZ0UsRUFDMUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBRVgsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FDZCx1QkFBQyxlQUFLLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQ2QsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNuQyxTQUFTLEVBQUMsa0NBQWtDLEVBQzVDLEdBQUcsRUFBRSxpQkFBaUIsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUNqQyxJQUFJLFFBQ0osS0FBSyxFQUFDLHFGQUFxRixFQUMzRixLQUFLLEVBQUU7NEJBQ0wsU0FBUyxFQUFFLE9BQU87eUJBQ25CLEdBQ0QsQ0FDSCxJQWhCSSxLQUFLLENBQUMsRUFBRSxDQWlCSCxDQUNiLENBQUE7WUFDSCxDQUFDLENBQUMsR0FDRSxHQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLFlBQVksQ0FBQSJ9