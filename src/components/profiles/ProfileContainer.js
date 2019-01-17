import React, { Component } from "react";
import CulinaryProfiles from "../../assets/libs/Profiles.json";
import EnergyProfiles from "../../assets/libs/EnergyProfiles.json";
import Articles from "../../assets/libs/Article.json";

import EnergyProfile from "./EnergyProfile";
import ProfileDetails from "./ProfileDetails";
import ProfileLinks from "./ProfileLinks";
import ArticleDetail from "./Article";

import Score from "./Score";

import "./css/ProfileContainer.css";

class ProfileContainer extends Component {
  state = {
    energyProfile: {},
    consumerProfile: {}
  };

  componentDidMount() {
    const { scores } = this.props;
    // if EnergyProfiles.min > score.energy > EnergyProfiles.max
    // return profile
    // if CulinaryProfiles.min > score.consumer > CulinaryProfiles.max
    // return profile
    EnergyProfiles.map(profile => {
      if (profile.profile.min < scores[0].score < profile.profile.max) {
        // debugger;
        this.setState({ energyProfile: profile.profile });
      }
      return profile;
    });
    CulinaryProfiles.map(profile => {
      if (profile.profile.min < scores[1].score < profile.profile.max) {
        // debugger;
        this.setState({ consumerProfile: profile.profile });
      }
      return profile;
    });
  }

  componentWillUnmount() {}

  handleBtnClick = e => {
    e.preventDefault();
    const newProfile = e.target.value;
    debugger;
    this.setState({ profile: newProfile });
  };

  render() {
    const { energyProfile, consumerProfile } = this.state;
    // const newProfile = CulinaryProfiles[0];
    // if (consumerProfile === {} || energyProfile === {}) return;

    return (
      <main className="profile-container">
        <ArticleDetail article={Articles[0]} />
        <Score scores={this.props.scores} />
        {consumerProfile.hasOwnProperty("type") && (
          <ProfileDetails profile={consumerProfile} />
        )}
        {energyProfile.hasOwnProperty("type") && (
          <EnergyProfile profile={energyProfile} />
        )}
        <ArticleDetail article={Articles[1]} />

        <ProfileLinks
          profiles={CulinaryProfiles}
          energy={EnergyProfiles}
          currentProfile={consumerProfile}
          handleBtnClick={this.handleBtnClick}
        />
      </main>
    );
  }
}

export default ProfileContainer;
