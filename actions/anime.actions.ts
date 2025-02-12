export async function getAnimeData(id: string) {
  try {
    const response = await fetch(
      `${process.env.ANIMEHIVE_API}/api/v2/hianime/anime/${id}`
    );
    const jsonData = await response.json();
    return jsonData.data.anime || {};
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return {};
  }
}
