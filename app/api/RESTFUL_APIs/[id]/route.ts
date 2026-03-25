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

export async function PUT(request: Request, context: { params: Promise<{ id: string }>}) {
    try {

       const { name, password } = await request.json();

       const { id } = await context.params;

       const NumberId = Number(id);

       await connection.query(
        'UPDATE Student SET name = ?, password = ? WHERE id = ?', [name, password, NumberId]
       );

       return Response.json({ message: "Updated successfully" });
    } catch (err) {
        return Response.json(err);
    }
}

export function DELETE(request: Request, context: { params: Promise<{ id: string }>}) {
     try {
        const { id } = await context.params;
        const NumberId = Number(id);

       await connection.query(
        'DELETE FROM Student WHERE id = ?', [id]
       );

       return Response.json({ message: "Student removed successfully" }, { status: 200 });
     }
}