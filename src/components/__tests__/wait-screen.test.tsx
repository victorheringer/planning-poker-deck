import { render } from "@testing-library/react";
import WaitScreen from "../wait-screen";

describe("WaitScreen", () => {
  it("should not render anything if show is false", () => {
    const tree = render(<WaitScreen show={false} text="test" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly if show is false", () => {
    const tree = render(
      <WaitScreen show text="test wait screen" />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
