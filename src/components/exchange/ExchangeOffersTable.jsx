import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import environment from "../../environment";
import moment from "moment/moment";

const ExchangeOffersTable = (props) => {
    const { book } = props;

    const TABLE_HEAD = ["Time", "User", "Exchange Item", "Message", "Actions"];
 
    const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    ];

    const [offers, setOffers] = useState([]);

    const fetchOffers = async(id) => {
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

    return offers.length === 0 ? (
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
                    <Button size="sm" color="green">Accept</Button>
                    <Button size="sm" color="red">Reject</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      );
}

export default ExchangeOffersTable;