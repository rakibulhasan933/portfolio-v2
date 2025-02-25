import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Works() {
    return (
        <div>
            <div className=' text-center'>
                <h2 className=' text-5xl font-bold py-6 text-blue-500'>My Recent Works</h2>
                <p className=' text-base font-medium pb-4'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                <div className=' flex justify-center items-center py-4 transition duration-300 ease-in-out'>
                    <div className='py-2 flex gap-2 items-center px-5 border-2 rounded-3xl bg-blue-300 w-fit'>
                        <span className=' hover:bg-blue-600 px-4 py-2 rounded-2xl hover:cursor-pointer transition duration-300 ease-in-out'>All</span>
                        <span className=' hover:bg-blue-600 px-4 py-2 rounded-2xl hover:cursor-pointer transition duration-300 ease-in-out '>UX/UI</span>
                        <span className=' hover:bg-blue-600 px-4 py-2 rounded-2xl hover:cursor-pointer transition duration-300 ease-in-out'>Branding</span>
                        <span className=' hover:bg-blue-600 px-4 py-2 rounded-2xl hover:cursor-pointer transition duration-300 ease-in-out'>Apps</span>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-3'>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className=' relative bg-slate-700 w-full p-4 rounded-lg shadow-2xl transition duration-700 ease-in-out  shadow-teal-300 group'>
                    <Image className='w-full rounded-lg' src="/hero.jpg" width={300} height={120} alt='cover'></Image>
                    <div className=' bg-blue-500 px-2 py-6 rounded-3xl absolute bottom-4 right-12 group-hover:flex transition duration-700 ease-in-out items-center gap-1 justify-between  hidden'>
                        <div>
                            <h2 className=' text-2xl font-bold text-white'>Her Power</h2>
                            <p className=' text-base font-bold text-white'>We put your ideas and thus your wishes</p>
                        </div>
                        <div>
                            <ArrowUpRight size={30} color='white'></ArrowUpRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
