import React from 'react';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    console.log("Home component loaded");    
    return (
        <div className="home-container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="containerLink">
                <Link to="/employees">View Current Employees</Link>
                <CreateEmployeeForm />
            </div>
        </div>
    );
}

export default Home;