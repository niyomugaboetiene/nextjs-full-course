import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <Link href={"/blog/1"}>Go to post 1</Link>
            <Link href={"/blog/2"}>Go to post 2</Link>
            <Link href={"/blog/3"}>Go to post 3</Link>
        </div>
    )
}