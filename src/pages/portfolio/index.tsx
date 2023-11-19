import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProjectCard from '@/components/cards/project';
import fetcher from '@/utils/fetcher';

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

export default function Portfolio() {
  const {pathname} = useRouter();
  const [loading, setLoading] = useState<boolean>(true)
  const [portfolioCategories, setPortfolioCategories] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState<any>([])
  const [count, setCount] = useState<number>(NaN)
  const [currentFilter, setCurrentFilter] = useState<string>('*')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagination, setPagination] = useState<number[]>([])
  const [mobileFilter, setMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    setMobileMenu(false)
    const fetchCategories = () => {
      const config = {
        url: '/api/portfolio/categories',
        method: 'GET'
      }
      fetcher(config)
        .then((response: Response) => {
          const { status, data } = response;
          if (status == 200) {
            setPortfolioCategories(data)
          }
        })
        .catch((error) => console.error(error))
    }
    const fetchPortfolio = () => {
      const config = {
        url: '/api/portfolio',
        method: 'GET'
      }
      fetcher(config)
        .then((response: Response) => {
          const { status, data, pagination } = response;
          if (status == 200) {
            data && setPortfolio(data)
            pagination && setCount(pagination.count)
            pagination && setCurrentPage(pagination.page)
            pagination && setPagination(pagination.pages)
          }
        })
        .catch((error) => console.error(error))
    }
    fetchCategories();
    fetchPortfolio();
  }, [pathname])

  const filterData = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    const filterValue: any = event.currentTarget.getAttribute('data-filter');
    if (filterValue) {
      setCurrentFilter(filterValue)
      console.log(filterValue)
      const config = {
        url: filterValue == '*' ? `/api/portfolio` : `/api/portfolio?filter=[terms][${filterValue}]`,
        method: 'GET'
      }
      fetcher(config)
        .then((response: Response) => {
          const { status, data, pagination } = response;
          if (status == 200) {
            console.log(response)
            data && setPortfolio(data)
            pagination && setCount(pagination.count)
            pagination && setCurrentPage(pagination.page)
            pagination && setPagination(pagination.pages)
          }
        })
        .catch((error) => console.error(error))
    }
  };
  const loadMoreItems = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const pageValue: string | any = event.currentTarget.getAttribute('data-filter');

    if (pageValue) {
      const page = parseInt(pageValue) + 1;

      if (pageValue) {

        const url = () => {
          switch (currentFilter) {
            case '*':
              return `/api/portfolio?page=${page}`;
            default:
              return `/api/portfolio?filter=[terms][${currentFilter}]&page=${page}`;
          }
        };
        console.log(url())

        const config = {
          url: url(),
          method: 'GET'
        };

        try {
          const response = await fetcher(config);
          const { status, data, pagination } = response;

          if (status === 200) {
            data && console.log([portfolio, data].flat());
            data && setPortfolio([portfolio, data].flat());
            pagination && setCount(pagination.count);
            pagination && setCurrentPage(pagination.page);
            pagination && setPagination(pagination.pages);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };


  return (
    <>
      <section className="section-size-2">
        <div className="container">
          <div className="grid">
            <div className="column-12">
              <h1>Portfolio</h1>
              <h6>Discover +70 project made with ❤️, all of which were completed on time and to the satisfaction of the clients.</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ul onClick={()=> setMobileMenu(!mobileFilter)} className={mobileFilter ? "grid-filters open" : "grid-filters" } data-target="grid">
            <li><a className={currentFilter == null ? 'button link filter active' : 'button link filter'} href="#all" data-filter="*" style={{ borderBottom: "none" }} onClick={filterData}>All {currentFilter == '*' && `(${count} project)`}</a></li>
            {
              portfolioCategories.map((item: any) => <li key={item}><a className={currentFilter == item ? 'button link filter active' : 'button link filter'} href={`#${item}`} data-filter={item} style={{ borderBottom: "none" }} onClick={filterData}>{item} {currentFilter == item && `(${count} project)`}</a></li>)
            }
          </ul>
          <div className="grid masonry columns-3 gallery" id="grid" data-gallery="0">
            <div className="grid-sizer"></div>
            {
              portfolio.map((item: any, index: number) => <ProjectCard key={index} project={item} />)
            }
          </div>
        </div>
        {
          currentPage !== pagination[pagination.length - 1] && <section>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingBottom: 50 }}>
              <a className="button default anchor-link" href="#load-more-projects" data-filter={currentPage} onClick={loadMoreItems}>Load more projects</a>
            </div>
          </section>
        }
      </section>
    </>
  )
}