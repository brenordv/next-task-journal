import {onlyCapitalLetters} from "../utils/string-utils";

test.each`
  value  |  expected       
  ${'Raccoon'}  |  ${'R'}
  ${'Raccoon Ninja'}  |  ${'RN'}
  ${'Raccoon Ninja R'}  |  ${'RNR'}
`('returns true when value is part of MenuItemPointer enum', ({value, expected}) => {
    const allCapital = onlyCapitalLetters(value);
    expect(allCapital).toEqual(expected);
});


test.each`
  value  |  max  |  expected       
  ${'Raccoon'}  |  ${1}  |  ${'R'}
  ${'Raccoon Ninja'}  |  ${1}  |  ${'R'}
  ${'Raccoon Ninja R'}  |  ${1}  |  ${'R'}
  ${'Raccoon Ninja R'}  |  ${2}  |  ${'RN'}
  ${'Raccoon Ninja'}  |  ${0}  |  ${'RN'}
`('returns true when value is part of MenuItemPointer enum', ({value, max, expected}) => {
    const allCapital = onlyCapitalLetters(value, max);
    expect(allCapital).toEqual(expected);
});


test.each`
  value  |  expected       
  ${'raccoon'}  |  ${'R'}
  ${'raccoon ninja'}  |  ${'R'}
  ${'raccoon ninja r'}  |  ${'R'}
  ${''}  |  ${'?'}
  ${null}  |  ${'?'}
`('returns true when value is part of MenuItemPointer enum', ({value, expected}) => {
    const allCapital = onlyCapitalLetters(value);
    expect(allCapital).toEqual(expected);
});