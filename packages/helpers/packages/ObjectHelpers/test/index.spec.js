import * as ObjectHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
});
describe('ObjectHelpers', () => {
  describe('removeByKey', () => {
    it('should remove a non-numeric key from an object', () => {
      const payload = { foo: 'bar', bar: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 'foo')).toEqual({ bar: 'bar' });
    });
    it('should remove a numeric key from an object', () => {
      const payload = { 0: 'foo', 1: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 0)).toEqual({ 1: 'bar' });
    });
  });
  describe('flattenObject', () => {
    it('should recursively flatten an object', () => {
      const payload = { foo: { bar: 'foobar' } };
      expect(ObjectHelpers.flattenObject(payload)).toEqual({ 'foo.bar': 'foobar' });
    });
    it('should return an empty object cause given object is empty', () => {
      const payload = {};
      expect(ObjectHelpers.flattenObject(payload)).toEqual(payload);
    });
  });
  describe('makeCookieString', () => {
    it('should make a concatenated string of keys and values of an object', () => {
      const payload = { foo: 'foo', bar: 'bar' };
      expect(ObjectHelpers.makeCookieString(payload)).toEqual('foo=foo; bar=bar');
    });
  });
  describe('safeObjectPropertyRead ', () => {
    it('should safely get a property value from an object', () => {
      const payload = { foo: 'bar' };
      expect(ObjectHelpers.safeObjectPropertyRead(payload, 'foo')).toEqual('bar');
    });
    it('should safely get undefined because property is undefined', () => {
      const payload = { };
      expect(ObjectHelpers.safeObjectPropertyRead(payload, 'foo')).toEqual(undefined);
    });
    it('should get default given value, because requested property is undefined', () => {
      const payload = { };
      expect(ObjectHelpers.safeObjectPropertyRead(payload, 'foo', 'bar')).toEqual('bar');
    });
  });
  describe('getNextProp ', () => {
    it('should get value of next property of given property name', () => {
      const payload = { foo: 'foo', bar: 'bar' };
      expect(ObjectHelpers.getNextProp(payload, 'foo')).toEqual('bar');
    });
  });
});
