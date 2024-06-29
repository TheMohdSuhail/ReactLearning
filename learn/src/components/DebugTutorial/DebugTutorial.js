import React, {createContext,useState} from 'react';
import './DebugTutorial.css';
import TextInformation from '../TextInformation/TextInformation';


export const TextContext = createContext();
TextContext.displayName = 'TextContext';

export default function DebugTutorial(){
    const [text,setText] = useState('');

    return(
        <TextContext.Provider value={text}>
        <div className='wrapper'>
              <label htmlFor="text">
        Add Your Text Here: 
        <br />
        <textarea name="text" id="text" rows="10" cols="100"></textarea>
      </label>
        <TextInformation />
        </div>
        </TextContext.Provider>
    )
}