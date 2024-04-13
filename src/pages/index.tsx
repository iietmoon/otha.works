
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TypingText from "@/components/typingText"
import ProjectCard from "@/components/cards/project";
import { clients } from "@/constants/data/clients";
import fetcher from "@/utils/fetcher";
import Loader from "@/components/loader";
import { useRouter } from "next/router";
import Hero from "@/components/hero";

interface Response{
  status?: number,
  responseSpeed?: string,
  message?: string,
  data?: any[]
}
const Home: React.FC = () => {
  const HeroTexts:string[] = ['developer', 'freelancer', 'ux designer', 'bugs solver', 'coffee lover'];
  const {pathname} = useRouter();
  const [loading, setLoading] = useState<boolean>(true)
  const [portfolio, setPortfolio] = useState<any>([]);

  useEffect(() => {
    setLoading(true)
    const fetchData = () => {
      const config = {
        url: '/api/portfolio?limit=3',
        method: 'GET'
      }
      fetcher(config)
        .then((response:Response) => {
          const {status, data} = response;
          if(status == 200){
            setPortfolio(data)
            setLoading(false)
          }
        })
        .catch((error) => console.error(error))
    }
    fetchData();
  }, [pathname])

  if(loading) return <Loader/>;
  return (
    <>
      <Hero></Hero>
      <section className="section-size-3 lighter-bg services-section">
        <div className="container">
          <div className="grid">
            <div className="column-8 centered text-center ">
              <h2>Think. Create. <span className="lined">Iterate.</span></h2>
              <p>During this time I have worked on all layers of codes from database to UI. I have also been involved in all stages of a product life cycle from conceptualization and design and up to deployment in production and support.</p>
              <div className="space-3"></div>
            </div>
          </div>
          <div className="grid content">
            <div className="column-3 text-center">
              <Image src="/icons/code-branch.png" alt="Icon" width={50} height={50} />
              <h5>Web/Mobile Development</h5>
              <div className="space-2"></div>
              <p>What-ever your business scale, I can provide for you high quality development lifecycle for website, eCommerce solutions, webApps and also if need just front-end or backend development.</p>
            </div>
            <div className="column-3 text-center">
              <Image src="/icons/code-circuit.png" alt="Icon" width={50} height={50} />
              <h5>UX Reasearch/Design</h5>
              <div className="space-2"></div>
              <p>As long my experience any project need a UX design, research, apply to have a high rate of conversions and leads, I can help you in all product journey from research, UI design to release Prototypes.</p>
            </div>
            <div className="column-3 text-center">
              <Image src="/icons/code-compare.png" alt="Icon" width={50} height={50} />
              <h5>Technical consulting</h5>
              <div className="space-2"></div>
              <p>During my experience I have worked on all layers of codes from the design to launching for small business or startup, I put efforts that spans the full product lifecycle: strategy, design, development.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-size-2">
        <div className="container">
          <div className="grid">
            <div className="column-6 centered text-center pad-4">
              <h2>Selected Works</h2>
              <p>Discover some project made with ❤️, all of which were completed on time and to the satisfaction.</p>
            </div>
          </div>
          <div className="grid masonry columns-3 gallery featured-projects" data-gallery="1" data-total="3">
            <div className="grid-sizer"></div>
            {
              portfolio.map((item: any) => <ProjectCard key={item.id} project={item} />)
            }
          </div>
        </div>
      </section>
      <section className="section-size-2 clients-section">
        <div className="container headline">
          <div className="grid">
            <div className="column-6 centered text-center pad-4">
              <h4>some folks <span className="lined">worked with on freelance</span></h4>
            </div>
          </div>
        </div>
        <div className="container logos width-5">
          <div className="grid columns-5 columns-mobile-2 centered animated has-animated">
            {
              clients.map((client: any, index: number) => (
                <div key={index} className="column image pad-1">
                  <img alt={client.title} src={client.image} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;