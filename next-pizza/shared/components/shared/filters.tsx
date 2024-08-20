'use client';

import React from 'react';
import {useFilters, useIngerdients, useQueryFilters} from '@/shared/hooks';
import {Title} from '@/shared/components/shared/title';
import {FilterCheckbox} from '@/shared/components/shared/filter-checkbox';
import {RadioGroup, RadioGroupItem} from '@/shared/components/ui/radio-group';
import {Label} from '@/shared/components/ui/label';
import {CheckboxFiltersGroup} from '@/shared/components/shared/checkbox-filters-group';
import {Input} from '@/shared/components/ui/input';
import {RangeSlider} from '@/shared/components/shared/range-slider';
import {Button} from '@/shared/components/ui/button';

interface Props {
    className?: string;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({className}) => {
    const {ingredients, loading} = useIngerdients();
    const items = ingredients.map(i => ({text: i.name, value: String(i.id)}));

    const filters = useFilters();
    useQueryFilters(filters);

    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox name="editable" text="Можно собирать" value="editable" checked={filters.editable}
                                onCheckedChange={filters.setEditable}/>
                <FilterCheckbox name="isNew" text="Новинки" value="isNew" checked={filters.isNew} onCheckedChange={filters.setIsNew}/>
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Тип теста:</p>
                <RadioGroup defaultValue="1">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem id="pizza-type-1"
                                        value="1"
                                        onClick={() => filters.setPizzaTypes('1')}
                                        checked={filters.pizzaTypes?.has('1')}
                        />
                        <Label htmlFor="pizza-type-1">Традиционное {filters.pizzaTypes?.has('1')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem id="pizza-type-2"
                                        value="2"
                                        onClick={() => filters.setPizzaTypes('2')}
                                        checked={filters.pizzaTypes?.has('2')}
                        />
                        <Label htmlFor="pizza-type-2">Тонкое {filters.pizzaTypes?.has('2')}</Label>
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
                    onClickCheckbox={filters.setPizzaSizes}
                    selectedValues={filters.sizes}
                />
            </div>
            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={1000} placeholder="0"
                           value={String(filters.prices.priceFrom) || '0'}
                           onChange={(price) => filters.setPrice('priceFrom', Number(price.target.value))}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"
                           value={String(filters.prices.priceTo) || '1000'}
                           onChange={(price) => filters.setPrice('priceTo', Number(price.target.value))}/>
                </div>
                <RangeSlider min={0} max={1000} step={10}
                             value={[Number(filters.prices.priceFrom) || 0, Number(filters.prices.priceTo) || 1000]}
                             onValueChange={filters.setPrices}
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
                    onClickCheckbox={filters.setSelectedIngredients}
                    selectedValues={filters.selectedIngredients}
                />
            </div>

            <Button>Применить</Button>
        </div>
    );
};
