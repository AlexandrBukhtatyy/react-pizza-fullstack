import {cn} from '@/shared/lib/utils';
import {PizzaImage, Title} from '@/shared/components/shared';
import {Button} from '@/shared/components/ui/button';
import {ToggleGroup} from '@/shared/components/shared/toggle-group';
import {PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from '@/shared/constants/pizza';
import React from 'react';
import {Ingredient} from '@prisma/client';
import {Ingredients} from '@/shared/components/shared/ingredients';

interface Props {
    imageUrl: string;
    name: string;
    description?: string;
    ingredients?: Ingredient[];
    price?: number;
    loading?: boolean;
    onSubmit?: VoidFunction;
    className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const PizzaForm: React.FC<Props> = ({
                                               name,
                                               description,
                                               imageUrl,
                                               ingredients,
                                               price,
                                               onSubmit,
                                               className,
                                               loading,
                                           }) => {

    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);

    const sizes = pizzaSizes.map(({name, value}) => ({name, value, disabled: false}));
    const types = pizzaTypes.map(({name, value}) => ({name, value, disabled: false}));

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <PizzaImage imageUrl={imageUrl} size={size} alt={name}></PizzaImage>
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>
                {description && <p className="mb-4 text-gray-400">{description}</p>}

                <ToggleGroup
                    className="mb-4"
                    value={String(size)}
                    items={sizes}
                    onClick={value => setSize(Number(value) as PizzaSize)}
                ></ToggleGroup>

                <ToggleGroup
                    className="mb-4"
                    value={String(type)}
                    items={types}
                    onClick={value => setType(Number(value) as PizzaType)}
                ></ToggleGroup>

                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mb-4">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients?.map((ingredient) => (
                            <Ingredients
                                key={ingredient.id}
                                imageUrl={ingredient.imageUrl}
                                name={ingredient.name}
                                price={ingredient.price}
                            ></Ingredients>
                        ))}
                    </div>
                </div>

                <Button
                    // loading={loading}
                    onClick={() => onSubmit?.()}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-8">
                    Добавить в корзину за {price} ₽
                </Button>
            </div>
        </div>
    );
};
