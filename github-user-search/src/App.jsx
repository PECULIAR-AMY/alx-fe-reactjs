import { useState } from 'react';
import axios from 'axios'; // Import axios for API requests

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); 

    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
      setUserData(response.data);
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search GitHub Username"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-center text-lg font-semibold mb-2">{userData.login}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="block text-center text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

 
 
 
 
 
 
 
 
 // import  { useState, } from 'react';
// import axios from 'axios'; // Import axios for API requests

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true); 

//     setError(null); // Clear any previous errors

//     try {
//       const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
//       setUserData(response.data);
//     } catch (error) {
//       setError("Looks like we can't find the user.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search GitHub Username" />
//         <button type="submit">Search</button>
//       </form>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {userData && (
//         <div>
//           <img src={userData.avatar_url} alt={userData.login} />
//           <p>{userData.login}</p>
//           <a href={userData.html_url} target="_blank" rel="noreferrer noopener">
//             View Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;







