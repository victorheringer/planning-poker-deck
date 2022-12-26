import { render } from "@testing-library/react";
import InputText from "../input-text";

describe("InputText", () => {
  it("should render correctly", () => {
    const tree = render(<InputText />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
