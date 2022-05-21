const {GraphQLServer, createServer} = require('graphql-yoga');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
mongoose.connect('mongodb://admin:admin@localhost:27017/RecipesApp');

const Product = mongoose.model('Product', {
  name: String,
  quantity: Number,
});

const Ingredient = mongoose.model('Ingredient', {
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
  unit: String,
});

const Recipe = mongoose.model('Recipe', {
  title: String,
  description: String,
  ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
});


const typeDefs = `
  type QueryRecipes {
    get(id: ID!): Recipe
    getRecipes: [Recipe]
  }
  type Product {
    name: String!
    quantity: Int!
  }
  type Ingredient {
    product: Product!
    quantity: Int!
    unit: String!
  }
  type Recipe {
      title: String!
      description: String!
      ingredients: [Ingredient!]
  }
`;

const resolvers = {
  QueryRecipes: {
    getRecipes: () => Recipe.find(),
    getRecipe: async (_, {id}) => {
      var result = await Recipe.findById(id);
      return result;
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers
  },
});
mongoose.connection.once('open', function () {
  server.start(() => console.log('Server is running on localhost:4000'));
});