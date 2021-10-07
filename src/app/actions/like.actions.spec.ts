import * as fromLike from './like.actions';

describe('likesLikes', () => {
  it('should return an action', () => {
    expect(fromLike.likesLikes().type).toBe('[Like] Likes Likes');
  });
});
