import Link from 'next/link';
import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";

const OverviewCard = ({ title, icon, viewAllLink, data, bgColor = "bg-secondary-bg" }) => {
  // Check if icon is a React element (component) or a string (image path)
  const isReactIcon = React.isValidElement(icon);
  
  return (
    <div className='w-[407px] rounded-lg bg-white border border-gray-200 shadow-sm'>
      {/* Header Section */}
      <div className={`flex justify-between items-center p-4 ${bgColor}`}>
        <div className='flex items-center space-x-2'>
          {isReactIcon ? (
            <div className="text-primary text-xl">
              {icon}
            </div>
          ) : (
            <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
          )}
          <h3 className="text-base font-medium text-gray-900">{title}</h3>
        </div>
        
        <Link href={viewAllLink} className='text-primary flex items-center text-sm font-medium hover:underline'>
          View all
          <MdOutlineNavigateNext className='text-primary text-lg' />
        </Link>
      </div>

      {/* Data Items */}
      <div className="flex justify-between p-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <h4 className='text-sm text-gray-600'>{item.name}</h4>
            <p className="font-semibold text-2xl text-gray-900 mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;