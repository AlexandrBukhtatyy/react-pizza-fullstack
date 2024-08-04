import {Title} from '@/components/shared/title';
import {Container} from '@/components/shared/container';
import {TopBar} from '@/components/shared/top-bar';
import {Filters} from '@/components/shared/filters';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
            </Container>

            <TopBar></TopBar>

            <Container className="pt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/* Контент */}
                    <div>
                        Content
                    </div>
                </div>
            </Container>
        </>
    );
}
