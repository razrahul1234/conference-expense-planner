import React, { Component } from "react";
import styles from "../CSS/landingpage.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export const LandingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const rouetToConference = () => {
        navigate('/conference')
    }

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h1>Conference Expense Planner</h1>
                <p>Plan your next major event with us !</p>
                <button onClick={rouetToConference} className={styles.getStartedButton}>Get Started</button>
            </div>
            <div className={styles.right}>
                <p>The Conference Expense Planner is a web-based application designed to streamline the process of managing and tracking expenses for conferences.
                    It caters to both organizers and attendees, providing a comprehensive solution for budgeting, expense logging, and financial reporting. By offering a user-friendly interface and robust features, this tool aims to simplify the financial aspects of conference planning and participation.
                </p>

                <p>One of the core features of the Conference Expense Planner is its ability to create detailed budgets. Users can categorize expenses into various segments such as venue, travel, accommodation, meals, and miscellaneous costs.
                    This structured approach ensures that all potential expenses are accounted for, helping users to plan effectively and avoid unexpected financial surprises.
                    Additionally, the application supports real-time expense tracking, allowing users to log and categorize their expenditures as they occur.
                </p>
                <p>
                    To further enhance convenience, the Conference Expense Planner includes a receipt management system. Users can upload and store digital copies of their receipts, making it easy to reference and verify expenses when needed. 
                    The application also generates comprehensive financial reports, summarizing all expenses and comparing them against the initial budget.</p>
            </div>
        </div>
    )
}