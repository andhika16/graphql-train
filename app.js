const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use(
  "/gpl",
  graphqlHTTP({
    schema,
    graphiql: true,
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
