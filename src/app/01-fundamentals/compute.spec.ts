import { compute } from './compute'

describe('compute', () => {
    it('should return 0 if zero', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('should return 1 if add 2', () => {
        const result = compute(2);
        expect(result).toBe(1);
    })
})