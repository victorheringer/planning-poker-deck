import { render } from "@testing-library/react";
import ListItem from "../list-item";

describe("ListItem", () => {
  it("should render correctly", () => {
    const tree = render(<ListItem />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
