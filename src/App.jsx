import React, {useState} from 'react';
import { v4 as  uuidv4 } from 'uuid';
import './App.css';
import Form from './Form';
import Bar from './Bar';
import Info from './Info';



const App = () =>{

  const [bmis, setBmis] = useState([]);

  function handleBMIchange(val){
    let heightInM = (val.height/100);
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2)
    val.id = uuidv4();
    let newVal = [...bmis, val]
    let len = newVal.length;
    if(len > 7){
      newVal = newVal.slice(1, len);
      return newVal;
    };
    setBmis(newVal)
  }



  return (
    <div>
      <h1> App </h1>
      <Form addBmi ={ handleBMIchange }/>
      {bmis.length > 0 ? (
        <>
          {bmis.map(bmi => (
            <Info 
              key={bmi.id}
              id={bmi.id}
              weight={bmi.weight}
              height={bmi.height}
              date={bmi.date}
              bmi={bmi.bmi}
            />
          ))}
        </>
      ):(
        <div> No Log Found</div>
      )}
    </div>
  );
}



export default App;
