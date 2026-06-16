export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-2xl font-bold text-blue-600">PartyNest</h1>
        <div className="flex gap-4">
          <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
          <a href="/host" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            List Your Space
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-blue-50">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Find the Perfect Space for Your Party
        </h2>
        <p className="text-xl text-gray-500 mb-8 max-w-xl">
          Discover unique terraces, farmhouses, and private venues in Bangalore for your next celebration.
        </p>

        {/* Search Bar */}
        <div className="flex gap-2 bg-white shadow-md rounded-xl p-2 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by location (e.g. HSR Layout)"
            className="flex-1 px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl mb-4">🔍</div>
            <h4 className="text-xl font-semibold mb-2">Search</h4>
            <p className="text-gray-500">Browse unique venues near you in Bangalore</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📅</div>
            <h4 className="text-xl font-semibold mb-2">Book</h4>
            <p className="text-gray-500">Pick your date, time, and pay securely online</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎉</div>
            <h4 className="text-xl font-semibold mb-2">Party</h4>
            <p className="text-gray-500">Show up and celebrate — we handle the rest</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t text-sm">
        © 2026 PartyNest · Bangalore
      </footer>

    </main>
  );
}