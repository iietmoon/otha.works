import Link from "next/link";

export default function Notfound() {
  return (
    <main className="container p-0 notfound-page">
      <section className="row ">
        <div className="col text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/">Go Home <i className="bi bi-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </main>
  );
}
