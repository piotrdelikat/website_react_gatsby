import React from 'react';
import Card from '../components/card'

const IndexPage = props =>
  (
    <div className='container content-container'>
      <div className="row">
        <div className="col-12 col-md-4">
          <Card src={'https://picsum.photos/800/600?image=0'}/>
        </div>
        <div className="col-12 col-md-4">
          <Card src={'https://picsum.photos/800/600/?image=1'}/>
        </div>
        <div className="col-12 col-md-4">
          <Card src={'https://picsum.photos/800/600/?image=3'}/>
        </div>
      </div>
    </div>    
  );

export default IndexPage;
