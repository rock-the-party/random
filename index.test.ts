import { Random } from './index';
import './__test__/custom-matchers'

describe('Random', () => {
  let random: Random;

  describe('nextDouble', () => {
    it('returns a number between 0 and 1', () => {
      for (let i = 0; i < 1000; i++) {
        let result = Random.nextDouble();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('intInRange', () => {
    it('returns a number within the specified range', () => {
      for (let i = 0; i < 1000; i++) {
        let result = Random.intInRange(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
      }
    });
  });

  describe('pointOnCircle', () => {
    it('returns a point on the unit circle', () => {
      for (let i = 0; i < 1000; i++) {
        let point = Random.pointOnCircle();
        expect(point.x * point.x + point.y * point.y).toBeCloseTo(1, 5);
      }
    });
  });

  describe('nextGaussian', () => {
    it('returns a number with the specified mean and standard deviation', () => {
      for (let i = 0; i < 1000; i++) {
        let result = Random.nextGaussian(0, 1);
        expect(result).toBeWithinRange(-4, 4);
      }
    });
  });
});