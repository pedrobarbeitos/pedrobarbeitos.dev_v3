async function getItunesData(searchTerm: string) {
  const resItunes = await fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&media=music&explicit=Y&entity=album`
  );

  if (!resItunes.ok) {
    throw new Error("Failed to find Itunes data");
  }

  const dataItunes = await resItunes.json();
  return dataItunes;
}

export default getItunesData;
