import React from 'react';
import Songs from '../Songs';
import TopResult from '../TopResult';
import { Container } from './styles';

const SearchResults = ({ trackResults, artistsResults }) => {
  // const handlePlay = (track) => {
  //   if (track) {
  //     setTrack(track);
  //   } else {
  //     setTrack(trackResults[0].uri);
  //   }
  // };

  return (
    <Container>
      <TopResult
        title={'Top Result'}
        artistsResults={artistsResults}
        trackResults={trackResults}
      />
      <Songs title={'Songs'} trackResults={trackResults} />
    </Container>
  );
};

export default SearchResults;
