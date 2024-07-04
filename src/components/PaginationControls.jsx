import React from 'react';

function PaginationControls({ pageIndex, pageSize, employeesLength, canPreviousPage, canNextPage, gotoPage, nextPage, previousPage, pageCount, pageOptions }) {
    return (
        <div className="pagination">
            <div>
                {`Showing ${pageIndex * pageSize + 1} to ${Math.min((pageIndex + 1) * pageSize, employeesLength)} of ${employeesLength} entries`}
            </div>
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
            </div>
        </div>
    );
}

export default PaginationControls;
