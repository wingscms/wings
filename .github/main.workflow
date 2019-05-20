workflow "Publish" {
  on = "push"
  resolves = [
    "Lerna Publish",
    "Build",
  ]
}

action "Install" {
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
  args = "lerna publish from-git --yes"
  secrets = ["NPM_AUTH_TOKEN"]
  runs = "npx"
}
