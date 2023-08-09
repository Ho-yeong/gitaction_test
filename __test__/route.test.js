import { functionSum } from '../src/sum';

describe('계산 테스트', function () {
  it('should fail if no number', () => {
    expect(() => functionSum('1', 'test')).toThrow('Give me numbers');
  });

  it('should add numbers', () => {
    const a = '1';
    const b = '2';
    const result = functionSum(a, b);

    expect(result).toBe(Number(a) + Number(b));
  });
});
