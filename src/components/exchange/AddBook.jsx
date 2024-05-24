import { XMarkIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'

function AddBook() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Typography className="-mb-2" variant="h6">
        Name
      </Typography>
      <Input label="Name" size="lg" required />
      <Typography className="-mb-2" variant="h6">
        Author
      </Typography>
      <Input label="Author" size="lg" required />
      <Typography className="-mb-2" variant="h6">
        Publisher
      </Typography>
      <Input label="Publisher" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Publish Year
      </Typography>
      <Input label="Publish  Year" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Language
      </Typography>
      <Input label="Language" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Weight
      </Typography>
      <Input label=" Weight" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Size
      </Typography>
      <Input label="Size" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Pages
      </Typography>
      <Input label="Pages" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Layout
      </Typography>
      <Input label="Layout" size="lg" />
      <Typography className="-mb-2" variant="h6">
        Description
      </Typography>
      <Textarea label="Description" />
      <Typography className="-mb-2" variant="h6">
        Cover image
      </Typography>
      <Input
        label="Image"
        size="lg"
        type="file"
        accept="image/png, image/jpeg"
        className=" flex justify-center items-center"
      />
    </div>
  )
}

export default AddBook