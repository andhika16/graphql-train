const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

var schema = buildSchema(`
  type Query {
    hello: String,
    name : String
  }
`);

var root = {
  hello: () => {
    return "Hello world!";
  },
  name: () => {
    return "andhika";
  }
};

app.use(
  "/gpl",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/s", (req, res) => {
  res.send("hello andhika");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
