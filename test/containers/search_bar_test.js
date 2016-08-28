import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar', () => {
  let container;
  beforeEach(() => {
    container = renderComponent(SearchBar);
  });

  it('has an input field', () => {
    expect(container.find('input')).to.exist;
  });

  it('has a submit button', () => {
    const button = container.find('button');

    expect(button).to.exist;
    expect(button).to.contain('Submit');
  });

});
