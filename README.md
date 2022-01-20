# gitmk (pronounced git make)

Ever wanted to create remote repos directly from the comfort of your terminal instead of having to break your workflow and head over to github's website? I have, and it's annoying. So I created this package to solve that.

You can create and delete repos from the terminal.

## Setup

Generate an access token by going to `settings > Developer settings > Personal access tokens`. Generate a new token with the following scopes:

- repo
- user
- delete_repo

This gives the token all the permissions necessary to create and delete repos through github's REST api.

## Usage

### Creating remote repos

Create a remote repo with the following command.

```
gitmk add -n "repo-name"
```

This adds a remote repo to your github account with a readme file. By default all repos will be public, set the private flag to `true` to change that.

### Create flags

| Name          | Alias | Type    | Default | Description       |
| :------------ | :---: | ------- | :-----: | ----------------- |
| --name        |  -n   | string  |   n/a   | Name.             |
| --description |  -d   | string  |   n/a   | Description.      |
| --private     |  -p   | boolean |  false  | Visibility.       |
| --license     |  -l   | string  |  "MIT"  | License template. |

### Deleting remote repos

You can delete a remote repo with the following command.

```
gitmk rm -n "repo-name"
```

### Delete flags

| Name   | Alias | Type   | Description |
| ------ | :---: | ------ | ----------- |
| --name |  -n   | string | Name.       |
