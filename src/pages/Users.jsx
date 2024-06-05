import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, TextField, IconButton, Card, CardContent } from '@mui/material';
import { Edit, Delete, Lock, LockOpen } from '@mui/icons-material';
import WrapBar from '../components/WrapBar';
import environment from '../environment';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUsers = async () => {
    const response = await fetch(`${environment.apiUrl}/users`);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const editUser = async () => {
    const response = await fetch(`${environment.apiUrl}/users/${selectedUser.id}`, {
      method: "PUT",
      headers: { 
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify(editedUser)
    });

    if (response.ok) {
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? editedUser : user
      );
      setUsers(updatedUsers);
      return;
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
    setEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const handleEditSubmit = () => {
    editUser();
    setEditModalOpen(false);
    setSelectedUser(null);
    setEditedUser({});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phoneNumber?.includes(searchQuery) ||
    user.roles[0]?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WrapBar>
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
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow key={user.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phoneNumber}</TableCell>
                      <TableCell>{user.roles[0]}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEdit(user)} aria-label="edit">
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
              name="phoneNumber"
              value={editedUser.phoneNumber || ''}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Role"
              name="role"
              value={editedUser.roles ? editedUser.roles[0] : ''}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={() => setEditModalOpen(false)} variant="outlined" color="secondary">Cancel</Button>
              <Button onClick={handleEditSubmit} variant="contained" color="primary">Save Changes</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </WrapBar>
  );
};

export default Users;
