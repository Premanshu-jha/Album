import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/use-thunk";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UsersList(){

   
    const [runThunk,isLoading,error] = useThunk(fetchUsers);

    const [doCreateUser,isCreatingUser,creatingUserError] = useThunk(addUser);

    


    
    const {data} = useSelector((state)=>{
        return state.users;
    });
    
    useEffect(()=>{
       runThunk();
    },[runThunk]);
    
    
    let content;
    if(isLoading){
        content = <Skeleton times={6} className='h-10 w-full'/>;
    }

    else if(error){
        content = <div>Error fetching data... </div>
    }

    else content = data.map((user)=>{
        return <UserListItem user={user} key={user.id}/>;
    });

    const handleUserAdd = ()=>{
        doCreateUser();
    }

    

    return <div>
        <div className='flex flex-row justify-between items-center m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
        
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
                + Add User
            </Button>
            {creatingUserError && <div>{creatingUserError}</div>}
         </div>   
        {content}
        </div>


}

export default UsersList;