import React from 'react';
import Songs from '../Songs';
import CardTopResult from '../CardTopResult';
import { Container, Title, TitleContent, TitleText, Tracks } from './styles';

const SearchResults = ({ trackResults, artistsResults }) => {
  return (
    <Container>
      <Title>
        <div className="content__title">
          <TitleContent>
            <TitleText>Top Result</TitleText>
          </TitleContent>
        </div>
        <CardTopResult
          artistsResults={artistsResults}
          trackResults={trackResults}
        />
      </Title>

      <Tracks>
        <div className="tracks__title ">
          <TitleContent>
            <TitleText>Songs</TitleText>
          </TitleContent>
        </div>
        <Songs trackResults={trackResults} />
      </Tracks>
    </Container>
  );
};

export default SearchResults;
