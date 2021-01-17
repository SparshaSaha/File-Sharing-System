import * as React from 'react';
import { removeDirectory } from './utils';

const { useContext, useRef } = React;

export const DeleteDirectory = () => {

    const inputRef = useRef<HTMLInputElement>();
    
    const handleClick = async () =>{
          const response = await removeDirectory(inputRef.current.value);
          console.log(response);
    }

    return (
        <div>
           Path : <input type="text" ref={inputRef}/>
           <button type="button" className="btn btn-info ml-2" onClick={handleClick}>Delete File/Directory</button>            
        </div>
    )
}
