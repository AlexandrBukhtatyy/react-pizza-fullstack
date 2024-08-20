import React from 'react';
import {Ingredient} from '@prisma/client';
import {Api} from '@/shared/services/api-clients';

export const useIngerdients = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

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

    return {ingredients, loading};
};
