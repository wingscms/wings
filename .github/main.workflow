workflow "Build, test, publish" {
  resolves = [
    "Lerna Publish",
    "Build",
    "Not Tag",
  ]
  on = "push"
}

action "Not Tag" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "not tag"
}

action "Install" {
  needs = ["Not Tag"]
  uses = "docker://node"
  runs = "npx"
  args = "yarn --frozen-lockfile"
}

action "Build" {
  uses = "docker://node"
  needs = ["Install"]
  runs = "npx"
  args = "lerna run --ignore @wingscms/gatsby-starter-hummingbird build"
}

action "Test" {
  uses = "docker://node"
  needs = ["Build"]
  runs = "npx"
  args = "lerna run test"
}

action "Master" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Lerna Publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Master"]
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
  runs = "echo"
  args = "noop"
}
