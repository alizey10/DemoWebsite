

"use client";

import { useEffect, useState } from 'react';

function UserRow({ sname, city, country, deleteUser, i }) {
    return (
        <tr>
            <td>{sname}</td>
            <td>{city}</td>
            <td>{country}</td>
            <td>
                <button onClick={() => deleteUser(i)}>DELETE</button>
            </td>
        </tr>
    );
}

export default function Dashboard() {
    const [users, setUsers] = useState([
        {
            name: "ali",
            city: "fsd",
            country: "PAK"
        },
        {
            name: "rameez",
            city: "lhr",
            country: "PAK"
        },
        {
            name: "aqsa",
            city: "delhi",
            country: "india"
        }
    ]);

  
    function deleteUser(index) {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    }


    useEffect(() => {
        const name = prompt("Enter name");
        const city = prompt("Enter city");
        const country = prompt("Enter country");

        const newUser = { name, city, country };
 

        users.push(newUser);

        setUsers([...users]);

        console.log(users);


        // setUsers(prevUsers => [...prevUsers, newUser]);
    }, []);

    return (
        <div>
            <h2>Customers</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <UserRow
                            key={i}
                            i={i}
                            deleteUser={deleteUser}
                            sname={user.name}
                            city={user.city}
                            country={user.country}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
