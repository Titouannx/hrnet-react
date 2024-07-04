import React from 'react';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="containerLink">
                <a href="/employees">View Current Employees</a>
                <CreateEmployeeForm />
            </div>
        </div>
    );
}

export default Home;