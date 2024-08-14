'use client';

import {Ingredient} from '@prisma/client';
import React from 'react';
import {Api} from '@/services/api-clients';
import {useSet} from 'react-use';

export interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIds: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [selectedIds, { toggle }] = useSet(new Set<string>([]));

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();
    }, []);

    return {ingredients, loading, selectedIds, onAddId: toggle};
};
