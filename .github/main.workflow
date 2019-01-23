workflow "Generate Changelog" {
  on = "push"
  resolves = ["Changelog"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@master"
  args = "action 'opened|synchronize'"
}

action "NPM Install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["Filters for GitHub Actions"]
  args = "install"
}

action "Bootstrap" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "run bootstrap"
  needs = ["NPM Install"]
}

action "Changelog" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["Bootstrap"]
  args = "run changelog"
}
