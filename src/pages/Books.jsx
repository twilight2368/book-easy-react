import React, { useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, MenuItem, Select, FormControl, InputLabel, Card, CardContent } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Navbar } from '@material-tailwind/react';

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', year: 2020, status: 'Available' },
    // Add more book data here
  ]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editedBook, setEditedBook] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (book) => {
    setSelectedBook(book);
    setEditedBook(book);
    setEditModalOpen(true);
  };

  const handleDelete = (book) => {
    setSelectedBook(book);
    setDeleteModalOpen(true);
  };

  const handleChangeStatus = (book, event) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, status: event.target.value } : b
    );
    setBooks(updatedBooks);
  };

  const handleEditSubmit = () => {
    const updatedBooks = books.map((book) =>
      book.id === selectedBook.id ? editedBook : book
    );
    setBooks(updatedBooks);
    setEditModalOpen(false);
    setSelectedBook(null);
    setEditedBook({});
  };

  const handleDeleteConfirm = () => {
    const updatedBooks = books.map((book) =>
      book.id === selectedBook.id ? { ...book, status: 'Removed' } : book
    );
    setBooks(updatedBooks);
    setDeleteModalOpen(false);
    setSelectedBook(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.year.toString().includes(searchQuery)
  );

  return (
    <Box className="p-6">
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      <Card className="mb-6">
        <CardContent>
          <TextField
            label="Search"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-4"
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Publisher</TableCell>
                  <TableCell>Year of Publish</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBooks.map((book, index) => (
                  <TableRow key={book.id} className={book.status === 'Removed' ? 'bg-gray-200' : ''}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.publisher}</TableCell>
                    <TableCell>{book.year}</TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <Select
                          value={book.status}
                          onChange={(event) => handleChangeStatus(book, event)}
                        >
                          <MenuItem value="Available">Available</MenuItem>
                          <MenuItem value="Exchanged">Exchanged</MenuItem>
                          <MenuItem value="Removed">Removed</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(book)} aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(book)} aria-label="delete">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Edit Modal */}
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg p-6">
          <Typography variant="h6" gutterBottom>Edit Book</Typography>
          <TextField
            label="Title"
            name="title"
            value={editedBook.title || ''}
            onChange={handleChange}
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Author"
            name="author"
            value={editedBook.author || ''}
            onChange={handleChange}
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Publisher"
            name="publisher"
            value={editedBook.publisher || ''}
            onChange={handleChange}
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Year of Publish"
            name="year"
            value={editedBook.year || ''}
            onChange={handleChange}
            fullWidth
            className="mb-4"
          />
          <FormControl fullWidth className="mb-4">
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="status"
              value={editedBook.status || ''}
              onChange={handleChange}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Exchanged">Exchanged</MenuItem>
              <MenuItem value="Removed">Removed</MenuItem>
            </Select>
          </FormControl>
          <Box className="flex justify-between">
            <Button onClick={() => setEditModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
            <Button onClick={handleEditSubmit} variant="contained" color="primary">Save Changes</Button>
          </Box>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg p-6">
          <Typography variant="h6" gutterBottom>Confirm Deletion</Typography>
          <Typography>Are you sure you want to delete {selectedBook && selectedBook.title}?</Typography>
          <Box className="flex justify-between mt-4">
            <Button onClick={() => setDeleteModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
            <Button onClick={handleDeleteConfirm} variant="contained" color="error">Delete</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Books;