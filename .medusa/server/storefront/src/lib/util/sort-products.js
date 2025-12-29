"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortProducts = sortProducts;
/**
 * Helper function to sort products by price until the store API supports sorting by price
 * @param products
 * @param sortBy
 * @returns products sorted by price
 */
function sortProducts(products, sortBy) {
    let sortedProducts = products;
    if (["price_asc", "price_desc"].includes(sortBy)) {
        // Precompute the minimum price for each product
        sortedProducts.forEach((product) => {
            if (product.variants && product.variants.length > 0) {
                product._minPrice = Math.min(...product.variants.map((variant) => variant?.calculated_price?.calculated_amount || 0));
            }
            else {
                product._minPrice = Infinity;
            }
        });
        // Sort products based on the precomputed minimum prices
        sortedProducts.sort((a, b) => {
            const diff = a._minPrice - b._minPrice;
            return sortBy === "price_asc" ? diff : -diff;
        });
    }
    if (sortBy === "created_at") {
        sortedProducts.sort((a, b) => {
            return (new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        });
    }
    return sortedProducts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi91dGlsL3NvcnQtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQSxvQ0FvQ0M7QUExQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFnQixZQUFZLENBQzFCLFFBQWtDLEVBQ2xDLE1BQW1CO0lBRW5CLElBQUksY0FBYyxHQUFHLFFBQThCLENBQUE7SUFFbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNqRCxnREFBZ0Q7UUFDaEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUMxQixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNyQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixJQUFJLENBQUMsQ0FDL0QsQ0FDRixDQUFBO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1lBQzlCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLHdEQUF3RDtRQUN4RCxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFVLEdBQUcsQ0FBQyxDQUFDLFNBQVUsQ0FBQTtZQUN4QyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixPQUFPLENBQ0wsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FDdEUsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE9BQU8sY0FBYyxDQUFBO0FBQ3ZCLENBQUMifQ==