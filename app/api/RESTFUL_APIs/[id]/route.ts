import connection from "../connection";

export async function UPDATE(request: Request, { params } : { params: {id: number }}) {
    try {
       const { name, password } = await request.json();
       const id = params.id;

    
    }
}