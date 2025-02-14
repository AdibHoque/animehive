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

export async function getEpisodeData(id: string) {
  try {
    const response = await fetch(
      `${process.env.ANIMEHIVE_API}/api/v2/hianime/anime/${id}/episodes`
    );
    const jsonData = await response.json();
    return jsonData.data || {};
  } catch (error) {
    console.error("Error fetching anime episode data:", error);
    return {};
  }
}

export async function getStreamLink(id: string) {
  try {
    const response = await fetch(
      `${process.env.ANIMEHIVE_API}/api/v2/hianime/episode/sources?animeEpisodeId=${id}server=hd-1&category=dub`
    );
    const jsonData = await response.json();
    return jsonData.data || {};
  } catch (error) {
    console.error("Error fetching anime episode data:", error);
    return {};
  }
}
