"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 *
 * @param initialState - boolean
 * @returns An array like object with `state`, `open`, `close`, and `toggle` properties
 *  to allow both object and array destructuring
 *
 * ```
 *  const [showModal, openModal, closeModal, toggleModal] = useToggleState()
 *  // or
 *  const { state, open, close, toggle } = useToggleState()
 * ```
 */
const useToggleState = (initialState = false) => {
    const [state, setState] = (0, react_1.useState)(initialState);
    const close = () => {
        setState(false);
    };
    const open = () => {
        setState(true);
    };
    const toggle = () => {
        setState((state) => !state);
    };
    const hookData = [state, open, close, toggle];
    hookData.state = state;
    hookData.open = open;
    hookData.close = close;
    hookData.toggle = toggle;
    return hookData;
};
exports.default = useToggleState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXRvZ2dsZS1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9ob29rcy91c2UtdG9nZ2xlLXN0YXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnQztBQVNoQzs7Ozs7Ozs7Ozs7R0FXRztBQUVILE1BQU0sY0FBYyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQzlDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFVLFlBQVksQ0FBQyxDQUFBO0lBRXpELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQixDQUFDLENBQUE7SUFFRCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUMsQ0FBQTtJQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFjLENBQUE7SUFDMUQsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsY0FBYyxDQUFBIn0=