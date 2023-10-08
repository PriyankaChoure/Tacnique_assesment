import { useEffect, useState } from "react";
import "./App.css";
import { fetchUserData, saveUserData } from "./apis/api";
import Dashboard from "./components/Dashboard/Dashboard";
import UserForm from "./components/User/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
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

  // save user
  const handleSave = async (userData) => {
    const responseData = await saveUserData(userData);
    console.log(responseData);
    alert("data saved successfully");
    setIsFormOpen(false);
  };

  return (
    <div className="wrapper">
      <h2>User Managment Dashboard</h2>
      <div className="addbtn">
        <button onClick={() => setIsFormOpen(!isFormOpen)}>Add New User</button>
      </div>
      {users.length > 0 && (
        <Dashboard users={users} handleDelete={handleDelete} />
      )}
      {isFormOpen && (
        <UserForm
          isOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          handleSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
