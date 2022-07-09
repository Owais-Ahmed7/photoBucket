import { createContext } from "react";

const AppContext = createContext({
    image: null,
    setImage: () => {}
});

export default AppContext;