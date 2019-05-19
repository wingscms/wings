workflow "Publish" {
  on = "push"
  resolves = ["docker://node"]
}

action "docker://node" {
  uses = "docker://node"
  runs = "npx"
  args = "lerna publish from-git"
  secrets = ["NPM_TOKEN"]
}
