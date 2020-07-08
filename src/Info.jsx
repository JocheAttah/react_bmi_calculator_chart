import React from 'react';


const Info = ({id, weight,height,date,bmi}) =>{

    return (
        <div>
            <div className='card'>
                <span> BMI: {bmi}</span>
                <div>
                    <span>Weight: {weight} kg</span>
                    <span>Height: {height} kg</span>
                    <span>Date: {date}</span>
                </div>
                <button>X</button>
            </div>
        </div>
    )
}


export default Info;