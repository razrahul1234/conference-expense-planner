import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const ShowDetails = () => {
   
    const venueSelector = useSelector(state => state.venue.venueRooms);
    console.log(venueSelector);
    const addOnSelector = useSelector(state => state.addon.addOns);
    console.log(addOnSelector);
    const mealsSelector = useSelector(state => state.meals.meals);
    console.log(mealsSelector);

    const columns = [
        {
            name : "Name",
            selector : (row) => row.name
        },
        {
            name : "Unit Cost",
            selector : (row) => row.unitCost
        },
        {
            name : "Quantity",
            selector : (row) => row.quantity
        },
        {
            name : "Total Cost",
            selector : (row) => row.totalCostDollar
        }
    ];
    let data = [];

    const filteredVenue = venueSelector.filter(venue => venue.quantity>0).map(venue => {
        return {
            ...venue,
            totalCost : Number(venue.price) * Number(venue.quantity),
            totalCostDollar : `$${Number(venue.price) * Number(venue.quantity)}`,
            unitCost : `$${venue.price}`
        }
    });
    const filteredAddOns = addOnSelector.filter(addon => addon.quantity>0).map(addon => {
        return {
            ...addon,
            totalCost : Number(addon.price) * Number(addon.quantity),
            totalCostDollar : `$${Number(addon.price) * Number(addon.quantity)}`,
            unitCost : `$${addon.price}`
        }
    });;
    const filteredMeals = mealsSelector.filter(meal => meal.people>0 && meal.selected === true).map(meal => {
        return {
            ...meal,
            quantity : `For ${meal.people} people`,
            totalCost : Number(meal.people) * Number(meal.price),
            totalCostDollar : `$${Number(meal.people) * Number(meal.price)}`,
            unitCost : `$${meal.price}`
        }
    });

    data = [...data.concat(filteredVenue, filteredAddOns, filteredMeals)];
    console.log("data : ", data);

    const totalCost = data.reduce((cost , item) => cost + item.totalCost, 0);

    return (
        <div style={{textAlign:'center'}}>
          <em style={{margin:0}}>TOTAL COST FOR THE EVENT</em>
           <h2 style={{margin:0}}>${totalCost}</h2>
           <DataTable
              columns={columns}
              data={data}
           >

           </DataTable>
        </div>
    )
}

export default ShowDetails;