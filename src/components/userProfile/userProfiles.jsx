import React, { Component } from "react";
import { toast } from "react-toastify";
import { getUserProfiles, setDefaultProfile } from "../../services/cvService";
import CreateProfileForm from "../userProfile/eidtProfile/createProfileForm";

class UserProfiles extends Component {
  state = {
    profilesData: [],
    isUpdated: false,
    isCreateForm: false
  };

  async componentDidMount() {
    const profiles = await getUserProfiles();
    this.setState({ profilesData: profiles });
  }

  async toggleDefault(_id) {
    if (window.confirm("Are you sure you want to change default profile?")) {
      try {
        await setDefaultProfile(_id);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) toast.error(ex.message);
      }

      toast.success("Default Profile Update Successful..!");
      this.setState({ isUpdated: true });
    } else {
      toast.info("Operation Canceled.");
    }
  }

  toggleCreateProfile = val => {
    this.setState({ isCreateForm: val });
  };

  async componentDidUpdate() {
    if (this.state.isUpdated === true) {
      const newProfiles = await getUserProfiles();
      this.setState({ profilesData: newProfiles, isUpdated: false });
    }
  }

  onSubmitHandler() {
    this.setState({ isCreateForm: false });
    toast.success("Create New Profile Successful..!");
  }

  render() {
    if (this.state.profilesData !== null) {
      if (this.state.profilesData.data) {
        return (
          <React.Fragment>
            {this.state.isCreateForm ? (
              <div>
                <CreateProfileForm
                  onCancel={this.toggleCreateProfile}
                  onSubmit={this.onSubmitHandler}
                />
              </div>
            ) : null}
            <div>
              {!this.state.isCreateForm ? (
                <button
                  type="button"
                  className="btn btn-success float-right mb-2"
                  onClick={() => this.toggleCreateProfile(true)}
                >
                  <i className="far fa-newspaper mr-2" /> Create New Profile
                </button>
              ) : null}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Create Date</th>
                    <th scope="col">Last Updated Date</th>
                    <th scope="col">Default Profile</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.profilesData.data.map(prof => (
                    <tr key={prof._id}>
                      <th scope="row">{prof._id}</th>
                      <td>{prof.createdDate}</td>
                      <td>{prof.lastUpdatedDate}</td>
                      <td align="center">
                        <input
                          name="defaultProfileCheck"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          onChange={() => this.toggleDefault(prof._id)}
                          checked={prof.defaultProfile}
                        />
                      </td>
                      <td>
                        <button type="button" className="btn btn-warning">
                          <i className="fas fa-user-edit mr-2" />
                          Update
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-danger">
                          <i className="fas fa-dumpster mr-2" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <div>
            <div id="loading-mask" />
          </div>
        );
      }
    }
  }
}

export default UserProfiles;
