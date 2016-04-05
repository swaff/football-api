# Football Api

This is really just an excuse to learn about the [Sequelize](http://docs.sequelizejs.com/en/latest/) ORM for Node JS.

It is a database containing the relevant relations to contain football teams, and the players who play for a team.

The ORM models are exposed using a very simple express based REST API.


#### Get all teams:

`curl http://localhost:3000/team`

#### Get a team by ID

`curl http://localhost:3000/team/13`

#### Get a team by name

`curl http://localhost:3000/team?name=Leicester City`

#### Gets the stadium that the team plays at

`curl http://localhost:3000/team/3/stadium`

#### Create a team

`curl -d "name=Arsenal" http://localhost:3000/team`

#### Get all the players for a team

`curl http://localhost:3000/team/1/players`

#### Get all the players

`curl http://localhost:3000/players`

#### Create a player

`curl -d "firstName=Petr&lastName=Cech&teamId=13" http://localhost:3000/player`
