import React from 'react';
import {cn} from '@/shared/lib/utils';
import {Category} from '@prisma/client';
import {Container} from '@/shared/components/shared/container';
import {Categories} from '@/shared/components/shared/categories';
import {SortPopup} from '@/shared/components/shared/sort-popup';

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
