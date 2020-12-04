import { getServerSideProps } from "../pages/index";
import sinon from 'sinon';

const hackernews = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1";

describe("getServerSideProps", () => {
  window.fetch = jest.fn(() =>
    fetch.resolve({
      json: () =>
        fetch.resolve({
          status: "success",
          message: hackernews
        })
    })
  );
  
  it("should call hackernews api",  () => {
    const response = sinon.spy( getServerSideProps());
    expect(response).toEqual(
      expect.objectContaining({})
    );
  });
});