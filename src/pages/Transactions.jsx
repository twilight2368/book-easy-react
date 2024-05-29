import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, Card, CardContent, MenuItem, Select } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';
import WrapBar from '../components/WrapBar';
import environment from '../environment';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchTransactions = async () => {
    const response = await fetch(`${environment.apiUrl}/transactions`);
    const data = await response.json();
    console.log(data.content);
    setTransactions(data.content);
  }
  
  useEffect(() => {
    fetchTransactions();
  }, []);

  const updateTransaction = async () => {
    const response = await fetch(`${environment.apiUrl}/transactions/${selectedTransaction.id}/update-status?value=${selectedTransaction.status}`, {
      method: "PUT",
    });
    if (response.ok) {
      const updatedTransactions = transactions.map((transaction) =>
        transaction.id === selectedTransaction.id ? selectedTransaction : transaction
      );
      setTransactions(updatedTransactions);
      return;
    }
  }

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
    updateTransaction();
    setEditModalOpen(false);
    setSelectedTransaction(null);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.ownerId == searchQuery ||
    transaction.borrowerId == searchQuery ||
    transaction.targetBook.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WrapBar>
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
                    <TableCell>Owner</TableCell>
                    <TableCell>Book's Title</TableCell>
                    <TableCell>Borrower</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.timestamp.slice(0, 10)}</TableCell>
                      <TableCell>{transaction.ownerId}</TableCell>
                      <TableCell>{transaction.targetBook.title}</TableCell>
                      <TableCell>{transaction.borrowerId}</TableCell>
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
                <Typography>Time: {selectedTransaction.timestamp.slice(0, 10)}</Typography>
                <Typography>Owner: {selectedTransaction.ownerId}</Typography>
                <Typography>Book's Title: {selectedTransaction.targetBook.title}</Typography>
                <Typography>Borrower: {selectedTransaction.borrowerId}</Typography>
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
                  value={selectedTransaction.ownerId}
                  fullWidth
                  sx={{ mb: 2 }}
                  disabled
                />
                <TextField
                  label="Book's Title"
                  name="bookTitle"
                  value={selectedTransaction.targetBook.title}
                  fullWidth
                  sx={{ mb: 2 }}
                  disabled
                />
                <TextField
                  label="Exchanger's Email"
                  name="exchangerEmail"
                  value={selectedTransaction.borrowerId}
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
                  <MenuItem value="CONFIRMED">Confirmed</MenuItem>
                  <MenuItem value="DELIVERING">Delivering</MenuItem>
                  <MenuItem value="COMPLETED">Completed</MenuItem>
                  <MenuItem value="CANCELLED">Cancelled</MenuItem>
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
    </WrapBar>
  );
};

export default Transactions;
