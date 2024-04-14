// contentful.js
import axios from 'axios';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${spaceId}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export async function fetchEntries(contentType:string) {
  const response = await client.get(`/entries?content_type=${contentType}`);
  return response.data.items;
}
