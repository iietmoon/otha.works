import Link from "next/link";
import { fetchEntries } from '@/utils/contentful';
import { formatDate } from "@/utils/format";

export async function getStaticProps() {
  const categories = await fetchEntries('blogCategory');
  const blogs = await fetchEntries('blogPage');
  return {
    props: {
      categories,
      blogs
    },
  };
}

export default function Blogs({ categories, blogs }: any) {
  console.log({ categories, blogs })
  return (
    <main className="container p-0 blogs-page">
      <section className="row page-hero">
        <div className="col d-flex flex-column justify-content-center text-left">
          <h1>Articles & Insights</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend eget in vel tristique. Aenean urna, nulla massa mauris.</p>
        </div>
      </section>
      <div className="row page-content">
        <div className="col-4">
          <h2>Categories</h2>
          <ul>
            <li>
              <Link href={`/blog?category=all`}>All</Link>
            </li>
            {
              categories.map((item: any) => (
                <li key={item?.sys?.id}>
                  <Link href={`/blog?category=${item?.fields?.title}`}>{item?.fields?.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col">
          {
            blogs.map((item: any) => (
              <div key={item?.sys?.id} className="card">
                <h4>{item?.fields?.title}</h4>
                <p>{item?.fields?.excerpt}</p>
                <span>{formatDate(item?.sys?.createdAt)} <i className="bi bi-book"></i> 2 min read </span>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
