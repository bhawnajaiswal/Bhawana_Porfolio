import React, { useState, useEffect } from "react";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client"; // Importing from @apollo/client
import { motion } from "framer-motion";
import "./Project.css";
import GithubRepoCard from "../../Component/githubRepoCard/GithubRepoCard.js";
import Button from "../../Component/Button/Button.jsx";
// import { openSource } from "../../portfolio";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache(), // Required for Apollo Client caching
      headers: {
        authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
      },
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <motion.h1
        className="project-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Open Source Projects
      </motion.h1>

      <div className="repo-cards-div-main">
        {repo.map((v) => {
          return (
            <motion.div
              key={v.node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <GithubRepoCard repo={v} />
            </motion.div>
          );
        })}
      </div>

      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
