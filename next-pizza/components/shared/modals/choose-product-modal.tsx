'use client';

import {cn} from '@/lib/utils';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Title} from '@/components/shared';
import {useRouter} from 'next/navigation';

interface Props {
    product: any; // TODO: сборный тип от Product
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
    const router = useRouter();
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(
                className,
                'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'
            )}>
                <Title text={product.name}></Title>
            </DialogContent>
        </Dialog>
    );
};
