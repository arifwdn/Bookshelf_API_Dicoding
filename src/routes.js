const { 
    addBook, getAllbooks, getBookDetail, editBook, deleteBook, 
 } = require('./handlers');

const routes = [
    {
        method: 'POST', 
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllbooks,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookDetail,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBook,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook,
    },
];

module.exports = routes;
