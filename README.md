# Cherry Tomato
-------------
This is my demo version of [Tomato](http://tomato.okgrow.com/), a team-oriented
[Pomorodo](http://en.wikipedia.org/wiki/Pomodoro_Technique) app built with
Meteor.

## Getting Started

- clone this repo
- On your terminal, run `curl https://install.meteor.com/ | sh`
- From the project's directory, run `meteor --help`
- Read the options
- Now run `meteor` and checkout http://localhost:3000
- Open a new terminal tab and run `meteor shell`
- Open a new terminal tab and run `meteor mongo`

##### Testing

This project uses tests written in [Jasmine](http://jasmine.github.io/2.0/introduction.html)
using the [Jasmine extension](https://github.com/Sanjo/meteor-jasmine)
for the [Velocity testing framework](https://github.com/meteor-velocity/velocity)

Run meteor with the following tags to get full debug information in the server console:

`DEBUG=1 JASMINE_DEBUG=1 VELOCITY_DEBUG=1 VELOCITY_DEBUG_MIRROR=1 meteor`

To remove Velocity entirely:

1. `meteor remove velocity:html-reporter sanjo:jasmine`
2. `rm -rf tests`
