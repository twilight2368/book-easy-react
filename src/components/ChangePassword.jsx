import React, { useEffect, useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Dialog, Input, Typography } from '@material-tailwind/react';
import environment from "../environment";
import { useCookies } from "react-cookie";


const ChangePassword = (props) => {
    const { open, handleOpen } = props;
    
    const [confirmPasswordMatches, setConfirmPasswordMatches] = useState(true);
    const [formData, setFormData] = useState({ oldPassword: '', newPassword: '' });

    const [cookies, setCookie, removeCookie] = useCookies(['user', 'token']);
    const thisUser = cookies['user'];

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch(`${environment.apiUrl}/users/${thisUser.id}/change-password`, {
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          return;
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                placeholder="••••••••"
                                label="Old Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(event) => setFormData({...formData, oldPassword: event.target.value})}
                                required
                            />
                            <Input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                placeholder="••••••••"
                                label="New Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(event) => setFormData({...formData, newPassword: event.target.value})}
                                required
                            />
                            <Typography
                                variant="small"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-px h-4 w-4"
                            >
                                <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                                />
                            </svg>
                                Your password should contain at least 8 characters.
                            </Typography>
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="••••••••"
                                label="Confirm Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={event => setConfirmPasswordMatches(event.target.value === formData.newPassword)}
                                required
                                error={!confirmPasswordMatches}
                            />
                            { !confirmPasswordMatches &&
                                <Typography
                                    variant="small"
                                    color="red"
                                    className="mt-2 flex items-center gap-1 font-normal"
                                >
                                    Password and confirm password do not match!
                                </Typography>
                            }
                        </div>
                        <Button variant="gradient" color="blue" type="submit" onClick={handleOpen} className="w-full mt-4">
                            Save
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </Dialog>
    )
}

export default ChangePassword