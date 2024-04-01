import { gql } from "@apollo/client";
import { client } from "./client";
import { User } from "../definitions";

export const GetUser = gql`
    query User($login: String!, $privacy: RepositoryPrivacy, $first: Int, $followersFirst2: Int, $followingFirst2: Int, $languagesFirst2: Int) {
        user(login: $login) {
            name
            avatarUrl
            bio
            email
            organizations(first: $organizationsFirst2) {
            nodes {
                avatarUrl
                name
            }
            }
            repositories(first: $first) {
            totalCount
            nodes {
                description
                name
                languages(first: $languagesFirst2) {
                nodes {
                    name
                    color
                }
                }
                updatedAt
            }
            }
            followers(first: $followersFirst2) {
            totalCount
            edges {
                node {
                avatarUrl
                bio
                followers {
                    totalCount
                }
                repositories(privacy: $privacy) {
                    totalCount
                }
                }
            }
            }
            following(first: $followingFirst2) {
            totalCount
            edges {
                node {
                avatarUrl
                bio
                repositories(privacy: $privacy) {
                    totalCount
                }
                }
            }
            }
        }
        }
    `

export async function getStaticProps():Promise<User> {
    const { data } = await client.query({
      query: GetUser,
      variables: {
        login: "kkbaidu",
        privacy: "PUBLIC",
        first: 15,
        followersFirst2: 15, 
        followingFirst2: 15,
        languagesFirst2: 4,
        organizationsFirst2: 4,
      },
    });
  
    return data;
}