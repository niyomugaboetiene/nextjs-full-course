import connection from "../connection";


export async function GET({ params } : { params: { id: number }}) {
    
}

export async function UPDATE(request: Request, { params } : { params: {id: number }}) {
    try {
       const { name, password } = await request.json();
       const id = params.id;

       await connection.query(
        'UPDATE Student SET name = ?, password = ?', [name, password]
       );

       return Response.json({ message: "Updated successfully" });
    } catch (err) {
        return Response.json({Error: err});
    }
}