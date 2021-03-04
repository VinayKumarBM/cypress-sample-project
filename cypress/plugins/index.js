/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs');
const XLSX = require('xlsx');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('task', {
    downloadFile: downloadFile,
    readXLSX: readXLSX
  })
  on('file:preprocessor', cucumber())
  allureWriter(on, config);
  return config;
}

function readXLSX({ file, sheet, testCaseID }) {
  const filePath = './cypress/fixtures/'
  const buf = fs.readFileSync(filePath.concat(file));
  const workbook = XLSX.read(buf, { type: 'buffer' });
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
  let data
  for (let i = 0; i < rows.length; i++) {
    if (rows[i]['testCaseID'] === testCaseID) {
      data = rows[i];
      break;
    }
  }
  return data
}