"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = compareAddresses;
const lodash_1 = require("lodash");
function compareAddresses(address1, address2) {
    return (0, lodash_1.isEqual)((0, lodash_1.pick)(address1, [
        "first_name",
        "last_name",
        "address_1",
        "company",
        "postal_code",
        "city",
        "country_code",
        "province",
        "phone",
    ]), (0, lodash_1.pick)(address2, [
        "first_name",
        "last_name",
        "address_1",
        "company",
        "postal_code",
        "city",
        "country_code",
        "province",
        "phone",
    ]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1hZGRyZXNzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvdXRpbC9jb21wYXJlLWFkZHJlc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1DQXlCQztBQTNCRCxtQ0FBc0M7QUFFdEMsU0FBd0IsZ0JBQWdCLENBQUMsUUFBYSxFQUFFLFFBQWE7SUFDbkUsT0FBTyxJQUFBLGdCQUFPLEVBQ1osSUFBQSxhQUFJLEVBQUMsUUFBUSxFQUFFO1FBQ2IsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7UUFDYixNQUFNO1FBQ04sY0FBYztRQUNkLFVBQVU7UUFDVixPQUFPO0tBQ1IsQ0FBQyxFQUNGLElBQUEsYUFBSSxFQUFDLFFBQVEsRUFBRTtRQUNiLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7UUFDVCxhQUFhO1FBQ2IsTUFBTTtRQUNOLGNBQWM7UUFDZCxVQUFVO1FBQ1YsT0FBTztLQUNSLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyJ9