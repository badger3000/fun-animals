import React, { useState } from "react"
import { Search } from "react-feather"

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
    // You can also implement any search logic here if needed
  }

  return (
    <label className=" bg-white flex flex-row p-2 lg:w-3/4 lg:m-auto lg:p-4 border-gray-300 shadow-md rounded-xl items-center mb-4 justify-center lg:mb-10">
      <Search className="stroke-gray" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="...search"
        className="mt-1 block rounded-md border-none focus:border-none focus:none focus:ring-none focus:ring-opacity-0 text-right w-full h-full text-gray  transition-all duration-200"
      />
    </label>
  )
}

export default SearchInput
