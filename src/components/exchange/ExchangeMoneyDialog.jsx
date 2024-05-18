import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'

const ExchangeMoneyDialog = (props) => {
  const { img, open, handleOpen } = props;
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
        <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
          <div className=" flex gap-4">
            <img src={img} className=" w-24"/>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Typography className="-mb-2" variant="h6">
                  Title:
                </Typography>
                <div>Một cái gì đó không bao giờ kết thúc</div>
              </div>
              <div className="flex gap-2">
                <Typography className="-mb-2" variant="h6">
                  Author:
                </Typography>
                <div>Lucy Store</div>
              </div>
              <div className="flex gap-2">
                <Typography className="-mb-2" variant="h6">
                  Publisher:
                </Typography>
                <div>Liberum Artis</div>
              </div>
              <div className="flex gap-2">
                <Typography className="-mb-2" variant="h6">
                  Owner:
                </Typography>
                <div>John Doe</div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex flex-row gap-4 justify-between">
            <div className=" flex flex-col gap-4 w-5/6 h-full">
              <Typography className="-mb-2" variant="h6">
                Money
              </Typography>
              <Input label="Money" size="lg" required />
            </div>
            <div className=" flex flex-col gap-4 h-full">
              <Typography className="-mb-2" variant="h6">
                Currency
              </Typography>
              <Input label="Currency" size="lg" required />
            </div>
          </div>
          <Typography className="-mb-2" variant="h6">
            Message
          </Typography>
          <Textarea label="Message to owner" />
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Request exchange
          </Button>
        </CardBody>
      </Card>
    </Dialog>
  )
}

export default ExchangeMoneyDialog