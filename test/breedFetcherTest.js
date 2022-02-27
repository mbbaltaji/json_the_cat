const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns a string for a valid breed, via callback', (done) =>{
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns error message when a non-valid breed is passed', (done) => {
    fetchBreedDescription('asdf', (err, desc) => {

      // we don't expect a description for a non-valid breed name
      assert.equal(desc, null);

      const expectedErrorMsg = `Invalid breed name 'asdf', Breed not found..`;

      //compare the returned msg
      assert.equal(expectedErrorMsg, `Invalid breed name 'asdf', Breed not found..`);
      done();
    });
  });
});