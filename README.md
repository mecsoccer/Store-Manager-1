# Store-Manager
##### [![Build Status](https://travis-ci.org/abejide001/Store-Manager.svg?branch=develop)](https://travis-ci.org/abejide001/Store-Manager) [![Coverage Status](https://coveralls.io/repos/github/abejide001/Store-Manager/badge.svg?branch=develop)](https://coveralls.io/github/abejide001/Store-Manager?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/d32f77dfa95a6cff5083/maintainability)](https://codeclimate.com/github/abejide001/Store-Manager/maintainability)
Store Manager is a web application that helps store owners manage sales and product inventory records. This application is meant for use in a single store.

## Introduction

Welcome to version 1 of Store Manager API. Below you will find a current list of available methods on different endpoints.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

To work with this project you need to have the following installed on your local machine

1. [NodeJS](https://nodejs.org)
2. [Git](https://git-scm.com/downloads)
3. Postman

## Install and run locally

```bash
$ git clone https://github.com/abejide001/Store-Manager.git
$ cd Store-Manager

# rename .env.sample to .env, and set your environment variables

$ npm i
$ npm start
```

## Test

```bash
$ NODE_ENV=test npm test
```

## API Usage

API BASE URL https://store-manager-store.herokuapp.com/api/v1. It's recommended to attach a `authorization` Header containing the generated `token` from `/api/auth/signin` to all access all requests.

### Products endpoints `/api/v1/products`

| method | route          | description             | data                                 |
| ------ | -------------- | ----------------------- | ------------------------------------ |
| GET    | /products      | Get all store products  |                                      |
| GET    | /products/:id  | Get a product           |                                      |
| POST   | /products      | Create a product        |`{name, price, quantity_in_inventory}`|
| PUT    | /products/:id  | Update a product        |                                      |
| DELETE | /products/:id  | Delete a product        |                                      |

### Sales endpoints `/api/v1/sales`

| method | route            | description          | data                            |
| ------ | ---------------- | -------------------- | ------------------------------- |
| GET    | /sales           | Get all sale records |                                 |
| POST   | /sales           | Create a sale record | `{product_name, quantity_sold }`|             
| GET    | /sales/:id       | Get a sale record    |                                 |


### Authentication endpoints `/api/v1/auth`

| method | route        | description               | data                                          |
| ------ | ------------ | ------------------------- | ----------------------------------------------|
| POST   | /auth/sigin  | Sign In                   | `{email, password}`                           |
| POST   | /auth/signup | Sign up                   | `{fullname, username, email, password, role}` |
### Admin only endpoints 

| method | route            | description               | 
| ------ | -----------------| ------------------------- |
| POST   | /auth/signup     | Sign up                   |
| POST   | /api/products    | Create Product            |
| PUT    | /api/products/:id| Modify a Product          |
| DELETE | /api/products/:id| Delete a product          |


```javascript
// login as user
{
  email: "myattendant@yahoo.com",
  password: "12345"
}

// login as admin
{
  email: "abejidefemi1@gmail.com",
  password: "abcde"
}
```
## Author
Abejide Femi
## Acknowledgements
Andela
