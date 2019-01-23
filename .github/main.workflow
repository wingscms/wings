workflow "Generate Changelog" {
  on = "pull_request"
  resolves = ["Filters for GitHub Actions-1"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@master"
  args = "label 'breaking|bug'"
}

action "Filters for GitHub Actions-1" {
  uses = "actions/bin/filter@707718ee26483624de00bd146e073d915139a3d8"
  args = "label 'breaking|bug'"
}
