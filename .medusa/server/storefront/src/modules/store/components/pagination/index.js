"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = Pagination;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@medusajs/ui");
const navigation_1 = require("next/navigation");
function Pagination({ page, totalPages, 'data-testid': dataTestid }) {
    const router = (0, navigation_1.useRouter)();
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    // Helper function to generate an array of numbers within a range
    const arrayRange = (start, stop) => Array.from({ length: stop - start + 1 }, (_, index) => start + index);
    // Function to handle page changes
    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        router.push(`${pathname}?${params.toString()}`);
    };
    // Function to render a page button
    const renderPageButton = (p, label, isCurrent) => ((0, jsx_runtime_1.jsx)("button", { className: (0, ui_1.clx)("txt-xlarge-plus text-ui-fg-muted", {
            "text-ui-fg-base hover:text-ui-fg-subtle": isCurrent,
        }), disabled: isCurrent, onClick: () => handlePageChange(p), children: label }, p));
    // Function to render ellipsis
    const renderEllipsis = (key) => ((0, jsx_runtime_1.jsx)("span", { className: "txt-xlarge-plus text-ui-fg-muted items-center cursor-default", children: "..." }, key));
    // Function to render page buttons based on the current page and total pages
    const renderPageButtons = () => {
        const buttons = [];
        if (totalPages <= 7) {
            // Show all pages
            buttons.push(...arrayRange(1, totalPages).map((p) => renderPageButton(p, p, p === page)));
        }
        else {
            // Handle different cases for displaying pages and ellipses
            if (page <= 4) {
                // Show 1, 2, 3, 4, 5, ..., lastpage
                buttons.push(...arrayRange(1, 5).map((p) => renderPageButton(p, p, p === page)));
                buttons.push(renderEllipsis("ellipsis1"));
                buttons.push(renderPageButton(totalPages, totalPages, totalPages === page));
            }
            else if (page >= totalPages - 3) {
                // Show 1, ..., lastpage - 4, lastpage - 3, lastpage - 2, lastpage - 1, lastpage
                buttons.push(renderPageButton(1, 1, 1 === page));
                buttons.push(renderEllipsis("ellipsis2"));
                buttons.push(...arrayRange(totalPages - 4, totalPages).map((p) => renderPageButton(p, p, p === page)));
            }
            else {
                // Show 1, ..., page - 1, page, page + 1, ..., lastpage
                buttons.push(renderPageButton(1, 1, 1 === page));
                buttons.push(renderEllipsis("ellipsis3"));
                buttons.push(...arrayRange(page - 1, page + 1).map((p) => renderPageButton(p, p, p === page)));
                buttons.push(renderEllipsis("ellipsis4"));
                buttons.push(renderPageButton(totalPages, totalPages, totalPages === page));
            }
        }
        return buttons;
    };
    // Render the component
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center w-full mt-12", children: (0, jsx_runtime_1.jsx)("div", { className: "flex gap-3 items-end", "data-testid": dataTestid, children: renderPageButtons() }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9tb2R1bGVzL3N0b3JlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7QUFLWixnQ0E0R0M7O0FBL0dELHFDQUFrQztBQUNsQyxnREFBeUU7QUFFekUsU0FBZ0IsVUFBVSxDQUFDLEVBQ3pCLElBQUksRUFDSixVQUFVLEVBQ1YsYUFBYSxFQUFFLFVBQVUsRUFLMUI7SUFDQyxNQUFNLE1BQU0sR0FBRyxJQUFBLHNCQUFTLEdBQUUsQ0FBQTtJQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFBLHdCQUFXLEdBQUUsQ0FBQTtJQUM5QixNQUFNLFlBQVksR0FBRyxJQUFBLDRCQUFlLEdBQUUsQ0FBQTtJQUV0QyxpRUFBaUU7SUFDakUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUUsQ0FDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFBO0lBRXZFLGtDQUFrQztJQUNsQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELENBQUMsQ0FBQTtJQUVELG1DQUFtQztJQUNu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