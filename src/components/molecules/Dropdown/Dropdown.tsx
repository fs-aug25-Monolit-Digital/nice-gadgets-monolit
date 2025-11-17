import React, { useRef, useState, useEffect } from "react";

type DropdownProps = {
    label: string;
    description?: string;
    items: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, description, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
    const handleClick = (event: MouseEvent) => {
        const path = event.composedPath();
        if (!path.includes(dropdownRef.current!)) {
            setIsOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
    }, []);
    
    const handleSelect = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);

    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {description && (
                <label className="block text-sm text-gray-600 mb-2">{description}</label>
            )}

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-64 px-4 py-3 bg-white border border-gray-300 rounded-none text-left flex items-center justify-between hover:border-gray-400 focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
            >
                <span className="text-gray-700">{selectedItem ?? label}</span>
                <svg 
                    className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                className={`absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded shadow-lg
                    transform transition-all duration-200 origin-top
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(item)}
                        className={`px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50
                            ${index !== items.length - 1
                                ? 'border-b border-gray-100' 
                                : ''}`}
                    >
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};