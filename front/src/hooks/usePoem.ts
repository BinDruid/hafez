const usePoem = () => {
  const filePath = "hafez.json"

  const getPoems = async () => {
    try {
      const response = await fetch(filePath)
      if (!response.ok) {
        throw new Error("Failed to fetch the JSON file.")
      }
      const data = await response.json()
      return data
    } catch (error: any) {
      console.error("Error reading or parsing the JSON file:", error.message)
      return []
    }
  }

  return {
    getPoems,
  }
}

export default usePoem
