export class Team {
  constructor (args) {
    args = args || {};
    this.slug = args.slug;
    this.name = args.name;
    this.created_at = args.created_at;
    this.uri = args.uri;
    this.subscriber_count = args.subscriber_count;
    this.id_str = args.id_str;
    this.member_count = args.member_count;
    this.mode = args.mode;
    this.id = args.id;
    this.full_name = args.full_name;
    this.description = args.description;
    this.user = args.user;
    this.following = args.following;
    this.link = `#/team/${args.id}`;
  }
}
