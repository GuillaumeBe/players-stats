import { centimetersToMeters, gramsToKilograms } from "./measures";

test("converts centimeters to meters", () => {
  expect(centimetersToMeters(100)).toBe(1);
});

test("converts grams to kilograms", () => {
  expect(gramsToKilograms(1000)).toBe(1);
});
