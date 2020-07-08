import React, { useState } from 'react';

const initialValues = {
    weight: '',
    height: '',
    date: ''
}

const Form = ({addBmi}) =>{
    
    const [bmi, setBmi] = useState(initialValues);

    // function handleWeightInput(e){
    //     setBmi({...bmi, weight: e.target.value})
    // }

    // function handleHeightInput(e){
    //     setBmi({...bmi, height: e.target.value})
    // }

    // function handleDate(){
    //     const date = new Date().toLocaleString().split(',')[0];
    //     setBmi({...bmi, date: date})
    // }


    function handleChange(e) {
        let {value, name} = e.target;
        if(value > 999){
            value = 999;
        }
        const date = new Date().toLocaleString().split(',')[0];
        setBmi({...bmi, [name]: value, date})
    }

    function handleSubmit(e){
        e.preventDefault();
        addBmi(bmi);
        setBmi(initialValues);
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="weight">
                    Weight (in Kg)
                    <input type="text"
                        name = "weight"
                        min = '1'
                        max = '999'
                        placeholder = '50'
                        value = {bmi.weight}
                        onChange = {handleChange}
                    />
                </label>
            </div>

            <div>
                <label htmlFor="height">
                    Height (in cm)                
                    <input type="text"
                        name = "height"
                        min = '1'
                        max = '999'
                        placeholder = '176'
                        value = {bmi.height}
                        onChange = {handleChange}
                    />
                </label>
            </div>
                <button type='submit' disabled={bmi.weight==='' || bmi.height === ''}>Calculate BMI</button>
            </form>
        </div>
    )
}


export default Form;