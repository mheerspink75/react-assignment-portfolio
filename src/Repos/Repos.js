import "./Repos.css";
import React, { useEffect, useState } from "react";

const reposUrl = "https://api.github.com/users/mheerspink75/repos";

export const Utility = () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(reposUrl);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {repos && (
        <div className="Repos">
          {/* loop over the repos */}
          {repos.map((repos, index) => (
            <div key={index}>
              <ul id="repoList">
                <li>
                  <b>Name:</b> {repos.name}
                </li>
                <li>
                  <b>Repository:</b>{" "}
                  <a href={repos.html_url} target="_blank" rel="noreferrer">
                    {repos.html_url}
                  </a>
                </li>
                <li>
                  <b>Description:</b>{" "}
                  {repos.description === null || repos.description === "" ? (
                    <a href={repos.html_url} target="_blank" rel="noreferrer">
                      <i>repository</i>
                    </a>
                  ) : (
                    repos.description
                  )}
                </li>
                <li>
                  <b>Homepage:</b>{" "}
                  <a href={repos.homepage} target="_blank" rel="noreferrer">
                    {repos.homepage === null || repos.homepage === "" ? (
                      <a href={repos.html_url} target="_blank" rel="noreferrer">
                        <i>respoitory</i>
                      </a>
                    ) : (
                      repos.homepage
                    )}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
