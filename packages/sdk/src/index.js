export default class Wings {
  constructor({ endpoint = 'https://api.wings-platform.com', appKey, project }) {
    this.endpoint = endpoint;
    this.token = appKey;
    this.project = project;
  }
  async query(query) {
    const res = await fetch(`${this.endpoint}?query=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'X-Wings-Project': this.project,
      },
    });
    return res.json();
  }
}
