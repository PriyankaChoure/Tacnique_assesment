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
  return (
    <div className="wrapper">
      <h2>User Managment Dashboard</h2>
      {users.length > 0 && <Dashboard users={users} />}
    </div>
  );
}

export default App;
