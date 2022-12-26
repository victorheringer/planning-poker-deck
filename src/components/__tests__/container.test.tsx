import { render } from "@testing-library/react";
import Container from "../container";

describe("Container", () => {
  it("should render correctly", () => {
    const tree = render(<Container />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
