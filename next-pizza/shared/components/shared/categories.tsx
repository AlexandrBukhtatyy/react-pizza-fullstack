'use client';

import React from 'react';
import {cn} from '@/shared/lib/utils';
import {useCategoryStore} from '@/shared/store/category';
import {Category} from '@prisma/client';

interface Props {
    items: Category[]
    className?: string;
}


export const Categories: React.FC<React.PropsWithChildren<Props>> = ({className, items}) => {
    const categoriActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                items.map(({id, name}, index) => (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoriActiveId == id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                       key={index}
                       href={`/#${id}`}
                    >
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>);
};