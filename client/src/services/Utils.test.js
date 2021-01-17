import { checkURL } from './Utils';

describe('checkURL', () => {
    it('should return true if string cointains an image extension', () => {
        const STRING = 'https://d1eh9yux7w8iql.cloudfront.net/product_images/15023_058cc2ff-d05c-4316-a88a-c7a62b5ed065.jpg';
        expect(checkURL(STRING)).toEqual(true);
    });
});

describe('checkURL', () => {
    it('should return true if string cointains an image extension', () => {
        const STRING = 'https://d1eh9yux7w8iql.cloudfront.net/product_images/15023_058cc2ff-d05c-4316-a88a-c7a62b';
        expect(checkURL(STRING)).toEqual(false);
    });
});
