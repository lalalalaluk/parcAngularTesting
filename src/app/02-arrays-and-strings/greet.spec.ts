import {greet} from './greet';

describe('compute', () => {
    it('should contain name', () => {
        const result = greet('mosh');
        expect(result).toContain('mosh');
    })

})