import React, { Component } from "react";
import CulinaryProfiles from "../../Profiles.json";
import EnergyProfiles from "../../EnergyProfiles.json";
import ProfileDetails from "./ProfileDetails";

class ProfileContainer extends Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    const { score } = this.props;

    if (score !== []) {
      // debugger;
      this.setState({ profile: CulinaryProfiles[0] });
    } else {
      this.setState({ profile: CulinaryProfiles[1] });
    }
  }

  componentWillUnmount() {}

  render() {
    const { profile } = this.state;
    const newProfile = CulinaryProfiles[0];
    if (profile === {}) return;

    return (
      <div className="profile-container">
        <ProfileDetails profile={newProfile} />
      </div>
    );
  }
}

export default ProfileContainer;
