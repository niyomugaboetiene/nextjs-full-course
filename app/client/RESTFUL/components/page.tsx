import AddUser from "./AddUser";
import { Suspense } from "react";

export default function Page() {
    return(
        <Suspense fallback={<p>Loading Add User</p>}>
            <AddUser />
        </Suspense>
    )
}