import React from 'react';
import Songs from '../Songs';
import CardTopResult from '../CardTopResult';
import { Container } from './styles';

const SearchResults = ({ trackResults, artistsResults }) => {
  return (
    <Container>
      <section>
        <div className="top-results-title">
          <div>
            <h2>Top Result</h2>
          </div>
        </div>
        <CardTopResult
          artistsResults={artistsResults}
          trackResults={trackResults}
        />
      </section>
      <section>
        <div className="tracks-title">
          <div>
            <h2>Songs</h2>
          </div>
        </div>
        <Songs trackResults={trackResults} />
      </section>
    </Container>
  );
};

export default SearchResults;
