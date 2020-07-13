import React, { useState } from 'react';
import './Form.scss'

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
        <div className="Form">
            <form onSubmit={handleSubmit} className="Form__form">
            <div className="Form__form--fix">
                <div className="Form__form-group">
                    <label htmlFor="weight" className="Form__weight-label">
                        Weight (in Kg)
                    </label>
                    <input  className="Form__weight-input"
                        type="text"
                        name = "weight"
                        min = '1'
                        max = '999'
                        placeholder = 'Input Weight eg.50'
                        value = {bmi.weight}
                        onChange = {handleChange}
                    />
                </div>

                <div className="Form__form-group">
                    <label htmlFor="height" className="Form__height-label">
                        Height (in cm)                
                    </label>
                    <input  className="Form__height-input"
                        type="text"
                        name = "height"
                        min = '1'
                        max = '999'
                        placeholder = 'Input Height eg. 176'
                        value = {bmi.height}
                        onChange = {handleChange}
                    />
                    
                </div>
            </div>
                <button className="Form__button" type='submit' disabled={bmi.weight==='' || bmi.height === ''}>Calculate BMI</button>
            </form>
        </div>
    )
}


export default Form;