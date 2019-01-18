// eslint-disable
// this is an auto generated file. This will be overwritten

export const getResponses = `query GetResponses($id: ID!) {
  getResponses(id: $id) {
    id
    q0
    q1
    q2
    q3
    q4
    q5
    q6
    q7
    q8
    q9
    q10
    q11
  }
}
`;
export const listResponsess = `query ListResponsess(
  $filter: ModelresponsesFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponsess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      q0
      q1
      q2
      q3
      q4
      q5
      q6
      q7
      q8
      q9
      q10
      q11
    }
    nextToken
  }
}
`;
