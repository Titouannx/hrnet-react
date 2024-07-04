import React, { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import axios from 'axios';
//import EmployeeTable from '../components/EmployeeTable';
//import PaginationControls from '../components/PaginationControls';
//import SearchBar from '../components/SearchBar';
import '../styles/CurrentEmployees.css';
import { lazy } from 'react';

const SearchBar = lazy(() => import('../components/SearchBar'));
const EmployeeTable = lazy(() => import('../components/EmployeeTable'));
const PaginationControls = lazy(() => import('../components/PaginationControls'));

function CurrentEmployeesPage() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('data/employees.json')
            .then(response => {
                setEmployees(response.data);
            });
    }, []);

    const columns = useMemo(() => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data: employees,
        initialState: { pageIndex: 0, pageSize: 10 }
    }, useGlobalFilter, useSortBy, usePagination);

    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className="pagination">
                <div id="entries-info">
                    Show
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                    >
                        {[10, 25, 50, 100].map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    entries
                </div>
                <SearchBar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            </div>
            <EmployeeTable
                columns={columns}
                data={employees}
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                headerGroups={headerGroups}
                page={page}
                prepareRow={prepareRow}
            />
            <PaginationControls
                pageIndex={pageIndex}
                pageSize={pageSize}
                employeesLength={employees.length}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                pageCount={pageCount}
                pageOptions={pageOptions}
            />
            <a href="/">Home</a>
        </div>
    );
}

export default CurrentEmployeesPage;