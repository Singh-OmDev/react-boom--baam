import { useEffect } from "react";
 export const Posts = () => {

    const getPostData = async ()=> {
         const res  =await getPost ();
          
    };

     useEffect (() => {
          getPostData();

     } , []);

 };