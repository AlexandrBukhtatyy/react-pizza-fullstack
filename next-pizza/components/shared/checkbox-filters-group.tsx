'use client';

import React from 'react';
import {FilterChecboxProps, FilterCheckbox} from '@/components/shared/filter-checkbox';
import {Input} from '@/components/ui/input';

interface Props {
    items: FilterChecboxProps[];
    defaultItems: FilterChecboxProps[];
    limit: number;
    searchInputPlaceholder?: string;
    defaultValue?: FilterChecboxProps[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<React.PropsWithChildren<Props>> = ({
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder,
    defaultValue,
    className
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className={className}>
            {showAll && (
                <div className="mb-5">
                    <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" onChange={onChangeSearchInput}/>
                </div>
            )}
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}
                        />
                    ))
                }
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
