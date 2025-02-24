import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Services() {
    return (
        <div className=' py-20 px-10'>
            <div className=' text-center'>
                <h2 className=' text-5xl font-bold text-sky-600 py-4'>My Quality Services</h2>
                <p className='text-lg'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            <div className='py-10'>
                <div className=' text-3xl font-bold flex justify-between items-center hover:bg-blue-400 group py-10 transition duration-700 ease-in-out  px-4 rounded-md cursor-pointer'>
                    <div>
                        <h4 >01</h4>
                    </div>
                    <div>
                        <h3>Web Development</h3>
                    </div>
                    <div className='w-[600px]'>
                        <p className=' text-[16px] font-medium leading-normal'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span ><ArrowUpRight className=' group-hover:rotate-180 transition duration-700 ease-in-out' size={40} /> </span>
                    </div>
                </div>
                <div className=' text-3xl font-bold flex justify-between items-center hover:bg-blue-400 group py-10 transition duration-700 ease-in-out  px-4 rounded-md cursor-pointer'>
                    <div>
                        <h4 >02</h4>
                    </div>
                    <div>
                        <h3>Web Development</h3>
                    </div>
                    <div className='w-[600px]'>
                        <p className=' text-[16px] font-medium leading-normal'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span ><ArrowUpRight className=' group-hover:rotate-180 transition duration-700 ease-in-out' size={40} /> </span>
                    </div>
                </div>
                <div className=' text-3xl font-bold flex justify-between items-center hover:bg-blue-400 group py-10 transition duration-700 ease-in-out  px-4 rounded-md cursor-pointer'>
                    <div>
                        <h4 >03</h4>
                    </div>
                    <div>
                        <h3>Web Development</h3>
                    </div>
                    <div className='w-[600px]'>
                        <p className=' text-[16px] font-medium leading-normal'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span ><ArrowUpRight className=' group-hover:rotate-180 transition duration-700 ease-in-out' size={40} /> </span>
                    </div>
                </div>
                <div className=' text-3xl font-bold flex justify-between items-center hover:bg-blue-400 group py-10 transition duration-700 ease-in-out  px-4 rounded-md cursor-pointer'>
                    <div>
                        <h4 >04</h4>
                    </div>
                    <div>
                        <h3>Web Development</h3>
                    </div>
                    <div className='w-[600px]'>
                        <p className=' text-[16px] font-medium leading-normal'>Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.</p>
                    </div>
                    <div>
                        <span ><ArrowUpRight className=' group-hover:rotate-180 transition duration-700 ease-in-out' size={40} /> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
