import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import environment from "../../environment";
import moment from "moment/moment";
import { useNavigate } from "react-router";
import ConfirmDialog from "../ConfirmDialog";

const ExchangeOffersTable = (props) => {
    const { book } = props;
    const navigate = useNavigate();

    const TABLE_HEAD = ["Time", "User", "Exchange Item", "Message", "Actions"];

    const [offers, setOffers] = useState([]);

    const fetchOffers = async (id) => {
        const response = await fetch(`${environment.apiUrl}/books/${id}/offers`);
        let data = await response.json();
        
        for (let i=0; i<data.length; i++) {
            const userResponse = await fetch(`${environment.apiUrl}/users/${data[i].userId}`);
            const userData = await userResponse.json();
            data[i].userName = userData.name;
        }
        console.log(data);
        setOffers(data);
    }

    useEffect(() => {
        fetchOffers(book.id)
    }, []);

    const handleReply = async (id, accept) => {
      const response = await fetch(`${environment.apiUrl}/books/${book.id}/offers/${id}/${accept ? 'accept' : 'reject'}`, {
        method: "POST",
        headers: { "Content-Type" : "application/json" }
      });
      const data = await response.json();
      console.log(data);

      if (accept) {
        navigate('/transactions', { state: { successMessage: 'Offer accepted successfully! New transaction has been created.' } });
      } else {
        fetchOffers(book.id);
      }
    } 

    const acceptEarliest = async () => {
      const response = await fetch(`${environment.apiUrl}/books/${book.id}/offers/accept-earliest`, {
        method: "POST"
      });
      const data = await response.json();
      console.log(data);
      fetchOffers(book.id);
    }

    const rejectAll = async () => {
      const response = await fetch(`${environment.apiUrl}/books/${book.id}/offers/reject-all`, {
        method: "POST"
      });
      const data = await response.json();
      console.log(data);
      fetchOffers(book.id);
    }

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const handleConfirmDialog = () => setOpenConfirmDialog(!openConfirmDialog);
    const [confirmMessage, setConfirmMessage] = useState('');
    const [handleConfirm, setHandleConfirm] = useState();

    const confirmRejectAll = () => {
      setConfirmMessage("Are you sure to reject all exchange offers?");
      setOpenConfirmDialog(true);
      setHandleConfirm(async () => { await rejectAll(); });
    }

    return offers.length === 0 ? (
        <Typography className="text-normal text-base">There isn't any offer yet.</Typography>
    ) : (
        <>
          <div className="flex items-center gap-4">
            <Button color="green" className="w-40" onClick={acceptEarliest}>Accept Earliest</Button>
            <Button color="red" className="w-40" onClick={confirmRejectAll}>Reject All</Button>
          </div>
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
                {offers.map(({ id, timestamp, userName, exchangeItemType, bookItem, moneyItem, message }, index) => (
                  <tr key={id} className="even:bg-blue-gray-50/50 hover:bg-gray-300/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {moment(timestamp).format("MMM Do YYYY, h:mm a")}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {userName}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {exchangeItemType === "BOOK" ? `${bookItem.title}${bookItem.author ? ' - ' + bookItem.author : ''}` : `${moneyItem.amount} ${moneyItem.unit}`}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {message || 'None'}
                      </Typography>
                    </td>
                    <td className="p-4 flex gap-1">
                      {/* <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                        Accept
                      </Typography>
                      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                        Reject
                      </Typography> */}
                      <Button size="sm" color="green" onClick={() => handleReply(id, true)}>Accept</Button>
                      <Button size="sm" color="red" onClick={() => handleReply(id, false)}>Reject</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <ConfirmDialog 
            open={openConfirmDialog} 
            handleOpen={handleConfirmDialog} 
            message={confirmMessage}
            handleCancel={() => setOpenConfirmDialog(false)}
            handleConfirm={handleConfirm} />
        </>
      );
}

export default ExchangeOffersTable;