import React, { useEffect, useState } from 'react'
import { ArrowDownIcon, ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Option, Select, Textarea, Typography } from '@material-tailwind/react'
import AddBook from './AddBook';
import bookCover from "../../components/books/book-cover-default.png";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import environment from '../../environment';
import SuccessMessage from '../SuccessMessage';

const ExchangeBookDialog = (props) => {
  const { book, owner, open, handleOpen, handleSuccess } = props;
  const [addBookForm, setAddBookForm] = useState(false);

  const [myBooks, setMyBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState();
  const [cookies, setCookie] = useCookies(['accessToken', 'user']);
  const userId = cookies['user']?.id;
  
  const navigate = useNavigate();

  const fetchData = async () => {
    console.log(cookies['user']);
    if (!cookies['user']) {
      window.alert("Your session has expired. Please sign in again.");
      navigate('/login');
      return;
    } 

    const response = await fetch(`${environment.apiUrl}/books/find-by-user?id=${userId}`);
    const data = await response.json();
    console.log(data);

    setMyBooks(data.content.filter(b => b.status === 'AVAILABLE'));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookItem = addBookForm ? {
      ownerId: userId,
      title: title,
      author: author,
      publisher: publisher,
      publishYear: publishYear,
      language: language,
      weight: weight,
      size: size,
      pages: pages,
      layout: format,
      description: description
    } : {
      id: selectedBookId
    };

    const body = {
      userId: userId,
      bookId: book.id,
      exchangeItemType: 'BOOK',
      bookItem: bookItem,
      message: message
    }

    const response = await fetch(`${environment.apiUrl}/books/${book.id}/offers`, {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data);
      return;
    }

    handleOpen();
    handleSuccess();

    console.log(data);

    setSelectedBookId('');
    setMessage('');
    setTitle('');
    setAuthor('');
    setPublisher('');
    setPublishYear('');
    setLanguage('');
    setWeight('');
    setSize('');
    setPages('');
    setFormat('');
    setDescription('');
  }

  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishYear, setPublishYear] = useState();
  const [language, setLanguage] = useState('');
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [pages, setPages] = useState();
  const [format, setFormat] = useState('');
  const [description, setDescription] = useState('');  

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
              Exchange with book
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
            {/* <Typography className="-mb-2" variant="h6">
              Offer book for exchange
            </Typography> */}
            <div className="flex flex-col gap-2">
              <Select label="Choose one book to exchange" className=" h-10" disabled={addBookForm} value={selectedBookId} onChange={(val) => setSelectedBookId(val)}>
                { myBooks.map(b => (<Option value={b.id}>{b.title}</Option>)) }
              </Select>
              <div className="flex justify-center text-gray-700 font-bold">or</div>
              <Button
                variant="outlined"
                color="blue"
                className="flex items-center justify-center gap-2"
                onClick={() => setAddBookForm(!addBookForm)}
              >
                <ArrowUpTrayIcon className=" h-4" />
                Post a new book
              </Button>
            </div>
            {addBookForm && 
              <AddBook 
                inputStates={[
                  title, setTitle,
                  author, setAuthor, 
                  publisher, setPublisher, 
                  publishYear, setPublishYear, 
                  language, setLanguage,
                  weight, setWeight,
                  size, setSize,
                  pages, setPages,
                  format, setFormat,
                  description, setDescription
                ]}
              />}
            {/* <Typography className="-mb-2" variant="h6">
              Message
            </Typography> */}
            <Textarea label="Message to owner" value={message} onChange={({target}) => setMessage(target.value)} />
            <Button variant="gradient" className="min-h-10" color="blue" type="submit" >
              Request exchange
            </Button>
          </CardBody>
        </form>
      </Card>
    </Dialog>
  )
}

export default ExchangeBookDialog