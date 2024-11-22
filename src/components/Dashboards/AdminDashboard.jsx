import AllTask from "../others/AllTask";
import Header from "../others/Header";

const AdminDashboard = () => {
    return(
        <>
        <div className="h-screen w-full p-10 bg-[#1c1c1c] relative">
        <Header/>
          <div className="">
            <form className="flex flex-col mt-10 w-[30%]" action="">
                <h3 className="font-semibold">Task Tittle</h3>
                <input className="mt-2 p-1 border-2 border-white bg-transparent rounded-md" type="text" placeholder="Enter Task Tittle here" />
                <h3 className="mt-3 font-semibold">Description</h3>
                <textarea className="mt-2 p-5 border-2 border-white bg-transparent rounded-md" name="" id=""></textarea>
                <h3 className="mt-2 font-semibold">Date</h3>
                <input className="mt-2 border-2 border-white bg-transparent p-1" type="date" name="" id="" />
                <h3 className="mt-2 font-medium">Assign to</h3>
                <input className="mt-2 border-2 border-white bg-transparent p-1" type="text" placeholder="Assign to ?" />
                <h3 className="mt-2 font-medium">Category</h3>
                <input className="mt-2 border-2 border-white bg-transparent p-1" type="text" placeholder="DevOps , Dev , Design" />
                <div className="absolute top-[50%] left-[60%]">
                <button id="btn-1" className="py-4 px-10 bg-green-500">Create Task</button>
                </div>
            </form>
          </div>
            <AllTask/>
        </div>
        </>
    )
}

export default AdminDashboard;