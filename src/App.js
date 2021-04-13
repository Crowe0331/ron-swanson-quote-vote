import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import Header from './components/Header';


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    quotes: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/100`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((_quotes) => {
        const quotes = _quotes.map(function(object, i){
          return {
            key: i, 
            data: object
          }
        })
        setAppState({ loading: false, quotes: quotes });
      });
  }, [setAppState]);
  return (
    <div className='app'>
      <Header />
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} quotes={appState.quotes} />
      </div>
    </div>
  );
}
export default App;
