import {useSearchParams} from 'next/navigation';
import React from 'react';
import {useSet} from 'react-use';

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export interface QueryFilters extends PriceProps {
    editable: boolean;
    isNew: boolean;
    pizzaTypes: string[];
    sizes: string[];
    ingredients: string[];
}

export interface Filters {
    isNew: boolean;
    editable: boolean;
    pizzaTypes: Set<string>;
    sizes: Set<string>;
    prices: PriceProps;
    selectedIngredients: Set<string>;
}

interface ReturnProps extends Filters {
    setIsNew: (value: boolean) => void;
    setEditable: (value: boolean) => void;
    setPrice: (name: keyof PriceProps, value: number) => void;
    setPrices: (value: number[]) => void;
    setPizzaTypes: (value: string) => void;
    setPizzaSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [editable, setEditable] = React.useState<boolean>(searchParams.get('editable') === 'true');

    const [isNew, setIsNew] = React.useState<boolean>(searchParams.get('isNew') === 'true');

    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(','))
    );

    const [sizes, {toggle: toggleSizes}] = useSet(
        new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
    );

    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(
        new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
    ));

    const [prices, setPrice] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined
    });

    const updatePrices = (value: number[]) => {
        setPrice(() => ({
            priceFrom: value[0],
            priceTo: value[1],
        }));
    };

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice(() => ({
            ...prices,
            [name]: value
        }));
    };

    return {
        isNew,
        editable,
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setIsNew,
        setEditable,
        setPrice: updatePrice,
        setPrices: updatePrices,
        setPizzaTypes: togglePizzaTypes,
        setPizzaSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients
    };
};
