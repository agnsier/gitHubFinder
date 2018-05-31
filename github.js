class GitHub {
    constructor() {
        this.client_id = client_id;
        this.client_secret = client_secret_key;
    }

    async getUser(user) {
        const profileResponse = await
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile: profile
        }
    }
}