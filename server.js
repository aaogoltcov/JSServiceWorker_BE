'use strict';

const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();
const cors = require('@koa/cors');
const faker = require('faker');
faker.local = 'ru';
const bodyParser = require('koa-bodyparser');
const slow = require('koa-slow');

app.use(koaBody({
  urlencoded: true,
  multipart: true,
  json: true,
}));

app.use(cors());
app.use(bodyParser());

app.use(slow({
  delay: 4000,
}));

app.use(async ( ctx ) => {

  const data = [
      {
        icon: '#bootstrap',
        header: 'Featured title',
        text: 'Paragraph of text beneath the heading to explain the heading.',
      },
    {
      icon: '#cpu-fill',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#calendar3',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#home',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#speedometer2',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#toggles2',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#geo-fill',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
    {
      icon: '#tools',
      header: 'Featured title',
      text: 'Paragraph of text beneath the heading to explain the heading.',
    },
  ]

  const { method } = ctx.request;
  const { command } = ctx.request.body;

  if ( method === 'POST' && command === 'getData') {
    ctx.response.body = data;
    ctx.response.status = 200;
  } else {
    ctx.response.status = 200;
  }

});

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback())
server.listen( port );
