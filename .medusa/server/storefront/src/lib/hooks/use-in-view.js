"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = void 0;
const react_1 = require("react");
const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!element.current) {
            return;
        }
        const el = element.current;
        const observer = new IntersectionObserver(([entry]) => {
            setState(entry.isIntersecting);
        }, { rootMargin });
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [element, rootMargin]);
    return isVisible;
};
exports.useIntersection = useIntersection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWluLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zdG9yZWZyb250L3NyYy9saWIvaG9va3MvdXNlLWluLXZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFzRDtBQUUvQyxNQUFNLGVBQWUsR0FBRyxDQUM3QixPQUF5QyxFQUN6QyxVQUFrQixFQUNsQixFQUFFO0lBQ0YsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFN0MsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBRTFCLE1BQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQ3ZDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNoQyxDQUFDLEVBQ0QsRUFBRSxVQUFVLEVBQUUsQ0FDZixDQUFBO1FBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVwQixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDckMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFFekIsT0FBTyxTQUFTLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBMUJZLFFBQUEsZUFBZSxtQkEwQjNCIn0=