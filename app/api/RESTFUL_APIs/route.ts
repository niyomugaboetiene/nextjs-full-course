import connection from "./connection";

export async function POST(request: Request) {
    try {
        const { name, password } = await request.json();

        await connection.query(
            'INSERT INTO Student(name, password) VALUES(?, ?)', [name, password]
        );

        return Response.json({ message: 'User added successfully'}, { status: 201 });
    } catch (err) {
        return Response.json(err);
    }
}

export async function GET() {
    try {
      const [row]: any = await connection.query('SELECT * FROM Student');

      if (row.length > 0) {
         return Response.json(row);
      } else {
        return Response.json({ message: 'No user in system'}, { status: 404 });
      }
    } catch (err) {
        return Response.json(err);
    }
}