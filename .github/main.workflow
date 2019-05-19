workflow "Publish" {
  on = "push"
  resolves = [
    "Lerna Publish",
    "Build",
  ]
}

action "Lerna Publish" {
  uses = "docker://node"
  needs = ["Build"]
  runs = "npx"
  args = "lerna publish from-git"
  secrets = ["NPM_TOKEN"]
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
