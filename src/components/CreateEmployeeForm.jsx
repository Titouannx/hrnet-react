import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import '../styles/CreateEmployeeForm.css';
import states from '../data/states.json';
import { EmployeeModal } from 'npm-modale-ta';

function CreateEmployeeForm() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' }
    ];

    const stateOptions = states.map(state => ({
        value: state.abbreviation,
        label: state.name
    }));

    const saveEmployee = () => {
        setIsModalVisible(true); 
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <h2>Create Employee</h2>
            <form id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={date => setDateOfBirth(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" selected={startDate} onChange={date => setStartDate(date)} />
            
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Select
                        options={stateOptions}
                        defaultValue={stateOptions[0]}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select
                    options={departmentOptions}
                    defaultValue={departmentOptions[0]}
                />
            </form>
            <div className='saveBtn'>
                <button onClick={saveEmployee}>Save</button>
            </div>
            <EmployeeModal isVisible={isModalVisible} onClose={closeModal} />
        </div>
    );
}

export default CreateEmployeeForm;
