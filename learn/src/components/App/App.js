import React, {useState} from 'react';
import Instructions from '../Instructions/Instructions.js';
import AnimalCard from '../AnimalCard/AnimalCard.js';
import data from './data.js';
// import './App.css';
import Alert from '../Alert/Alert.js';
import CartSuccess from '../CartSuccess/CartSuccess.js';
import {createUseStyles} from 'react-jss';
import Product from '../Product/Product.js';
import Navigation from '../Navigation/Navivation.js';
import SaladMake from '../SaladMaker/SaladMaker.js';
import UserContext from '../User/User.js';
import DebugTutorial from '../DebugTutorial/DebugTutorial.js';
import FileNamer from '../FileNamer/FileNamer.js';
import FormTutorial from '../FormTutorial/FormTutorial.js';
import RiverInformation from '../RiverInformation/RiverInformation.js';


// const displayEmojiName = event => alert(event.target.id);
// const emojis = [
//   {
//     emoji: '😀',
//     name: "test grinning face"
//   },
//   {
//     emoji: '🎉',
//     name: "party popper"
//   },
//   {
//     emoji: '💃',
//     name: "woman dancing"
//   }
// ];
function showAdditional(additional){
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]};${information[1]}`)
  .join('\n');
  alert(alertInformation)
};

const useStyles = createUseStyles({
  wrapper:{
    padding:20,
  }
});

const user = {
  name:"MSP",
  favorites:[
    'avocado',
    'carrot'
  ]
}
function App() {
  const greeting = "greeting";
  const displayAction = false;
  const classes = useStyles()
  const [river, setRiver] = useState('nile');
 
  return (
    
    // <div className="container">
    //   <h1 id={greeting}>Hello, World</h1>
    //   {displayAction && <p>I am writing JSX</p>}
    //   <Instructions/>
    //   <ul>
    //     {
    //       emojis.map(emoji => (
    //         <li key={emoji.name}>
    //           <button
    //             onClick={displayEmojiName}
    //           >
    //             <span role="img" aria-label={emoji.name}
    //               id={emoji.name}>{emoji.emoji}</span>
    //           </button>
    //         </li>
    //       ))
    //     }
    //   </ul>
    // </div>
    <div className={classes.wrapper}>
      {/* <h1>Animals</h1>
      {data.map(animal =>(
        <AnimalCard
        additional={animal.additional}
        diet={animal.diet}
        key={animal.name}
        name={animal.name}
        size={animal.size}
        scientificName={animal.scientificName}
        showAdditional={showAdditional}
        />
      ))}
      <Alert title = "Items Not Added" type="error">
        <div>Your items are out of stock</div>
      </Alert>
      <CartSuccess /> */}
      {/* <UserContext.Provider value={user}>
      <Navigation />
      <SaladMake /> */}
      {/* <Product /> */}
      {/* </UserContext.Provider> */}
        {/* <DebugTutorial/> */}
        {/* <FileNamer /> */}
        {/* <FormTutorial /> */}
        <h1>World's Longest Rivers</h1>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
        <RiverInformation name={river} />

    </div>
  )
}
export default App;
