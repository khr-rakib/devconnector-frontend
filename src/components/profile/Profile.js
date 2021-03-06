import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner'
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Profile = ({ match, getProfileById, profile : {profile,loading}, auth }) => {
    
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])

    return (
        <>
        {profile === null || loading ? <Spinner /> : (
            <>
                    <Link to="/profiles" className="btn btn-light">Back to profiles</Link>
                    {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && <Link to="/edit-profile" className="btn btn-dark">Edit profile</Link>}
            </>
        )}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile)
