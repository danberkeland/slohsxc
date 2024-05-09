/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAthlete = /* GraphQL */ `
  mutation CreateAthlete(
    $input: CreateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    createAthlete(input: $input, condition: $condition) {
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
      nonAthletes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAthlete = /* GraphQL */ `
  mutation UpdateAthlete(
    $input: UpdateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    updateAthlete(input: $input, condition: $condition) {
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
      nonAthletes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAthlete = /* GraphQL */ `
  mutation DeleteAthlete(
    $input: DeleteAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    deleteAthlete(input: $input, condition: $condition) {
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
      nonAthletes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNonAthlete = /* GraphQL */ `
  mutation CreateNonAthlete(
    $input: CreateNonAthleteInput!
    $condition: ModelNonAthleteConditionInput
  ) {
    createNonAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      email
      gender
      athletes {
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
export const updateNonAthlete = /* GraphQL */ `
  mutation UpdateNonAthlete(
    $input: UpdateNonAthleteInput!
    $condition: ModelNonAthleteConditionInput
  ) {
    updateNonAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      email
      gender
      athletes {
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
export const deleteNonAthlete = /* GraphQL */ `
  mutation DeleteNonAthlete(
    $input: DeleteNonAthleteInput!
    $condition: ModelNonAthleteConditionInput
  ) {
    deleteNonAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      email
      gender
      athletes {
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
export const createAthleteNonAthlete = /* GraphQL */ `
  mutation CreateAthleteNonAthlete(
    $input: CreateAthleteNonAthleteInput!
    $condition: ModelAthleteNonAthleteConditionInput
  ) {
    createAthleteNonAthlete(input: $input, condition: $condition) {
      id
      athleteID
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
        __typename
      }
      nonAthleteID
      nonAthlete {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAthleteNonAthlete = /* GraphQL */ `
  mutation UpdateAthleteNonAthlete(
    $input: UpdateAthleteNonAthleteInput!
    $condition: ModelAthleteNonAthleteConditionInput
  ) {
    updateAthleteNonAthlete(input: $input, condition: $condition) {
      id
      athleteID
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
        __typename
      }
      nonAthleteID
      nonAthlete {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAthleteNonAthlete = /* GraphQL */ `
  mutation DeleteAthleteNonAthlete(
    $input: DeleteAthleteNonAthleteInput!
    $condition: ModelAthleteNonAthleteConditionInput
  ) {
    deleteAthleteNonAthlete(input: $input, condition: $condition) {
      id
      athleteID
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
        __typename
      }
      nonAthleteID
      nonAthlete {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createInvite = /* GraphQL */ `
  mutation CreateInvite(
    $input: CreateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    createInvite(input: $input, condition: $condition) {
      id
      inviteName
      description
      firstYear
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInvite = /* GraphQL */ `
  mutation UpdateInvite(
    $input: UpdateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    updateInvite(input: $input, condition: $condition) {
      id
      inviteName
      description
      firstYear
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInvite = /* GraphQL */ `
  mutation DeleteInvite(
    $input: DeleteInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    deleteInvite(input: $input, condition: $condition) {
      id
      inviteName
      description
      firstYear
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      eventName
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
        firstYear
        createdAt
        updatedAt
        __typename
      }
      date
      description
      temperature
      weather
      createdAt
      updatedAt
      eventCourseId
      eventInviteId
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      eventName
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
        firstYear
        createdAt
        updatedAt
        __typename
      }
      date
      description
      temperature
      weather
      createdAt
      updatedAt
      eventCourseId
      eventInviteId
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      eventName
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
        firstYear
        createdAt
        updatedAt
        __typename
      }
      date
      description
      temperature
      weather
      createdAt
      updatedAt
      eventCourseId
      eventInviteId
      __typename
    }
  }
`;
export const createPerformance = /* GraphQL */ `
  mutation CreatePerformance(
    $input: CreatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    createPerformance(input: $input, condition: $condition) {
      id
      event {
        id
        eventName
        date
        description
        temperature
        weather
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
        __typename
      }
      time
      place
      description
      createdAt
      updatedAt
      performanceEventId
      performanceAthleteId
      __typename
    }
  }
`;
export const updatePerformance = /* GraphQL */ `
  mutation UpdatePerformance(
    $input: UpdatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    updatePerformance(input: $input, condition: $condition) {
      id
      event {
        id
        eventName
        date
        description
        temperature
        weather
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
        __typename
      }
      time
      place
      description
      createdAt
      updatedAt
      performanceEventId
      performanceAthleteId
      __typename
    }
  }
`;
export const deletePerformance = /* GraphQL */ `
  mutation DeletePerformance(
    $input: DeletePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    deletePerformance(input: $input, condition: $condition) {
      id
      event {
        id
        eventName
        date
        description
        temperature
        weather
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
        __typename
      }
      time
      place
      description
      createdAt
      updatedAt
      performanceEventId
      performanceAthleteId
      __typename
    }
  }
`;
