import React from "react";
import {TiStarFullOutline} from "react-icons/ti";

const ReviewCard = (props) => {
    return (
        <>
           <div className="my-3 flex flex-col gap-3">
               <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                       <div className="w-10 h-10 rounded-full">
                       <img
                          src="https://b.zmtcdn.com/data/user_profile_pictures/c61/1c7a11eb6b0fc9fa5377c2913bf83c61.jpg"
                          alt="avatar"
                          className="w-full h-full rounded-full object-cover"
                       />
                       </div>
                       <div className="flex flex-col">
                           <h3 className="text-lg font-semibold">Jahnavi</h3>
                           <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                       </div>
                   </div>
                   <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
                       Follow
                   </button>
               </div>
               <div flex flex-col gap-3>
                   <div className="flex items-center gap-3">
                       <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                           5 <TiStarFullOutline/>
                       </span>
                       <h5 className="font-regular uppercase">Delivery</h5>
                       <small className="text-gray-500">3 days ago</small>
                   </div>
                   <div className="w-full">
                       <p className="w-full text-gray-600 font-light text-base">good</p>
                   </div>
               </div>
           </div>
        </>
    );
}

export default ReviewCard;