# Google Admin SDK -  NPM googleapi - Test

## Description

Test repository to validate scope declaration, setup of GCP service account and API Controls Domain-wide Delegation with Google Admin SDK


## Getting Started

### Prerequisites

node ^12 - https://nodejs.org/en/download/

Follow this tutorial to set up service account and Gsuite :
https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority

### Installing

Install dependencies

```
npm install
```

#### Environments

Create .env file @ the root of the project:

- GOOGLE_APPLICATION_CREDENTIALS: JSON credentials file for GCP service account
- GCLOUD_PROJECT: GCP project which used service account belongs to
- DELEGATE_EMAIL: Admin email used as delegate by service account
- DOMAIN: Gsuite declared domain which requested users belong to (check SDK documention to substitute by Customer ID if not domain specific)

### Build

npm run build

## Run

npm run start

