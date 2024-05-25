import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Dialog, Typography, Select, Option, Popover, Input, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const ChangeProfile = (props) => {
    const { open, handleOpen } = props;
    const [date, setDate] = React.useState();
  
    return (
        <Dialog
            size="xl"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none nunito-font"
        >
            <Card className="mx-auto w-full max-w-[600px] pt-5">
                <div className="flex flex-row items-center">
                    <div className="w-11/12">
                        <Typography variant="h4" color="blue-gray" className="ml-5">
                            Change Profile
                        </Typography>
                    </div>
                    <div>
                        <button onClick={handleOpen} className="flex justify-center items-center">
                            <XMarkIcon className="h-6 w-6 text-gray-500 duration-300 hover:text-red-300" />
                        </button>
                    </div>
                </div>
                <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
                    <div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <Typography className="grid grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="First name"
                                        
                                    />
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Last name"
                                        
                                    />
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    <label>Gender</label>
                                    <Select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        label="Select gender"
                                    >
                                        <Option>Male</Option>
                                        <Option>Female</Option>
                                        <Option>Other</Option>
                                    </Select>
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    <label>Roles</label>
                                    <Select
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        label="Select role"
                                    >
                                        <Option>BOOK_EXCHANGER</Option>
                                        <Option>BOOKSTORE</Option>
                                    </Select>
                                </Typography>
                            </div>
                            <div>
                                <label>Date of Birth</label>
                                <Popover placement="bottom">
                                    <PopoverHandler>
                                        <Input
                                            label="Select a Date"
                                            onChange={() => null}
                                            value={date ? format(date, "PPP") : ""}
                                            className="cursor-pointer"
                                        />
                                    </PopoverHandler>
                                    <PopoverContent className="p-2 shadow-lg rounded-md z-[9999]">
                                        <DayPicker
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            showOutsideDays
                                            fromYear={1920}
                                            toYear={2030}
                                            captionLayout="dropdown"
                                            className="border-0"
                                            classNames={{
                                                caption: "flex justify-between items-center py-2 mb-4 relative",
                                                caption_label: "text-sm font-medium text-gray-900",
                                                nav: "flex items-center",
                                                nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                                nav_button_previous: "absolute left-1.5",
                                                nav_button_next: "absolute right-1.5",
                                                table: "w-full border-collapse",
                                                head_row: "flex font-medium text-gray-900",
                                                head_cell: "m-0.5 w-9 font-normal text-sm",
                                                row: "flex w-full mt-2",
                                                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                day: "h-9 w-9 p-0 font-normal",
                                                day_range_end: "day-range-end",
                                                day_selected: "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                                day_today: "rounded-md bg-gray-200 text-gray-900",
                                                day_outside: "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                                day_disabled: "text-gray-500 opacity-50",
                                                day_hidden: "invisible",
                                            }}
                                            components={{
                                                IconLeft: ({ ...props }) => (
                                                    <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                                IconRight: ({ ...props }) => (
                                                    <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                                                ),
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                <Select
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  label="Select province"
                >
                  <Option>Ha Noi</Option>
                  <Option>Ho Chi Minh</Option>
                </Select>

                <Select
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  label="Select district"
                >
                  <Option>Quan Hai Ba Trung</Option>
                  <Option>Quan Hoan Kiem</Option>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Select
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  label="Select commune"
                >
                  <Option>Phuong Bach Khoa</Option>
                  <Option>Phuong Dong Tam</Option>
                </Select>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Detailed address"
                />
              </div>
                        </div>
                    </div>
                    <Button variant="gradient" color="blue" onClick={handleOpen}>
                        Save
                    </Button>
                </CardBody>
            </Card>
        </Dialog>
    );
}

export default ChangeProfile;
