// test/test.js

import axios from 'axios';
import { expect } from 'chai';

// API base URL
const BASE_URL = 'https://reqres.in/api/users';

describe('CRUD Operations for Users API', function() {

  let userId;

  it('should create a new user with POST', async function() {
    const newUser = { name: 'John Doe', job: 'Software Developer' };

    // Make POST request to create a new user
    const response = await axios.post(BASE_URL, newUser);

    // Check the status code and response data
    expect(response.status).to.equal(201);  // 201 indicates resource created
    expect(response.data).to.have.property('name').that.equals('John Doe');
    expect(response.data).to.have.property('job').that.equals('Software Developer');

    // Save the user ID for the subsequent tests
    userId = response.data.id;
  });

  it('should retrieve a user by ID with GET', async function() {
    // Make GET request to retrieve the user by ID
    const response = await axios.get(`${BASE_URL}/6`);

    // Check the status code and response data
    expect(response.status).to.equal(200);  // 200 indicates success
    expect(response.data.data).to.have.property('id').that.equals(6);
    expect(response.data.data).to.have.property('first_name');
    expect(response.data.data).to.have.property('last_name');
  });

  it('should update a user by ID with PUT', async function() {
    const updatedData = { name: 'Janet Weaver', job: 'Engineer' };

    // Make PUT request to update the user's data
    const response = await axios.put(`${BASE_URL}/${userId}`, updatedData);

    // Check the status code and response data
    expect(response.status).to.equal(200);  // 200 indicates success
    expect(response.data).to.have.property('name').that.equals('Janet Weaver');
    expect(response.data).to.have.property('job').that.equals('Engineer');
  });

  it('should delete a user by ID with DELETE', async function() {
    // Make DELETE request to delete the user by ID
    const response = await axios.delete(`${BASE_URL}/${userId}`);

    // Check the status code
    expect(response.status).to.equal(204);  // 204 indicates no content, successful deletion
  });
});
