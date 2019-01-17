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
    const button = e.target.innerText;
    const profile = e.target.value;
    let newProfile = [];

    if (profile === "consumerProfile") {
      newProfile = CulinaryProfiles.filter(
        profile => profile.profile.type === button
      );
      this.setState({ consumerProfile: newProfile[0].profile });
    } else {
      newProfile = EnergyProfiles.filter(
        profile => profile.profile.type === button
      );
      this.setState({ energyProfile: newProfile[0].profile });
    }
  };

  render() {
    const { energyProfile, consumerProfile } = this.state;

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
          currentConsumerProfile={consumerProfile}
          currentEnergyProfile={energyProfile}
          handleBtnClick={this.handleBtnClick}
        />
      </main>
    );
  }
}

export default ProfileContainer;
