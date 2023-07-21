import { createContext, useState, useEffect } from "react"

import { getCategoriesAndDocuments, sigInAuthUserWithEmailAndPassword } from "../../../firebase";


export const CategoryContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategories();
    }, []);
    
    const value = { categoriesMap };
    return (
        <CategoryContext.Provider value={value}> {children} </CategoryContext.Provider>
    )
}
