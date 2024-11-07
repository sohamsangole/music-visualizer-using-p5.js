import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                <div className="text-2xl font-bold">meowzic</div>
                <div className="space-x-4">
                    <a href="#home" className="font-thin hover:text-gray-300">Home</a>
                    <a href="#visualizer" className="font-thin hover:text-gray-300">Visualizer</a>
                    <a href="#about" className="font-thin hover:text-gray-300">About</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
