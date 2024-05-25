import { XMarkIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'

function AddBook(props) {
  
  const { inputStates : [
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
  ]} = props;

  return (
    <div className="flex flex-col gap-4 mb-4">
      {/* <Typography className="-mb-2" variant="h6">
        Title
      </Typography> */}
      <Input label="Title" size="lg" value={title} onChange={({target}) => setTitle(target.value)} required />
      {/* <Typography className="-mb-2" variant="h6">
        Author
      </Typography> */}
      <Input label="Author" size="lg" value={author} onChange={({target}) => setAuthor(target.value)} required />
      {/* <Typography className="-mb-2" variant="h6">
        Publisher
      </Typography> */}
      <Input label="Publisher" size="lg" value={publisher} onChange={({target}) => setPublisher(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Publish Year
      </Typography> */}
      <Input label="Publish Year" type="number" size="lg" value={publishYear} onChange={({target}) => setPublishYear(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Language
      </Typography> */}
      <Input label="Language" size="lg" value={language} onChange={({target}) => setLanguage(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Weight
      </Typography> */}
      <Input label=" Weight" size="lg" value={weight} onChange={({target}) => setWeight(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Size
      </Typography> */}
      <Input label="Size" size="lg" value={size} onChange={({target}) => setSize(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Pages
      </Typography> */}
      <Input label="Pages" type="number" size="lg" value={pages} onChange={({target}) => setPages(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Format
      </Typography> */}
      <Input label="Format" size="lg" value={format} onChange={({target}) => setFormat(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Description
      </Typography> */}
      <Textarea label="Description" value={description} onChange={({target}) => setDescription(target.value)} />
      {/* <Typography className="-mb-2" variant="h6">
        Cover image
      </Typography> */}
      <Input
        label="Cover Image"
        size="lg"
        type="file"
        accept="image/png, image/jpeg"
        className=" flex justify-center items-center"
      />
    </div>
  )
}

export default AddBook