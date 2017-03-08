var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var conver =require('koa-convert');
var graphqlHTTP=require('koa-graphql')

import { graphql } from 'graphql';
import schema from './schema';

var app = new koa();
var router = new Router();

router.all('/api',conver(graphqlHTTP({
  schema,
  graphiql:true
})))

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('running')
});