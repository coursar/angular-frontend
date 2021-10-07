import { createAction, props } from '@ngrx/store';

export const purchasesRequests = createAction(
  '[Request] Purchases Requests'
);

export const purchasesRequestsSuccess = createAction(
  '[Request] Purchases Requests Success',
  props<{ data: any }>(

  )
);

export const purchasesRequestsFailure = createAction(
  '[Request] Purchases Requests Failure',
  props<{ error: any }>()
);
