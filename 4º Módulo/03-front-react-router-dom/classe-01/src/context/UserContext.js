import { createContext } from "react";
import useUserProvider from "../hooks/useProvider";

const UserContext = createContext({});

export function UserProvider(props){
    const useProvider = useUserProvider();
    
    return (
        <UserContext.Provider value={useProvider}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;