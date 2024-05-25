import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import bookCover from "../../components/books/book-cover-default.png";

const apiUrl = "http://localhost:8080/api/v1";

const ExchangeMoneyDialog = (props) => {
  const { book, owner, open, handleOpen, handleSuccess } = props;

  const [money, setMoney] = useState();
  const [currency, setCurrency] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(book, owner);

    const body = {
      bookId: book.id,
      userId: book.ownerId,
      exchangeItemType: 'MONEY',
      moneyItem: {
        amount: money,
        unit: currency
      },
      message: message
    }
    console.log(body);

    const response = await fetch(`${apiUrl}/books/${book.id}/offers`, {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log(data);
      return;
    }

    handleOpen();
    handleSuccess();

    setMoney('');
    setCurrency('');
    setMessage('');
  }

  return (
    <Dialog
      size="xl"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none nunito-font"
    >
      <Card className="mx-auto w-full max-w-[600px] pt-5">
        <div className=" flex flex-row items-center">
          <div className=" w-11/12">
            <Typography variant="h4" color="blue-gray" className="ml-5">
              Exchange with money
            </Typography>
          </div>
          <div>
            <button onClick={handleOpen} className=" flex justify-center items-center">
              <XMarkIcon className="h-6 w-6 text-gray-500 duration-300 hover:text-red-300" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
            <div className=" flex gap-4">
              <img src={book?.imagePath || bookCover} className=" w-24"/>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Typography className="-mb-2" variant="h6">
                    Title:
                  </Typography>
                  <div>{book?.title}</div>
                </div>
                <div className="flex gap-2">
                  <Typography className="-mb-2" variant="h6">
                    Author:
                  </Typography>
                  <div>{book?.author}</div>
                </div>
                { book?.publisher && <div className="flex gap-2">
                  <Typography className="-mb-2" variant="h6">
                    Publisher:
                  </Typography>
                  <div>{book?.publisher}</div>
                </div> }
                <div className="flex gap-2">
                  <Typography className="-mb-2" variant="h6">
                    Owner:
                  </Typography>
                  <div>{owner?.name}</div>
                </div>
              </div>
            </div>
            <div className=" w-full h-full flex flex-row gap-4 justify-between">
              <div className=" flex flex-col gap-4 w-5/6 h-full">
                {/* <Typography className="-mb-2" variant="h6">
                  Money
                </Typography> */}
                <Input label="Money" size="lg" value={money} onChange={({target}) => setMoney(target.value)} required />
              </div>
              <div className=" flex flex-col gap-4 h-full">
                {/* <Typography className="-mb-2" variant="h6">
                  Currency
                </Typography> */}
                <Input label="Currency" size="lg" value={currency} onChange={({target}) => setCurrency(target.value)} required />
              </div>
            </div>
            {/* <Typography className="-mb-2" variant="h6">
              Message
            </Typography> */}
            <Textarea label="Message to owner" value={message} onChange={({target}) => setMessage(target.value)} />
            <Button variant="gradient" color="blue" type="submit" >
              Request exchange
            </Button>
          </CardBody>
        </form>
      </Card>
    </Dialog>
  )
}

export default ExchangeMoneyDialog