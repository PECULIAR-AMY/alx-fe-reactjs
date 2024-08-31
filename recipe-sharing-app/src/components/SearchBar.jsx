// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes();
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
            className="w-full p-2 mb-4 border rounded text-black bg-gray-500"
        />
    );
};

export default SearchBar;
