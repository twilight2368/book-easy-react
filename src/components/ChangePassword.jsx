import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Dialog, Typography } from '@material-tailwind/react';


const ChangePassword = (props) => {
    const { open, handleOpen } = props;
    
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
                            Change Password
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
                                <Typography>
                                    <label className="text-sm text-black">Old Password</label>
                                    <input
                                        type="password"
                                        id = "password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                    />
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                <label className="text-sm text-black">New Password</label>
                                <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                        
                                    />

                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                <label className="text-sm text-black">Confirm Password</label>
                                <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                        
                                    />

                                </Typography>
                            </div>
                            
                        </div>
                    </div>
                    <Button variant="gradient" color="blue" onClick={handleOpen}>
                        Save
                    </Button>
                </CardBody>
            </Card>
        </Dialog>
  )
}

export default ChangePassword