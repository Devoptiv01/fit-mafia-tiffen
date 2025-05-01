"use client";

import React, { useEffect, useState } from "react";

type Subscription = {
  userName: string;
  email: string;
  subscriptionPlan: string;
  isSubscribed: boolean;
  startDate: string;
};

type CurrentStateProp = true | false | "all";

const subscriptions: Subscription[] = [
  {
    userName: "JohnDoe",
    email: "john.doe@example.com",
    subscriptionPlan: "Pro",
    isSubscribed: true,
    startDate: "2024-05-12",
  },
  {
    userName: "JaneSmith",
    email: "jane.smith@example.com",
    subscriptionPlan: "Basic",
    isSubscribed: false,
    startDate: "2023-11-30",
  },
  {
    userName: "AlexJones",
    email: "alex.jones@example.com",
    subscriptionPlan: "Enterprise",
    isSubscribed: true,
    startDate: "2025-01-15",
  },
  {
    userName: "EmilyStone",
    email: "emily.stone@example.com",
    subscriptionPlan: "Pro",
    isSubscribed: false,
    startDate: "2025-04-10",
  },
  {
    userName: "MikeBrown",
    email: "mike.brown@example.com",
    subscriptionPlan: "Basic",
    isSubscribed: true,
    startDate: "2024-07-22",
  },
];

const Page = () => {
  const [filterData, setFilterData] = useState<Subscription[]>();
  const [currentState, setCurrentState] = useState<CurrentStateProp>(true);

  const handlefilter = () => {
    let data;
    if (currentState === true || currentState === false) {
      data = subscriptions
        .filter((e) => e.isSubscribed == currentState)
        .sort((a, b) => a.userName.localeCompare(b.userName));
    }else {
      data = subscriptions.sort((a, b) => a.userName.localeCompare(b.userName));
    }
    setFilterData(data);
  };

  useEffect(() => {
    handlefilter();
  }, [currentState]);

  return (
    <div className="p-4 w-full bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 text-black font-medium tracking-wider">
        <button
          onClick={() => setCurrentState(true)}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${ currentState === true && 'bg-blue-600 text-white'}`}
        >
          Active
        </button>
        <button
          onClick={() => setCurrentState(false)}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${ currentState === false && 'bg-blue-600 text-white'}`}
        >
          Unactive
        </button>
        <button
          onClick={() => setCurrentState('all')}
          className={`px-4 py-2 hover:bg-blue-600  hover:text-white rounded-lg border duration-300  ${ currentState === 'all' && 'bg-blue-600 text-white'}`}
        >
          All Users
        </button>
        {/* <button className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium border">
          Cancelled
        </button> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto scrollbar-custom rounded-lg max-w-5xl md:min-w-[500px] border border-gray-200">
        <table className="w-full overflow-x-auto scrollbar-custom text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-medium">UserName</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Phone No.</th>
              <th className="px-4 py-2 font-medium">Address</th>
              <th className="px-4 py-2 font-medium">Subscription Plan</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Start Date</th>
              {/* <th className="px-4 py-2 font-medium">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filterData &&
              filterData.map((sub, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 h-10 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2">{sub.userName}</td>
                  <td className="px-4 py-2">{sub.email}</td>
                  <td className="px-4 py-2">{sub.phoneNumber || '9876543210'}</td>
                  <td className="px-4 py-2">{sub.phoneNumber || 'Address'}</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                      {sub.subscriptionPlan}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {sub.isSubscribed == true ? "Active" : "Unactive"}
                  </td>
                  <td className="px-4 py-2">
                    {/* <button className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300"> */}
                    {sub.startDate}
                    {/* </button> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
