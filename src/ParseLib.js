const ToSVGLib = ({ children }) =>

    children.reduce(
        // Reducer Function
        (  state, element) => {
            let { id } = element;
            if (id) { state[id] = element; }
        },
        // Start State
        {}

);
const ParseLib = e => ToSVGLib(parser(e));
export default ParseLib ;