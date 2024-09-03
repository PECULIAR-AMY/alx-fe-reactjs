import React from "react";

function UserProfile() {
    return (
      <div class='bg-gray-100 p-8 mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 max-w-xs max-w-sm hover:shadow-xl' className="user-profile">
        <img class='rounded-full w-150px h-150px mx-auto sm:w-24 h-24 md:w-36 h-36 hover:scale-110 transition-transform duration-300 ease-in-out ' src="https://via.placeholder.com/150" alt="User" />
        <h1 class= 'text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500 '>John Doe</h1>
        <p class='text-gray-600 text-base sm:text-sm md:text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;