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
  - PATCH (update)
    - body: object with properties to update
  - DELETE