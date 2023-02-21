
# Stack Metrics (backend)


## Installation

To set up the  application, follow these steps:

1. Clone the repository to your local machine using git clone https://github.com/bas0N/metrica-backend.git
2. Navigate to the project directory using cd metrica-backend
3. Install the required dependencies using 
```bash
$ npm install
```
4. Set up a MongoDB instance and create a new database. Then, add the connection string to the .env file using the `MONGO_DB_CONNECTION_STRING` variable.
5. Set up an Auth0 account and configure the tenant's settings. Add the `AUTH0_ISSUER_URL` and `AUTH0_AUDIENCE` variables to the .env file.
6.Set up a Stripe account and create an API key. Add the `STRIPE_API_KEY`, `STRIPE_CURRENCY`, `FRONTEND_URL`, and `CUSTOMER_ID` variables to the .env file.
7. Set up a SendGrid account and create an API key. Add the `SENDGRID_API_KEY` variable to the .env file.
8. Run the application using npm start.
<br/>
After following these steps, the  application will be up and running on your local machine, ready to be used.



## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform
- Subscription-based model for access to features
- Stripe integration for payment processing
- SendGrid integration for email sending
- Auth0 integration for user authentication
- MongoDB with Mongoose for data storage

## Authors

- [@bas0N](https://www.github.com/octokatherine)


## Tech Stack


**Server:** Node, NestJs, AWS 



## API Reference

#### Retrieve all surveys from the db

```http
  GET /survey/getSurveys
```
| Token | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer token` | `string` | **Required**. Your api token. |

#### Create survey

```http
  POST /survey/createSurvey
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. -- |
| `recipientEmail`      | `string` | **Required**. Email of the recipent |
| `candidateFirstName`      | `string` | **Required**. First name of the candidate. |
| `candidateLastName`      | `string` | **Required**. Last name of the candidate. |
| `status`      | `SurveyStatus` | **Required**. Initial status of the survey. |
| `terminationDate`      | `Date` | **Required**. Date when the survey shoud terminate. |

| Token | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer token` | `string` | **Required**. Your api token. |


#### Get survey by id

```http
  GET /survey/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the survey to fetch |

| Token | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer token` | `string` | **Required**. Your api token. |

#### Delete survey

```http
  DELETE /survey/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Token | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer token` | `string` | **Required**. Your api token. |

#### Change survey state

```http
  PUT /survey/changeSurveyState
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newStatus`      | `SurveyStatus` | **Required**. New status to be applied |
| `id`      | `string` | **Required**. Id of the survey to be updated |


| Token | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer token` | `string` | **Required**. Your api token. |



## Acknowledgements

 - [Readme generator](https://readme.so/editor)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# stack-metrics-backend
