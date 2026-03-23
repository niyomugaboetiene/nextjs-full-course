    const posts  = [
        {id: 1, title: "Post 1" },
        {id: 2, title: "Post 2" },
        {id: 3, title: "Post 3" }
    ];

export function PUT(request: Request, { params }: { params: { id: string }}) {
    const body: any = request.json();
    const id = parseInt(params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return Response.json({ message: 'No Post exist'}, { status: 404 });
    }

    post.title = body.title;
}