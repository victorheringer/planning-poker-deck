import { render, fireEvent } from "@testing-library/react";
import Banner from "../banner";

const mockOnClose = jest.fn();

describe("Toaster", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with text and onClose function", () => {
    const tree = render(
      <Banner onClose={mockOnClose} text="test banner" />
    ).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly without onClose function", () => {
    const tree = render(<Banner text="test banner" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it("should call onClose when closed is pressed", () => {
    const { getByLabelText } = render(
      <Banner onClose={mockOnClose} text="test banner" />
    );

    fireEvent.click(getByLabelText("close"));
    expect(mockOnClose).toBeCalledTimes(1);
  });
});
