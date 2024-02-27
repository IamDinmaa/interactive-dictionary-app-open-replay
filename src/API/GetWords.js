export async function fetch_words(word) {
  const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    // Fetch data from the API
    const response = await fetch(dictionaryApi);
    // Parse the JSON response
    const data = await response.json();
    // Return the fetched data
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
}
