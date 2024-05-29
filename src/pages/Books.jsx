import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, MenuItem, Select, FormControl, InputLabel, Card, CardContent } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Navbar } from '@material-tailwind/react';
import WrapBar from '../components/WrapBar';
import environment from '../environment';

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${environment.apiUrl}/books`);
      const data = await response.json();
      setBooks(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const updateBook = async () => {
    const response = await fetch(`${environment.apiUrl}/books/${selectedBook.id}`, {
      method: "PUT",
      headers: { 
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify(editedBook)
    });
    if (response.ok) {
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id ? editedBook : book
      );
      setBooks(updatedBooks);
      return;
    }
  }

  const deleteBook = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/books/${selectedBook.id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        const updatedBooks = books.filter((book) =>
          book.id !== selectedBook.id
        );
        setBooks(updatedBooks);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);

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
    updateBook(selectedBook.id);
    setEditModalOpen(false);
    setSelectedBook(null);
    setEditedBook({});
  };

  const handleDeleteConfirm = () => {
    deleteBook(selectedBook.id);
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

  const filteredBooks = books?.filter(book => 
    book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.publisher?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.publishYear?.toString().includes(searchQuery)
  );

  return (
    <WrapBar>
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
                  {filteredBooks?.map((book, index) => (
                    <TableRow key={book.id} className={book.status === 'Removed' ? 'bg-gray-200' : ''}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.publisher}</TableCell>
                      <TableCell>{book.publishYear}</TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <Select
                            value={book.status}
                            onChange={(event) => handleChangeStatus(book, event)}
                          >
                            <MenuItem value="AVAILABLE">Available</MenuItem>
                            <MenuItem value="EXCHANGED">Exchanged</MenuItem>
                            <MenuItem value="REMOVED">Removed</MenuItem>
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
              value={editedBook.publishYear || ''}
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
                <MenuItem value="AVAILABLE">Available</MenuItem>
                <MenuItem value="EXCHANGED">Exchanged</MenuItem>
                <MenuItem value="REMOVED">Removed</MenuItem>
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
    </WrapBar>
  );
};

export default Books;