import { Button, Card, Typography } from "@material-tailwind/react";
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
                    <Button size="sm" color="green">Details</Button>
                    <Button size="sm" color="orange">Update Status</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      );
}

export default TransactionsTable;