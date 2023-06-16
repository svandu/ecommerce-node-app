import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../../firebase";
//  it recieve some kind of callback function 

//  as the actual value you want to access
export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            console.log(user);
        });

        return unsubscribe;
    } ,[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}