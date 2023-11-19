import { NextApiRequest, NextApiResponse } from 'next';
import data from "@/db/k8qwntxw-hwv9pwdb-8fntjdv7/blog.json"
import db from '@/utils/db';
import parseString from '@/utils/parseString';
import pagination from '@/utils/pagination';

interface BlogItem {
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
    data?: BlogItem[];
    pagination?: Pagination;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
): void {
    const startTime = Date.now();
    const { query, method } = req;
    const { limit, filter, page } = query as QueryItems;
    const blog: BlogItem[] = data;

    if (method === 'GET') {
        let response: Response;
        let filteredData: BlogItem[] = blog;
        let itemPerPage: number = 9;
        let count: number = blog.length;
        let currentPage: number = page ? parseInt(page as any, 10) : 1;

        if (filter) {
            const filterValues = parseString(filter);
            filteredData = db.filter(blog, filterValues);
            count = filteredData.length;
        }
        if (limit) {
            filteredData = filteredData.slice(0, limit);
            itemPerPage = limit;
        }
        if (page) {
            const startIndex = (currentPage - 1) * itemPerPage;
            const endIndex = startIndex + itemPerPage;
            filteredData = filteredData.slice(startIndex, endIndex);
        }
        const responseSpeed = startTime - Date.now() + ` ms`;
        response = {
            status: 200,
            responseSpeed,
            message: `Data items fetched successfully!`,
            data: filteredData.slice(0, itemPerPage),
            pagination: {
                count,
                page: currentPage,
                pages: pagination(count, itemPerPage),
            },
        };
        res.status(200).json(response);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
