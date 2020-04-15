import {
  Server,
  Model,
  Factory,
  Serializer,
  Response,
  belongsTo,
  hasMany,
} from 'miragejs';
import RecipeDetails from '../src/mirage-data/recipe-details.json';
import bcrypt from 'bcryptjs';

const RecipeDetailsSelection = (num, selector) => {
  return RecipeDetails[num][selector];
};

const hashPassword = (textPassword) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(textPassword, salt);
};

const isCorrectPassword = (hash, plainText) => {
  return bcrypt.compare(plainText, hash);
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
      recipe: Model.extend({
        user: belongsTo(),
      }),
      user: Model.extend({
        recipe: hasMany(),
      }),
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
        userId() {
          return RecipeDetailsSelection(this.id, 'userId');
        },
      }),
    },
    routes() {
      this.namespace = '/api';

      this.get('/v1/auth', () => {});

      // Recipe Endpoints

      this.get('/v1/recipes');

      this.get('/v1/recipes/:userId', (schema, request) => {
        const userId = request.params.userId;
        return schema.recipes.where({ userId: userId });
      });

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

      // User endpoints
      this.get('/v1/users');

      this.get('/v1/user/:id', (schema, request) => {
        let userId = request.params.id;
        return schema.users.findBy({ id: userId });
      });

      this.post('/v1/user', async (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const hash = await hashPassword(attrs.password);
        attrs.password = hash;
        return schema.users.create(attrs);
      });

      this.post('/v1/user/authenticate', async (schema, request) => {
        const { email } = request.requestBody;
        return schema.users.findBy({ email });
      });

      this.post('/v1/authentication', async (schema, request) => {
        const { email, password } = request.requestBody;
        const user = schema.users.findBy({ email });
        if (!user) {
          return new Response(
            500,
            {},
            { error: 'Incorrect email or password' }
          );
        }
        const doesMatch = await isCorrectPassword(
          user.attrs.password,
          password,
          user.attrs.email
        );
        if (!doesMatch) {
          return new Response(
            500,
            {},
            { error: 'Incorrect email or password' }
          );
        }
        return user;
      });
    },
    seeds(server) {
      server.schema.users.create({
        username: 'Daniel Salazar',
        email: 'test@mytest.com',
        password: hashPassword(process.env.REACT_APP_PASS1),
      });
      server.schema.users.create({
        username: "Jonny Ja'qobi",
        email: 'rac@quad.com',
        password: hashPassword(process.env.REACT_APP_PASS2),
      });
      server.createList('recipe', 10);
    },
  });
  return server;
};
