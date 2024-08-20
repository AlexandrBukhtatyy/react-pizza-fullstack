import {useRouter} from 'next/navigation';
import React from 'react';
import qs from 'qs';
import {Filters} from '@/hooks/use-filters';

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    React.useEffect(() => {
        const params = {
            ...filters.prices,
            // TODO: Фильтры почемуто ломают верстку приложения и вообще роутинг
            // isNew: filters.isNew,
            // editable: filters.editable,
            pizzaTypes: Array.from(filters.pizzaTypes),
            pizzaSizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients)
        };

        const query = qs.stringify(params, {
            arrayFormat: 'comma'
        });

        router.push(`?${query}`, {scroll: false});

    }, [filters, router]);

};
