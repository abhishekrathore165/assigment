import React, { useState } from 'react'
import question from '../assets/question.svg'
import box from '../assets/box.svg'
import stick from '../assets/stick.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import photo from '../assets/photo.svg'
const Home = () => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'About Me' },
        { id: 'experiences', label: 'Experiences' },
        { id: 'recommended', label: 'Recommended' },
    ];
    const [images, setImages] = useState([]);
    const newImageUrl = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg";

    const handleAddImage = () => {
        setImages([...images, newImageUrl]);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black'>
            <div className='flex justify-between gap-5 bg-custom-gradient rounded-2xl shadow-black shadow-md'>
                <div className=" h-[689px] xl:w-[550px]">
                </div>
                <div className='md:w-[700px] w- h-[689px] flex flex-col gap-[2rem] p-8'>
                    <div className='h-[316px] relative rounded-2xl bg-[#363C43] flex flex-col gap-5 shadow-2xl'>
                        <div className='p-3 '>
                            <ul className='flex items-center justify-between w-[500px] h-[49px] mx-auto bg-black rounded-full px-5'>
                                {tabs.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`${activeTab === item.id
                                            ? 'bg-[#363C43] text-white'
                                            : 'text-[#A3ADB2]'
                                            } cursor-pointer text-[15px] rounded-full w-[134px] text-center py-[7px]`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </ul>
                        </div>
                        <div className='w-[500px] h-[170px]  mx-auto  '>
                            <p className='text-[#969696] w-full leading-2 tracking-wide font-normal '>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                                <br /> <br />
                                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                        </div>
                        <div className='absolute top-2 left-2 h-[159px] flex flex-col justify-between'>
                            <img src={question} alt="" />
                            <img src={box} alt="" />
                        </div>
                        <img src={stick} alt="" className='absolute top-24 right-1 ' />

                    </div>
                    <div className='h-[330px] relative rounded-2xl bg-[#363C43] shadow-2xl'>
                        <div className='py-5'>
                            <div className='flex items-center justify-between w-[550px] h-[49px] mx-auto  rounded-full px-3'>
                                <div className='px-8 py-3 rounded-2xl bg-black '>
                                    <button className='text-white'>Gallery</button>
                                </div>
                                <div className='flex gap-8 justify-between'>
                                    <div className='relative bg-[#363C43] rounded-full px-6 py-1 flex items-center'>
                                        <button onClick={handleAddImage} className='relative z-10 text-white flex items-center gap-1 justify-center text-[15px]'>
                                            <span className='text-[31px]'>+</span> ADD IMAGE
                                        </button>
                                        <span className='absolute inset-0 rounded-full shadow-[0px_0px_4px_#FFFFFF,0px_12px_4px_#000000]'></span>
                                    </div>

                                    <div className='flex gap-5 relative rounded-full'>
                                        <div className='relative'>
                                            <img src={left} alt="" className='bg-[#303439] shadow-[0px_4px_10px_#000000,0px_0px_4px_#101213] text-white rounded-full p-4' />
                                            <span className='absolute inset-0 rounded-full border-2 border-transparent transition duration-300 ease-in-out'></span>
                                        </div>
                                        <div className='relative'>
                                            <img src={right} alt="" className='bg-[#303439] shadow-[0px_4px_10px_#000000,0px_0px_4px_#101213] text-white rounded-full p-4' />
                                            <span className='absolute inset-0 rounded-full border-2 border-transparent transition duration-300 ease-in-out'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-4 pl-[3rem] flex gap-4 flex-wrap max-h-[180px] overflow-y-auto">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Added Image ${index}`} className='h-[150px] w-[150px] border border-white' />
                            ))}
                        </div>

                        <div className='absolute top-5 left-2 h-[159px] flex flex-col justify-between'>
                            <img src={question} alt="" />
                            <img src={box} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
