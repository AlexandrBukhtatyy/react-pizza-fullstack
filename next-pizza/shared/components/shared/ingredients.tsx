import React from 'react';
import {cn} from '@/shared/lib/utils';
import {CircleCheck} from 'lucide-react';

interface Props {
    imageUrl?: string;
    name?: string;
    price?: number;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Ingredients: React.FC<Props> = ({className, name, onClick, imageUrl,active, price}) => {
    return (
        <div className={cn(
            'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
            className
        )}
        onClick={onClick}>
            {active && <CircleCheck className="absolute top-2 right-2 text-primary"/>}
            <img className="w-[110px] h-[110px]" src={imageUrl} alt={name}/>
            <span className="text-xs mb-1">{name}</span>
            <span className="font-bold">{price} ₽</span>
        </div>
    )
}
