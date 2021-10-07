import * as fromDislike from './dislike.actions';

describe('likesDislikes', () => {
  it('should return an action', () => {
    expect(fromDislike.likesDislikes().type).toBe('[Dislike] Likes Dislikes');
  });
});
