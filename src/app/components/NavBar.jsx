import React from 'react';
import Link from 'next/link'; // Using next/link for client-side navigation

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                <div className="text-2xl font-bold">meowzic</div>
                <div className="space-x-4">
                    <Link href="/" className="font-thin hover:text-gray-300">Home</Link>
                    <Link href="/visualizer" className="font-thin hover:text-gray-300">Visualizer</Link>
                    <Link href="/about" className="font-thin hover:text-gray-300">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;