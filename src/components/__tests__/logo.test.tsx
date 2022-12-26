import { render } from "@testing-library/react";
import Logo from "../logo";

describe("Logo", () => {
  it("should render correctly", () => {
    const tree = render(
      <Logo color="#212121" width="30px" height="30px" />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
