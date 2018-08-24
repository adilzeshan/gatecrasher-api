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
  - Loading screen
  - The 'Add New Event' button will be in a fixed position in the bottom right corner

  # FUTURE TODO
  - Refactor with React
  - Integrate Google Maps API
  - Refactor the API
  - Implement login system
  - Consider error handling?
  - Make a dev function to wipe and add dummy data
  - Rename DELETE and PATCH requests properly using REST
  - Make robust type-checking for data that is being input
  - Write some tests