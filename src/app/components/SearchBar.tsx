"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const API_KEY = "e4bd2e3231f7f0b998c050771a9d3d09"; // <-- Add your API key here

const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
    const [city, setCity] = useState("");
    const [isClient, setIsClient] = useState(false); // Track if we are on the client side

    useEffect(() => {
        // This ensures we only run this on the client after hydration
        setIsClient(true);
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedCity = city.trim();
        if (!trimmedCity) {
            alert("Please enter a city name.");
            return;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            if (response.ok) {
                onSearch(trimmedCity); // valid city, trigger onSearch
            } else {
                alert("Please enter a valid city."); // city not found
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
        }

        setCity("");
    };

    // Return nothing until the client-side hydration is complete
    if (!isClient) {
        return null;
    }

    return (
        <div className="weather_header mb-4 w-[90%] md:w-[30%] mx-auto">
            <form
                className="flex justify-center items-center md:w-[410px] w-[340px] mx-auto rounded-sm overflow-hidden mt-5 bg-white/50 shadow-lg focus:outline-none backdrop-blur-md"
                onSubmit={handleSearch}
            >
                {/* Search Icon inside input */}
                <img
                    src="/search.png"
                    alt="Search Icon"
                    className="left-10 transform w-8 h-8 opacity-90"
                />
                <input
                    type="text"
                    className="w-full flex-grow p-2 border-none text-gray-700 text-base outline-none placeholder-gray-700 placeholder-opacity-80"
                    placeholder="Search your city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

