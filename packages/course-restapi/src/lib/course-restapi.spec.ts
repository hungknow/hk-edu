import { courseRestapi } from './course-restapi.js';

describe('courseRestapi', () => {
  it('should work', () => {
    expect(courseRestapi()).toEqual('course-restapi');
  });
});
