
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
            title: 'Porfolio',
            path: '/portfolio'
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
            <div className="container p-0">
                <div className="row">
                    <div className="col-2">
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
                            <li>
                                <Link href="/contact" className='btn btn-primary ms-3'>Let&apos;s Talk </Link>
                            </li>
                        </ul>
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;