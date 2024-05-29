import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, Card, CardContent, MenuItem, Select } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, time: '2023-01-01 10:00', ownerEmail: 'owner1@example.com', bookTitle: 'Book 1', exchangerEmail: 'exchanger1@example.com', status: 'Confirmed' },
    // Add more transaction data here
  ]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setEditModalOpen(true);
  };

  const handleView = (transaction) => {
    setSelectedTransaction(transaction);
    setViewModalOpen(true);
  };

  const handleStatusChange = (event) => {
    const updatedTransaction = { ...selectedTransaction, status: event.target.value };
    setSelectedTransaction(updatedTransaction);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEditSubmit = () => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === selectedTransaction.id ? selectedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setEditModalOpen(false);
    setSelectedTransaction(null);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.exchangerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            label="Search"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mb: 2 }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Owner's Email</TableCell>
                  <TableCell>Book's Title</TableCell>
                  <TableCell>Exchanger's Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell>{transaction.ownerEmail}</TableCell>
                    <TableCell>{transaction.bookTitle}</TableCell>
                    <TableCell>{transaction.exchangerEmail}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleView(transaction)} aria-label="view">
                        <Visibility />
                      </IconButton>
                      <IconButton onClick={() => handleEdit(transaction)} aria-label="edit">
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* View Modal */}
      <Modal open={viewModalOpen} onClose={() => setViewModalOpen(false)}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>Transaction Details</Typography>
          {selectedTransaction && (
            <>
              <Typography>ID: {selectedTransaction.id}</Typography>
              <Typography>Time: {selectedTransaction.time}</Typography>
              <Typography>Owner's Email: {selectedTransaction.ownerEmail}</Typography>
              <Typography>Book's Title: {selectedTransaction.bookTitle}</Typography>
              <Typography>Exchanger's Email: {selectedTransaction.exchangerEmail}</Typography>
              <Typography>Status: {selectedTransaction.status}</Typography>
              <Button onClick={() => setViewModalOpen(false)} variant="outlined" color="secondary">Close</Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>Edit Transaction</Typography>
          {selectedTransaction && (
            <>
              <TextField
                label="Owner's Email"
                name="ownerEmail"
                value={selectedTransaction.ownerEmail}
                fullWidth
                sx={{ mb: 2 }}
                disabled
              />
              <TextField
                label="Book's Title"
                name="bookTitle"
                value={selectedTransaction.bookTitle}
                fullWidth
                sx={{ mb: 2 }}
                disabled
              />
              <TextField
                label="Exchanger's Email"
                name="exchangerEmail"
                value={selectedTransaction.exchangerEmail}
                fullWidth
                sx={{ mb: 2 }}
                disabled
              />
              <Select
                label="Status"
                value={selectedTransaction.status}
                onChange={handleStatusChange}
                fullWidth
                sx={{ mb: 2 }}
              >
                <MenuItem value="Confirmed">Confirmed</MenuItem>
                <MenuItem value="Delivering">Delivering</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => setEditModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
                <Button onClick={handleEditSubmit} variant="contained" color="primary">Save Changes</Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Transactions;
