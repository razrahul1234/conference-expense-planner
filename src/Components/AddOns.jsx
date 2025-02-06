import React , { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAddOns, decreaseAddOns } from "../AddOnsSlice";

const AddOns = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.addon.addOns);
    console.log(selector);

    const addOnsList = [
       {
        id : 1,
        name : "Speakers",
        price : 35,
        quantity : 0,
        imageUrl : 'https://th.bing.com/th/id/OIP.QmzIxs6iQG_yPR2waGcOLwHaFF?w=257&h=180&c=7&r=0&o=5&pid=1.7',
       },
       {
        id : 2,
        name : "Microphones",
        price : 45,
        quantity : 0,
        imageUrl : 'https://th.bing.com/th/id/OIP.dFMnniofs_kJBQHBdor4hQHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7',
       },
       {
        id : 3,
        name : "Whiteboards",
        price : 80,
        quantity : 0,
        imageUrl : 'https://th.bing.com/th/id/OIP.lecd_yqqNE2QqqyynNjQvAHaF9?w=218&h=180&c=7&r=0&o=5&pid=1.7',
       },
       {
        id : 4,
        name : "Projectors",
        price : 200,
        quantity : 0,
        imageUrl : 'https://th.bing.com/th/id/OIP.QUVfXSryse98S5TdEMSnAwHaFV?w=270&h=195&c=7&r=0&o=5&pid=1.7',
       },
       {
        id : 5,
        name : "Signage",
        price : 80,
        quantity : 0,
        imageUrl : 'https://th.bing.com/th/id/OIP.rDYkMgq0zQL0uzCAwB94bwHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7',
       }
    ];

    const handleAddOnIncrease = (addon) => {
       dispatch(increaseAddOns(addon.id));
    }

    
    const handleAddOnDecrease = (addon) => {
        dispatch(decreaseAddOns(addon.id));
    }

    const TotalCost = () => {
        return  selector.reduce((total , item) => total + item.price * item.quantity , 0);
    }

    return (
        <>
          <div className="venue-list">
                    <ul className="venue-list-items">
                        {addOnsList && addOnsList.length> 0 ? addOnsList.map((addon, index) => (
                            <li key={index} className='venue-list-item'>
                                <img src={addon.imageUrl} width="200" height="150" />
                                <p>{addon.name}</p>
                                <p>(Capacity : {addon.capacity})</p>
                                <p>$ {addon.price}</p>
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleAddOnDecrease(addon)}>
                                    -
                                </button>
                                &nbsp;
                                 {selector[index]?.quantity}
                                 &nbsp;
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleAddOnIncrease(addon)}>
                                    +
                                </button>
                            </li>
                        )) : ''}
                    </ul>
                </div>
                <button style={{color:'black'}} disabled>Total Cost: ${<TotalCost />}</button>
            
        </>
    )
}

export default AddOns;