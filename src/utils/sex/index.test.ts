import { getSexIcon } from ".";

test("get ♂ icon if parameter is 'MAN'", () => {
  expect(getSexIcon("MAN")).toBe("♂");
});

test("get ♀ icon if parameter is 'WOMAN'", () => {
  expect(getSexIcon("WOMAN")).toBe("♀");
});
