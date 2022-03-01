import { useState } from 'react';
import Posts from './Posts';
import Form from './Form';
import Filters from './Filters';
import './sass-styles/App.scss';

import db from '../fauxdb.json'

export default function App() {
  const [data, setData] = useState(db.posts)

  console.log('state:', data);
  
  const savePost = (post) => {
    setData([post, ...data])
  }

  return (
    <main className='App'>
      <Form savePost={savePost}/>
      <Filters />
      <Posts posts={data}/>
    </main>
  );
}