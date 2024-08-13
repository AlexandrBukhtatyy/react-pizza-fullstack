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
import {valueOf} from 'postcss';

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({className}) => {
    const {ingredients, loading, selectedIds, onAddId} = useFilterIngredients();
    const items = ingredients.map(i => ({text: i.name, value: String(i.id)}));
    const [prices, setPrice] = React.useState<PriceProps>({
        priceFrom: 0, priceTo: 1000
    });
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        })
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold"/>
            <div className="flex flex-col gap-4">
                <FilterCheckbox name="editable" text="Можно собирать" value="1"/>
                <FilterCheckbox name="isNew" text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={1000} placeholder="0"
                           value={String(prices.priceFrom)}
                           onChange={(price) => updatePrice('priceFrom', Number(price.target.value))}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"
                           value={String(prices.priceTo)}
                           onChange={(price) => updatePrice('priceTo', Number(price.target.value))}/>
                </div>
                <RangeSlider min={0} max={1000} step={10}
                             value={[Number(prices.priceFrom), Number(prices.priceTo)]}
                             onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom: Number(priceFrom), priceTo: Number(priceTo)})}
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
                    selectedIds={selectedIds}
                />
            </div>

            <div className="mt-5 border-t border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Тип теста:</p>
                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="traditional" id="r1"/>
                        <Label htmlFor="r1">Традиционное</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tiny" id="r2"/>
                        <Label htmlFor="r2">Тонкое</Label>
                    </div>
                </RadioGroup>
            </div>

            <Button>Применить</Button>
        </div>
    );
};
