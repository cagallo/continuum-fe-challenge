import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Card, CardContent } from '@mui/material';
import returnOrders from '../returnOrders';

interface ReturnOrder {
  rmaNumber: string;
  customerId: string;
  customerName: string;
  returnType: string;
  createdDate: string;
}

interface ReturnOrdersTableProps {
  isLoading?: boolean;
}

type SortField = 'rmaNumber' | 'customerName' | 'createdDate';

const ReturnOrdersTable: React.FC<ReturnOrdersTableProps> = ({
  isLoading = false,
}) => {
  const [page, setPage] = useState(0);
  const [sortField, setSortField] = useState<SortField>('rmaNumber');
  const [sortedData, setSortedData] = useState<ReturnOrder[]>([]);
  const [currPageData, setCurrPageData] = useState<ReturnOrder[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    setSortedData(returnOrders);
    setTotalPages(Math.ceil(returnOrders.length / ITEMS_PER_PAGE));
  }, []);

  useEffect(() => {
    updatePaginatedData();
  }, [page, sortedData]);

  const handleSortClick = (field: SortField) => {
    // TODO: Implement sorting logic and apply it to the data
    console.log('Sort by:', field);
  };

  // TODO: Add your sorting logic here
  const sortReturnOrders = (orders: ReturnOrder[], field: SortField) => {
    // Implement your sorting logic here
    // Remember to handle different data types (string vs date)
    // and add sort direction (asc/desc) functionality
    
    const sortedOrders = [...orders];
    
    setSortedData(sortedOrders);
    setTotalPages(Math.ceil(sortedOrders.length / ITEMS_PER_PAGE));
  };

  const updatePaginatedData = () => {
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrPageData(sortedData.slice(startIndex, endIndex));
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short',
      day: 'numeric',
    });
  };

  const getSortArrow = (field: SortField) => {
    if (field === sortField) {
      return '↑';  // up arrow for sorted column
    }
    return '⇅';    // both arrows for unsorted columns
  };

  return (
    <div className='flex justify-center items-center' style={{ marginTop: '3em' }}>
      <Card className={`h-3/5 ${isLoading ? 'opacity-50' : ''}`} style={{ width: '65em' }}>
        <CardContent className='p-0 h-full'>
          <div className='overflow-x-auto overflow-y-auto h-full'>
            <Table>
              <TableHead>
                <TableRow className='bg-gray-50'>
                  <TableCell
                    className='font-semibold cursor-pointer hover:bg-gray-100'
                    onClick={() => handleSortClick('rmaNumber')}
                  >
                    RMA Number {getSortArrow('rmaNumber')} 
                  </TableCell>
                  <TableCell className='font-semibold'>Customer ID</TableCell>
                  <TableCell
                    className='font-semibold cursor-pointer hover:bg-gray-100'
                    onClick={() => handleSortClick('customerName')}
                  >
                    Customer Name {getSortArrow('customerName')}
                  </TableCell>
                  <TableCell className='font-semibold'>Return Type</TableCell>
                  <TableCell
                    className='font-semibold cursor-pointer hover:bg-gray-100'
                    onClick={() => handleSortClick('createdDate')}
                  >
                    Created Date {getSortArrow('createdDate')} 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currPageData.length > 0 ? (
                  currPageData.map((order: ReturnOrder) => (
                    <TableRow key={order.rmaNumber} className='hover:bg-gray-50'>
                      <TableCell className='font-medium'>{order.rmaNumber}</TableCell>
                      <TableCell>{order.customerId}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>{order.returnType}</TableCell>
                      <TableCell>{formatDate(order.createdDate)}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className='text-center py-6 text-gray-500'>
                      No return orders found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className='flex justify-center gap-4 p-4 border-t' style={{ marginTop: '1.5em' }}>
            <button
              onClick={handlePreviousPage}
              disabled={page === 0}
              className={`px-4 py-2 rounded ${page === 0 ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              style={{ margin: '5px' }}
            >
              Previous
            </button>
            <span className='px-4 py-2'>
              Page {page + 1} of {totalPages || 1}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages - 1}
              className={`px-4 py-2 rounded ${page >= totalPages - 1 ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              style={{ margin: '5px' }}
            >
              Next
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReturnOrdersTable;