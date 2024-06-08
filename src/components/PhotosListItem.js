import { GiTrashCan } from "react-icons/gi";
import { useDeletePhotoMutation } from "../store";


export default function PhotosListItem({photo}){

    const [deletePhoto,results] = useDeletePhotoMutation();

    return <div className='relative cursor-pointer m-2'>
    <img className='h-20 w-20' src={photo.url} alt='random' />
    <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80' onClick={()=>deletePhoto(photo)}>
        <GiTrashCan className='text-3xl' />
        </div>
    </div>
}