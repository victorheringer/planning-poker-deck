import { render } from "@testing-library/react";
import Page from "../page";

describe("Logo", () => {
  it("should render correctly", () => {
    const tree = render(<Page />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
