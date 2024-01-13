import DiscogResponse from "../app/models/DiscogResponse";

async function retrieveRecords() {
  const res = await fetch(
    `https://api.discogs.com/users/vasquiat/collection/folders/0/releases?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}&per_page=100&sort=artist`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: DiscogResponse = await res.json();
  return data.releases;
}

export default retrieveRecords;
