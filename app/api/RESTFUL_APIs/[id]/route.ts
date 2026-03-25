import connection from "../connection";


export async function GET(request: Request, context: { params: Promise<{ id: string }>}) {
    try {
        const { id } = await context.params;
        const NumberId = Number(id);

        console.log("IDs", id);

       const [row]: any =  await connection.query(
            'SELECT * FROM Student WHERE id = ?', [NumberId]
        );

        if (row.length === 0) {
            return Response.json({ message: 'No user in system' });
        }
        return Response.json(row[0])
    } catch (err) {
        return Response.json(err);
    }
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