export default function blogPost({ params } : { params: { id: string }}) {
    return (
        <div>
            <p>Post {params.id}</p>
        </div>
    )
}