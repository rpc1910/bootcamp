import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import TechListApi from "~/components/TechListApi";
import { addTech } from "../../store/modules/techs/actions";

jest.mock("react-redux");

describe("TechList API component", () => {
  it("should render techlist", () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ["NodeJS", "ReactJS"]
      })
    );

    const { getByText, getByTestId } = render(<TechListApi />);

    expect(getByTestId("tech-list")).toContainElement(getByText("NodeJS"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });

  it("should be able to add new tech", () => {
    let { getByTestId, getByLabelText } = render(<TechListApi />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), {
      target: { value: "ReactNative" }
    });
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith(addTech("ReactNative"));
  });
});
