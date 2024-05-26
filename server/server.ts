import { GraphQLSchema } from "graphql";
import { RootQuery } from "./graphql/queries";
import { app } from "./app/app";
import { graphqlHTTP } from "express-graphql";

const express = app;

const schema = new GraphQLSchema({
  query: RootQuery,
});

express.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

express.listen({ port: 4000 }, () => {
  console.log(
    `��� Running a GraphQL API server at http://localhost:4000/graphql`
  );
});
