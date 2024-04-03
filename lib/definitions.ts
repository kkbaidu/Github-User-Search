
export type User = {
    user: {
        name: string,
        avatarUrl: string,
        bio: string,
        email?: string,
        login?: string,
        organizations?: {
            nodes: [{
              avatarUrl: string,
              name: string,
            }]
          }
        repositories: {
        totalCount: number,
        nodes: [{
            description: string,
            name: string,
            languages: {
            nodes: [{
                name?: string,
                color?: string,
            }]
            }
            updatedAt: string
        }]
        }
        followers: {
        totalCount: string
        edges: [{
            node: {
            avatarUrl: string,
            name: string,
            bio?: string,
            login: string,
            company?: string,
            location?: string, 
            }
        }]
        }
        following: {
        totalCount: string
        edges: [{
            node: {
            avatarUrl: string
            name: string
            bio?: string
            login: string,
            company?: string,
            location?: string,
            }
        }]
        }
    }
    }