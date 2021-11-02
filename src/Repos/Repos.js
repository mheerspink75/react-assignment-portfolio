import React, { useEffect, useState } from "react";

export const Utility = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/mheerspink75/repos"
      );
      const data = await response.json();
      setRepos(data);
    }
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
                  <b>Description:</b> {repos.description}
                </li>
                <li>
                  <b>Homepage:</b>{" "}
                  <a href={repos.homepage} target="_blank" rel="noreferrer">
                    {repos.homepage}
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
