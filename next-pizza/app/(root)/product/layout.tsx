import type {Metadata} from 'next';
import '../../globals.css';


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function ProductLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
