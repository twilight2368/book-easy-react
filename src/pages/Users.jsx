import React, { useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, Card, CardContent } from '@mui/material';
import { Edit, Delete, Lock, LockOpen } from '@mui/icons-material';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com', phone: '1234567890', role: 'Admin', status: 'Active' },
    { id: 2, name: 'User 2', email: 'user2@example.com', phone: '0987654321', role: 'User', status: 'Inactive' },
    // Add more user data here
  ]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
    setEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const handleToggleStatus = (user) => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, status: u.status === 'Inactive' ? 'Active' : 'Inactive' } : u
    );
    setUsers(updatedUsers);
  };

  const handleEditSubmit = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    setEditModalOpen(false);
    setSelectedUser(null);
    setEditedUser({});
  };

  const handleDeleteConfirm = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleToggleModalStatus = () => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === 'Inactive' ? 'Active' : 'Inactive',
    }));
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User List
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
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleToggleStatus(user)} aria-label="toggle status">
                        {user.status === 'Inactive' ? <Lock /> : <LockOpen />}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(user)} aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(user)} aria-label="delete">
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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>Edit User</Typography>
          <TextField
            label="Name"
            name="name"
            value={editedUser.name || ''}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={editedUser.email || ''}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={editedUser.phone || ''}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Role"
            name="role"
            value={editedUser.role || ''}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" sx={{ mb: 1 }}>
            Status
          </Typography>
          <IconButton onClick={handleToggleModalStatus} aria-label="toggle status" sx={{ mb: 2 }}>
            {editedUser.status === 'Inactive' ? <Lock /> : <LockOpen />}
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => setEditModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
            <Button onClick={handleEditSubmit} variant="contained" color="primary">Save Changes</Button>
          </Box>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>Confirm Deletion</Typography>
          <Typography>Are you sure you want to delete {selectedUser && selectedUser.name}?</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button onClick={() => setDeleteModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
            <Button onClick={handleDeleteConfirm} variant="contained" color="error">Delete</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Users;
