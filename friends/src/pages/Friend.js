import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props)=>{
const [friend, setFriend] = useState();

const params = useParams();
let id = Number(params.id);

useEffect(() => {
    axiosWithAuth()
      .get(`/friends/${id}`)
      .then(response => {

        setFriend(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

    return(
        <>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </>
    )
}

export default Friend;