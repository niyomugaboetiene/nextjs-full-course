import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";

export default async function Page() {
    const res = await fetch("http://localhost:3000/api", { cache: "no-cache" });
    const data = await res.json();

    return (
        <div>
            {data.map((post: any) => (
                <div className="flex-1" key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                </div>
            ))}

            <AddPost />
            <UpdatePost />
            <DeletePost />
        </div>
    );
}