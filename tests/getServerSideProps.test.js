import { getServerSideProps } from "../pages/index";

const hackernews = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1";

xdescribe("getServerSideProps", () => {
  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          status: "success",
          message: hackernews
        })
    })
  );
   
  it("should call hackernews api", async ({undefined}) => {
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          initialDog: {
            status: "success",
            message: hackernews
          }
        }
      })
    );
  });
});