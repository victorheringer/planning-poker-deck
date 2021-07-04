import { decode, encode } from "helpers/base64";

describe("base64", () => {
  describe("encode", () => {
    it("will encode a string to base64", () => {
      expect(encode("hello")).toBe("aGVsbG8=");
    });
  });

  describe("decode", () => {
    it("will decode a string from base64", () => {
      expect(decode("aGVsbG8=")).toBe("hello");
    });
  });
});
