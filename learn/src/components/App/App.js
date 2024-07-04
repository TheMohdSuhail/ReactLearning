import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import React, {lazy, Suspense,useEffect,useReducer,useRef, useState} from 'react';
// import Instructions from '../Instructions/Instructions.js';
// import AnimalCard from '../AnimalCard/AnimalCard.js';
// import data from './data.js';
// // import './App.css';
// import Alert from '../Alert/Alert.js';
// import CartSuccess from '../CartSuccess/CartSuccess.js';
import { createUseStyles } from 'react-jss';
// import Product from '../Product/Product.js';
// import Navigation from '../Navigation/Navivation.js';
// import SaladMake from '../SaladMaker/SaladMaker.js';
// import UserContext from '../User/User.js';
// import DebugTutorial from '../DebugTutorial/DebugTutorial.js';
// import FileNamer from '../FileNamer/FileNamer.js';
// import FormTutorial from '../FormTutorial/FormTutorial.js';
import Manatee from '../Manatee/Manatee.js';
import Narwhal from '../Narwhal/Narwhal.js';
import Whale from '../Whale/Whale.js';
// import RiverInformation from '../RiverInformation/RiverInformation.js';

// const RiverInformation = lazy(() => import( /* webpackChunkName: "RiverInformation" */ '../RiverInformation/RiverInformation'));
// import { getList,setItem } from '../../groceriesService/list.js';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBird, increment_Bird } from '../../store/birds/birds.js';
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
// function showAdditional(additional){
//   const alertInformation = Object.entries(additional)
//   .map(information => `${information[0]};${information[1]}`)
//   .join('\n');
//   alert(alertInformation)
// };

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  }
});

// const user = {
//   name:"MSP",
//   favorites:[
//     'avocado',
//     'carrot'
//   ]
// }
function App() {

  // const [alert, setAlert] = useState(false);

  // const greeting = "greeting";
  // const displayAction = false;
  const classes = useStyles()
  // const [river, setRiver] = useState('nile');
  // const [show, toggle] = useReducer(state => !state, true);
  // const [list,setList] = useState([]);

  // const [itemInput, setItemInput] = useState('');
  // let mounted = useRef(true);

  // useEffect(()=>{
  //   mounted.current = true;
  //   if(list.length && !alert){
  //     return;
  //   }
  //   getList()
  //   .then(items=>{
  //     if(mounted.current){
  //       setList(items)
  //     }
  //   })
  //   return () => mounted.current = false;

  // },[alert, list])

  // useEffect(() => {
  //   if(alert) {
  //   setTimeout(() => {
  //     if(mounted.current){

  //       setAlert(false);
  //     }
  //   }, 1000)
  //   }
  //  }, [alert])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setItem(itemInput)
  //   .then(() => {
  //     if(mounted.current){

  //       setItemInput('');
  //       setAlert(true);
  //     }
  //   })
  //  };
  // const [birdName, setBird] = useState('');

  //  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
  //   return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  // });
  //  const dispatch = useDispatch(); 

  //  const handleSubmit = event =>{
  //   event.preventDefault();
  //   dispatch(addBird(birdName))
  //   setBird('');
  //  };


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
      {/* <h1>World's Longest Rivers</h1>
        <div><button onClick={toggle}>Toggle Details</button></div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <Suspense fallback={<div>Loading Compenent</div>}>

        {show &&<RiverInformation name={river} />}

      </Suspense> */}

      {/* <h1>My Grocery List</h1>
      <ul>
        {list.map(item=><li key={item.item}>{item.item}</li>)}
      </ul>
      {alert && <h2> Submit Successful</h2>}
          <form onSubmit={handleSubmit}>
              <label htmlFor="">
                <p>New Item</p>
                <input type="text" name="" id="" onChange={event => setItemInput(event.target.value)} value={itemInput} />
              </label>
              <button type="submit">Submit</button>
          </form> */}

      {/* <h1>Bird List</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              <p>Add Bird</p>
              <input type="text" onChange={e=> setBird(e.target.value)} value={birdName}/>
            </label>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <ul>
              {birds.map(bird =>(
                <li key={bird.name}>
                  <h3>{bird.name}</h3>
                  <div>
                    Views:{bird.views}
                    <button onClick={() => dispatch(increment_Bird(bird.name))}><span role="img" aria-label="add">➕</span></button>
                  </div>
              </li>
            ))}
          </ul> */}

      <h1>Marine Mammals</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route path="/whale" element={<Whale />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
