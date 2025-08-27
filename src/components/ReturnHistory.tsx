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
type SortDirection = 'asc' | 'desc';
// @ts-ignore - Will be used in pagination implementation
const ITEMS_PER_PAGE = 5;

const ReturnOrdersTable: React.FC<ReturnOrdersTableProps> = ({
  isLoading = false,
}) => {
  // @ts-ignore - Will be used in pagination implementation
  const [page, setPage] = useState(0);
  const [sortField, setSortField] = useState<SortField>('rmaNumber');
  const [sortedData, setSortedData] = useState<ReturnOrder[]>([]);
   // @ts-ignore - Will be used in sorting implementation
   const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  // @ts-ignore - Will be used in pagination implementation
  const [currPageData, setCurrPageData] = useState<ReturnOrder[]>([]);

  useEffect(() => {
    handleSortedData(returnOrders, sortField);
  }, []);

  const handleSortClick = (field: SortField) => {
    setSortField(field);
    handleSortedData(returnOrders, field);
    console.log('Sort by:', field);
    setPage(0); // reset to first page when sorting changes
  };

  // TODO: Add your sorting logic here
  const handleSortedData = (orders: ReturnOrder[], 
    // @ts-ignore - Will be used in sorting implementation
    field: SortField
  ) => {
    const sortedOrders = [...orders]

    setSortedData(sortedOrders);
  }

  // TODO: Implement pagination (5 items per page)
  const handleNextPage = () => {
    // TODO: Implement next page
    console.log('Next page clicked');
  };

  const handlePreviousPage = () => {
    // TODO: Implement previous page
    console.log('Previous page clicked');
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
    <div className='flex justify-center items-center min-h-screen'>
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
                {sortedData.map((order: ReturnOrder) => (
                  <TableRow key={order.rmaNumber} className='hover:bg-gray-50'>
                    <TableCell className='font-medium'>{order.rmaNumber}</TableCell>
                    <TableCell>{order.customerId}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.returnType}</TableCell>
                    <TableCell>{formatDate(order.createdDate)}</TableCell>
                  </TableRow>
                ))}
                {(!returnOrders || returnOrders.length === 0) && (
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
              className='px-4 py-2 rounded bg-gray-100 hover:bg-gray-200'
              style={{ margin: '5px' }}
            >
              Previous
            </button>
            <span className='px-4 py-2'>
              Page 1 of 1
            </span>
            <button
              onClick={handleNextPage}
              className='px-4 py-2 rounded bg-gray-100 hover:bg-gray-200'
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