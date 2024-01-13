import DiscogResponse from "@/app/models/DiscogResponse";
import { ReturnButton } from "@/components/ReturnButton";
import retrieveRecords from "@/lib/retrieveRecords";
import getItunesData from "@/lib/getItunesData";

type Props = {
  params: { recordId: string };
};

export default async function RecordPage({ params }: Props) {
  const records = await retrieveRecords();
  const recordId = params.recordId;

  const Album = records.find((a) => a.id === parseInt(recordId));
  if (!Album) {
    throw new Error("No album found with the given id");
  }

  const albumName = Album.basic_information.title.toLowerCase();
  const artistName = Album.basic_information.artists[0].name.toLowerCase();
  const searchTerm = (albumName + " " + artistName).replaceAll(" ", "+");

  const iTunesData = await getItunesData(searchTerm);

  if (!iTunesData.results || iTunesData.results.length < 0) {
    throw new Error("No apple music id found");
  }

  const result = iTunesData.results[0];

  if (!result) {
    throw new Error("No apple music id found");
  }

  return (
    <main className="flex w-full flex-col items-center">
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        height="450"
        style={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "transparent",
          borderRadius: "11px",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/us/album/${result.collectionId}?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=system`}
      ></iframe>
      <ReturnButton />
    </main>
  );
}
