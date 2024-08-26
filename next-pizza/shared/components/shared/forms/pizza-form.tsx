import {cn} from '@/shared/lib/utils';
import {PizzaImage, Title} from '@/shared/components/shared';
import {Button} from '@/shared/components/ui/button';
import {ToggleGroup} from '@/shared/components/shared/toggle-group';
import {PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from '@/shared/constants/pizza';
import React from 'react';
import {Ingredient, ProductItem} from '@prisma/client';
import {Ingredients} from '@/shared/components/shared/ingredients';
import {useSet} from 'react-use';

interface Props {
    imageUrl: string;
    name: string;
    ingredients?: Ingredient[];
    items: ProductItem[];
    price?: number;
    loading?: boolean;
    onClickAddCart?: VoidFunction;
    className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const PizzaForm: React.FC<Props> = ({
                                               name,
                                               imageUrl,
                                               ingredients,
                                               items,
                                               price,
                                               onClickAddCart,
                                               className,
                                               loading,
                                           }) => {

    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);

    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));

    const details = `${size} см`; // TODO: Обогатить дополнительной информацией

    const sizes = pizzaSizes.map(({name, value}) => ({name, value, disabled: false}));
    const types = pizzaTypes.map(({name, value}) => ({name, value, disabled: false}));

    const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
    const totalIngrediensPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);
    const totalPrice = pizzaPrice + totalIngrediensPrice;

    const handleClickAdd = () => {
        onClickAddCart?.();
        console.log({size, type, ingredients: selectedIngredients});
    };

    const availablePizzas = items
        .filter((item) => item.pizzaType === type);

    const availablePizzaSizes = pizzaSizes
        .map(({name, value}) => ({
            name,
            value,
            disabled: !availablePizzas.some((pizza) => Number(pizza.size) === Number(value))
        }));

    React.useEffect(() => {
        const availableSelectedSize = availablePizzaSizes?.find(i => Number(i.value) === size && !i.disabled);
        const availableSize = availablePizzaSizes?.find(i => !i.disabled);

        if(!availableSelectedSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize)
        }

    }, [type]);

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <PizzaImage imageUrl={imageUrl} size={size} alt={name}></PizzaImage>
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>
                {details && <p className="mb-4 text-gray-400">{details}</p>}


                <ToggleGroup
                    className="mb-4"
                    value={String(size)}
                    items={availablePizzaSizes}
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
                                active={selectedIngredients.has(ingredient.id)}
                                onClick={() => addIngredient(ingredient.id)}
                            ></Ingredients>
                        ))}
                    </div>
                </div>

                <Button
                    // loading={loading}
                    onClick={() => handleClickAdd}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-8">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
