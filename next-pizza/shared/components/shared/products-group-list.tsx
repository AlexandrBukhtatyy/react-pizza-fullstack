'use client';

import React from 'react';
import {cn} from '@/shared/lib/utils';
import {useIntersection} from 'react-use';
import {useCategoryStore} from '@/shared/store/category';
import {Title} from '@/shared/components/shared/title';
import {ProductCard} from '@/shared/components/shared/product-card';

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
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);


    return (
        <div id={String(categoryId)} className={className} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    items.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            // @ts-ignore
                            price={item.items[0].price}
                            imageUrl={item.imageUrl}/>
                    ))
                }
            </div>
        </div>
    );
};
