import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
    })
    const [toDateDisabled, toggleDisabled] = useState(false)

    const { school, degree, fieldofstudy, from, to, current, description } = formData

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addEducation(formData, history)
    }

    return (
        <>
        <h1 className="large text-primary">
        Add Your Education
        </h1>
        <p className="lead">
            <i className="fas fa-code-branch"></i> Add any school or bootcamp that you have attended
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
            <input type="text" placeholder="* School or Bootcamp" name="school" required value={school} onChange={handleChange} />
            </div>
            <div className="form-group">
            <input type="text" placeholder="* Degree or Certificate" name="degree" required onChange={handleChange} value={degree} />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Field of study" name="fieldofstudy" onChange={handleChange} value={fieldofstudy} />
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
                placeholder="Program Description"
                onChange={handleChange} value={description}
            ></textarea>
            </div>
            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        </form>   
        </>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, {addEducation})(withRouter(AddEducation))
