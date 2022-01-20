import { createStore } from "react-redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}
