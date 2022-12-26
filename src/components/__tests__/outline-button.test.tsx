import { render } from "@testing-library/react";
import OutlineButton from "../outline-button";

describe("OutlineButton", () => {
  it("should render correctly with all props true", () => {
    const tree = render(
      <OutlineButton block flat responsiveGrow />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with all props false", () => {
    const tree = render(
      <OutlineButton block={false} flat={false} responsiveGrow={false} />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
