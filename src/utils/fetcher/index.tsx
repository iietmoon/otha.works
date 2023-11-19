interface FetcherProps {
  url: string;
  method?: string;
  data?: any;
}
export default async function fetcher({ url, method = 'GET', data = null }: FetcherProps) {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (process.env.token) {
      headers['Authorization'] = `Bearer ${process.env.token}`;
    }

    const options: RequestInit = {
      method,
      headers,
      cache: 'force-cache'
    };

    if (data) {
      options.body = data;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();

  } catch (error) {
    throw error;
  }
}
