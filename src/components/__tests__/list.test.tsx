import { render } from "@testing-library/react";
import List from "../list";

describe("List", () => {
  it("should render correctly", () => {
    const tree = render(<List />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
