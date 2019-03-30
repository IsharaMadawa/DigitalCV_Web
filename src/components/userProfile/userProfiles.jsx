import React, { Component } from "react";
import { toast } from "react-toastify";
import { getUserProfiles, setDefaultProfile } from "../../services/cvService";

class UserProfiles extends Component {
  state = {
    profilesData: []
  };

  async componentDidMount() {
    const profiles = await getUserProfiles();
    this.setState({ profilesData: profiles.data });
  }

  async toggleSelectDefault(_id) {
    if (window.confirm("Are you sure you want to chenge defauld profile?")) {
      try {
        await setDefaultProfile(_id);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) toast.error(ex.message);
      }

      toast.success("Default Profile Update Successful.");
    } else {
      toast.info("Operation Canceled.");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
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
              {this.state.profilesData.map(prof => (
                <tr key={prof._id}>
                  <th scope="row">{prof._id}</th>
                  <td>{prof.createdDate}</td>
                  <td>{prof.lastUpdatedDate}</td>
                  <td align="center">
                    {prof.defaultProfile === true ? (
                      <input
                        name="defaultProfileCheck"
                        type="radio"
                        aria-label="Checkbox for following text input"
                        onChange={() => this.toggleSelectDefault(prof._id)}
                        defaultChecked
                      />
                    ) : (
                      <input
                        name="defaultProfileCheck"
                        type="radio"
                        aria-label="Checkbox for following text input"
                        onChange={() => this.toggleSelectDefault(prof._id)}
                      />
                    )}
                  </td>
                  <td>
                    <button type="button" className="btn btn-warning">
                      Update
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
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
  }
}

export default UserProfiles;
