const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };

apiRouter.post('/pokemon/add',verifyAuth, async (req,res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if(!user){
        return res.status(400).send({ msg: 'Not authorized' });
    }
    // const pokemon = req.body;
    // if (!pokemon) {
    // return res.status(400).send({ msg: 'Missing Pokémon data' });
    // }

    await DB.addPokemonToUser(user.username, req.body);
    // if(!userPokemon[user.username]){
    //     userPokemon[user.username] = [];
    // }
    // userPokemon[user.username].push(pokemon);
    res.status(201).send({ msg: 'Pokemon added!' });
});

apiRouter.get('/pokemon/list', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (!user) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }
  
    const pokemon = await DB.getPokemonByUsername(user.username);
    res.send(pokemon);
});

apiRouter.delete('/pokemon/:uniqueId', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (!user) return res.status(401).send({ msg: 'Unauthorized' });

    const uniqueId = req.params.uniqueId;
    await DB.removePokemon(user.username, uniqueId);
    res.status(200).send({ msg: 'Deleted' });
});


// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });
  
  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      username: username,
      password: passwordHash,
      token: uuid.v4(),
    };
    await DB.addUser(user);
  
    return user;
  }
  
  async function findUser(field, value) {
    if (!value) return null;
  
    if (field === 'token') {
        return DB.getUserByToken(value);
      }
      return DB.getUser(value);
  }
  
  // setAuthCookie in the HTTP response
  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });