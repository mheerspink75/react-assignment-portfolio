import React, { useEffect, useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const url = "https://api.github.com/users/mheerspink75";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.log("error", error);
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
            <h1 id="name">{profile.name}<br></br><a id="resume" href="https://drive.google.com/file/d/1zf5ePj1PSc1JixMhqqiZDZinqdfKVSWj/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></h1>
            <div>
            
            </div>
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