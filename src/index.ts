import * as path from "path";

import { google} from 'googleapis';
require("dotenv").config({ path: path.join(__dirname, ".env") });

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform','https://www.googleapis.com/auth/admin.directory.user.readonly'],
clientOptions:{subject:process.env.DELEGATE_EMAIL}
});

google.auth.getApplicationDefault()

const service = google.admin({version: 'directory_v1', auth});


async function getUsers(){
  try{
    const payload = await service.users.list({
        domain: process.env.DOMAIN,
        maxResults: 10,
        orderBy: 'email',
      });
    console.log(payload.data.users);
  }
  catch(ex){
    console.log(ex);
  }
}

getUsers();