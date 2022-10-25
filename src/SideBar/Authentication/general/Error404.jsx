import React from 'react'
import { NavLink } from 'react-router-dom';

const Error404 = () => {
	return (
		<>
			<div className="d-flex flex-column flex-root">
				{/*begin::Authentication - 404 Page*/}
				<div className="d-flex flex-column flex-center flex-column-fluid p-10">
					{/*begin::Illustration*/}
					<img
						src="/assets/media/illustrations/sketchy-1/18.png"
						alt
						className="mw-100 mb-10 h-lg-450px"
					/>
					{/*end::Illustration*/}
					{/*begin::Message*/}
					<h1 className="fw-bold mb-10" style={{ color: "#A3A3C7" }}>
						Seems there is nothing here
					</h1>
					{/*end::Message*/}
					{/*begin::Link*/}
					<NavLink to="../../demo14/dist/index.html" className="btn btn-primary">
						Return Home
					</NavLink>
					{/*end::Link*/}
				</div>
				{/*end::Authentication - 404 Page*/}
			</div>

		</>
	)
}

export default Error404
