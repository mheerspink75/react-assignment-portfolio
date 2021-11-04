import "./Profile.css";
import React, { useEffect, useState } from "react";

const resume =
  "https://drive.google.com/file/d/1zf5ePj1PSc1JixMhqqiZDZinqdfKVSWj/view?usp=sharing";

const url = "https://api.github.com/users/mheerspink75";

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      } catch (error) {
        console.log("FETCH ERROR:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {profile && (
        <div className="Profile">
          <div id="c4">
            <img id="profilePic" src={profile.avatar_url} alt="profile pic" />
            <h1 id="name">
              {profile.name}
              <br></br>
              <a id="resume" href={resume} target="_blank" rel="noreferrer">
                <i className="bi bi-file-earmark-pdf"> Resume</i>
              </a>
            </h1>
          </div>
          <p id="bio">
            <b>{profile.bio}</b>
          </p>
          <p id="forHire">
            <i>
              Available for hire? {profile.hireable === true ? "YES" : "NO"}
            </i>
          </p>
        </div>
      )}
    </div>
  );
};
