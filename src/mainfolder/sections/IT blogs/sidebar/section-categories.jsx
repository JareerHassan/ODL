'use client';
import Link from "next/link";


function SectionCategories() {
    return (
        <>
            <div className="widget widget_services ">
                <h4 className="widget-title">Categories</h4>
                <ul className="bg-black">
                    <li><Link href="/portfolio/detail">Headphone<span> (05)</span></Link></li>
                    <li><Link href="/portfolio/detail">Gamer Mouse<span> (04)</span></Link></li>
                    <li><Link href="/portfolio/detail">Eye testing lance<span> (02)</span></Link></li>
                    <li><Link href="/portfolio/detail">USB Pendrive<span> (08)</span></Link></li>
                    <li><Link href="/portfolio/detail">Quality Mouse<span> (04)</span></Link></li>
                    <li><Link href="/portfolio/detail">Manufacturing<span> (01)</span></Link></li>
                </ul>
            </div>
        </>
    )
}
export default SectionCategories;