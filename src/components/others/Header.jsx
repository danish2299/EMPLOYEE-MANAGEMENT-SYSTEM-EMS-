
const Header = () => {
    return(
        <>
        <div className="flex items-end justify-between">
            <h1 className="text-2xl">Hello, <br /> <span className="text-3xl font-semibold">Danish 👋 </span></h1>
            <button className="bg-red-600 text-white px-3 py-2 rounded-sm">Log Out</button>
        </div>
        
        </>
    )
}

export default Header;