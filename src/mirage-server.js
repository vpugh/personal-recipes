import { Server, Model, Factory, Serializer, Response } from 'miragejs';
import RecipeDetails from '../src/mirage-data/recipe-details.json';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secretCode = process.env.REACT_APP_SECRET_CODE;

const isCorrectPassword = (hash, plainText, email) => {
  return bcrypt.compare(plainText, hash).then((res) => {
    if (res === 'undefined' || res === 'null') {
      return new Response(
        500,
        {},
        { error: 'Internal error please try again' }
      );
    }
    if (!res) {
      return new Response(500, {}, { error: 'Incorrect email or password' });
    }
    const payload = { email };
    const token = JWT.sign(payload, secretCode, {
      expiresIn: '1h',
    });
    // return res.cookie('token', token, { httpOnly: true });
    let now = new Date();
    let cookieExpiration = new Date(now.getTime() + 1 * 3600 * 1000);
    document.cookie = `token=token; domain=.dev-domain; path=/; expires=${cookieExpiration.toUTCString()};`;
    return { token: token };
    // return new Response(201, {}, { success: 'Logging In', token: token });
  });
};

const hashPassword = (textPassword) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(textPassword, salt);
};

const withAuth = function (req, res) {
  // debugger;
  const token = req.requestBody.token;
  console.log('Token', token);
  debugger;
  if (!token) {
    return new Response(401, {}, { error: 'Unauthorized: No token provided' });
    // res.status(401).send('Unauthorized: No token provided');
  } else {
    JWT.verify(token, secretCode, function (err, decoded) {
      if (err) {
        return new Response(401, {}, { error: 'Invalid Token' });
        // res.status(401).send('Unauthorized: Invalid token');
      } else {
        return (req.email = decoded.email);
      }
    });
  }
};

const RecipeDetailsSelection = (num, selector) => {
  return RecipeDetails[num][selector];
};

const ApplicationSerializer = Serializer.extend();

export const makeServer = () => {
  let server = new Server({
    serializers: {
      application: ApplicationSerializer,
      recipe: ApplicationSerializer.extend({
        embed: true,
        root: false,
      }),
    },
    models: {
      recipe: Model,
      user: Model,
    },
    factories: {
      recipe: Factory.extend({
        id(i) {
          return i;
        },
        course() {
          return RecipeDetailsSelection(this.id, 'course');
        },
        title() {
          return RecipeDetailsSelection(this.id, 'title');
        },
        cuisine() {
          return RecipeDetailsSelection(this.id, 'cuisine');
        },
        mainDish() {
          return RecipeDetailsSelection(this.id, 'mainDish');
        },
        prepTime() {
          return RecipeDetailsSelection(this.id, 'prepTime');
        },
        cookTime() {
          return RecipeDetailsSelection(this.id, 'cookTime');
        },
        totalTime() {
          return RecipeDetailsSelection(this.id, 'totalTime');
        },
        serves() {
          return RecipeDetailsSelection(this.id, 'serves');
        },
        serveType() {
          return RecipeDetailsSelection(this.id, 'serveType');
        },
        description() {
          return RecipeDetailsSelection(this.id, 'description');
        },
        recipeOrigin() {
          return RecipeDetailsSelection(this.id, 'recipeOrigin');
        },
        equipmentNeeded() {
          return RecipeDetailsSelection(this.id, 'equipmentNeeded');
        },
        ingredients() {
          return RecipeDetailsSelection(this.id, 'ingredients');
        },
        instructions() {
          return RecipeDetailsSelection(this.id, 'instructions');
        },
        notes() {
          return RecipeDetailsSelection(this.id, 'notes');
        },
        updateAt() {
          return RecipeDetailsSelection(this.id, 'updatedAt');
        },
        createdAt() {
          return RecipeDetailsSelection(this.id, 'createdAt');
        },
      }),
    },
    routes() {
      this.namespace = '/api';

      this.get('/v1/auth', () => {
        const encodedToken = JWT.sign(
          { message: 'A mystery waiting to be solved' },
          secretCode
        );
        return { encodedToken: encodedToken };
      });

      this.get('/v1/decode', (schema, request) => {
        const encodedToken = request.requestHeaders.authorization;
        const decodedToken = JWT.verify(encodedToken, secretCode);
        return { decodedToken: decodedToken };
      });

      this.get('/v1/recipes');

      this.get('/v1/recipe/:id', (schema, request) => {
        let recipeId = request.params.id;
        return schema.recipes.findBy({ id: recipeId });
      });

      this.post('/v1/recipe', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.recipes.create(attrs);
      });

      this.patch('/v1/recipe/:id', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        return schema.db.recipes.update(id, attrs);
      });

      this.get('/v1/users');

      this.get('/v1/secret', (schema, request) => {
        const isAuthorized = withAuth(request);
        console.log('isAuthorize', isAuthorized);
        return isAuthorized;
      });

      this.post('/v1/authenticate', async (schema, request) => {
        const { email, password } = request.requestBody;
        const user = schema.users.findBy({ email });
        if (!user) {
          return new Response(
            500,
            {},
            { error: 'Incorrect email or password' }
          );
        }
        return await isCorrectPassword(
          user.attrs.password,
          password,
          user.attrs.email
        );
      });

      this.post('/v1/register', async (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const hash = await hashPassword(attrs.password);
        attrs.password = hash;
        return schema.users.create(attrs);
      });
    },
    seeds(server) {
      server.createList('recipe', 10);
      server.schema.users.create({
        userName: 'Daniel Salazar',
        email: 'test@mytest.com',
        password: hashPassword(process.env.REACT_APP_PASS1),
      });
      server.schema.users.create({
        userName: "Jonny Ja'qobi",
        email: 'rac@quad.com',
        password: hashPassword(process.env.REACT_APP_PASS2),
      });
    },
  });
  return server;
};
