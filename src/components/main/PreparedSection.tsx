import React from 'react'

const PreparedSection = () => {
    return (
        <div className='w-full max-w-[1600px] mx-auto h-full flex flex-col gap-20 justify-center bg-white py-20'>
            <h3 className='font-bold text-3xl w-fit mx-auto'>How Factor Prepared Meal Delivery Works</h3>

            <div className="w-full flex justify-evenly gap-5 flex-wrap">

                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>Pick Your Pre-Made Meals</h4>
                    <h5 className='font-medium'>A new menu of 30+ deliciously healthy options every week.</h5>
                </div>
                
                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>Pick Your Pre-Made Meals</h4>
                    <h5 className='font-medium'>A new menu of 30+ deliciously healthy options every week.</h5>
                </div>
                
                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>Pick Your Pre-Made Meals</h4>
                    <h5 className='font-medium'>A new menu of 30+ deliciously healthy options every week.</h5>
                </div>

            </div>

        </div>
    )
}

export default PreparedSection
