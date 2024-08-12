'use client';
import { useState } from 'react';

interface DropdownProps {
  options: string[];
  label: string;
}

const Dropdown= ({ options, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex relative text-left">
      <div>
        <button
          type="button"
          className="inline-flex ring-1 ring-gray-30 border-2  border-transparent active:border-black justify-between w-[150px] px-4 py-2 text-xs font-medium text-gray-700 bg-white rounded-md shadow-sm  hover:shadow-2xl"
          onClick={toggleDropdown}
        >
          {selectedOption || label}
          <div className='flex'>
          <img src='/icons/dropdown.png' className='pl-2'></img>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full mt-10 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
