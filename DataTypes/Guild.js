module.exports = class Guild {
    constructor(id, name, roles, channels, members)
    {
        this.id = id;
        this.name = name;
        this.roles = roles;
        this.channels = channels;
        this.members = members;
        Object.freeze(this);
    }
}
