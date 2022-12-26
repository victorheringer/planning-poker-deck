import { render } from "@testing-library/react";
import Toaster from "../toaster";

describe("Toaster", () => {
  it("should not render anything if show is false", () => {
    const tree = render(<Toaster show={false} text="test" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly if show is false", () => {
    const tree = render(<Toaster show text="test toaster" />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
