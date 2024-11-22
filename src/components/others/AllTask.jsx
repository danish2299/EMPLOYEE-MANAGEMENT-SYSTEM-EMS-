

const AllTask = () => {
    return(
        <>
        <div className="bg-[#1c1c1c] mt-10 rounded py-2 ">
            <h1 className="text-center text-3xl mt-1 font-extrabold">Task Status</h1>
            <div className="bg-red-400 py-4 mt-3 px-2 flex jusitfy-between flex-col rounded ">
                <h3 className="font-semibold">Danish</h3>
                <h2 className="font-bold text-ellipsis mt-1">Implementation of CICD Done</h2>
                <h4 className="text-green-700 font-extrabold mt-1">Success</h4>
            </div>
            <div className="bg-red-400 py-4 mt-2 px-2 flex jusitfy-between flex-col rounded ">
                <h3 className="font-semibold">Danish</h3>
                <h2 className="font-bold text-ellipsis mt-1">Optimization of CICD</h2>
                <h4 className="text-red-700 font-extrabold mt-1">Failed</h4>
            </div>
            <div className="bg-red-400 py-4 mt-2 px-2 flex jusitfy-between flex-col rounded ">
                <h3 className="font-semibold">Danish</h3>
                <h2 className="font-bold text-ellipsis mt-1">K8s Troubleshooting</h2>
                <h4 className="text-yellow-700 font-extrabold mt-1">Pending</h4>
            </div>
            <div className="bg-red-400 py-4 mt-2 px-2 flex jusitfy-between flex-col rounded ">
                <h3 className="font-semibold">Danish</h3>
                <h2 className="font-bold text-ellipsis mt-1">Implementation of CICD Done</h2>
                <h4 className="text-green-700 font-extrabold mt-1">Success</h4>
            </div>
            

        </div>
        
        </>
    )
}

export default AllTask;