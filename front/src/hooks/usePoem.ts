const usePoem = () => {
  const filePath = "crawl_data.json"

  const getPoems = async () => {
    try {
      const response = await fetch(filePath)
      if (!response.ok) {
        throw new Error("Failed to fetch the JSON file.")
      }
      const data = await response.json()
      return data
    } catch (error: any) {
      return []
    }
  }

  return {
    getPoems,
  }
}

export default usePoem
