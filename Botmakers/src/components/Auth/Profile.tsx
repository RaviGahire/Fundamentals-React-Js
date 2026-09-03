import { useNavigate } from "react-router";

export const Profile = () => {

const navigate = useNavigate()

  const user = {
    email: localStorage.getItem("email"),
    mobileNo :localStorage.getItem("mobile"),
    name :localStorage.getItem("name")
  }

  const handleLogout = ()=>{
    localStorage.clear()
    alert("Logout succesfully")
navigate("/login")
  }



  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-600/30 rounded-md shadow-md p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
            U
          </div>

          <div>
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>

          <div className="w-full flex flex-col gap-3 text-left">
            <div className="border rounded-md px-4 py-3">
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div className="border rounded-md px-4 py-3">
              <p className="text-sm text-gray-500">Mobile Number</p>
              <p className="font-medium">{user.mobileNo}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full border px-6 py-2 bg-red-600 text-white cursor-pointer font-medium rounded-md active:scale-96 transition-all duration-300 ease-in"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
