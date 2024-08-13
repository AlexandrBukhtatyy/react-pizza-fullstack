'use client';

import {Search} from 'lucide-react';
import React, {useRef} from 'react';
import {useClickAway, useDebounce} from 'react-use';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import {Api} from '@/services/api-clients';
import {Product} from '@prisma/client';

export function SearchInput() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => {
        setFocused(false);
    });
    useDebounce(async () => {
        try {
            Api.products.search(searchQuery).then((products) => {
                setProducts(products);
            })
        } catch (error) {
            console.log(error);
        }
    }, 100, [searchQuery])

    function onClickItem() {
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    }

    return (
        <div>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}
            <div ref={ref} className="flex rounded-2xl flex-1 justify-between relative h-11 z-30">
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h5 text-gray-400"></Search>
                <input className="rounded-2xl outline-none w-full bg-gray-100 pl-11" type="text"
                       placeholder="Найти пиццу..."
                       onFocus={() => setFocused(true)}
                       onBlur={() => setFocused(false)}
                       value={searchQuery}
                       onChange={(value) => setSearchQuery(value.target.value)}
                />
                {products.length > 0 && (
                <div className={cn(
                    'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                    focused && 'visible opacity-100 top-12'
                )}>
                    {products.map((product) => (
                        <Link
                            onClick={onClickItem}
                            key={product.id}
                            className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                            href={`/product/${product.id}`}>
                            <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                            <span>{product.name}</span>
                        </Link>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}
