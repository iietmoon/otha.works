import { NextApiRequest, NextApiResponse } from 'next';
import data from '@/db/k8qwntxw-hwv9pwdb-8fntjdv7/portfolio.json'
import db from '@/utils/db';
import parseString from '@/utils/parseString';
import pagination from '@/utils/pagination';
interface PortfolioItem {
    [key: string]: string | string[];
}

interface QueryItems {
    limit?: number;
    filter?: {
        slug?: string;
    };
    page?: number;
    sort?: string;
}

interface Pagination {
    count?: number;
    page?: number;
    pages?: number[];
}

interface Response {
    status?: number;
    responseSpeed?: any;
    message?: string;
    data?: PortfolioItem[];
    pagination?: Pagination;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
): void {
    const startTime = Date.now();
    const { query, method } = req;
    const portfolio:any = data;

    if (method === 'GET') {
        let response: Response;
        const customOrder: string[] = ['W', 'M', 'U', 'C', 'O'];
        let terms: string[] = portfolio.map((item:any)=>item.terms).flat()
        let filteredData: any[] = Array.from(new Set(terms));
        const customSort = (a:any, b:any) => {
            const indexA = customOrder.indexOf(a.charAt(0).toUpperCase());
            const indexB = customOrder.indexOf(b.charAt(0).toUpperCase());
          
            return indexA - indexB;
        };

        const responseSpeed = startTime - Date.now() + ` ms`;
        response = {
            status: 200,
            responseSpeed,
            message: `Data items fetched successfully!`,
            data: filteredData.sort(customSort),
        };
        res.status(200).json(response);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
