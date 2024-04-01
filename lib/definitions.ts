
export type User = {
    user: {
        name: string,
        avatarUrl: string,
        bio: string,
        email: string,
        repositories: {
        totalCount: number
        nodes: {
            description: string,
            name: string,
            languages: {
            nodes: {
                name: string,
                color: string,
            }
            }
            updatedAt: string
        }
        }
        followers: {
        totalCount: string
        edges: {
            node: {
            avatarUrl: string,
            bio: string,
            followers: {
                totalCount: number
            }
            repositories: {
                totalCount: number
            }
            }
        }
        }
        following: {
        totalCount: string
        edges: {
            node: {
            avatarUrl: string
            bio: string
            repositories: {
                totalCount: number
            }
            }
        }
        }
    }
    }