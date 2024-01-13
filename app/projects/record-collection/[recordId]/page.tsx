import DiscogResponse from "@/app/models/DiscogResponse";
import { ReturnButton } from "@/components/ReturnButton";
import retrieveRecords from "@/lib/retrieveRecords";
import getItunesData from "@/lib/getItunesData";
import AlbumCard from "@/components/AlbumCard";

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
      <section className="flex flex-col items-center max-w-3xl justify-center">
        <AlbumCard albumId={result.collectionId} />
        <ReturnButton />
      </section>
    </main>
  );
}
