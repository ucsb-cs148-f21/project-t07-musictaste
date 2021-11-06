import React from "react";
import * as reactRedux from "react-redux";
import { act, render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";
import { ExpansionPanelActions } from "@material-ui/core";

describe("Form check", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  it("Name field should have a ", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    const dummySelector = jest.fn();
    useSelectorMock.mockReturnValue(dummySelector);
    const component = render(<Form />);
    const MusicNote = component.getByText(
      "Please Sign In to create your own music blog posts and like other's blogs."
    );
    expect(MusicNote).toBeInTheDocument();
  });
});
