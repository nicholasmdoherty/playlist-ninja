// Package imports
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

// Project Imports
import TopArtists from "../TopArtists";
import configureStore from "../../../../store";

describe("TopArtists.jsx", () => {
  /**
   * Tests for the component with no top artists.
   *  - New spotify account, no data
   */
  describe("with empty artist array", () => {
    it("matches the snapshot", () => {
      const component = renderer.create(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.resolve({ body: { items: [] } });
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.resolve({ body: { items: [] } });
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  /**
   *  Tests for the component with top artist data
   */
  describe("recieved top artist data", () => {
    it("matches the snapshot", () => {
      const component = renderer.create(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.reject({
                    body: {
                      items: [
                        { images: null, name: "No Image" },
                        { images: [{ url: "fakeUrl" }], name: "Image" }
                      ]
                    }
                  });
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.reject({
                    body: {
                      items: [
                        { images: null, name: "No Image" },
                        { images: [{ url: "fakeUrl" }], name: "Image" }
                      ]
                    }
                  });
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  /**
   * Tests for the component with an error from Spotify.
   */
  describe("error from Spotify api", () => {
    it("matches the snapshot", () => {
      const component = renderer.create(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.reject("error");
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopArtists: () => {
                  return Promise.reject("error");
                }
              }
            }
          })}
        >
          <TopArtists />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
