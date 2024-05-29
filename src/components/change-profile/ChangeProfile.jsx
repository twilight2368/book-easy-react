import React, { useEffect, useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Dialog, Typography, Select, Option, Popover, Input, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import environment from "../../environment";
import { Link } from "react-router-dom";

const ChangeProfile = (props) => {
    const { open, handleOpen } = props;
    const [birthDate, setBirthDate] = useState();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies(['user', 'token']);
    const thisUser = cookies['user'];

    const fetchData = async () => {
        if (!thisUser) {
            window.alert("Your session has expired. Please sign in again.");
            navigate('/login');
            return;
        }
    
        const response = await fetch(`${environment.apiUrl}/users/${thisUser.id}`);
        const data = await response.json();
        setFormData(data);
      }

    useEffect(() => {
        fetchData();
    }, [] );

    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [communeList, setCommuneList] = useState([]);

    const fetchProvinceList = async () => {
        const response = await fetch(`${environment.apiUrl}/address/provinces`);
        const data = await response.json();
        setProvinceList(data);
    }

    const fetchDistrictList = async (province) => {
        const response = await fetch(`${environment.apiUrl}/address/districts?province-id=${province}`);
        const data = await response.json();
        setDistrictList(data);
    }

    const fetchCommuneList = async (district) => {
        const response = await fetch(`${environment.apiUrl}/address/communes?district-id=${district}`);
        const data = await response.json();
        setCommuneList(data);
    }

    useEffect(() => {
        fetchProvinceList();
    }, []);

    useEffect(() => {
        if (formData.province?.id) fetchDistrictList(formData.province.id);
    }, [formData.province]);
    
    useEffect(() => {
        if (formData.district?.id) fetchCommuneList(formData.district.id);
    }, [formData.district]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch(`${environment.apiUrl}/users/${thisUser.id}`, {
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        });
    
        const data = await response.json();
        console.log(formData);
    
        if (response.ok) {
            navigate(0);
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
                            Edit Profile
                        </Typography>
                    </div>
                    <div>
                        <button onClick={handleOpen} className="flex justify-center items-center">
                            <XMarkIcon className="h-6 w-6 text-gray-500 duration-300 hover:text-red-300" />
                        </button>
                    </div>
                </div>
                <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
                <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <Input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        label="Your Name"
                        value={formData.name}
                        onChange={(event) => setFormData({...formData, name: event.target.value})}
                        required
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            label="Email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(event) => setFormData({...formData, email: event.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <Select
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            label="Select role *"
                            value={formData.roles?.length > 0 ? formData.roles[0] : ''}
                            onChange={(val) => setFormData({...formData, roles: [val]}) }
                            required
                        >
                            <Option value="BOOK_EXCHANGER">Book exchanger</Option>
                            <Option value="BOOKSTORE">Bookstore</Option>
                        </Select>
                    </div>

                    <div>
                        <Select
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            label="Select gender"
                            value={formData.gender}
                            onChange={(val) => setFormData({...formData, gender: val.toUpperCase()}) }
                        >
                        <Option value="MALE">Male</Option>
                        <Option value="FEMALE">Female</Option>
                        <Option value="OTHER">Other</Option>
                        </Select>
                    </div>

                    <div>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
                            value={formData.birthDate} 
                            onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
                        />
                    </div>
                    <div>
                        <Select
                            label="City / Province"
                            value={formData.province?.name || ''}
                        >
                            {provinceList.map(p => 
                                <Option 
                                    key={p.id} 
                                    value={p.id} 
                                    onClick={() => setFormData({...formData, province: { id: p.id, name: p.name }})}
                                >
                                    {p.name}
                                </Option>
                            )}
                        </Select>
                    </div>
                    {/* {
                        formData.provinceId && */}
                        <div>
                            <Select
                                label="District"
                                value={formData.district?.name || ''}
                            >
                                {districtList.map(d => 
                                    <Option 
                                        key={d.id} 
                                        value={d.id} 
                                        onClick={() => setFormData({...formData, district: { id: d.id, name: d.name }})}
                                    >
                                        {d.name}
                                    </Option>
                                )}
                            </Select>
                        </div>
                    {/* }
                    {
                        formData.districtId && */}
                        <div>
                            <Select
                                label="Commune"
                                value={formData.commune?.name || ''}
                            >
                                {communeList.map(c => 
                                    <Option 
                                        key={c.id} 
                                        value={c.id} 
                                        onClick={() => setFormData({...formData, commune: { id: c.id, name: c.name }})}
                                    >
                                        {c.name}
                                    </Option>
                                )}
                            </Select>
                        </div>
                    {/* } */}
                    <div>
                        <Input
                            type="text"
                            name="detailedAddress"
                            id="detailedAddress"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            label="Detailed Address"
                            placeholder="123 Main Street"
                            value={formData.detailedAddress}
                            onChange={(event) => setFormData({...formData, detailedAddress: event.target.value})}
                        />
                    </div>

                    <button
                        type="submit"
                        class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Save
                    </button>
                    </form>
                </CardBody>
            </Card>
        </Dialog>
    );
}

export default ChangeProfile;
