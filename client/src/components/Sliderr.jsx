import React from 'react'
import CardSlider from './CardSlider'
import styled from 'styled-components';
import CardSliderr from './CardSliderr';

const Sliderr = React.memo(({movies}) => {
    const getMoviesFromRange = (from,to) => {
        return movies.slice(from,to);
    }

  return (
    <div>
        <CardSliderr title="Trending Now" data={getMoviesFromRange(0,10)}/>
        <CardSliderr title="New Releases" data={getMoviesFromRange(10,20)}/>
        <CardSliderr title="Top Rated" data={getMoviesFromRange(20,30)}/>
        <CardSliderr title="Popular Movies" data={getMoviesFromRange(30,40)}/>
        <CardSliderr title="All time Best" data={getMoviesFromRange(40,50)}/>
        <CardSliderr title="Epics" data={getMoviesFromRange(50,60)}/>
    </div>
  )
})

export default Sliderr;

const Div = styled.div`
  position: relative;
  margin-top: -15rem;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #111;
  opacity: 0.6;
  z-index: 1; /* Ensure the overlay is behind the content */
`;



