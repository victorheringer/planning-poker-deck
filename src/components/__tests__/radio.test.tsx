import { render } from "@testing-library/react";
import Radio from "../radio";

describe("Radio", () => {
  it("should render correctly active radio", () => {
    const tree = render(<Radio active />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly not active radio", () => {
    const tree = render(<Radio active={false} />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
