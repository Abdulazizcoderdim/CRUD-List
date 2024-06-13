import { useNavigate } from "react-router-dom"
import ProfileInfo from "../Cards/ProfileInfo"
import SearchBar from "../SearchBar/SearchBar"
import { useState } from "react"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate

  const onLogout = () => {
    navigate("/login")
  }

  const handleSearch = () => {

  }

  const onClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="bg-white flex items-center justify-between md:px-6 px-3 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
       <SearchBar
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       />

      <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar
