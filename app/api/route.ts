export function GET() {
    const post  = [
        {id: 1, title: "Post 1" },
        {id: 2, title: "Post 2" },
        {id: 3, title: "Post 3" }
    ];

    return Response.json(post);
}

export function POST(request: Request) {
    const body : any = request.json();

    const newPost = {
        id: Date.now(),
        title: body.title
    }

    return Response.json(newPost);
}