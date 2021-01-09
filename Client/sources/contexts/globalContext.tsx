import * as React from 'react';
import { IFolder } from '../interfaces/folder.interface';

const { useState, createContext } = React;
export const GlobalContext = createContext(null);

const GlobalContextProvider = (props: any) => {

    const [currentDir,setCurrentDir] = useState<IFolder | undefined>(undefined);
    
    return (
        <GlobalContext.Provider value ={{ currentDir , setCurrentDir }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
