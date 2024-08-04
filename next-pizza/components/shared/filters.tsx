import React from 'react';
import {Title} from '@/components/shared/title';
import {FilterCheckbox} from '@/components/shared/filter-checkbox';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {RangeSlider} from '@/components/shared/range-slider';
import {CheckboxFiltersGroup} from '@/components/shared/checkbox-filters-group';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Label} from '@/components/ui/label';

interface Props {
    className?: string;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({className}) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold"/>
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={1000} placeholder="0" defaultValue={0}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"/>
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ингредиенты:</p>
                <CheckboxFiltersGroup
                    className="mt-5"
                    searchInputPlaceholder={'Поиск...'}
                    limit={5}
                    items={[
                        {text: 'Сырный соус', value: '1'},
                        {text: 'Моцарелла', value: '2'},
                        {text: 'Чеснок', value: '3'},
                        {text: 'Солённые огурчики', value: '4'},
                        {text: 'Красный лук', value: '5'},
                        {text: 'Томаты', value: '6'}
                    ]}
                    defaultItems={[
                        {text: 'Сырный соус', value: '1'},
                        {text: 'Моцарелла', value: '2'},
                        {text: 'Чеснок', value: '3'},
                        {text: 'Солённые огурчики', value: '4'},
                        {text: 'Красный лук', value: '5'},
                        {text: 'Томаты', value: '6'}
                    ]}
                />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Тип теста:</p>
                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="traditional" id="r1" />
                        <Label htmlFor="r1">Традиционное</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tiny" id="r2" />
                        <Label htmlFor="r2">Тонкое</Label>
                    </div>
                </RadioGroup>
            </div>

            <Button>Применить</Button>
        </div>
    );
};
