import { Button, Card, MenuItem, Option, Select, Typography } from "@material-tailwind/react";
import { Modal, Box, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import environment from "../../environment";
import moment from "moment/moment";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const TransactionsTable = (props) => {
    const [ cookies, setCookie ] = useCookies(['user', 'accessToken']);
    const thisUser = cookies['user'];

    const navigate = useNavigate();

    const TABLE_HEAD = ["Time", "Owner", "Book", "Borrower", "Exchange Item", "Status", "Actions"];

    const [transactions, setTransactions] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const handleEdit = (transaction) => {
        setSelectedTransaction(transaction);
        setEditModalOpen(true);
    };

    const handleView = (transaction) => {
        setSelectedTransaction(transaction);
        setViewModalOpen(true);
    };

    const handleStatusChange = (value) => {
        const updatedTransaction = { ...selectedTransaction, status: value };
        setSelectedTransaction(updatedTransaction);
    };

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

    const handleEditSubmit = () => {
        updateTransaction();
        setEditModalOpen(false);
        setSelectedTransaction(null);
    };

    const fetchTransactions = async () => {
        if (!thisUser) {
            window.alert("Your session has expired. Please sign in again.");
            navigate('/login');
            return;
        }

        const response = await fetch(`${environment.apiUrl}/transactions/find-by-user?id=${thisUser.id}`);
        let data = await response.json();
        data = data.content;
        
        for (let i=0; i<data.length; i++) {
            const ownerResponse = await fetch(`${environment.apiUrl}/users/${data[i].ownerId}`);
            const ownerData = await ownerResponse.json();
            data[i].ownerName = ownerData.name;

            const borrowerResponse = await fetch(`${environment.apiUrl}/users/${data[i].borrowerId}`);
            const borrowerData = await borrowerResponse.json();
            data[i].borrowerName = borrowerData.name;
        }
        console.log(data);
        setTransactions(data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return transactions.length === 0 ? (
        <Typography className="text-normal text-base">There isn't any offer yet.</Typography>
    ) : (
        <>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="even:bg-blue-gray-50/50 hover:bg-gray-300/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {moment(t.timestamp).format("MMM Do YYYY, h:mm a")}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {t.ownerName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {`${t.targetBook.title}${t.targetBook.author ? ' - ' + t.targetBook.author : ''}`}
                    </Typography>
                  </td>                  
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {t.borrowerName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {t.exchangeItemType === "BOOK" ? `${t.bookItem.title}${t.bookItem.author ? ' - ' + t.bookItem.author : ''}` : `${t.moneyItem.amount} ${t.moneyItem.unit}`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {t.status}
                    </Typography>
                  </td>
                  <td className="p-4 flex gap-1">
                    {/* <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      Accept
                    </Typography>
                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      Reject
                    </Typography> */}
                    <Button size="sm" color='blue' onClick={() => handleView(t)}>Details</Button>
                    <Button size="sm" color='blue' onClick={() => handleEdit(t)}>Update Status</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                    <Select
                        label="Status"
                        value={selectedTransaction.status}
                        onChange={handleStatusChange}
                        fullWidth
                    >
                        <Option value="CONFIRMED">Confirmed</Option>
                        <Option value="DELIVERING">Delivering</Option>
                        <Option value="COMPLETED">Completed</Option>
                        <Option value="CANCELLED">Cancelled</Option>
                    </Select>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button onClick={() => setEditModalOpen(false)} variant="outlined" color="blue">Cancel</Button>
                        <Button onClick={() => handleEditSubmit()} variant="contained" color="blue">Save Changes</Button>
                    </Box>
                </>
                )}
            </Box>
            </Modal>
        </>
      );
}

export default TransactionsTable;