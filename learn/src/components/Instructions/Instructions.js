import React, {Component} from 'react';
import './Instructions.css'

// Class Base components

// export default class Instructions extends Component {

//     render(){
//         return(
//             <div className='instructions'>

//             <p> Click on an emoji to view the emoji short name.</p>
//             </div>
//         )
//     }
// }


// Functions Base components

export default function Instructions(){

        return(
            <div className='instructions'>
                <p>
                    Click on an emoji to view the emoji short name.
                </p>
            </div>
        )

}