import UserList from "./Components/userList/UserList";
import { UserProvider } from "./Components/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <UserList />
      </UserProvider>
    </>
  );
}

export default App;
