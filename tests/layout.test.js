import React from 'react';
import { cleanup} from "@testing-library/react";
import Layout from "../components/layout";
import ShallowRenderer from 'react-test-renderer/shallow';

afterEach(cleanup)

describe("Layout", () => {
  it("renders", () => {
  const element = new ShallowRenderer().render(
      <Layout/>
  );
  expect(element.props.children).toBeTruthy(); 
  });
});

