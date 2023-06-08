// UserList.js
import { useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import EditUserForm from "./EditUser";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);
  const [editUserId, setEditUserId] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  const handleUpdate = (id, name, email) => {
    dispatch({ type: "UPDATE_USER", payload: { id, name, email } });
    setEditUserId(null);
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: { id: Date.now(), ...newUser } });
    setNewUser({ name: "", email: "" });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            {editUserId === user.id && (
              <EditUserForm
                user={user}
                handleUpdate={handleUpdate}
                setEditUserId={setEditUserId}
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          required
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserList;
