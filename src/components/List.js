import React from 'react';
import Quote from './Quote';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/List.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = (props) => {
  const { quotes } = props;
  if (!quotes || quotes.length === 0) return <p>No quotes, sorry</p>;
  return (
    <div>
      
      {quotes.map((quote) => {
        return (
          <div className='list'>
            <ListGroup>
              <ListGroupItem>
              <Quote key={quote.key} data={quote.data} />
            </ListGroupItem>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
};
export default List;

/* <div className='list'>
      <Quote key={quote.key} data={quote.data} />
</div> */