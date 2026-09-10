import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Rafael", "Josias", "Matheus"])
  
  return (
    <div>
      <ul>{list.map(() => (
        ))}</ul>
    </div>
  )
}

export default ListRender