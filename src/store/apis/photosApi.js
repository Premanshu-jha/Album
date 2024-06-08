import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "./albumsApi";


export const photosApi = createApi({
    
    reducerPath:'photos',

    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005',
        fetchFn:async (...args)=>{
            await pause(1000);
            return fetch(...args);
        }
    }),

    endpoints(builder){

        return {
        fetchPhotos:builder.query({
            query:(album)=>{
                return {
                    url:'/photos',
                    params:{
                    albumId:album.id
                    },
                    method:'GET'
                };
            },
            providesTags:result=>{
                return [{type:'Photo',albumId:result.albumId}];
            }
        }),
        
        addPhoto:builder.mutation({
            invalidatesTags:result=>{
                return [{type:'Photo',albumId:result.albumId}];
            },
            query:(album)=>{
                return {
                    url:'/photos',
                    method:'POST',
                    body:{
                        albumId:album.id,
                        url:faker.image.abstract(150,150,true),
                    }
                };
            }
        }),

        deletePhoto:builder.mutation({
            invalidatesTags:result=>{
                return [{type:'Photo',albumId:result.albumId}];
            },
            query:(photo)=>{
                return {
                    url:`/photos/${photo.id}`,
                    method:'DELETE'
                };
            }
        })

    }
    }

});

export const { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;