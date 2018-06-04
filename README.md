## Leslie's MyReads Project

[My Repository Location is at Gitlab](https://gitlab.com/lglaves/myreads)

MyReads is a Virtual Bookcase Application that provides a Web based GUI to allow you to store your personal book reading list by organizing books into one of 3 categories organized in virtual book shelves:
1) "Currently Reading"
2) "Want to Read"
3) "Read"

The application will allow you to search the Udacity provided library for books to add to your collection and you can also move books from one category to another, or delete books from your reading list.

 All methods for accessing the server are provided in the BooksAPI.js file.


## Libraries Used
* React
* React Router V4

## Features Added
* Ability to search for Books in the Udacity provided library and add them to the reading list
* Ability to Move Books among the shelves
* Ability to Remove a Book completely from your library
* Ability to click on book cover and open a page displaying the book description

## To Install and Run this Application
1) This application requires `npm` and `node js` to be installed 
1) Clone or download a copy of this repository
1) Install dependencies by running `npm install` from the root directory of the project
1) Start a development server by running `npm start` from the root directory of the project

## References Used
* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)



## Backend Server

Data is stored in a Udacity provided [Backend Server](https://reactnd-books-api.udacity.com/). The file [`BooksAPI.js`](src/BooksAPI.js) contains all methods that perform HTTP requests on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

