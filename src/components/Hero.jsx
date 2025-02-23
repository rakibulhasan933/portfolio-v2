import { Download, Facebook, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Image src="/hero.jpg" width={700} height={400} alt='hero'></Image>
                </div>
                <div>
                    <h1 className=" text-6xl font-bold text-blue-500"> <span className=' text-black text-[20px] '>I am Gerold</span> <br />
                        Next-Level Web <br />
                        Developer.</h1>
                    <p className="py-6">
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                    </p>
                    <div className=''>
                        <button className="btn btn-outline btn-accent">Download <Download></Download> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
