import React from 'react';
import {ProductCard} from '@/components/shared/product-card';
import {cn} from '@/lib/utils';
import {Title} from '@/components/shared/title';

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<React.PropsWithChildren<Props>> = ({
                                                                                title,
                                                                                items,
                                                                                categoryId,
                                                                                className,
                                                                                listClassName,
                                                                            }) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    items.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.items[0].price}
                            imageUrl={item.imageUrl}/>
                    ))
                }
            </div>
        </div>
    );
};
