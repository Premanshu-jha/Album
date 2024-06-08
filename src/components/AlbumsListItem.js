import { GiTrashCan } from "react-icons/gi";
import { useDeleteAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";


export default function AlbumsListItem({ album }) {

    const [deleteAlbum,results] = useDeleteAlbumMutation();

const header = <>
    <Button onClick={()=>deleteAlbum(album)} loading={results.isLoading} className="mr-2"><GiTrashCan /></Button>
    {album.title}
    </>

return <ExpandablePanel header={header}>
    
  <PhotosList album={album} />
</ExpandablePanel>

}