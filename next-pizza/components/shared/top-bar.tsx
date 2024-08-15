import React from 'react';
import {cn} from '@/lib/utils';
import {Categories} from '@/components/shared/categories';
import {SortPopup} from '@/components/shared/sort-popup';
import {Container} from '@/components/shared/container';
import {Category} from '@prisma/client';

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
    return (
        <div className={cn(
            'sticky top-0 bg-white py-5 z-10',
            true && 'shadow-lg shadow-black/5', // TODO: добавить условие при котором будем отображать тень
            className
        )}>
            <Container className="flex items-center justify-between ">
                <Categories items={categories}/>
                <SortPopup />
            </Container>
        </div>
    );
};
