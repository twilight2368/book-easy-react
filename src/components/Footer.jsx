import React from "react";
export default function Footer(){
    return (
      <div className="py-5 bg-gray-900 text-white items-center text-center h-24">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-lg text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">KTPM™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
      </div>
    );
  };
  