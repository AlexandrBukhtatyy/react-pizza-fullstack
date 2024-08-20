import {prisma} from '@/prisma/prisma-client';
import {notFound} from 'next/navigation';
import {Container, ProductImage, Title} from '@/shared/components/shared';
import {ToggleGroup} from '@/shared/components/shared/toggle-group';

export default async function ProductPage({params: {id}}: { params: { id: string } }) {

    const product = await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product) {
        return notFound();
    }

    const sizes = [
        {name: 'test 1', value: 't1', disabled: false},
        {name: 'test 2', value: 't2', disabled: false},
        {name: 'test 3', value: 't3', disabled: false},
        {name: 'test 4', value: 't4', disabled: true},
    ];

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1 w-full justify-between">
                <ProductImage imageUrl={product.imageUrl} alt={product.name} size={30}></ProductImage>
                <div className="w-[490px] bg-gray-100 p-7 rounded-2xl">
                    <Title text={product.name} size='md' className='font-extrabold mb-1'></Title>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur exercitationem, magnam mollitia nihil odit quisquam? Architecto blanditiis debitis doloribus ducimus esse exercitationem harum illum laboriosam nulla, numquam perspiciatis unde voluptatibus!
                    </p>
                    <ToggleGroup
                        selectedValue={'t1'}
                        items={sizes}
                    />
                </div>
            </div>
        </Container>
    );
}
