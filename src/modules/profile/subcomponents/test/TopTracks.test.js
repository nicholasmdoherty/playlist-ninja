// Package imports
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

// Project Imports
import TopTracks from "../TopTracks";
import configureStore from "../../../../store";

describe("TopTracks.jsx", () => {
  /**
   * Tests for the component with no top tracks.
   *  - New spotify account, no data
   */
  describe("with empty track array", () => {
    it("matches the snapshot", () => {
      const component = renderer.create(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopTracks: () => {
                  return Promise.resolve({ body: { items: [] } });
                }
              }
            }
          })}
        >
          <TopTracks />
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
                getMyTopTracks: () => {
                  return Promise.resolve({ body: { items: [] } });
                }
              }
            }
          })}
        >
          <TopTracks />
        </Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  /**
   *  Tests for the component with top track data
   */
  describe("recieved top track data", () => {
    it("matches the snapshot", () => {
      const component = renderer.create(
        <Provider
          store={configureStore({
            api: {
              spotifyApi: {
                getMyTopTracks: () => {
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
          <TopTracks />
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
                getMyTopTracks: () => {
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
          <TopTracks />
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
                getMyTopTracks: () => {
                  return Promise.reject("error");
                }
              }
            }
          })}
        >
          <TopTracks />
        </Provider>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider
        store={configureStore({
          api: {
            spotifyApi: {
              getMyTopTracks: () => {
                return Promise.reject("error");
              }
            }
          }
        })}
      >
        <TopTracks />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
