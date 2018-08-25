# Stroke With Friends

A collaborative painting application that allows users to draw on a public HTML canvas with any number of other users.

## Usage
  #### Get Dependencies:
  `yarn install && cd client/ && yarn install`
  #### Run:
  `yarn dev`

  Concurrently starts an instance of each server. The express server (server.js) acts as a proxy for the client server. 
  ```  
  ...
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "socket": "nodemon socket-server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn socket\" \"yarn client\""
  ...
  ```


## User Stories

**Users can access site features**

- Users can sign up and log in with an account
  - Accounts have a name, alias, email, and password
- Users can log in as a guest
- Users can access the public canvas
- Users can paint on the public canvas
- Users can save a snapshot of the public canvas to their account
- Users can see their snapshots on a profile page
- Users can see a list of other users working on the canvas

**Administrators can access site**

- Admins can clear a public canvas
- Admins can save a snapshot of a public canvas

**Painting**

- Users can choose colors from a pallate
- Users can choose brushes from a pallate
- Users can select custom colors
- Users can bucket fill areas of the canvas with double-click

## Stack

- Node
- Express
- React
- Postgress

## API Integrations

- [React](https://reactjs.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Socket.io](https://socket.io/)
- [D3js](https://d3js.org/)

## Future Features List

- Canvas shrinks after set duration to create whitespace
- Paired painting with a random user
- Form groups and paint on a private canvas

## To-do

- Authenticate passwords on login
- Enforce minimum password length
- Add optional user image
- Reduce the scope of Bootstrap Material design
- Refactor to convert tab indents to spaces
- Spoof routes so users can use the browser's fwd and back button
- Re-render homepage animation on window resize
- Socket should send and receive context data array rather than individual lines
- Change brush stroke from lines to shapes (rect()/arc())
- Scale brush stroke size with slider
- Allow users to store a snapshot of the canvas
- Allow users to access a personal canvas
