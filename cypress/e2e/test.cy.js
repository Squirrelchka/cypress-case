const users = require("../fixtures/users.json");
import { qase } from 'cypress-qase-reporter/dist/mocha';
const testId = 1
describe("user can create a box and run it", () => {
  qase(testId,
   it("user logins and create a box", () => {
  cy.visit("/login");
  cy.login(users.userAutor.email, users.userAutor.password);
  }));
  })