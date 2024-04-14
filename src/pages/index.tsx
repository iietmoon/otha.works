import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container p-0">
      <section className="row hero">
        <div className="col d-flex flex-column justify-content-center text-left">
          <h1>Hello, I am Othmane.</h1>
          <h1>A senior developer with expertise in web/mobile.</h1>
          <p>Dedicated to merging code and creativity, I craft engaging digital experiences. With expertise in development and UX design, I deliver innovative solutions that inspire.</p>
        </div>
        <div className="col-4 text-right">
          <Image src="/othmane-n.png" width={300} height={300} alt="Othmane N." />
        </div>
      </section>
      <section className="row portfolio">
        <div className="col-12">
          <div className="row">
            <div className="col">
              <h2>Portfolio</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div className="col d-flex align-items-end justify-content-end">
              <Link href="/portfolio">View portfolio <i className="bi bi-arrow-up-right ms-2"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-6 card">
          <div className="card-content">
            <Image src="https://assets-global.website-files.com/5fd908fb4e197900bca2f9f3/655fc49676529a680359e9c5_business-logo-minimalfolio-x-webflow-template.svg" width={100} height={100} alt="Project icon" />
            <span>Business</span>
            <h3>Marketing Website Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit. Eu gravida etiam.</p>
          </div>
        </div>
        <div className="col-6 card">
          <div className="card-content">
            <Image src="https://assets-global.website-files.com/5fd908fb4e197900bca2f9f3/655fc49676529a680359e9c5_business-logo-minimalfolio-x-webflow-template.svg" width={100} height={100} alt="Project icon" />
            <span>Business</span>
            <h3>Marketing Website Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit. Eu gravida etiam.</p>
          </div>
        </div>
        <div className="col-6 card">
          <div className="card-content">
            <Image src="https://assets-global.website-files.com/5fd908fb4e197900bca2f9f3/655fc49676529a680359e9c5_business-logo-minimalfolio-x-webflow-template.svg" width={100} height={100} alt="Project icon" />
            <span>Business</span>
            <h3>Marketing Website Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit. Eu gravida etiam.</p>
          </div>
        </div>
        <div className="col-6 card">
          <div className="card-content">
            <Image src="https://assets-global.website-files.com/5fd908fb4e197900bca2f9f3/655fc49676529a680359e9c5_business-logo-minimalfolio-x-webflow-template.svg" width={100} height={100} alt="Project icon" />
            <span>Business</span>
            <h3>Marketing Website Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur asul moler adipiscing elit. Eu gravida etiam.</p>
          </div>
        </div>

      </section>
    </main>
  );
}
