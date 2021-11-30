import { renderHook, act } from "@testing-library/react-hooks";
import useThemeStatus from "hooks/use-theme-status";

const meta = document.createElement("meta");

describe("useThemeStatus", () => {
  beforeAll(() => {
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  });

  beforeEach(() => {
    meta.setAttribute("content", "");
  });

  it("will correctly set given color on meta tag", () => {
    renderHook(() => useThemeStatus("#fff"));
    expect(meta.getAttribute("content")).toBe("#fff");
  });

  it("will return correct set meta tag color", () => {
    const { result } = renderHook(() => useThemeStatus("#ff0"));
    expect(meta.getAttribute("content")).toBe(result.current.themeColor);
  });

  it("will update meta tag color", () => {
    const { result } = renderHook(() => useThemeStatus("#f00"));

    act(() => {
      result.current.setThemeColor("#000");
    });

    expect(meta.getAttribute("content")).toBe(result.current.themeColor);
    expect(meta.getAttribute("content")).toBe("#000");
  });
});
