const TaskMenu = ()=> {
    return(
            <>
                <div id="taskmenu" className="flex overflow-x-auto justify-start gap-10 py-5 px-4 flex-nowrap items-center h-[55%] w-full mt-10 " >
                    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
                            <div className="flex justify-between items-center">
                                <h1 className="text-sm  bg-red-600 rounded px-4 py-3" >High</h1>
                                <h3 className="text-sm">9 Nov 2024</h3>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold">Implementaion of CICD</h2>
                            <p className="text-sm mt-3">Write Decleravtive CICD Pipeline on Jenkis and Deployment , Optimize CICD Pipeline , Automate as much as possible. </p>
                    </div>
                    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
                            <div className="flex justify-between items-center">
                                <h1 className="text-sm  bg-red-600 rounded px-4 py-3" >Medium</h1>
                                <h3 className="text-sm">9 Nov 2024</h3>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold">Troubleshooting K8s</h2>
                            <p className="text-sm mt-3">Resolving CrashloopBackoff Error and Make Application Relaible and Highly Available on Kubernetes</p>
                    </div>
                    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
                            <div className="flex justify-between items-center">
                                <h1 className="text-sm  bg-red-600 rounded px-4 py-3" >Low</h1>
                                <h3 className="text-sm">11 Nov 2024</h3>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold">AWS Serverless Issue</h2>
                            <p className="text-sm mt-3">Resolving Lambda Function Concurrency and Cold start problem with reserved Concurecy and setup step functions for retry Machanism </p>
                    </div>
                    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
                            <div className="flex justify-between items-center">
                                <h1 className="text-sm  bg-red-600 rounded px-4 py-3" >High</h1>
                                <h3 className="text-sm">12 Nov 2024</h3>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold">Upgrading App Version v.4.5.9</h2>
                            <p className="text-sm mt-3">Do Blue Green Deployment to reduce Downtime as much as possible and use Argo CD for easy Rollback </p>
                    </div>
                    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
                            <div className="flex justify-between items-center">
                                <h1 className="text-sm  bg-red-600 rounded px-4 py-3" >Medium</h1>
                                <h3 className="text-sm">9 Nov 2024</h3>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold">Implementaion of CICD</h2>
                            <p className="text-sm mt-3">Write Decleravtive CICD Pipeline on Jenkis and Deployment , Optimize CICD Pipeline , Automate as much as possible. </p>
                    </div>


                    
                </div>
            </>
    )
} 

export default TaskMenu;