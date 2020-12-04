import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import HomePage from "../pages/index";
import ShallowRenderer from 'react-test-renderer/shallow';
import fetch from "node-fetch";

afterEach(cleanup)

describe("App", () => {
  it("renders without crashing", () => {
    const allPostsData = {
      story:"50",
      points: "2",
      param: [ {
        id: "1",
        url: "foo",
        title: "bar"
      },{
        id: "2",
        url: "cuz",
        title: "tar"
      }]
    }
  const element = new ShallowRenderer().render(
      <HomePage allPostsData={allPostsData}/>
  );
  expect(element.props.children).toBeTruthy(); 
  expect(element.props.children.length).toBe(5); 
  });
});

