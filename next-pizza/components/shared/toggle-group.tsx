'use client';

import React from 'react';
import {cn} from '@/lib/utils';

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}

interface Props {
    items: Variant[];
    onClick?: (value: Variant['value']) => void;
    selectedValue?: Variant['value'];
    className?: string;
}

export  const ToggleGroup: React.FC<Props> = ({items, onClick, selectedValue, className}) => {
    return (
        <div className={cn(
            className,
            'flex justify-between bg-[#f3f3f7] rounded=3xl p-1 select-none')}
        >
            {
                items.map((item, index) => (
                    <button
                        key={item.name}
                        onClick={() => onClick?.(item.value)}
                        className={cn(
                            'flex items-center justify-center cursor-pointer h-[30px] p-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
                            {
                                'bg-white shadow': item.value === selectedValue,
                                'text-gray-500 opacity-50 pointer-events-none': item.disabled,
                            }
                        )}
                    >{item.value}</button>
                ))
            }
        </div>
    );
};


