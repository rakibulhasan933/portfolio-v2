import { Plus } from 'lucide-react'
import React from 'react'

export default function Bio() {
    return (
        <div className=' bg-slate-300 flex py-20 px-10 justify-evenly gap-3'>
            <div className=' flex items-center'>
                <h2 className=' text-8xl  text-blue-500 flex items-center font-bold '>14 <Plus size={40} ></Plus> </h2>
                <h3>Years of <br />
                    Experience</h3>
            </div>
            <div className=' flex items-center'>
                <h2 className=' text-8xl  text-blue-500 flex items-center font-bold '>50 <Plus size={40} ></Plus> </h2>
                <h3>Project <br />
                    Completed</h3>
            </div>
            <div className=' flex items-center'>
                <h2 className=' text-8xl  text-blue-500 flex items-center font-bold '>1.5 K</h2>
                <h3>Happy <br />
                    Clients</h3>
            </div>
            <div className=' flex items-center'>
                <h2 className=' text-8xl  text-blue-500 flex items-center font-bold '>14 <Plus size={40} ></Plus> </h2>
                <h3>Years of <br />
                    Experience</h3>
            </div>

        </div>
    )
}
