const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              <div className="bg-white rounded-lg shadow-md p-6 text-center flex">
                <img src="https://cdn-icons-png.flaticon.com/512/1357/1357616.png" alt="usersicon" className="w-20 h-20 m-4 " />
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-yellow-500">Total Users</h2>
                    <p className="text-4xl font-bold text-gray-600 mt-4">1,245</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center flex">
                <img src="https://cdn-icons-png.flaticon.com/512/8015/8015816.png" alt="productsicon" className="w-20 h-20 m-4 "/>
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-red-500">Total Products</h2>
                    <p className="text-4xl font-bold text-gray-600 mt-4">3,562</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
}
export default Dashboard;