import { render } from "@testing-library/react";
import ListTitle from "../list-title";

describe("ListTitle", () => {
  it("should render correctly", () => {
    const tree = render(<ListTitle />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
