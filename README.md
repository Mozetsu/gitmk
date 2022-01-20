# gitmk (pronounced git make)

Ever wanted to create remote repos directly on the terminal instead of having to break your workflow and head over to github's website? I have, and it's annoying. So I created this package to solve that.

You can create and delete remote repos from the comfort of the terminal.

## Usage

### Creating remote repos

You can create a remote repo with the following command.

```
gitmk add -n "repo-name"
```

This adds a remote repo to your github account with a readme file. By default all repos will be public, set the `--private, -p` flag to `true` to change that.

### Create flags

| Name        | Alias | Type    | Description                  |
| ----------- | ----- | ------- | ---------------------------- |
| name        | n     | string  | Repository name.             |
| descritpion | d     | string  | Repository description.      |
| private     | p     | boolean | Repository visibility.       |
| license     | l     | string  | Repository license template. |

### Deleting remote repos

You can delete a remote repo with the following command.

```
gitmk rm -n "repo-name"
```

### Delete flags

| Name | Alias | Type   | Description      |
| ---- | ----- | ------ | ---------------- |
| name | n     | string | Repository name. |
