import "./Repos.css";
import React, { useEffect, useState } from "react";

const reposUrl = "https://api.github.com/users/mheerspink75/repos";

export const Utility = () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(reposUrl);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      } catch (error) {
        console.log("FETCH ERROR:", error);
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
                  <b>Name:</b>&emsp;&emsp;&emsp;<b>{repos.name}</b>
                </li>
                <li>
                  <b>Repository:</b>&ensp;
                  <a href={repos.html_url} target="_blank" rel="noreferrer">
                    {repos.html_url}
                  </a>
                </li>
                <li>
                  <b>Description:</b>&ensp;
                  {repos.description === null || repos.description === "" ? (
                    <i>*repository</i>
                  ) : (
                    repos.description
                  )}
                </li>
                <li>
                  <b>Homepage:</b>&ensp;
                  {repos.homepage === null || repos.homepage === "" ? (
                    <i>*repository</i>
                  ) : (
                    <a href={repos.homepage} target="_blank" rel="noreferrer">
                      {repos.homepage}
                    </a>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
