import React from 'react';
import Link from 'next/link';
import {Title} from '@/components/shared/title';
import {Button} from '@/components/ui/button';
import {Plus} from 'lucide-react';

interface Props {
    id: string;
    name: string;
    items: any[];
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<React.PropsWithChildren<Props>> = ({
                                                                          id,
                                                                          name,
                                                                          items,
                                                                          imageUrl,
                                                                          className
                                                                      }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo"/>
                </div>
                <Title text={name} size="sm" className="mb-1 mt3 font-bold"/>
                <p className="text-sm text-gray-400">
                    Ингридиенты
                </p>
                <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              от <b>{items?.[0].price} ₽</b>
            </span>
                    <Button variant="secondary" className="text-base font-bold">
                        <Plus size={20} className="mr-1"></Plus>
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
