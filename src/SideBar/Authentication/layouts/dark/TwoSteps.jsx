import React from 'react'
import { NavLink } from 'react-router-dom';

const TwoSteps = () => {
	return (
		<div>
			<div className="d-flex flex-column flex-root">
				{/*begin::Authentication - Two-stes */}
				<div
					className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
					style={{
						backgroundImage: "url(assets/media/illustrations/sketchy-1/14-dark.png"
					}}
				>
					{/*begin::Content*/}
					<div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
						{/*begin::Logo*/}
						<NavLink to="../../demo14/dist/index.html" className="mb-12">
							<img
								alt="Logo"
								src="/assets/media/logos/logo-2.svg"
								className="h-40px"
							/>
						</NavLink>
						{/*end::Logo*/}
						{/*begin::Wrapper*/}
						<div className="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
							{/*begin::Form*/}
							<form
								className="form w-100 mb-10"
								noValidate="novalidate"
								id="kt_sing_in_two_steps_form"
							>
								{/*begin::Icon*/}
								<div className="text-center mb-10">
									<img
										alt="Logo"
										className="mh-125px"
										src="/assets/media/svg/misc//smartphone.svg"
									/>
								</div>
								{/*end::Icon*/}
								{/*begin::Heading*/}
								<div className="text-center mb-10">
									{/*begin::Title*/}
									<h1 className="text-dark mb-3">Two Step Verification</h1>
									{/*end::Title*/}
									{/*begin::Sub-title*/}
									<div className="text-muted fw-bold fs-5 mb-5">
										Enter the verification code we sent to
									</div>
									{/*end::Sub-title*/}
									{/*begin::Mobile no*/}
									<div className="fw-bolder text-dark fs-3">******7859</div>
									{/*end::Mobile no*/}
								</div>
								{/*end::Heading*/}
								{/*begin::Section*/}
								<div className="mb-10 px-md-10">
									{/*begin::Label*/}
									<div className="fw-bolder text-start text-dark fs-6 mb-1 ms-1">
										Type your 6 digit security code
									</div>
									{/*end::Label*/}
									{/*begin::Input group*/}
									<div className="d-flex flex-wrap flex-stack">
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue={3}
										/>
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue={0}
										/>
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue={7}
										/>
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue
										/>
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue
										/>
										<input
											type="text"
											data-inputmask="'mask': '9', 'placeholder': ''"
											maxLength={1}
											className="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2"
											defaultValue
										/>
									</div>
									{/*begin::Input group*/}
								</div>
								{/*end::Section*/}
								{/*begin::Submit*/}
								<div className="d-flex flex-center">
									<button
										type="button"
										id="kt_sing_in_two_steps_submit"
										className="btn btn-lg btn-primary fw-bolder"
									>
										<span className="indicator-label">Submit</span>
										<span className="indicator-progress">
											Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2" />
										</span>
									</button>
								</div>
								{/*end::Submit*/}
							</form>
							{/*end::Form*/}
							{/*begin::Notice*/}
							<div className="text-center fw-bold fs-5">
								<span className="text-muted me-1">Didn’t get the code ?</span>
								<NavLink to="#" className="link-primary fw-bolder fs-5 me-1">
									Resend
								</NavLink>
								<span className="text-muted me-1">or</span>
								<NavLink to="#" className="link-primary fw-bolder fs-5">
									Call Us
								</NavLink>
							</div>
							{/*end::Notice*/}
						</div>
						{/*end::Wrapper*/}
					</div>
					{/*end::Content*/}
					{/*begin::Footer*/}
					<div className="d-flex flex-center flex-column-auto p-10">
						{/*begin::Links*/}
						<div className="d-flex align-items-center fw-bold fs-6">
							<NavLink
								to="https://keenthemes.com"
								className="text-muted text-hover-primary px-2"
							>
								About
							</NavLink>
							<NavLink
								to="mailto:support@keenthemes.com"
								className="text-muted text-hover-primary px-2"
							>
								Contact
							</NavLink>
							<NavLink
								to="https://1.envato.market/EA4JP"
								className="text-muted text-hover-primary px-2"
							>
								Contact Us
							</NavLink>
						</div>
						{/*end::Links*/}
					</div>
					{/*end::Footer*/}
				</div>
				{/*end::Authentication - Two-stes*/}
			</div>

		</div>
	)
}

export default TwoSteps
