import {Title} from '@/components/shared/title';
import {Container} from '@/components/shared/container';
import {TopBar} from '@/components/shared/top-bar';
import {Filters} from '@/components/shared/filters';
import {ProductsGroupList} from '@/components/shared/products-group-list';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
            </Container>

            <TopBar></TopBar>

            <Container className="pt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Список продуктов */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title="Пиццы" items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                }
                            ]}/>
                            <ProductsGroupList title="Завтраки" items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                }
                            ]}/>
                            <ProductsGroupList title="Комбо" items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                }
                            ]}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
