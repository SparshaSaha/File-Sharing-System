import * as React from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import { makeDirectory } from './utils';

const { useContext, useRef } = React;

export const CreateDirectory = () => {

    const { currentDir, setCurrentDir } = useContext(GlobalContext);
    const folderName = useRef<HTMLInputElement>();
    const handleClick = async () =>{
         
         const response = await makeDirectory(currentDir.path, folderName.current.value);
         console.log(response);
         
    }

    return (
        <div>
            <input type="text" ref={folderName}/>
            <button onClick={handleClick}>Create Directory</button>
        </div>
    )
}
