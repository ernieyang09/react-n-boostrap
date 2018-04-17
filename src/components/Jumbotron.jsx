import React from 'react';
import styled from 'styled-components';

import Button from './button';

const jumbotron_padding_y = '3em'; 

const Section = styled.section`
  padding-top: ${jumbotron_padding_y};
  padding-bottom: ${jumbotron_padding_y};
  margin-bottom: 0;
  background-color: #fff;

  @media (min-width: 768px) {
    padding-top: calc(${jumbotron_padding_y} * 2);
    padding-bottom: calc(${jumbotron_padding_y} * 2);
  }

  p:last-child {
   margin-bottom: 0;
  }

  .jumbotron-heading {
    font-weight: 300;
  }

  .container {
    max-width: 40rem;
  }
`;

class Jumbotron extends React.Component {
  render() {
    return (
      <Section className='text-center'>
        <div className='container'>
          <h1 className='jumbotron-heading'>Album example</h1>
          <p className='lead text-muted'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <Button extraClassName='btn-primary my-2' value='Main call to action' /> <Button extraClassName='btn-secondary my-2' value='Secondary action' />
          </p>
        </div>
      </Section>
    )
  }
}


export default Jumbotron;