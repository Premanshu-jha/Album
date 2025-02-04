import React from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import AlbumsListItem from './AlbumsListItem';
import Button from './Button';
import Skeleton from './Skeleton';

const AlbumsList = ({user}) => {

  const {data,error,isFetching} = useFetchAlbumsQuery(user);
  const [addAlbum,results] = useAddAlbumMutation();

  console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  }
  
  let content;
  if(isFetching) content = <Skeleton className="h-10 w-full" times={3}/>

  else if(error) content = <div>Error loading albums... </div>

  else {
    content = data.map((album) => {
     return <AlbumsListItem album={album} key={album.id} />
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      <Button onClick={handleAddAlbum}loading={results.isLoading}>Add Album</Button>
      </div>

      <div>
        {content}
      </div>
</div>
  )
}

export default AlbumsList
