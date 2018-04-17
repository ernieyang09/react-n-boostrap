import React from 'react';

class Card extends React.Component {
  render() {
    const { minutes, text, img } = this.props.data;
    
    return (
      <div className='card mb-4 box-shadow'>
        <img
          className='card-img-top'
          data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail'
          alt='Thumbnail [100%x225]'
          src={img}
          data-holder-rendered='true'
        />
        <div className='card-body'>
          <p className='card-text'>
            {text}
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
              <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
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