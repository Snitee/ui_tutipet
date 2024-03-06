'use client'
import { Search } from '@mui/icons-material';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [listSearch, setListSearch] = useState<string[]>([]);

  const handleInputChange = (v: string) => {
    setSearchTerm(v);
  };

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
        label="Search"
        InputProps={{
          ...params.InputProps,
          type: 'search',
          endAdornment: (
            <InputAdornment position="start">
              <Search/>
            </InputAdornment>
          ),
        }}
      />
    )}
  />
  );
}

export default SearchBar;

