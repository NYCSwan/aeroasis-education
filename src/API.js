/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResponsesInput = {|
  id?: ?string,
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string,
  q6: string,
  q7: string,
  q8: string,
  q9: string,
  q10: string,
  q11: string,
  q12: string,
  timestamp?: ?any,
|};

export type UpdateResponsesInput = {|
  id: string,
  q1?: ?string,
  q2?: ?string,
  q3?: ?string,
  q4?: ?string,
  q5?: ?string,
  q6?: ?string,
  q7?: ?string,
  q8?: ?string,
  q9?: ?string,
  q10?: ?string,
  q11?: ?string,
  q12?: ?string,
  timestamp?: ?any,
|};

export type DeleteResponsesInput = {|
  id?: ?string,
|};

export type ModelresponsesFilterInput = {|
  id?: ?ModelIDFilterInput,
  q1?: ?ModelStringFilterInput,
  q2?: ?ModelStringFilterInput,
  q3?: ?ModelStringFilterInput,
  q4?: ?ModelStringFilterInput,
  q5?: ?ModelStringFilterInput,
  q6?: ?ModelStringFilterInput,
  q7?: ?ModelStringFilterInput,
  q8?: ?ModelStringFilterInput,
  q9?: ?ModelStringFilterInput,
  q10?: ?ModelStringFilterInput,
  q11?: ?ModelStringFilterInput,
  q12?: ?ModelStringFilterInput,
  timestamp?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelresponsesFilterInput >,
  or?: ?Array< ?ModelresponsesFilterInput >,
  not?: ?ModelresponsesFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type CreateResponsesMutationVariables = {|
  input: CreateResponsesInput,
|};

export type CreateResponsesMutation = {|
  createResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type UpdateResponsesMutationVariables = {|
  input: UpdateResponsesInput,
|};

export type UpdateResponsesMutation = {|
  updateResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type DeleteResponsesMutationVariables = {|
  input: DeleteResponsesInput,
|};

export type DeleteResponsesMutation = {|
  deleteResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type GetResponsesQueryVariables = {|
  id: string,
|};

export type GetResponsesQuery = {|
  getResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type ListResponsessQueryVariables = {|
  filter?: ?ModelresponsesFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListResponsessQuery = {|
  listResponsess: ? {|
    __typename: "ModelresponsesConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      q1: string,
      q2: string,
      q3: string,
      q4: string,
      q5: string,
      q6: string,
      q7: string,
      q8: string,
      q9: string,
      q10: string,
      q11: string,
      q12: string,
      timestamp: ?any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateResponsesSubscription = {|
  onCreateResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type OnUpdateResponsesSubscription = {|
  onUpdateResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};

export type OnDeleteResponsesSubscription = {|
  onDeleteResponses: ? {|
    __typename: "responses",
    id: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string,
    q11: string,
    q12: string,
    timestamp: ?any,
  |},
|};