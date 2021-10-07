import { CustomJSONPipe } from './custom-json.pipe';

describe('CustomJSONPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomJSONPipe();
    expect(pipe).toBeTruthy();
  });
});
