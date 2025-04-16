const page = () => {
  return (
    <div className="w-full h-full bg-[#f1f1ea] p-12">
      <div className="flex md:flex-row flex-col max-w-[1140px] w-full gap-6 h-full mx-auto">
        {/* form section */}
        <div className="w-full max-w-[682px] p-6 mb-6 min-h-[630px]  h-auto bg-white rounded-lg shadow-md lg:w-2/3 lg:mb-0">
          <h2 className="mb-4 text-2xl font-bold text-black">
            Delivery Address
          </h2>
          <form className="flex flex-col gap-6">
            {/* name section */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="first-name"
                  required
                  type="text"
                  placeholder=" First name *"
                />
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="last-name"
                  required
                  type="text"
                  placeholder="Last name *"
                />
              </div>
            </div>
            {/* address section 1 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="street"
                  required
                  type="text"
                  placeholder=" Street *"
                />
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="address-line-2"
                  type="text"
                  placeholder=" Address line 2"
                />
              </div>
            </div>
            {/* address section 2 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="city"
                  required
                  type="text"
                  placeholder=" City *"
                />
              </div>
              <div>
                <select
                  className="block w-full p-2 mt-1 text-gray-400 border border-gray-300 rounded-md shadow-sm"
                  id="province"
                  required
                >
                  <option value="">Province *</option>
                </select>
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                  id="postal-code"
                  required
                  type="text"
                  placeholder="Postal Code *"
                />
              </div>
            </div>
            {/* phone number */}
            <div className="mb-4">
              <input
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                id="phone-number"
                type="text"
                placeholder="Phone Number *"
              />
            </div>
            {/* delivery instructions */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter Delivery Instruction
              </label>
              <select
                className="w-full p-3 mt-1 text-gray-400 border border-gray-300 rounded-md shadow-sm "
                id="province"
                required
              >
                <option value="">Leave at front door</option>
                <option value="">Leave at back door</option>
                <option value="">Others</option>
              </select>
            </div>
            <button
              className="w-full px-4 py-2 font-bold text-white rounded-md bg-[#206b1966]"
              type="submit"
            >
              Next
            </button>
          </form>
        </div>
        {/* order summery section */}
        <div className="flex flex-col w-full gap-3 lg:w-1/3">
          <div className="flex flex-col gap-3 p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Order summary
            </h2>
            <div className="flex items-center mb-4">
              <img
                alt="Image of meal box"
                className="w-12 h-12 mr-4"
                src="/temp/Calorie-Smart.avif"
              />
              <div>
                <p className="text-lg font-semibold text-black">
                  10 meals per week
                </p>
                <p className="text-sm text-gray-600">
                  10 servings at $13.49 each
                </p>
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Box price</span>
                <span>$134.90</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="text-sm text-green-600 cursor-pointer">
                Apply promo code
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 mb-4 bg-gray-100 rounded-md">
              <span className="font-semibold text-black">First box total</span>
              <span className="text-xl font-bold text-black">$144.89</span>
            </div>
          </div>

          <div className="p-2 mb-4 text-center text-black rounded-md bg-[#ffd6d2]">
            You can skip a week or cancel at any time.
          </div>
          <div className="flex items-center">
            <img
              alt="Image of meal box"
              className="w-12 h-12 mr-4"
              src="/temp/Calorie-Smart.avif"
            />
            <p className="text-sm text-gray-600">
              No need to be home for delivery - our insulated boxes keep your
              temperature-sensitive ingredients cool and fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
