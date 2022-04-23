import {dateToString, isValidEnumValue} from "../type-utils";
import {MenuItemPointer} from "../enums/menu-item-pointer";

test.each`
  value       
  ${'foo'}    
  ${42}       
  ${null}     
  ${undefined}
  ${'   '}    
  ${''}       
`('returns false when value is not part of MenuItemPointer enum', ({value}) => {
    const isPartOfEnum = isValidEnumValue(MenuItemPointer, value);
    expect(isPartOfEnum).toBeFalsy();
});

test.each`
  value       
  ${'/activities'}    
  ${'/profile'}       
  ${'/teams'}     
  ${'/projects'}
`('returns true when value is part of MenuItemPointer enum', ({value}) => {
    const isPartOfEnum = isValidEnumValue(MenuItemPointer, value);
    expect(isPartOfEnum).toBeTruthy();
});


test("returns date representation as string DD/MM/YYYY", () => {
    const dt = new Date(2022, 5, 28, 12, 42, 57);
    const expectedDtStr = "28/05/2022";
    const dtStr = dateToString(dt, false);
    expect(dtStr).toEqual(expectedDtStr);
});

test("returns date representation as string DD/MM/YYYY HH:mm:ss", () => {
    const dt = new Date(2022, 5, 28, 19, 42, 57);
    const expectedDtStr = "28/05/2022 19:42:57";
    const dtStr = dateToString(dt, true);
    expect(dtStr).toEqual(expectedDtStr);
});
