'use client';

import {cn} from '@/shared/lib/utils';
import {useRouter} from 'next/navigation';
import {ProductWithRelations} from '@/shared/@types/prisma';
import {Dialog, DialogContent} from '@/shared/components/ui/dialog';
import {PizzaForm, ProductForm} from '@/shared/components/shared/forms';

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType);

    return (
        <Dialog open={Boolean(product)} onOpenChange={router.back}>
            <DialogContent className={cn(
                className,
                'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'
            )}>
                {
                    isPizzaForm
                        ? <PizzaForm imageUrl={product.imageUrl} name={product.name} />
                        : <ProductForm imageUrl={product.imageUrl} name={product.name}/>
                }
            </DialogContent>
        </Dialog>
    );
};
