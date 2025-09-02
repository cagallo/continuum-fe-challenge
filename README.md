# Return Orders Table Challenge

## Overview
Your task is to enhance the ReturnOrdersTable component by implementing data fetching with TanStack Query and improving the sorting functionality.

## Part 1: Implement TanStack Query

The component currently imports hardcoded data. Refactor it to fetch data from an API endpoint using TanStack Query.

### Requirements
- Replace the hardcoded data import with TanStack Query
- Fetch data from the `/getAllOrders` endpoint (available at `http://localhost:3001/getAllOrders`)
- Implement proper loading states
- Add error handling for failed API calls
- Add a refresh button that allows users to manually trigger a refetch
- Display# Return Orders Table Challenge

## Overview
Your task is to enhance the ReturnOrdersTable component by implementing data fetching with TanStack Query and improving the sorting functionality. The component already has pagination implemented.

## Part 1: Implement TanStack Query

The component currently imports hardcoded data. Refactor it to fetch data from an API endpoint using TanStack Query.

### Requirements
- Replace the hardcoded data import with TanStack Query
- Fetch data from the `/getAllOrders` endpoint (available at `http://localhost:3001/getAllOrders`)
- Implement proper loading states
- Add error handling for failed API calls
- Add a refresh button that allows users to manually trigger a refetch
- Display a timestamp showing when the data was last updated

## Part 2: Implement Sorting

The component has placeholder sorting functionality. Implement proper sorting for the table.

### Requirements
- Implement sorting logic for:
  - RMA Number (alphabetical)
  - Customer Name (alphabetical)
  - Created Date (chronological)
- Add toggle functionality to switch between ascending/descending sort
- Update the sort indicators to show current sort direction
- Ensure sorting works correctly with the existing pagination

## API Information

The API endpoint returns an array of ReturnOrder objects with the following structure:
```typescript
interface ReturnOrder {
  rmaNumber: string;
  customerId: string;
  customerName: string;
  returnType: string;
  createdDate: string;
}
```

## Notes
- TanStack Query is already installed in the project
- You can import it using: `import { useQuery } from '@tanstack/react-query'`
- The component should maintain its current visual design and pagination functionality
- Focus on clean, readable code with proper TypeScript usage