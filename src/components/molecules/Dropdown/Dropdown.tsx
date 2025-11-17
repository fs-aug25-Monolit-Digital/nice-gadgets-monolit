import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ArrowUpIcon } from "../../atoms/Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../../atoms/Icons/ArrowDownIcon";

type DropdownProps = {
  label: string;
  description?: string;
  items: string[];
};

export const Dropdown: React.FC<DropdownProps> = ({ label, description, items }) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block">
      {description && (
        <label className="block text-sm text-gray-600 mb-2">{description}</label>
      )}
      
      <Select.Root value={selectedItem} onValueChange={setSelectedItem} onOpenChange={setIsOpen}>
        <Select.Trigger
           className="w-(--dropdown-width) px-4 py-3 bg-white border border-(--dropdown-border) rounded-none text-left flex items-center justify-between
            hover:border-(--dropdown-border-hover) transition-colors data-[state=open]:border-(--dropdown-border)"
        >
          <Select.Value placeholder={label}>
            <span className="text-(--dropdown-selected-text)">{selectedItem}</span>
          </Select.Value>
          <Select.Icon>
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon /> }
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="w-(--dropdown-width) bg-(--color-white) border border-(--dropdown-border) rounded-none shadow-(--dropdown-shadow) overflow-hidden z-50"
            position="popper"
            sideOffset={4}
          >
            <Select.Viewport>
              {items.map((item, index) => (
                <Select.Item
                  key={index}
                  value={item}
                  className={`px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 focus:bg-gray-50 outline-none ${
                    index !== items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <Select.ItemText>
                    <span className="text-(--dropdown-item-text)">{item}</span>
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};