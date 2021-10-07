import * as fromRequest from './request.actions';

describe('purchasesRequests', () => {
  it('should return an action', () => {
    expect(fromRequest.purchasesRequests().type).toBe('[Request] Purchases Requests');
  });
});
