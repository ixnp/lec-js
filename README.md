# Welcome!
Thank you for your interest in the Lecturer, Software Engineering position at Flatiron School!

The first step in our interview process is to complete a small independent assessment followed by a pair programming session with an interviewer which has already been scheduled. During your pair programming session your interviewer will:  

1. Review and ask questions about the code you submit for this assessment
2. Work with you to build out a feature using JavaScript and React 

Please follow the instructions below to complete and submit the assessment. This assessment should take approximately 30-40 minutes. However, there is no time limit so take your time and do your best. 

***_Please submit your assessment at least 24 hours prior to your scheduled interview (still submit if your work is incomplete)._***

Good luck! Have fun! We are very excited to meet you!


## Setup

Fork & Clone this repo and open it in your preferred text editor

Install the following packages:  

- [JSON Server](https://www.npmjs.com/package/json-server)  
- [Material UI](https://material-ui.com/getting-started/installation/) 

Once installed: 
 
- Run `json-server -w db.json` in this project's top level directory to boot the API on `http://localhost:5000/blogs`   

- Run `npm i` & `npm start` to boot the application (you may also use [yarn](https://yarnpkg.com/))


## Task
You are working on a project for Flatiron School that will allow students to access, manage, and contribute to a collection of blogs written by current Flatiron School students and alumni. This site is written in JavaScript and React using [React Router](https://reactrouter.com/web/guides/quick-start) for client-side routing and [JSON Server](https://www.npmjs.com/package/json-server) for a simple API.

Your task is to add a search feature that will allow the following:  

1. User can access a search field to search for a blog by title
2. List of blogs should filter based on User input, showing only the blogs whose titles include the input characters
3. When search field is empty, page should display the full list of blogs

*You are allowed to make any changes to the code that you feel are necessary. This includes adding new code as well as removing existing code.*

*Styling is not necessary but is encouraged*

When complete, your site should match the behavior shown in this gif:
![](blog-search-gif.gif)

## Submitting Your Assessment

To submit your assessment please commit and push your code and submit a link to your repository in this [form](https://forms.gle/iLdbjVPn173XuqH59)

*Assessment should be submitted at least 24 hours before your scheduled interview*