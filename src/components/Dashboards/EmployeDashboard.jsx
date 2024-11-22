import TaskMenu from "../../Tasklist/Taskmenu";
import Header from "../others/Header";
import Tasklistone from "../others/Tasklistone";


const EmplaoyeeDashboard = () => {
    return(

        <>
        <div className="p-12 bg-[#1C1C1C] h-screen ">
              <Header/>
              <Tasklistone/>
              <TaskMenu/>
        </div>
        
        
        </>
    )
}

export default EmplaoyeeDashboard;