import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import environment from '../../environment';

const Forgot = () => {
    const location = useLocation();
    const success = location.state?.success;
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
  
    const [cookies, setCookie] = useCookies(['accessToken', 'user']);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(email);
      console.log(password);
  
      const response = await fetch(`${environment.apiUrl}/users/forgot-password`, {
        method: "PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email: email,
          newPassword: password
        })
      });
  
      const data = await response.json();
      console.log(data);
  
      if (!response.ok) {
        setError(data.message);
        return;
      }
  
      navigate("/login");
    };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Forgot password
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="name@company.com" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              required 
                              value={email}
                              onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                            <input 
                              type="password" 
                              name="password" 
                              id="password" 
                              placeholder="••••••••" 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              required 
                              value={password}
                              onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>
                        
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Back to login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
  );
}

export default Forgot;