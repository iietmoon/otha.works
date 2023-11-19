import { useState, useEffect } from 'react';
import fetcher from '@/utils/fetcher';
import ArticleCard from '@/components/cards/article';


interface Response {
  status?: number,
  responseSpeed?: string,
  message?: string,
  data?: any
  pagination?: {
    count: number,
    page: number,
    pages: number[]
  }
}

export default function Blog() {
  const [blog, setBlog] = useState<any[]>([])
  const [pagination, setPagination] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  useEffect(() => {
    const fetchData = () => {
      const config = {
        url: '/api/blog',
        method: 'GET'
      }
      fetcher(config)
        .then((response: Response) => {
          const { status, data, pagination } = response;
          if (status == 200) {
            console.log(response)
            data && setBlog(data)
            pagination && setPagination(pagination.pages)
            pagination && setCurrentPage(pagination.page)
          }

        })
        .catch((error) => console.error(error))
    }
    fetchData();
  }, [])

  const handlePagination = (page:number) =>{
    if(currentPage !== page){
      const config = {
        url: `/api/blog?page=${page}`,
        method: 'GET'
      }
      fetcher(config)
        .then((response: Response) => {
          const { status, data, pagination } = response;
          if (status == 200) {
            console.log(response)
            data && setBlog(data)
            pagination && setPagination(pagination.pages)
            pagination && setCurrentPage(pagination.page)
            window.scrollTo({ top: 250, behavior: 'smooth' });
          }

        })
        .catch((error) => console.error(error))
    }
    
  }


  return (
    <>
      <section className="section-size-2">
        <div className="container">
          <div className="grid">
            <div className="column-12">
              <h1>Blog</h1>
              <h6>Thoughts on the future of work, from the stories and articles written with love.</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section blog-section">
        <div className="container">
          <div className="row">
            {
              blog.map((item: any) => <ArticleCard key={item.id} article={item} />)
            }
          </div>
        </div>
      </section>
      <div className="space-4"></div>
      <section className="blog-pagination">
        <ul>
          <li>&laquo;</li>
          {
            pagination.map((item:number)=><li key={item} className={currentPage == item ? 'active' : ''} onClick={()=> handlePagination(item)}>{item}</li>)
          }
          <li>&raquo;</li>
        </ul>
      </section>
      <div className="space-4"></div>
    </>
  )
}