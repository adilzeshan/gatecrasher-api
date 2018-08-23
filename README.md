# gatecrasher

# Setup

Update `.env.example` with db credentials and change file name to `.env`.

- list of events
  - event:
    - id
    - attendees
    - host
    - datetime
    - location
    - description
    - duration

- list of users
  - email/password

- create a new event
- rsvp to event

# Backend API

1. /
  - GET api documentation

2. /events
  - GET
  - return an array of event objects

3. /event
  - POST
    - body: event object

4. /event/:id
  - GET
  - POST (update)
    - body: object with properties to update
  - DELETE

  # TODO:
  - Create modals for the UI
  - Delete an event
  - Diplay/edit event properties
    - add attendees

  # FUTURE TODO
  - Refactor with React
  - Integrate Google Maps API
  - Refactor the API
  - Implement login system
  - Consider error handling?
  - Make a dev function to wipe and add dummy data
  - Rename repositories for gatecrasher
    - turn the front-end into a project site instead