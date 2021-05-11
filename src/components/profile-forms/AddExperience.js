import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExpeience } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const AddExperience = ({ addExpeience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        from: '',
        to: '',
        current: false,
        description: '',
        location: ''
    })
    const [toDateDisabled, toggleDisabled] = useState(false)

    const { company, title, from, to, current, description, location } = formData

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpeience(formData, history)
    }

    return (
        <>
        <h1 className="large text-primary">
        Add An Experience
        </h1>
        <p className="lead">
            <i className="fas fa-code-branch"></i> Add any developer/programming
            positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
            <input type="text" placeholder="* Job Title" name="title" required value={title} onChange={handleChange} />
            </div>
            <div className="form-group">
            <input type="text" placeholder="* Company" name="company" required onChange={handleChange} value={company} />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Location" name="location" onChange={handleChange} value={location} />
            </div>
            <div className="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" onChange={handleChange} value={from} />
            </div>
            <div className="form-group">
                <p><input type="checkbox" checked={current} name="current" value={current} onChange={() => { setFormData({ ...formData, current: !current }); toggleDisabled(!toDateDisabled) }} /> Current Job</p>
            </div>
            <div className="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" onChange={handleChange} value={to} />
            </div>
            <div className="form-group">
            <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Job Description"
                onChange={handleChange} value={description}
            ></textarea>
            </div>
            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        </form>   
        </>
    )
}

AddExperience.propTypes = {
    addExpeience: PropTypes.func.isRequired,
}

export default connect(null, {addExpeience})(withRouter(AddExperience))
