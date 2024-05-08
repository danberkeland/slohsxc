/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAthlete = /* GraphQL */ `
  subscription OnCreateAthlete($filter: ModelSubscriptionAthleteFilterInput) {
    onCreateAthlete(filter: $filter) {
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
export const onUpdateAthlete = /* GraphQL */ `
  subscription OnUpdateAthlete($filter: ModelSubscriptionAthleteFilterInput) {
    onUpdateAthlete(filter: $filter) {
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
export const onDeleteAthlete = /* GraphQL */ `
  subscription OnDeleteAthlete($filter: ModelSubscriptionAthleteFilterInput) {
    onDeleteAthlete(filter: $filter) {
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
export const onCreateNonAthlete = /* GraphQL */ `
  subscription OnCreateNonAthlete(
    $filter: ModelSubscriptionNonAthleteFilterInput
  ) {
    onCreateNonAthlete(filter: $filter) {
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
export const onUpdateNonAthlete = /* GraphQL */ `
  subscription OnUpdateNonAthlete(
    $filter: ModelSubscriptionNonAthleteFilterInput
  ) {
    onUpdateNonAthlete(filter: $filter) {
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
export const onDeleteNonAthlete = /* GraphQL */ `
  subscription OnDeleteNonAthlete(
    $filter: ModelSubscriptionNonAthleteFilterInput
  ) {
    onDeleteNonAthlete(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite($filter: ModelSubscriptionInviteFilterInput) {
    onCreateInvite(filter: $filter) {
      id
      inviteName
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite($filter: ModelSubscriptionInviteFilterInput) {
    onUpdateInvite(filter: $filter) {
      id
      inviteName
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite($filter: ModelSubscriptionInviteFilterInput) {
    onDeleteInvite(filter: $filter) {
      id
      inviteName
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreatePerformance = /* GraphQL */ `
  subscription OnCreatePerformance(
    $filter: ModelSubscriptionPerformanceFilterInput
  ) {
    onCreatePerformance(filter: $filter) {
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
export const onUpdatePerformance = /* GraphQL */ `
  subscription OnUpdatePerformance(
    $filter: ModelSubscriptionPerformanceFilterInput
  ) {
    onUpdatePerformance(filter: $filter) {
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
export const onDeletePerformance = /* GraphQL */ `
  subscription OnDeletePerformance(
    $filter: ModelSubscriptionPerformanceFilterInput
  ) {
    onDeletePerformance(filter: $filter) {
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
