const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const gqlSchemas = require('./graphql/schemas/index');
const gqlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(express.static(`${__dirname}/client/build`));
app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema: gqlSchemas,
		rootValue: gqlResolvers,
		graphiql: true
	})
);

app.get('*', (_, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(8090, () => {
	console.log('server started');
});
