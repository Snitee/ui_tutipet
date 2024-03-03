'use client'
import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [listSearch, setListSearch] = useState<string[]>([]);

  const handleInputChange = (v: string) => {
    setSearchTerm(v);
  };

  const handleSearch = () => {
    const updatedSearch = `${searchTerm}, ${listSearch.join(', ')}`.trim();  
    console.log(updatedSearch)
    setCookie(null, 'searchTerm', updatedSearch, {
      maxAge: 30 * 24 * 60 * 60, 
      path: '/', 
    });
    setListSearch(updatedSearch.split(', ')); 
  };


  useEffect(() => {

    const cookies = parseCookies();
    const savedSearchTerm = cookies.searchTerm || '';
    const searchList = savedSearchTerm.split(', ');
    setListSearch(searchList);
  }, [searchTerm]);

  return (
    <Autocomplete
      freeSolo
      id="searchBar"
      disableClearable
      options={listSearch}
      onChange={(e, v) => handleInputChange(v)}
      renderInput={(params) => (
        <TextField
          {...params}
          label ="Search"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }} 
        />
      )}
      onSubmit={handleSearch}
    />
    // <input className="w-full h-10 px-4 border-2  rounded-xl focus:shadow-xl"
    //   type="search"
    //   id="searchBar"
    //   placeholder="Search"
    //   value={searchTerm}
    //   onChange={handleInputChange}
    // />
   
  );
}

export default SearchBar;

// import { Autocomplete, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { parseCookies, setCookie } from 'nookies';

// const SearchBar: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [listSearch, setListSearch] = useState<string[]>([]);

//   const handleInputChange = (v: string) => {
//     setSearchTerm(v);
//   };

//   const handleSearch = () => {
//     const updatedSearch = `${searchTerm}, ${listSearch.join(', ')}`.trim(); 
//     console.log(updatedSearch)
//     setCookie(null, 'searchTerm', updatedSearch, {
//       maxAge: 30 * 24 * 60 * 60, 
//       path: '/', 
//     });
//     setListSearch(updatedSearch.split(', ')); 
//   };

//   useEffect(() => {
//     const cookies = parseCookies();
//     const savedSearchTerm = cookies.searchTerm || '';
//     const searchList = savedSearchTerm.split(', ');
//     setListSearch(searchList);
//   }, [searchTerm]);

//   return (
//     <Autocomplete
//       freeSolo
//       id="searchBar"
//       disableClearable
//       options={listSearch}
//       onChange={(event, value) => {
//         handleInputChange(value || ''); // Xử lý giá trị tìm kiếm được chọn hoặc nhập vào
//         handleSearch(); // Gọi hàm xử lý tìm kiếm
//       }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label ="Search"
//           InputProps={{
//             ...params.InputProps,
//             type: 'search',
//           }} 
//         />
//       )}
//     />
//   );
// }

// export default SearchBar;