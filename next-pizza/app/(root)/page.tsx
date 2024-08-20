import {prisma} from '@/prisma/prisma-client';
import {Container, Filters, Title, TopBar} from '@/shared/components/shared';
import {ProductsGroupList} from '@/shared/components/shared/products-group-list';

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            product: {
                include: {
                    ingredients: true,
                    items: true
                }
            }
        }
    });
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
            </Container>

            <TopBar categories={categories.filter(c => c.product.length > 0)}/>

            <Container className="pt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Список продуктов */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map((category) => (
                                category.product.length > 0 && (
                                    <ProductsGroupList key={category.id}
                                                       title={category.name}
                                                       categoryId={category.id}
                                                       items={category.product}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
