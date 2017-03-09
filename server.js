var koa = require('koa');
var Router = require('koa-router');
var conver = require('koa-convert');
var graphqlHTTP = require('koa-graphql')
var body = require('koa-better-body')

import { graphql } from 'graphql';
import schema from './data/schema';

var app = new koa();
var router = new Router();
app.use(body())
router.post('/create', (ctx, next) => {
  console.log(ctx.request.body)
})
router.post('/api', conver(graphqlHTTP({
  schema,
  graphiql: true
})))

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('running')
});