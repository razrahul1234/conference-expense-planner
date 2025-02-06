import React, { Component, useState } from "react";
import "../CSS/conferenceevent.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseVenueRoom, decreaseVenueRoom } from "../VenueSlice";
import AddOns from "../Components/AddOns";
import Meals from "../Components/Meals";
import MyModal from "../Utility/Modal";
import ShowDetails from "./ShowDetails";

const style = {
    navLinks: {
        "background-color": '#191970',

    },
    navItems: {
        "list-style-type": 'none',
        "color": 'white',
        display: 'flex',
        gap: '20px',
        "flex-direction": "row",
        margin: 0
    },
    venueListCss: {
        "list-style-type": "none",
        "padding": 0
    },
    venueListItems: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "margin-bottom": "10px"
    }
}

const ConferenceEvent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const venueList = [
        {
            name: "Auditorium hall",
            imageUrl: "https://www.itctech.com.cn/Public/upload/2021-09-10/1631256716.9371_wm_1232.jpg",
            capacity: 200,
            price: 5500,
            quantity: 0,
            id: 1
        },
        {
            name: "Conference room",
            imageUrl: "https://th.bing.com/th/id/OIP.YJerOPflWupGDPGQaCUEtwHaE8?w=262&h=180&c=7&r=0&o=5&pid=1.7",
            capacity: 15,
            price: 3500,
            quantity: 0,
            id: 2
        },
        {
            name: "Presentation room",
            imageUrl: "https://img.freepik.com/premium-photo/spacious-presentation-room-with-screen-generative-ai_972075-1466.jpg",
            capacity: 50,
            price: 5500,
            quantity: 0,
            id: 3
        },
        {
            name: "Large meeting room",
            imageUrl: "https://theslateproperties.com/wp-content/uploads/2019/08/Large-Conference-2.jpg",
            capacity: 10,
            price: 900,
            quantity: 0,
            id: 4
        },
        {
            name: "Small meeting room",
            imageUrl: "data:image/jpeg;base64,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",
            capacity: 5,
            price: 1100,
            quantity: 0,
            id: 5
        }
    ];
    const dispatch = useDispatch();
    const venueSelector = useSelector(venue => venue.venue.venueRooms);

    const handleVenueIncrease = (venue, index) => {
        dispatch(increaseVenueRoom(venue.id));
    }

    const handleVenueDecrease = (venue, index) => {
        dispatch(decreaseVenueRoom(venue.id));
    }

    const TotalCost = () => {
        return venueSelector.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <div className={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <nav style={style.navLinks}>
                <ul style={style.navItems}>
                    <li style={{ color: 'burlywood', flexBasis: '40%', float: 'left' }}>
                        <h2>Conference Expense Planner</h2>
                    </li>
                    <li style={{ color: 'white', flexBasis: '15%' }}>
                        <h2>Venue</h2>
                    </li>
                    <li style={{ color: 'white', flexBasis: '15%' }}>
                        <h2>Add-Ons</h2>
                    </li>
                    <li style={{ color: 'white', flexBasis: '15%' }}>
                        <h2>Meals</h2>
                    </li>
                    <li style={{ flexBasis: '15%', margin: 'auto' }}>
                        <button style={{ backgroundColor: 'burlywood', color: 'white' }} onClick={openModal}>Show Details</button>
                        <MyModal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                        >
                            <ShowDetails />
                        </MyModal>
                    </li>
                </ul>
            </nav>

            <>
                <div className="venue-selection" style={{ backgroundColor: '#191970', width: "60%", margin: 'auto' }}>
                    <h2 style={{ color: 'white' }}>Venue Room Selection</h2>
                </div>
                <div className="venue-list">
                    <ul className="venue-list-items">
                        {venueList && venueList.length > 0 ? venueList.map((venue, index) => (
                            <li key={index} className='venue-list-item'>
                                <img src={venue.imageUrl} width="200" height="150" />
                                <p>{venue.name}</p>
                                <p>(Capacity : {venue.capacity})</p>
                                <p>$ {venue.price}</p>
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleVenueDecrease(venue)}>
                                    -
                                </button>
                                &nbsp;
                                {venueSelector[index]?.quantity}
                                &nbsp;
                                <button className={`increase-decrease-btn`}
                                    onClick={() => handleVenueIncrease(venue)}>
                                    +
                                </button>
                            </li>
                        )) : ''}
                    </ul>
                </div>
                <button style={{ color: 'black' }} disabled>Total Cost: ${<TotalCost />}</button>
            </>

            <br /> <br />

            <>
                <div className="addsons-selection" style={{ backgroundColor: '#191970', width: "60%", margin: 'auto' }}>
                    <h2 style={{ color: 'white' }}>Add-Ons Selection</h2>
                </div>
                <AddOns />
            </>

            <br /> <br />


            <>
                <div className="meals-selection" style={{ backgroundColor: '#191970', width: "60%", margin: 'auto' }}>
                    <h2 style={{ color: 'white' }}>Meals Selection</h2>
                </div>
                <Meals />
            </>

            <br /> <br />
        </div>
    )
}

export default ConferenceEvent;