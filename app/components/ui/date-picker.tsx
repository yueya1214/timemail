'use client';

import React, { forwardRef, useState } from 'react';
import DatePickerLib from 'react-datepicker';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  error?: string;
  minDate?: Date;
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onChange, label, error, minDate = new Date() }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div ref={ref} className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          <DatePickerLib
            selected={value}
            onChange={(date: Date | null) => onChange(date)}
            onCalendarOpen={() => setIsOpen(true)}
            onCalendarClose={() => setIsOpen(false)}
            minDate={minDate}
            dateFormat="yyyy年MM月dd日"
            className={cn(
              "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus:ring-red-500"
            )}
            showPopperArrow={false}
          />
        </div>
        
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);