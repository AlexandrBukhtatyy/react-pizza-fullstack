'use client';

import React from 'react';
import {FilterChecboxProps, FilterCheckbox} from '@/components/shared/filter-checkbox';
import {Input} from '@/components/ui/input';
import {Skeleton} from '@/components/ui/skeleton';
import {useSet} from 'react-use';

interface Props {
    items: FilterChecboxProps[];
    defaultItems?: FilterChecboxProps[];
    limit?: number;
    searchInputPlaceholder?: string;
    defaultValue?: FilterChecboxProps[];
    loading?: boolean;
    selectedValues?: Set<string>;
    onClickCheckbox: (id: string) => void;
    name: string;
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<React.PropsWithChildren<Props>> = ({
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder,
    defaultValue,
    loading,
    selectedValues,
    onClickCheckbox,
    name,
    className
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : (defaultItems || items).slice(0, limit);

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    if (loading) {
        return(
            <div className={className}>
                {
                 ...Array(limit)
                     .fill(null)
                     .map((_, index) => (<Skeleton key={index} className="h-6 mb-4 rounded-[8px]"/>))
                }
                <Skeleton className="w-28 h-6 mb-4 rounded-[8px]"/>
            </div>
        )
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
                            name={name}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={selectedValues?.has(item.value)}
                            onCheckedChange={() => onClickCheckbox?.(item.value)}
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
