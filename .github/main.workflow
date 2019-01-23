workflow "Generate Changelog" {
  resolves = ["Bootstrap"]
  on = "push"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@707718ee26483624de00bd146e073d915139a3d8"
  args = ["action", "opened|synchronize"]
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
