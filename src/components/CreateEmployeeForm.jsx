import React, { useState } from 'react';
import { EmployeeModal } from 'npm-modale-ta';
import Select from 'react-select';
import states from '../data/states.json';
import DatePicker from 'react-datepicker';
import '../styles/CreateEmployeeForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useEmployees } from '../contexts/EmployeeContext';

function CreateEmployeeForm() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState(null);
    const [state, setState] = useState(null);

    const { addEmployee } = useEmployees();

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
        const employee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state: state?.value,
            zipCode,
            department: department?.value
        };

        addEmployee(employee);

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
                <input type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={date => setDateOfBirth(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" selected={startDate} onChange={date => setStartDate(date)} />
            
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" value={street} onChange={e => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Select
                        options={stateOptions}
                        value={state}
                        onChange={setState}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select
                    options={departmentOptions}
                    value={department}
                    onChange={setDepartment}
                />
            </form>
            <div className='saveBtn'>
                <button onClick={saveEmployee}>Save</button>
            </div>
            <EmployeeModal isVisible={isModalVisible} onClose={closeModal} message="Employee created!"/>
        </div>
    );
}

export default CreateEmployeeForm;
