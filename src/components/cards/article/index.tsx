import Image from "next/image";
import Link from "next/link";
import HtmlRenderer from "@/components/htmlRenderer";

const Profile = () => {
    return <div className="profile">
        <Image width={100} height={100} src="/othmane-n.png" alt="Othmane" />
        <span>
            <p>Othmane N.</p>
            <p>Sr. Full-stack Developer</p>
        </span>
    </div>
}

const ArticleCard = ({ article }: any) => {
    //const placeholderImageSrc = article.featuredImage ? article.featuredImage : '/placeholder-image.jpeg';
    console.log(article.featuredImage)
    return (
        <div className="col article-card">
            <Link href={'/blog/'+article.slug}>
                <Image width={500} height={300} src={article.featuredImage} alt="image" />
                <span className="term">{article.terms[0]}</span>
                <h6>{article.title}</h6>
                <p><HtmlRenderer content={article.excerpt.slice(0, 85) + '...'}></HtmlRenderer></p>
                <Profile></Profile>
            </Link>
        </div>
    )
}
export default ArticleCard;