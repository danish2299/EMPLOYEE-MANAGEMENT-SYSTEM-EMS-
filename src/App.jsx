import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboards/EmployeDashboard";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { data } from "autoprefixer";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user , setUser] = useState(null)
  const Authdata = useContext(AuthContext)


  const handlelogin = (email , password) =>{
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
      }
      else if(Authdata && Authdata.employee.find((e) =>email == e.email && e.password)){
        setUser('employee')
      }
      else{
        alert("invalid credetials")
      }
  }



  return(
    <>
   


   {!user ? <Login handlelogin={handlelogin}/>  : ''}
   {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/> }


    </>
  )
}

export default App;