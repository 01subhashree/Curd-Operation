import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/PostSlicer";
import { addUser, deleteUser, updateUser } from "../redux/UserSlicer";

export default function Display() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const [postInput, setPostInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const [postsId, setPostsId] = useState("");
  const [usersId, setUsersId] = useState("");
  const [isEditUser, setIsEditUser] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!isEditPost && postInput.trim() !== "") {
      dispatch(addPost({ id: Date.now(), title: postInput }));
    }
    setPostInput("");
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!isEditUser && userInput.trim() !== "") {
      dispatch(addUser({ id: Date.now(), name: userInput }));
    }
    setUserInput("");
  };

  const handlePostDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handlePostUpdate = (postId) => {
    setIsEditPost(true);
    const obj = posts.find((ele) => ele.id === postId);
    console.log(obj);
    setPostInput(obj.title);
    setPostsId(postId);
  };

  const handleUserDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleUserUpdate = (userId) => {
    setIsEditUser(true);
    const obj = users.find((ele) => ele.id === userId);
    setUserInput(obj.name);
    setUsersId(userId);
    console.log(obj);
    console.log(userInput);
  };

  const HandleUpdateUser = () => {
    setIsEditUser(false);
    dispatch(updateUser({ id: usersId, name: userInput }));
    setUserInput("");
  };

  const HandleUpdatePost = () => {
    dispatch(updatePost({ id: postsId, title: postInput }));
    setPostInput("");
    setIsEditPost(false);
  };

  return (
    <div>
      <h2>Posts:</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <span>{post.title}</span>
          <button onClick={() => handlePostDelete(post.id)}>Delete</button>
          <button onClick={() => handlePostUpdate(post.id)}>Update</button>
        </div>
      ))}

      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={postInput}
          onChange={(e) => setPostInput(e.target.value)}
          placeholder="Enter post title"
        />
        {isEditPost ? (
          <button onClick={HandleUpdatePost}>Edit</button>
        ) : (
          <button type="submit">Add Post</button>
        )}
      </form>
      <hr />

      <h2>Users:</h2>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => handleUserDelete(user.id)}>Delete</button>
          <button onClick={() => handleUserUpdate(user.id)}>Update</button>
        </div>
      ))}

      <form onSubmit={handleUserSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter user name"
        />
        {isEditUser ? (
          <button onClick={HandleUpdateUser}>Edit</button>
        ) : (
          <button type="submit">Add User</button>
        )}
      </form>
    </div>
  );
}
