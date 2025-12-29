"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToLocale = void 0;
const isEmpty_1 = require("./isEmpty");
const convertToLocale = ({ amount, currency_code, minimumFractionDigits, maximumFractionDigits, locale = "en-US", }) => {
    return currency_code && !(0, isEmpty_1.isEmpty)(currency_code)
        ? new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency_code,
            minimumFractionDigits,
            maximumFractionDigits,
        }).format(amount)
        : amount.toString();
};
exports.convertToLocale = convertToLocale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvdXRpbC9tb25leS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBbUM7QUFVNUIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUM5QixNQUFNLEVBQ04sYUFBYSxFQUNiLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsTUFBTSxHQUFHLE9BQU8sR0FDTSxFQUFFLEVBQUU7SUFDMUIsT0FBTyxhQUFhLElBQUksQ0FBQyxJQUFBLGlCQUFPLEVBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHFCQUFxQjtZQUNyQixxQkFBcUI7U0FDdEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFmWSxRQUFBLGVBQWUsbUJBZTNCIn0=