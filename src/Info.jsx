import React from 'react';
import './Info.scss'


const Info = ({id, weight,height,date,bmi,toDelete }) =>{

    const handleDelete = () =>{
        toDelete(id);
    }

    return (
        <div className='Info'>
            <div className='Info__card'>
                <span className='Info__heading'> BMI: {bmi}</span>
                <div className='Info__details'>
                    <span>Weight: {weight} kg</span>
                    <span>Height: {height} cm</span>
                    <span>Date: {date}</span>
                </div>
                <button onClick={handleDelete} className='Info__delete' >X</button>
            </div>
        </div>
    )
}


export default Info;