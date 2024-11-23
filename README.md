# API Test Automation with Mocha and Chai

## Overview

This project demonstrates how to perform API testing on the **Reqres API** (https://reqres.in/). It uses the following tools:

- **Mocha**: A test framework for running tests.
- **Chai**: An assertion library for making assertions in tests.
- **Mochawesome**: A reporter for generating HTML test reports.
- **Axios**: Basically it used for making API request in the HTML client
- **Open**: Util to open the report/result in the browser.

### The tests cover basic **CRUD operations** (Create, Retrieve, Update, Delete) using the Reqres API.

## Prerequisites

Before running the tests, youneed the following installed on your machine:

- **Node.js** (version 22 or later)
  - [Download Node.js](https://nodejs.org/)
  
   You can check if Node.js is installed by running:
   ```bash
   node -v
   ```
- **Visual Studio Code or any Editor**

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## How to run

- got to root directory
- run this command `npm test`

## Result 
After the tests are completed, you will find the generated HTML report inside the ./reports folder. The report will be named index.html by default. This report contains a summary of the test results, including the number of tests passed, failed, and skipped, along with detailed logs.
Example Result:

    Passed tests: All tests passed successfully.
    Failed tests: If any test fails, it will show the failure message and stack trace.

The report will open automatically in your browser once the tests are finished. If you need to view the report manually later, you can simply open the index.html file located in the reports directory.

## Additional Info

1. package.json
   This file manages the project's dependencies, scripts, and metadata. It defines the dependencies required for running tests (mocha, chai, axios, etc.) and contains the scripts section that automates the testing and reporting process. The "test" script in this file runs the tests and opens the report after completion.
2. test/test.js
   This is the main file where you write your test cases. Each test checks a specific behavior of the Reqres API using Mocha and Chai. For example, it tests CRUD operations (Create, Retrieve, Update, Delete) on the API. This file is where all your API requests and assertions live.
3. openReport.js
   After the tests are completed, this script automatically opens the generated Mochawesome HTML report in the default web browser. It uses the open package (dynamically imported) to open the index.html file from the ./reports directory.
4. node_modules/
   This directory contains all the installed dependencies required for the project (such as Mocha, Chai, Axios, etc.).
5. ./reports/
   This is where the test reports are generated. The report is in HTML format and is named index.html by default. This directory is created automatically by Mochawesome.
6. package-lock.json 
   This file ensures that the exact versions of dependencies installed are recorded, ensuring consistent installations across different environments.