// Package imports
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

// Project Imports
import PersonalPlaylists from "../PersonalPlaylists";
import configureStore from "../../../../../store";

describe("PersonalPlaylists.jsx", () => {
  it("matches the snapshot for empty props", () => {
    const component = renderer.create(
      <Provider store={configureStore()}>
        <PersonalPlaylists />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
