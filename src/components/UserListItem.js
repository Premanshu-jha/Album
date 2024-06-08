import { GiTrashCan } from "react-icons/gi";
import useThunk from "../hooks/use-thunk";
import { removeUser } from "../store/thunks/removeUsers";
import AlbumsList from "./AlbumsList";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function UserListItem({user}){

    const [doRemoveUser,isLoading,error] = useThunk(removeUser);

    const header = <>
     <Button loading={isLoading} onClick={()=>doRemoveUser(user)} className='mr-3'><GiTrashCan />
</Button>
      {error && <div className='text-red-500'>{error}</div>}
        {user.name}
    </>

    return <ExpandablePanel header={header}>
       <AlbumsList user={user}/>
    </ExpandablePanel>
   
    
}