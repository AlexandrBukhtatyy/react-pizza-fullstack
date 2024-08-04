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
                            <ProductsGroupList title="Пиццы" categoryId="1" items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца 1',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '2',
                                    name: 'Додо пицца 2',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '3',
                                    name: 'Додо пицца 3',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '4',
                                    name: 'Додо пицца 4',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '5',
                                    name: 'Додо пицца 5',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '6',
                                    name: 'Додо пицца 6',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '7',
                                    name: 'Додо пицца 7',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                }
                            ]}/>
                            <ProductsGroupList title="Завтраки" categoryId="2"  items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '2',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '3',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '4',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '5',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '6',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '7',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                }
                            ]}/>
                            <ProductsGroupList title="Комбо" categoryId="3"  items={[
                                {
                                    id: '1',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '2',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '3',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '4',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '5',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '6',
                                    name: 'Додо пицца',
                                    items: [{price: 1000}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                                },
                                {
                                    id: '7',
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
