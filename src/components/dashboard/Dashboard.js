import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../Layout/Spinner'
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, auth: {user}, profile: {loading, profile}, deleteAccount }) => {

    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])


    return (loading && profile == null ? <Spinner /> : (
        <>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user"></i>
                Welcome {user && user.name}
            </p>
            {profile !== null ?
                (<>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                    <div className="my-2">
                        <button className="btn btn-danger" onClick={() => deleteAccount()}>
                            <i className="fas fa-user-minus"></i>
                             Delete My Account
                        </button>
                    </div>
                </>) : (<>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to="/create/profile" className="btn btn-primary">Create profile</Link>
                </>)
            }
        </>
    ))
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProsp = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProsp, {getCurrentProfile,deleteAccount})(Dashboard)
