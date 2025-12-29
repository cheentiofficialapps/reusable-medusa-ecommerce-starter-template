"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.ModalProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ModalContext = (0, react_1.createContext)(null);
const ModalProvider = ({ children, close }) => {
    return ((0, jsx_runtime_1.jsx)(ModalContext.Provider, { value: {
            close,
        }, children: children }));
};
exports.ModalProvider = ModalProvider;
const useModal = () => {
    const context = (0, react_1.useContext)(ModalContext);
    if (context === null) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
exports.useModal = useModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0b3JlZnJvbnQvc3JjL2xpYi9jb250ZXh0L21vZGFsLWNvbnRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7QUFFWixpQ0FBd0Q7QUFNeEQsTUFBTSxZQUFZLEdBQUcsSUFBQSxxQkFBYSxFQUFzQixJQUFJLENBQUMsQ0FBQTtBQU90RCxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBc0IsRUFBRSxFQUFFO0lBQ3ZFLE9BQU8sQ0FDTCx1QkFBQyxZQUFZLENBQUMsUUFBUSxJQUNwQixLQUFLLEVBQUU7WUFDTCxLQUFLO1NBQ04sWUFFQSxRQUFRLEdBQ2EsQ0FDekIsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQVZZLFFBQUEsYUFBYSxpQkFVekI7QUFFTSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxrQkFBVSxFQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3hDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBQ0QsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQyxDQUFBO0FBTlksUUFBQSxRQUFRLFlBTXBCIn0=