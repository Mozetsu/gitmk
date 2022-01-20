# gitmk (pronounced git make)

Ever wanted to create remote repos directly from the comfort of the terminal instead of having to break the workflow and head over to github's website? Quite annoying. Created this package to solve that.

gitmk can create and delete repos directly in the terminal, easily.

## Setup

To use github's API, an access token with the right permissions has to be generated. Go to `settings > Developer settings > Personal access tokens`. Generate a new token with the following scopes:

- repo
- user
- delete_repo

This gives the token all the necessary permissions to create and delete repos.

Install the package globally.

```bash
npm i -g gitmk
```

Create a text file with your github username and access token as follows:

```bash
USER=...
TOKEN=...
```

This file will be used to setup environment variables so the access token won't be sitting around in the terminal's history.

Run the configuration command to setup the environment variables.

```bash
gitmk config
```

Provide the **absolute path** to the newly generated text file.

```bash
? Config file path: path/to/file.txt

Configuration complete.
```

Feel free to delete the text file now that the configuration is done.

## Usage

### Creating remote repos

Create a remote repo with the following command.

```bash
gitmk add -n "repo-name"
```

This adds a remote repo to your github account with a readme file. By default all repos will be public, set the `private` flag to `true` to change that.

### Create flags

| Name          | Alias |  Type   | Default | Description       |
| :------------ | :---: | :-----: | :-----: | ----------------- |
| --name        |  -n   | string  |   n/a   | Name.             |
| --description |  -d   | string  |   n/a   | Description.      |
| --private     |  -p   | boolean |  false  | Visibility.       |
| --license     |  -l   | string  |  "MIT"  | License template. |

### Deleting remote repos

You can delete a remote repo with the following command.

```bash
gitmk rm -n "repo-name"
```

### Delete flags

| Name   | Alias |  Type  | Default | Description |
| ------ | :---: | :----: | :-----: | ----------- |
| --name |  -n   | string |   n/a   | Name.       |

<hr/>

##### This package may have bugs as I'm still developing it. Feel free to contribute, though.
