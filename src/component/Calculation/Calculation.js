import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    
    const cart = props.cart;
   // let totalSalary = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalSalary += parseFloat(country.salary);
    // }
    // console.log(totalSalary);

    const sum = cart.reduce( (accumulator, currentValue)=>
         accumulator + currentValue.salary
         , 0);
    console.log(sum);
   
    return (
        <div className="cart">
            <h1 className='line'>My Team</h1>
            <h1>Total Player:{cart.length}</h1>
            <h4>Total Budget:{sum}</h4>
            <br />
            <ul>
                {
                    cart.map((m,idx) => <li key={idx}>{m.name}-{m.salary}</li>)
                }
            </ul>
            
        </div>
    );
};

export default Calculation;