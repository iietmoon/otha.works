import Image from "next/image"
import Link from "next/link"
import HtmlRenderer from "@/components/htmlRenderer"
export default function ProjectCardPlaceholder() {
    return (
        <div className="grid-item column undefined has-animated project-card-placeholder">
            <Link href="#" className="thumb space-2 lightbox">
                <div className="labels">sadasdasd</div>
                <div className="caption">
                    <div className="title"></div>
                    <div className="sub">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}