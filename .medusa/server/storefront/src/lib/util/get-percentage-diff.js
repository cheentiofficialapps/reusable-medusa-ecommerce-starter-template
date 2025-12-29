"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPercentageDiff = void 0;
const getPercentageDiff = (original, calculated) => {
    const diff = original - calculated;
    const decrease = (diff / original) * 100;
    return decrease.toFixed();
};
exports.getPercentageDiff = getPercentageDiff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBlcmNlbnRhZ2UtZGlmZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi91dGlsL2dldC1wZXJjZW50YWdlLWRpZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFFBQWdCLEVBQUUsVUFBa0IsRUFBRSxFQUFFO0lBQ3hFLE1BQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUE7SUFDbEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFBO0lBRXhDLE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUxZLFFBQUEsaUJBQWlCLHFCQUs3QiJ9