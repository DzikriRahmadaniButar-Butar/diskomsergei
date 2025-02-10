import React from 'react';

const Card = ({ logo, title, description, children }) => {
  return (
    <li className='group px-4 py-3 rounded-md hover:bg-blue-50 transition-colors ease-in-out duration-250'>
      <a href="#" className='flex flex-col gap-4'>
        <img src={logo} width="40" height="40" className='lazy-img w-fit h-10' alt={title} loading="lazy" />
        <div className='px-2'>
          <p className='font-roboto font-bold group-hover:text-blue-700'>{title}</p>
          <p className='text-sm text-gray-600 leading-6 group-hover:text-blue-gray-800 focus:outline-none'>
            {description}
          </p>
        </div>
        {children}
      </a>
    </li>
  );
};

export default Card;
