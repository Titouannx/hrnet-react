import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import '../styles/CurrentEmployees.css';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import EmployeeTable from '../components/EmployeeTable';
import PaginationControls from '../components/PaginationControls';
import { useEmployees } from '../contexts/EmployeeContext';

// Function to format dates
const formatDate = date => {
    if (date instanceof Date) {
        return date.toLocaleDateString(); // Customize the format as needed
    }
    return date; // If it's already a string or another type
};

function CurrentEmployeesPage() {
    const { employees } = useEmployees();

    // Format employee data
    const formattedEmployees = employees.map(emp => ({
        ...emp,
        startDate: formatDate(emp.startDate),
        dateOfBirth: formatDate(emp.dateOfBirth),
    }));

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
        data: formattedEmployees, // Use the formatted data
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
                data={formattedEmployees} // Use the formatted data
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                headerGroups={headerGroups}
                page={page}
                prepareRow={prepareRow}
            />
            <PaginationControls
                pageIndex={pageIndex}
                pageSize={pageSize}
                employeesLength={formattedEmployees.length} // Use the formatted data length
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                pageCount={pageCount}
                pageOptions={pageOptions}
            />
            <Link to="/">Home</Link>
        </div>
    );
}

export default CurrentEmployeesPage;
