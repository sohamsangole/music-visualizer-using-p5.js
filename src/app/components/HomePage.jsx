import React from 'react'
import HomePageVisualizer from './HomePageVisualizer'

const HomePage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-row items-center justify-center space-x-10'>
                <HomePageVisualizer />

                <div className='flex flex-col items-start px-20 w-7/12'>
                    <div className="text-[48px] font-normal mb-3">Music Visualizer</div>
                    <div className="text-[20px] font-normal mb-3">
                        Meowzic is a powerful audio visualization tool that allows you to effortlessly upload audio files and generate stunning visualizations.
                    </div>

                    <div className='bg-black rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <button className="text-[20px] font-normal px-8 py-4">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage