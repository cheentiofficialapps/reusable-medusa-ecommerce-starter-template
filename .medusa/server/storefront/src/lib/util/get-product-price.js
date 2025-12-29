"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPricesForVariant = void 0;
exports.getProductPrice = getProductPrice;
const get_percentage_diff_1 = require("./get-percentage-diff");
const money_1 = require("./money");
const getPricesForVariant = (variant) => {
    if (!variant?.calculated_price?.calculated_amount) {
        return null;
    }
    return {
        calculated_price_number: variant.calculated_price.calculated_amount,
        calculated_price: (0, money_1.convertToLocale)({
            amount: variant.calculated_price.calculated_amount,
            currency_code: variant.calculated_price.currency_code,
        }),
        original_price_number: variant.calculated_price.original_amount,
        original_price: (0, money_1.convertToLocale)({
            amount: variant.calculated_price.original_amount,
            currency_code: variant.calculated_price.currency_code,
        }),
        currency_code: variant.calculated_price.currency_code,
        price_type: variant.calculated_price.calculated_price.price_list_type,
        percentage_diff: (0, get_percentage_diff_1.getPercentageDiff)(variant.calculated_price.original_amount, variant.calculated_price.calculated_amount),
    };
};
exports.getPricesForVariant = getPricesForVariant;
function getProductPrice({ product, variantId, }) {
    if (!product || !product.id) {
        throw new Error("No product provided");
    }
    const cheapestPrice = () => {
        if (!product || !product.variants?.length) {
            return null;
        }
        const cheapestVariant = product.variants
            .filter((v) => !!v.calculated_price)
            .sort((a, b) => {
            return (a.calculated_price.calculated_amount -
                b.calculated_price.calculated_amount);
        })[0];
        return (0, exports.getPricesForVariant)(cheapestVariant);
    };
    const variantPrice = () => {
        if (!product || !variantId) {
            return null;
        }
        const variant = product.variants?.find((v) => v.id === variantId || v.sku === variantId);
        if (!variant) {
            return null;
        }
        return (0, exports.getPricesForVariant)(variant);
    };
    return {
        product,
        cheapestPrice: cheapestPrice(),
        variantPrice: variantPrice(),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2R1Y3QtcHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvdXRpbC9nZXQtcHJvZHVjdC1wcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUE2QkEsMENBaURDO0FBN0VELCtEQUF5RDtBQUN6RCxtQ0FBeUM7QUFFbEMsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFO0lBQ2xELElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNuRSxnQkFBZ0IsRUFBRSxJQUFBLHVCQUFlLEVBQUM7WUFDaEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7WUFDbEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQ3RELENBQUM7UUFDRixxQkFBcUIsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUMvRCxjQUFjLEVBQUUsSUFBQSx1QkFBZSxFQUFDO1lBQzlCLE1BQU0sRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtZQUNoRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDdEQsQ0FBQztRQUNGLGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUNyRCxVQUFVLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGVBQWU7UUFDckUsZUFBZSxFQUFFLElBQUEsdUNBQWlCLEVBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQ3hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FDM0M7S0FDRixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBdkJZLFFBQUEsbUJBQW1CLHVCQXVCL0I7QUFFRCxTQUFnQixlQUFlLENBQUMsRUFDOUIsT0FBTyxFQUNQLFNBQVMsR0FJVjtJQUNDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO1FBRUQsTUFBTSxlQUFlLEdBQVEsT0FBTyxDQUFDLFFBQVE7YUFDMUMsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2FBQ3hDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQ0wsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDcEMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUNyQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFUCxPQUFPLElBQUEsMkJBQW1CLEVBQUMsZUFBZSxDQUFDLENBQUE7SUFDN0MsQ0FBQyxDQUFBO0lBRUQsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQTtRQUNiLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBUSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUNqRCxDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO1FBRUQsT0FBTyxJQUFBLDJCQUFtQixFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQTtJQUVELE9BQU87UUFDTCxPQUFPO1FBQ1AsYUFBYSxFQUFFLGFBQWEsRUFBRTtRQUM5QixZQUFZLEVBQUUsWUFBWSxFQUFFO0tBQzdCLENBQUE7QUFDSCxDQUFDIn0=