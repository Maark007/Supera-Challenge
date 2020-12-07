import { products } from "../src/model/products";

describe("Conjunto de Ids", () => {
  it("ids precisam ser igual á 9", () => {
    const numbersOfId = products.map((product) => product.id);
    expect(numbersOfId).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("Preços", () => {
  it("Resultado total dos preços", () => {
    const price = products.map((product) => product.price);
    const value = price.reduce((value, acc) => {
      return value + acc;
    });
    expect(value).toBe(1150.47);
  });
});
