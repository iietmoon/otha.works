import Image from "next/image"
import Link from "next/link"
export default function NotFound() {
    return (
        <main className="notfound">
            <div className="container">
                <div className="row">
                    <div>
                        <Image src="/404.svg" width={750} height={750} alt="404 error image" />
                        <h4>Oops, the link was not found!</h4>
                        <p>The page does not exist or another error occurs. Go to our previous page or return to <Link href="/">home page</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}