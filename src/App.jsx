import React, {useState, useEffect} from 'react';
import { v4 as  uuidv4 } from 'uuid';
import './App.scss';
import Form from './Form';
import Bar from './Bar';
import Info from './Info';



const App = () =>{

  const [bmis, setBmis] = useState([]);
  const [data, setData] = useState({});

  useEffect(() =>{
    const date = bmis.map(obj => obj.date);
    const bmi = bmis.map(obj => obj.bmi);
    let newData = {date, bmi};
    setData(newData);
  }, [bmis])




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

  function handleDelete(id){
    let newBmis = bmis.filter(bmi => bmi.id !== id);
    setBmis(newBmis);
  }



  return (
    <div className='App'>
      <h1 className="App__header"> BMI Calculator </h1>
      
      <Form addBmi ={ handleBMIchange }/>

      <Bar labelData={data.date} bmiData={data.bmi}/>

      <div className="App__info" >      
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
                toDelete={handleDelete}
              />
            ))}
          </>
        ):(
          <div className="App__noLog"> No Log Found</div>
        )}
      </div>


      
    </div>

  );
}



export default App;
