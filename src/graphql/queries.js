/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
      id
      firstName
      lastName
      birthday
      gradYear
      gender
      highSchool
      phone
      email
      college
      createdAt
      updatedAt
      nonAthleteAthleteId
      __typename
    }
  }
`;
export const listAthletes = /* GraphQL */ `
  query ListAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        birthday
        gradYear
        gender
        highSchool
        phone
        email
        college
        createdAt
        updatedAt
        nonAthleteAthleteId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNonAthlete = /* GraphQL */ `
  query GetNonAthlete($id: ID!) {
    getNonAthlete(id: $id) {
      id
      firstName
      lastName
      phone
      email
      gender
      athlete {
        nextToken
        __typename
      }
      relationRole
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNonAthletes = /* GraphQL */ `
  query ListNonAthletes(
    $filter: ModelNonAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        email
        gender
        relationRole
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      courseName
      distance
      distanceUnit
      description
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseName
        distance
        distanceUnit
        description
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvite = /* GraphQL */ `
  query GetInvite($id: ID!) {
    getInvite(id: $id) {
      id
      inviteName
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInvites = /* GraphQL */ `
  query ListInvites(
    $filter: ModelInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        inviteName
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      course {
        id
        courseName
        distance
        distanceUnit
        description
        location
        createdAt
        updatedAt
        __typename
      }
      invite {
        id
        inviteName
        description
        createdAt
        updatedAt
        __typename
      }
      date
      createdAt
      updatedAt
      eventCourseId
      eventInviteId
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        createdAt
        updatedAt
        eventCourseId
        eventInviteId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPerformance = /* GraphQL */ `
  query GetPerformance($id: ID!) {
    getPerformance(id: $id) {
      id
      event {
        id
        date
        createdAt
        updatedAt
        eventCourseId
        eventInviteId
        __typename
      }
      athlete {
        id
        firstName
        lastName
        birthday
        gradYear
        gender
        highSchool
        phone
        email
        college
        createdAt
        updatedAt
        nonAthleteAthleteId
        __typename
      }
      time
      place
      createdAt
      updatedAt
      performanceEventId
      performanceAthleteId
      __typename
    }
  }
`;
export const listPerformances = /* GraphQL */ `
  query ListPerformances(
    $filter: ModelPerformanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        place
        createdAt
        updatedAt
        performanceEventId
        performanceAthleteId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
