# README Generator

## Description

This project was designed to create a README file using inputs from the command-line.  Once run using Node.js, this application uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) (version 8.2.4) to provide the user with a series of prompts, and the answers to those prompts will be used to generate the various sections of the final README. The goal of this application is to quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

![Video Demonstration of Application](./assets/example-video.gif)

## Usage

The application is invoked by using the following command:

```bash
node index.js
```

Once invoked, it will generate a README.md file in the user's current file directory.