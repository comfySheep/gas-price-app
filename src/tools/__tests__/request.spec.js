import request from "../request";
import axios from "axios";

jest.mock("axios", () => {
  const promise = Promise.resolve({ data: "awesome data" });

  return {
    get: jest.fn(() => promise)
  };
});

describe("request", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should reject if invalid method is used", () => {
    const fakeOptions = {
      method: "fakeMethod"
    };

    expect(axios.get).toHaveBeenCalledTimes(0);
    expect(request(fakeOptions)).rejects.toEqual({
      Status: {
        message: "This API method is not available"
      }
    });
  });

  it("should call axios when get method is used", () => {
    const fakeOptions = {
      method: "get"
    };
    const promise = request(fakeOptions);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(promise).resolves.toEqual("awesome data");
  });
});
