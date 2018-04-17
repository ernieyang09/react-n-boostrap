import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  p {
    margin-bottom: .25rem;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterWrap className='text-muted'>
        <div className='container'>
          <p className='float-right'>
            <a href='#'>Back to top</a>
          </p>
          <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href='../../'>Visit the homepage</a> or read our <a href='../../getting-started/'>getting started guide</a>.</p>
        </div>
      </FooterWrap>
    )
  }
}


export default Footer;