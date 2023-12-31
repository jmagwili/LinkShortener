import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LinkForm } from './LinkForm';
import { LinkTable } from './LinkTable';

export const Wrapper = ({showNotif}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const submitForm = async (value) =>{
    await axios.post('http://localhost:3000/shortlink', { link: value })
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  }

  const deleteHandler = (shortLink)=>{
    setData(data.filter((links)=> shortLink !== links.shortLink))
  }

  return (
    <div className='wrapper'>
        <LinkForm submitForm={submitForm}/>
        <div>
          {data.map((value,index)=>
              <LinkTable 
                key={index} 
                links={value} 
                showNotif={showNotif}
                deleteHandler={deleteHandler}
              />
          )}
        </div>
    </div>
  );
};

