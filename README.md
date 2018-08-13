# Prisoner's Dilemma App

[![Build Status](https://travis-ci.org/Learn-by-doing/prisoners-dilemma-app.svg?branch=master)](https://travis-ci.org/Learn-by-doing/prisoners-dilemma-app) [![Status of Dependencies](https://david-dm.org/Learn-by-doing/prisoners-dilemma-app.svg)](https://david-dm.org/Learn-by-doing/prisoners-dilemma-app)

The purpose of this project is to create a web application with which a group of people can participant in a Prisoner's Dilemma tournament.

To learn more about the Prisoner's Dilemma:
* [Guided walk-thru](https://ncase.me/trust/)
* [More information](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma)

If you would like to contribute to the project, the following should help get you started.
* [Requirements](#requirements)
* [Getting Started](#getting-started)
  * [Running the App](#running-the-app)
  * [Contributing](#contributing)
* [How to Keep Your Local Project Up-to-date](#how-to-keep-your-local-project-up-to-date)


## Requirements

The following is a list of requirements needed to contribute to this project.

* [nodejs](https://nodejs.org/) - For Linux and Mac install node via [nvm](https://github.com/creationix/nvm). For Windows, use an [installer](https://nodejs.org/en/download/) from the nodejs website.
* [git](https://git-scm.com/)
* [grunt-cli](https://gruntjs.com/getting-started) - Can be installed via npm as follows:
  * `npm install -g grunt-cli`
* A GitHub account to create pull requests


## Getting Started

Before continuing, be sure to download and install the project [requirements](#requirements).

To contribute to the project, you will use [pull requests](https://help.github.com/articles/about-pull-requests/) instead of pushing your changes directly. The first thing you must do is [create a fork of this project](https://github.com/Learn-by-doing/prisoners-dilemma-app/fork) (see [this article](https://help.github.com/articles/fork-a-repo/) for more information about GitHub forks). This will create a full copy of the project in your GitHub account. You have full read/write privileges to your fork.

Now that you have your fork, you must "clone" it locally. Run the following command:
```bash
git clone https://github.com/YOUR_USERNAME/prisoners-dilemma-app.git
```
Be sure to replace `YOUR_USERNAME` with your GitHub username.

Change directory into the new folder that was created:
```bash
cd prisoners-dilemma-app
```

### Running the App

To run the app locally, you should first install the node dependencies:
```bash
npm install
```

After the installation has completed, you can run it like this:
```bash
npm start
```
Your browser should automatically open to the app.


### Contributing

Create a new [branch](https://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is):
```bash
git checkout -b my-new-branch
```

Make your changes to the project locally. Save your changes by committing them:
```bash
git commit -a -m "Some message goes here"
```

Push the changes to your fork:
```bash
git push origin my-new-branch
```

Go to your fork on GitHub and click the green "Create a pull request" button. At the next screen, scroll down to view the changes you've made. Click the "Create pull request" to submit the changes as a pull request.


## How to Keep Your Local Project Up-to-date

Overtime, the project will change. To keep your local copy of the project up-to-date, you will need to download the changes from Github and merge them into your local instance of the project.

If you have not done so already, you will need to add the `upstream` remote to your local git repository:
```bash
git remote add upstream https://github.com/Learn-by-doing/prisoners-dilemma-app.git
```

To download the latest changes from upstream (this does not make any changes to your files):
```bash
git fetch upstream
```
[upstream](https://github.com/Learn-by-doing/prisoners-dilemma-app) is the name of the main project's remote

Now to merge the latest changes into your local master branch:
```bah
git checkout master
git merge upstream/master
```

And finally, update your fork:
```bash
git push origin master
```

That's it! Your local and your fork (in GitHub) should now both be up-to-date.
