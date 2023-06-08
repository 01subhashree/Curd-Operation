/* eslint-disable react/prop-types */
// EditUserForm.js
import { useState } from "react";

const EditUserForm = ({ user, handleUpdate, setEditUserId }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(user.id, name, email);
  };

  const handleCancel = () => {
    setEditUserId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
