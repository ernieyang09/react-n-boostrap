import React from 'react';

import Button from '../button';

class Card extends React.Component {
  render() {
    const { minutes, text, img } = this.props.data;
    
    return (
      <div className='card mb-4 box-shadow'>
        <img
          className='card-img-top'
          alt='Thumbnail [100%x225]'
          src={img}
        />
        <div className='card-body'>
          <p className='card-text'>
            {text}
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <Button extraClassName='btn-sm btn-outline-secondary' value='View' />
              <Button extraClassName='btn-sm btn-outline-secondary' value='Edit' />
            </div>
            <small className='text-muted'>
              {`${minutes | 'N/A'} min`}
            </small>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;