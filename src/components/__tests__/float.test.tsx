import { render } from "@testing-library/react";
import Float from "../float";

describe("Float", () => {
  it("should render correctly", () => {
    const tree = render(<Float />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
