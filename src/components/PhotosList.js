import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";


export default function PhotosList({album}){
     const {data,isFetching,error} = useFetchPhotosQuery(album);
     const [addPhoto,results] = useAddPhotoMutation();

    let content;
    if(isFetching) content = <Skeleton className="h-8 w-8" times={4} />

    else if(error) content = <div>Error loading photos... </div>

    else content = data.map((photo) => {
        return <PhotosListItem photo={photo} key={photo.id} />
    });


    return <div>
        <div className='m-2 flex flex-row items-center justify-between'>
         <h3 className="text-lg font-bold">Photos for {album.title}</h3>
         <Button onClick={()=>addPhoto(album)} loading={results.isLoading} className='mr-2'>
            + Add Photo
         </Button>
        </div>
        <div className='mx-8 flex flex-row flex-wrap justify-center'>
        {content}
        </div>
    </div>
}