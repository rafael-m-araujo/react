import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Rafael", "Josias", "Matheus"])
  
  const [users, setUsers] = useState([
    {id: 1, name: "Joana", age: 35 },
    {id: 2, name: "João", age: 15 },
    {id: 3, name: "Eulides", age: 20 },
  ]);

  const deleteRandom = () => {

   const randomNuber = Math.floor(Math.random() * 4)

   setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !==user.id)
  );
  };

  return (
    <div>
    {/* Render sem Key */}
      <ul>{list.map((item) => (
      <li>
        {item}
      </li>  ))}</ul>

    {/* Render com Key */}
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} - {user.age} anos</li>
      ))}
    </ul>
    </div>
  );
};

export default ListRender