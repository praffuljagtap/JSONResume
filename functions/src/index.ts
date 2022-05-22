/* eslint-disable */

import * as functions from "firebase-functions"
import * as fs from 'fs'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const getResume = functions
  .region('australia-southeast1')
  .https
  .onRequest((_, response) => {
    const rawdata = fs.readFileSync('data.json', 'utf-8');
    const JSONResume = JSON.parse(rawdata);
    response.send(JSONResume)
  })