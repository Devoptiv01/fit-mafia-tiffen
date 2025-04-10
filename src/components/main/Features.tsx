import React from 'react'

const Features = () => {
    return (
        <div className='w-full max-w-[1600px] mx-auto h-full flex flex-col gap-16 justify-center bg-[#F1F1EA] py-16'>
            <h3 className='font-bold text-3xl w-fit mx-auto'>
                Fresh. Healthy. And incredibly delicious.
            </h3>

            <div className="w-full flex justify-evenly gap-5 flex-wrap">

                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <h4 className='font-bold'>
                        Fresh, Never-Frozen Prepared Meals
                    </h4>
                    <h5 className='font-medium'>
                        Serving up the freshest ingredients from our network of trusted partners. No nitrates, no refined sugars, and meat raised without antibiotics.
                    </h5>
                </div>

                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <h4 className='font-bold'>
                        Chef-Crafted Meal delivery
                    </h4>
                    <h5 className='font-medium'>
                        Enjoy nutritious, restaurant-quality premade meals at home. Crafted by our team of culinary experts.
                    </h5>
                </div>

                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center ">
                    <h4 className='font-bold'>
                        Nutritious Meals Designed by Dietitians
                    </h4>
                    <h5 className='font-medium'>
                        Our registered dietitians work hand-in-hand with our chefs to ensure every meal is packed with premium, healthy ingredients.
                    </h5>
                </div>

            </div>

            <div className="text-center text-base space-y-3">
                <button className='bg-fit-red px-6 py-3 rounded-lg font-semibold text-white'>Get Offer</button>
                <h4 className=''>Skip or cancel any time</h4>
            </div>

        </div>
    )
}

export default Features
