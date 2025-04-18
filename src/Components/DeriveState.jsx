import { useState } from "react";

export const DericedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  // Derived state: count of users
  console.log(users);
  const userCount = users.length;
  // Derived state: average age of users
  const avg = users.reduce((acc, currEle) => acc + currEle.age, 0) / userCount;

  return (
    <div className="main-div flex flex-col">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={userCount}>
            {user.name} - {user.age} years old
          </li>
        ))}

        <h1>{userCount}</h1>
        <h2>{avg}</h2>
      </ul>
    </div>
  );
};
