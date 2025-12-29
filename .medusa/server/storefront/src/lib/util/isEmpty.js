"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isArray = exports.isObject = void 0;
const isObject = (input) => input instanceof Object;
exports.isObject = isObject;
const isArray = (input) => Array.isArray(input);
exports.isArray = isArray;
const isEmpty = (input) => {
    return (input === null ||
        input === undefined ||
        ((0, exports.isObject)(input) && Object.keys(input).length === 0) ||
        ((0, exports.isArray)(input) && input.length === 0) ||
        (typeof input === "string" && input.trim().length === 0));
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFbXB0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi91dGlsL2lzRW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUE7QUFBbEQsUUFBQSxRQUFRLFlBQTBDO0FBQ3hELE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQTlDLFFBQUEsT0FBTyxXQUF1QztBQUNwRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ3BDLE9BQU8sQ0FDTCxLQUFLLEtBQUssSUFBSTtRQUNkLEtBQUssS0FBSyxTQUFTO1FBQ25CLENBQUMsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLElBQUEsZUFBTyxFQUFDLEtBQUssQ0FBQyxJQUFLLEtBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3pELENBQUE7QUFDSCxDQUFDLENBQUE7QUFSWSxRQUFBLE9BQU8sV0FRbkIifQ==