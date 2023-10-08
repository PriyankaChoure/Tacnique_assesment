import { useEffect, useState } from "react";
import "./App.css";
import { fetchUserData } from "./apis/api";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [users, setUsers] = useState([]);
  const getUserData = async () => {
    const responseData = await fetchUserData();
    setUsers(responseData.data);
    console.log(responseData.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  // delete user
  const handleDelete = (user) => {
    let userListTemp = users.filter((obj) => obj.id !== user.id);
    setUsers(userListTemp);
    console.log(userListTemp.length);
    alert(`users deleted successfully`);
  };

  return (
    <div className="wrapper">
      <h2>User Managment Dashboard</h2>
      {users.length > 0 && (
        <Dashboard users={users} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
