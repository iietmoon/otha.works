// Import necessary modules and types
import { NextApiRequest, NextApiResponse } from 'next';
import data from "@/db/k8qwntxw-hwv9pwdb-8fntjdv7/blog.json"
import db from '@/utils/db';

// Define the BlogItem interface
interface BlogItem {
    [key: string]: string | string[];
}
interface Response {
    status?: number;
    message?: string;
    data?: BlogItem | null;
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
): void {
    const { query, method } = req;
    const { slug }:any = query;

    if (method === 'GET') {
        const blogData: BlogItem | undefined = db.find(data, slug);
        if (blogData) {
            const response: Response = {
                status: 200,
                message: 'Blog data fetched successfully!',
                data: blogData,
            };
            res.status(200).json(response);
        } else {
            const response: Response = {
                status: 404,
                message: 'Blog not found',
                data: null,
            };
            res.status(404).json(response);
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
