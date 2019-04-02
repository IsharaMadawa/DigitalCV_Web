import React, { Component } from "react";
import { toast } from "react-toastify";
import { getUserProfiles, setDefaultProfile } from "../../services/cvService";

class UserProfiles extends Component {
  state = {
    profilesData: [],
    isUpdated: false
  };

  async componentDidMount() {
    const profiles = await getUserProfiles();
    this.setState({ profilesData: profiles });
  }

  async toggleDefault(_id) {
    if (window.confirm("Are you sure you want to chenge defauld profile?")) {
      try {
        await setDefaultProfile(_id);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) toast.error(ex.message);
      }

      toast.success("Default Profile Update Successful.");
      this.setState({ isUpdated: true });
    } else {
      toast.info("Operation Canceled.");
    }
  }

  async componentDidUpdate() {
    if (this.state.isUpdated === true) {
      const newProfiles = await getUserProfiles();
      this.setState({ profilesData: newProfiles, isUpdated: false });
    }
  }

  render() {
    if (this.state.profilesData !== null) {
      if (this.state.profilesData.data) {
        return (
          <React.Fragment>
            <div>
              <button
                type="button"
                className="btn btn-success float-right mb-2"
              >
                <i className="far fa-newspaper mr-2"></i> Create New Profile
              </button>
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
                        <i className="fas fa-user-edit mr-2"></i>Update
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-danger">
                        <i className="fas fa-dumpster mr-2"></i>Delete
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
