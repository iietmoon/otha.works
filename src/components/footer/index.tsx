import Link from "next/link";

export default function Footer() {
    const currentYear = getCurrentYear();

    function getCurrentYear() {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <footer className="footer section-size-1 border-top">
            <Link className="button primary" href="/contact">✦︎︎ Let's Work Together ✦︎︎</Link>
            <div className="font-size-1">
                <span>Built by </span>
                <span>
                    <Link href="https://github.com/iietmoon" target="_blank">Othmane N.</Link>
                </span>
                <span> with ❤️ and ☕ </span>
                <div>© {currentYear}</div>
            </div>
        </footer>
    );
}