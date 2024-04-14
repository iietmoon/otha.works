
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



interface MenuType {
    title: string;
    path: string;
}

const Header: React.FC = () => {
    const menu: MenuType[] = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Works',
            path: '/works'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Explained 🔥',
            path: '/explained'
        },
    ]
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-2 bg-danger">
                        <Link href="/">
                            <Image className="logo" src="/logo.png" width={1001} height={552} alt='Othmane N. Logo' />
                        </Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <ul>
                            {
                                menu.map((item: MenuType, index: number) => (
                                    <li key={index}>
                                        <Link href={item?.path}>{item?.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;