'use client';

import React from 'react';
import {Title} from '@/components/shared/title';
import {FilterCheckbox} from '@/components/shared/filter-checkbox';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {RangeSlider} from '@/components/shared/range-slider';
import {CheckboxFiltersGroup} from '@/components/shared/checkbox-filters-group';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Label} from '@/components/ui/label';
import {useFilterIngredients} from '@/hooks/use-FilterIngredients';
import {useSet} from 'react-use';
import qs from 'qs';
import {useRouter} from 'next/navigation';

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({className}) => {
    const router = useRouter();
    const [editable, setEditable] = React.useState<boolean>(false);
    const [isNew, setIsNew] = React.useState<boolean>(false);
    const {ingredients, loading, selectedIds, onAddId} = useFilterIngredients();
    const [pizzaSizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));
    const items = ingredients.map(i => ({text: i.name, value: String(i.id)}));
    const [prices, setPrice] = React.useState<PriceProps>({});
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        });
    };

    React.useEffect(() => {
        const filters = {
            ...prices,
            isNew,
            editable,
            pizzaTypes: Array.from(pizzaTypes),
            pizzaSizes: Array.from(pizzaSizes),
            selectedIds: Array.from(selectedIds)
        };
        const query = qs.stringify(filters, {
            arrayFormat: 'comma'
        });

        router.push(`?${query}`, { scroll: false });

    }, [editable, isNew, prices, pizzaTypes, pizzaSizes, selectedIds])

    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox name="editable" text="Можно собирать" value="editable" checked={editable} onCheckedChange={setEditable}/>
                <FilterCheckbox name="isNew" text="Новинки" value="isNew" checked={isNew} onCheckedChange={setIsNew}/>
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Тип теста:</p>
                <RadioGroup defaultValue="1">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem id="pizza-type-1"
                                        value="1"
                                        onClick={() => togglePizzaTypes('1')}
                                        checked={pizzaTypes?.has('1')}
                        />
                        <Label htmlFor="pizza-type-1">Традиционное {pizzaTypes?.has('1')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem id="pizza-type-2"
                                        value="2"
                                        onClick={() => togglePizzaTypes('2')}
                                        checked={pizzaTypes?.has('2')}
                        />
                        <Label htmlFor="pizza-type-2">Тонкое {pizzaTypes?.has('2')}</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Размер:</p>
                <CheckboxFiltersGroup
                    className="mt-5"
                    name="sizes"
                    items={[
                        {text: '20 cm', value: '20'},
                        {text: '30 cm', value: '30'},
                        {text: '40 cm', value: '40'},
                    ]}
                    loading={loading}
                    onClickCheckbox={toggleSizes}
                    selectedValues={pizzaSizes}
                />
            </div>
            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={1000} placeholder="0"
                           value={String(prices.priceFrom) || '0'}
                           onChange={(price) => updatePrice('priceFrom', Number(price.target.value))}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"
                           value={String(prices.priceTo) || '1000'}
                           onChange={(price) => updatePrice('priceTo', Number(price.target.value))}/>
                </div>
                <RangeSlider min={0} max={1000} step={10}
                             value={[Number(prices.priceFrom) || 0, Number(prices.priceTo) || 1000]}
                             onValueChange={([priceFrom, priceTo]) => setPrice({
                                 priceFrom: Number(priceFrom),
                                 priceTo: Number(priceTo)
                             })}
                />
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ингредиенты:</p>
                <CheckboxFiltersGroup
                    className="mt-5"
                    name="ingredients"
                    searchInputPlaceholder={'Поиск...'}
                    limit={5}
                    items={items}
                    defaultItems={items}
                    loading={loading}
                    onClickCheckbox={onAddId}
                    selectedValues={selectedIds}
                />
            </div>

            <Button>Применить</Button>
        </div>
    );
};
