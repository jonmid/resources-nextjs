'use client';

import { Tab } from '@headlessui/react';
import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs: React.FC = () => {
  const categories = {
    'Tab 1': 'Contents of Tab 1',
    'Tab 2': 'Contents of Tab 2',
    'Tab 3': 'Contents of Tab 3',
  };

  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0 mx-auto'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((content, idx) => (
            <Tab.Panel key={idx} className='rounded-xl bg-white p-3 shadow'>
              <p>{content}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
