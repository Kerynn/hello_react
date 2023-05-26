function Employee(props){
    return (
      <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img 
          className="object-cover rounded-full block mx-auto h-24 sm:mx-0 sm:shrink-0" 
          src={props.img}
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{props.name}</p>
            <p className="text-slate-600 font-medium">{props.role}</p>
          </div>
          <button className="px-4 py-1 text-sm text-blue-800 font-semibold rounded-full border border-blue-900 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Update Employee Info
          </button>
        </div>
      </div>
    )
}

export default Employee;