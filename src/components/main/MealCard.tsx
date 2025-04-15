import Image from 'next/image'
import React from 'react'

const MealCard = ({image, title, desc, veg = false, calSmart = false, tags}: {image:string, title: string, desc: string, veg?: boolean, calSmart?: boolean, tags?:string[]} ) => {
    return (
        <>
            <div className="w-[364px] h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
                <div className="relative w-full h-[240px] rounded-t-lg overflow-hidden">
                    <Image
                        src={image}
                        alt='meals'
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="w-full p-3 pt-0">
                    <h3 className='font-bold text-lg '>{title}</h3>
                    <h4 className='text-base '>{desc}</h4>
                </div>

                <div className="w-full p-3 pt-0 flex gap-2 items-center text-sm text-white">
                    {veg && <h5 className='w-fit px-1 py-[1px] bg-[#75C26D] rounded-sm'>Vegetarian</h5>}
                    {calSmart && <h5 className='w-fit px-1 py-[1px] bg-[#61DFFF] rounded-sm'>Calorie Smart</h5>}
                    <h5 className='w-fit px-1 py-[1px] bg-[#3D454B] rounded-sm'>Protein Plus</h5>
                </div>

            </div>
        </>
    )
}

export default MealCard
