# Continuum FE Challenge

The goal of this challenge is to implement a functional and usable return orders table. During this interview, you'll work
through a few challenges that will improve the functionality and user experience of the table. Your goal should be to implement the
challenge criteria thoughtfully and completely.

Please talk through your thought process as you're coding, explain your decisions, and walk us through how you're implementing various
parts of the challenge. We want to know what you're thinking.

Feel free to Google anything, this is not a memory challenge.

## Setup
- Clone down the repo: 
- Run `npm install`
- Run `npm run dev`
- Go to `http://localhost:5173` to see the running app

## Part A:

The first step is to allow the user to sort by various criteria. You should be able to sort by <strong>RMA Number</strong>, <strong>Customer Name</strong>, and <strong>Date</strong>.

### Criteria:

- Sorting by RMA Number should be ascending
- Sorting by Customer Name should be ascending (A-Z) 
- Sorting by Date should sort results from earliest date to latest

## Part B:
The next step is to paginate the return orders so that we're not rendering too many results at once. We want to display 5 return orders per page. 
The buttons are provided for you, but you will need to add handlers to make them functional.

### Criteria:
- Each page of results should show 5 return order per page. You should not need to scroll in order to click "Previous" or "Next" buttons.
- Clicking on the [Previous Page] and [Next Page] buttons should navigate backward and forward by one page
- If the user is already on the first page of results, the Previous Page button should be disabled and should not navigate to a negative page
- If the user is on the last page of results, the Next Page button should be disabled and should not navigate to an invalid page
- Between the First Page and Next Page buttons, you should display the current page number and the total page number as "Page X of Y"
