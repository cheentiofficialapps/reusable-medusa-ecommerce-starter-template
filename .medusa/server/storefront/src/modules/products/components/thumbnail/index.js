"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const image_1 = __importDefault(require("next/image"));
const placeholder_image_1 = __importDefault(require("@modules/common/icons/placeholder-image"));
const Thumbnail = ({ thumbnail, images, size = "small", isFeatured, className, "data-testid": dataTestid, }) => {
    const initialImage = thumbnail || images?.[0]?.url;
    return ((0, jsx_runtime_1.jsx)(ui_1.Container, { className: (0, ui_1.clx)("relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150", className, {
            "aspect-[11/14]": isFeatured,
            "aspect-[9/16]": !isFeatured && size !== "square",
            "aspect-[1/1]": size === "square",
            "w-[180px]": size === "small",
            "w-[290px]": size === "medium",
            "w-[440px]": size === "large",
            "w-full": size === "full",
        }), "data-testid": dataTestid, children: (0, jsx_runtime_1.jsx)(ImageOrPlaceholder, { image: initialImage, size: size }) }));
};
const ImageOrPlaceholder = ({ image, size, }) => {
    return image ? ((0, jsx_runtime_1.jsx)(image_1.default, { src: image, alt: "Thumbnail", className: "absolute inset-0 object-cover object-center", draggable: false, quality: 50, sizes: "(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px", fill: true })) : ((0, jsx_runtime_1.jsx)("div", { className: "w-full h-full absolute inset-0 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(placeholder_image_1.default, { size: size === "small" ? 16 : 24 }) }));
};
exports.default = Thumbnail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvdGh1bWJuYWlsL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MsdURBQThCO0FBRzlCLGdHQUFzRTtBQVl0RSxNQUFNLFNBQVMsR0FBNkIsQ0FBQyxFQUMzQyxTQUFTLEVBQ1QsTUFBTSxFQUNOLElBQUksR0FBRyxPQUFPLEVBQ2QsVUFBVSxFQUNWLFNBQVMsRUFDVCxhQUFhLEVBQUUsVUFBVSxHQUMxQixFQUFFLEVBQUU7SUFDSCxNQUFNLFlBQVksR0FBRyxTQUFTLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFBO0lBRWxELE9BQU8sQ0FDTCx1QkFBQyxjQUFTLElBQ1IsU0FBUyxFQUFFLElBQUEsUUFBRyxFQUNaLGlMQUFpTCxFQUNqTCxTQUFTLEVBQ1Q7WUFDRSxnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLGVBQWUsRUFBRSxDQUFDLFVBQVUsSUFBSSxJQUFJLEtBQUssUUFBUTtZQUNqRCxjQUFjLEVBQUUsSUFBSSxLQUFLLFFBQVE7WUFDakMsV0FBVyxFQUFFLElBQUksS0FBSyxPQUFPO1lBQzdCLFdBQVcsRUFBRSxJQUFJLEtBQUssUUFBUTtZQUM5QixXQUFXLEVBQUUsSUFBSSxLQUFLLE9BQU87WUFDN0IsUUFBUSxFQUFFLElBQUksS0FBSyxNQUFNO1NBQzFCLENBQ0YsaUJBQ1ksVUFBVSxZQUV2Qix1QkFBQyxrQkFBa0IsSUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUksR0FDN0MsQ0FDYixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEVBQzFCLEtBQUssRUFDTCxJQUFJLEdBQzhDLEVBQUUsRUFBRTtJQUN0RCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDYix1QkFBQyxlQUFLLElBQ0osR0FBRyxFQUFFLEtBQUssRUFDVixHQUFHLEVBQUMsV0FBVyxFQUNmLFNBQVMsRUFBQyw2Q0FBNkMsRUFDdkQsU0FBUyxFQUFFLEtBQUssRUFDaEIsT0FBTyxFQUFFLEVBQUUsRUFDWCxLQUFLLEVBQUMscUZBQXFGLEVBQzNGLElBQUksU0FDSixDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsZ0NBQUssU0FBUyxFQUFDLGlFQUFpRSxZQUM5RSx1QkFBQywyQkFBZ0IsSUFBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksR0FDbEQsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFBIn0=