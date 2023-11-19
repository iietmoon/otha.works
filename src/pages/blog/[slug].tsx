import { useState, useEffect } from 'react';
import HtmlRenderer from '@/components/htmlRenderer';
import { useRouter } from 'next/router'; 
import fetcher from '@/utils/fetcher';
import Image from 'next/image';
import ShareButtons from '@/components/ShareButtons';

interface Response {
    status?: number,
    responseSpeed?: string,
    message?: string,
    data?: BlogContent
    pagination?: {
      count: number,
      page: number,
      pages: number[]
    }
}

interface BlogContent {
    content: string;
    excerpt: string;
    featuredImage: string;
    id: string;
    slug: string;
    terms: string[];
    title: string;
  }

const Profile = () => {
    return <div className="profile">
        <Image width={100} height={100} src="/othmane-n.png" alt="Othmane" />
        <span>
            <p>Othmane N.</p>
            <p>Sr. Full-stack Developer</p>
        </span>
    </div>
}
const Article: React.FC = () => {
  const {query, isFallback} = useRouter();
  const [article, setArticle]= useState<BlogContent | any>({})
  
  useEffect(()=>{
    if(query.slug){
        const fetchData = () => {
            const config = {
              url: '/api/blog/'+query.slug,
              method: 'GET'
            }
            fetcher(config)
              .then((response: Response) => {
                const { status, data, pagination } = response;
                if (status == 200) {
                  data && setArticle(data)
                }
              })
              .catch((error) => console.error(error))
          }
          fetchData();
    }
  }, [query.slug])

  if (isFallback) {
    console.log("the router is loading!")
    return <div>Loading...</div>;
  }

  return (
    <>
            <section className="section-size-2 single-blog-section">
                <div className="container">
                    <div className="grid center text-center">
                        <div className="column-6">
                            <h1>{article.title}</h1>
                            <Profile/>
                            <div className="space-3"></div>
                            <div className="image">
                                <Image alt="Nevo example image" src={article.featuredImage} width={1000} height={1000} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-size-2 single-blog-section content">
                <div className="container">
                    <div className="space-4 width-3 centered">
                        <HtmlRenderer content={article.content} />
                        <ShareButtons title={article.title} url={article.slug} />
                    </div>
                    
                </div>
            </section>
            
        </>
  );
};


export default Article;
