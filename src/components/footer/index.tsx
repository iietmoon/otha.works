
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuType {
    title: string;
    path: string;
}

const Footer: React.FC = () => {
    const menu: MenuType[] = [
        {
            title: 'LinkedIn',
            path: '#'
        },
        {
            title: 'Github',
            path: '#'
        },
        {
            title: 'Behance',
            path: '#'
        }
    ]
    return (
        <footer>
            <div className="container p-0">
                <div className="row">
                    <div className="col">
                        <p>Made with ❤️ and ☕ from Othmane N.</p>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <ul>
                            {
                                menu.map((item: MenuType, index: number) => (
                                    <li key={index}>
                                        <Link href={item?.path} target='_blank'>{item?.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;