import React from 'react'
import { NavLink } from 'react-router-dom';

const apply = () => {
	return (
		<div>
			<div className="d-flex flex-column flex-root">
				{/*begin::Page*/}
				<div className="page d-flex flex-row flex-column-fluid">
					{/*begin::Wrapper*/}
					<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
						{/*begin::Content wrapper*/}
						<div className="d-flex flex-column-fluid">
							{/*begin::Container*/}
							<div className="d-flex flex-column flex-column-fluid container-fluid">
								{/*begin::Toolbar*/}
								<div className="toolbar mb-5 mb-lg-7" id="kt_toolbar">
									{/*begin::Page title*/}
									<div className="page-title d-flex flex-column me-3">
										{/*begin::Title*/}
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">Careers Apply</h1>
										{/*end::Title*/}
										{/*begin::Breadcrumb*/}
										<ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">
												<NavLink to="../../demo14/dist/index.html" className="text-gray-600 text-hover-primary">Home</NavLink>
											</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Pages</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Careers</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Careers Apply</li>
											{/*end::Item*/}
										</ul>
										{/*end::Breadcrumb*/}
									</div>
									{/*end::Page title*/}
									{/*begin::Actions*/}
									<div className="d-flex align-items-center py-2 py-md-1">
										{/*begin::Wrapper*/}
										<div className="me-3">
											{/*begin::Menu*/}
											<NavLink to="#" className="btn btn-light fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
												{/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
												<span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
													</svg>
												</span>
												{/*end::Svg Icon*/}Filter</NavLink>
											{/*begin::Menu 1*/}
											<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61b9c786694eb">
												{/*begin::Header*/}
												<div className="px-7 py-5">
													<div className="fs-5 text-dark fw-bolder">Filter Options</div>
												</div>
												{/*end::Header*/}
												{/*begin::Menu separator*/}
												<div className="separator border-gray-200" />
												{/*end::Menu separator*/}
												{/*begin::Form*/}
												<div className="px-7 py-5">
													{/*begin::Input group*/}
													<div className="mb-10">
														{/*begin::Label*/}
														<label className="form-label fw-bold">Status:</label>
														{/*end::Label*/}
														{/*begin::Input*/}
														<div>
															<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61b9c786694eb" data-allow-clear="true">
																<option />
																<option value={1}>Approved</option>
																<option value={2}>Pending</option>
																<option value={2}>In Process</option>
																<option value={2}>Rejected</option>
															</select>
														</div>
														{/*end::Input*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div className="mb-10">
														{/*begin::Label*/}
														<label className="form-label fw-bold">Member Type:</label>
														{/*end::Label*/}
														{/*begin::Options*/}
														<div className="d-flex">
															{/*begin::Options*/}
															<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
																<input className="form-check-input" type="checkbox" defaultValue={1} />
																<span className="form-check-label">Author</span>
															</label>
															{/*end::Options*/}
															{/*begin::Options*/}
															<label className="form-check form-check-sm form-check-custom form-check-solid">
																<input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
																<span className="form-check-label">Customer</span>
															</label>
															{/*end::Options*/}
														</div>
														{/*end::Options*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div className="mb-10">
														{/*begin::Label*/}
														<label className="form-label fw-bold">Notifications:</label>
														{/*end::Label*/}
														{/*begin::Switch*/}
														<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
															<label className="form-check-label">Enabled</label>
														</div>
														{/*end::Switch*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Actions*/}
													<div className="d-flex justify-content-end">
														<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
														<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
													</div>
													{/*end::Actions*/}
												</div>
												{/*end::Form*/}
											</div>
											{/*end::Menu 1*/}
											{/*end::Menu*/}
										</div>
										{/*end::Wrapper*/}
										{/*begin::Button*/}
										<NavLink to="#" className="btn btn-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Create</NavLink>
										{/*end::Button*/}
									</div>
									{/*end::Actions*/}
								</div>
								{/*end::Toolbar*/}
								{/*begin::Post*/}
								<div className="content flex-column-fluid" id="kt_content">
									{/*begin::Careers - Apply*/}
									<div className="card">
										{/*begin::Body*/}
										<div className="card-body p-lg-17">
											{/*begin::Hero*/}
											<div className="position-relative mb-17">
												{/*begin::Overlay*/}
												<div className="overlay overlay-show">
													{/*begin::Image*/}
													<div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px" style={{ backgroundImage: 'url("assets/media/stock/2000x800/1.jpg")' }} />
													{/*end::Image*/}
													{/*begin::layer*/}
													<div className="overlay-layer rounded bg-black" style={{ opacity: '0.4' }} />
													{/*end::layer*/}
												</div>
												{/*end::Overlay*/}
												{/*begin::Heading*/}
												<div className="position-absolute text-white mb-8 ms-10 bottom-0">
													{/*begin::Title*/}
													<h3 className="text-white fs-2qx fw-bolder mb-3 m">Careers at KeenThemes</h3>
													{/*end::Title*/}
													{/*begin::Text*/}
													<div className="fs-5 fw-bold">You sit down. You stare at your screen. The cursor blinks.</div>
													{/*end::Text*/}
												</div>
												{/*end::Heading*/}
											</div>
											{/*end::*/}
											{/*begin::Layout*/}
											<div className="d-flex flex-column flex-lg-row mb-17">
												{/*begin::Content*/}
												<div className="flex-lg-row-fluid me-0 me-lg-20">
													{/*begin::Form*/}
													<form action className="form mb-15" method="post" id="kt_careers_form">
														{/*begin::Input group*/}
														<div className="row mb-5">
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*begin::Label*/}
																<label className="required fs-5 fw-bold mb-2">First Name</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="first_name" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*end::Label*/}
																<label className="required fs-5 fw-bold mb-2">Last Name</label>
																{/*end::Label*/}
																{/*end::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="last_name" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="row mb-5">
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*begin::Label*/}
																<label className="required fs-5 fw-bold mb-2">Email</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input className="form-control form-control-solid" placeholder name="email" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*end::Label*/}
																<label className="fs-5 fw-bold mb-2">Mobile No</label>
																{/*end::Label*/}
																{/*end::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="mobileno" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="row mb-5">
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*begin::Label*/}
																<label className="required fs-5 fw-bold mb-2">Age</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="age" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*end::Label*/}
																<label className="required fs-5 fw-bold mb-2">City</label>
																{/*end::Label*/}
																{/*end::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="city" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="d-flex flex-column mb-5 fv-row">
															{/*begin::Label*/}
															<label className="d-flex align-items-center fs-5 fw-bold mb-2">
																<span className="required">Position</span>
																<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Your payment statements may very based on selected position" />
															</label>
															{/*end::Label*/}
															{/*begin::Select*/}
															<select name="position" data-control="select2" data-placeholder="Select a position..." className="form-select form-select-solid">
																<option value="Web Developer">Web Developer</option>
																<option value="Web Designer">Web Designer</option>
																<option value="Art Director">Art Director</option>
																<option value="Finance Manager">Finance Manager</option>
																<option value="Project Manager">Project Manager</option>
																<option value="System Administrator">System Administrator</option>
															</select>
															{/*end::Select*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="row mb-5">
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*begin::Label*/}
																<label className="required fs-5 fw-bold mb-2">Expected Salary</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="salary" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
															{/*begin::Col*/}
															<div className="col-md-6 fv-row">
																{/*end::Label*/}
																<label className="required fs-5 fw-bold mb-2">Srart Date</label>
																{/*end::Label*/}
																{/*end::Input*/}
																<input type="text" className="form-control form-control-solid" placeholder name="start_date" />
																{/*end::Input*/}
															</div>
															{/*end::Col*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="d-flex flex-column mb-5 fv-row">
															{/*begin::Label*/}
															<label className="fs-5 fw-bold mb-2">Website (If Any)</label>
															{/*end::Label*/}
															{/*begin::Input*/}
															<input className="form-control form-control-solid" placeholder name="website" />
															{/*end::Input*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="d-flex flex-column mb-5">
															<label className="fs-6 fw-bold mb-2">Experience (Optional)</label>
															<textarea className="form-control form-control-solid" rows={2} name="experience" placeholder defaultValue={""} />
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="d-flex flex-column mb-8">
															<label className="fs-6 fw-bold mb-2">Application</label>
															<textarea className="form-control form-control-solid" rows={4} name="application" placeholder defaultValue={""} />
														</div>
														{/*end::Input group*/}
														{/*begin::Separator*/}
														<div className="separator mb-8" />
														{/*end::Separator*/}
														{/*begin::Submit*/}
														<button type="submit" className="btn btn-primary" id="kt_careers_submit_button">
															{/*begin::Indicator*/}
															<span className="indicator-label">Apply Now</span>
															<span className="indicator-progress">Please wait...
																<span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
															{/*end::Indicator*/}
														</button>
														{/*end::Submit*/}
													</form>
													{/*end::Form*/}
													{/*begin::Job*/}
													<div className="mb-10 mb-lg-0">
														{/*begin::Description*/}
														<div className="m-0">
															{/*begin::Title*/}
															<h4 className="fs-1 text-gray-800 w-bolder mb-6">Job Details</h4>
															{/*end::Title*/}
															{/*begin::Text*/}
															<p className="fw-bold fs-4 text-gray-600 mb-2">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</p>
															{/*end::Text*/}
														</div>
														{/*end::Description*/}
														{/*begin::Accordion*/}
														{/*begin::Section*/}
														<div className="m-0">
															{/*begin::Heading*/}
															<div className="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_3_1">
																{/*begin::Icon*/}
																<div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
																	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
																	<span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
																	<span className="svg-icon toggle-off svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="black" />
																			<rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</div>
																{/*end::Icon*/}
																{/*begin::Title*/}
																<h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Requirements</h4>
																{/*end::Title*/}
															</div>
															{/*end::Heading*/}
															{/*begin::Body*/}
															<div id="kt_job_3_1" className="collapse show fs-6 ms-1">
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with REST API</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Git knowledge is a plus</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
															</div>
															{/*end::Content*/}
															{/*begin::Separator*/}
															<div className="separator separator-dashed" />
															{/*end::Separator*/}
														</div>
														{/*end::Section*/}
														{/*begin::Section*/}
														<div className="m-0">
															{/*begin::Heading*/}
															<div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_3_2">
																{/*begin::Icon*/}
																<div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
																	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
																	<span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
																	<span className="svg-icon toggle-off svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="black" />
																			<rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</div>
																{/*end::Icon*/}
																{/*begin::Title*/}
																<h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">What is your job role?</h4>
																{/*end::Title*/}
															</div>
															{/*end::Heading*/}
															{/*begin::Body*/}
															<div id="kt_job_3_2" className="collapse fs-6 ms-1">
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with REST API</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Git knowledge is a plus</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
															</div>
															{/*end::Content*/}
															{/*begin::Separator*/}
															<div className="separator separator-dashed" />
															{/*end::Separator*/}
														</div>
														{/*end::Section*/}
														{/*begin::Section*/}
														<div className="m-0">
															{/*begin::Heading*/}
															<div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_3_3">
																{/*begin::Icon*/}
																<div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
																	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
																	<span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
																	<span className="svg-icon toggle-off svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="black" />
																			<rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</div>
																{/*end::Icon*/}
																{/*begin::Title*/}
																<h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Job Candidate Benefits</h4>
																{/*end::Title*/}
															</div>
															{/*end::Heading*/}
															{/*begin::Body*/}
															<div id="kt_job_3_3" className="collapse fs-6 ms-1">
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with REST API</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Git knowledge is a plus</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
															</div>
															{/*end::Content*/}
															{/*begin::Separator*/}
															<div className="separator separator-dashed" />
															{/*end::Separator*/}
														</div>
														{/*end::Section*/}
														{/*begin::Section*/}
														<div className="m-0">
															{/*begin::Heading*/}
															<div className="d-flex align-items-center collapsible py-3 toggle collapsed mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_3_4">
																{/*begin::Icon*/}
																<div className="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
																	{/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
																	<span className="svg-icon toggle-on svg-icon-primary svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	{/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
																	<span className="svg-icon toggle-off svg-icon-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="black" />
																			<rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="black" />
																			<rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="black" />
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</div>
																{/*end::Icon*/}
																{/*begin::Title*/}
																<h4 className="text-gray-700 fw-bolder cursor-pointer mb-0">Application Terms</h4>
																{/*end::Title*/}
															</div>
															{/*end::Heading*/}
															{/*begin::Body*/}
															<div id="kt_job_3_4" className="collapse fs-6 ms-1">
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10 mb-n1">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with REST API</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="mb-4">
																	{/*begin::Item*/}
																	<div className="d-flex align-items-center ps-10">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Git knowledge is a plus</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Item*/}
																</div>
																{/*end::Item*/}
															</div>
															{/*end::Content*/}
														</div>
														{/*end::Section*/}
														{/*end::Accordion*/}
													</div>
													{/*end::Job*/}
												</div>
												{/*end::Content*/}
												{/*begin::Sidebar*/}
												<div className="flex-lg-row-auto w-100 w-lg-275px w-xxl-350px">
													{/*begin::Careers about*/}
													<div className="card bg-light">
														{/*begin::Body*/}
														<div className="card-body">
															{/*begin::Top*/}
															<div className="mb-7">
																{/*begin::Title*/}
																<h2 className="fs-1 text-gray-800 w-bolder mb-6">About Us</h2>
																{/*end::Title*/}
																{/*begin::Text*/}
																<p className="fw-bold fs-6 text-gray-600">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</p>
																{/*end::Text*/}
															</div>
															{/*end::Top*/}
															{/*begin::Item*/}
															<div className="mb-8">
																{/*begin::Title*/}
																<h4 className="text-gray-700 w-bolder mb-0">Requirements</h4>
																{/*end::Title*/}
																{/*begin::Section*/}
																<div className="my-2">
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																</div>
																{/*end::Section*/}
															</div>
															{/*end::Item*/}
															{/*begin::Item*/}
															<div className="mb-8">
																{/*begin::Title*/}
																<h4 className="text-gray-700 w-bolder mb-0">Our Achievements</h4>
																{/*end::Title*/}
																{/*begin::Section*/}
																<div className="my-2">
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with JavaScript</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Good time-management skills</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center mb-3">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with React</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																	{/*begin::Row*/}
																	<div className="d-flex align-items-center">
																		{/*begin::Bullet*/}
																		<span className="bullet me-3" />
																		{/*end::Bullet*/}
																		{/*begin::Label*/}
																		<div className="text-gray-600 fw-bold fs-6">Experience with HTML / CSS</div>
																		{/*end::Label*/}
																	</div>
																	{/*end::Row*/}
																</div>
																{/*end::Section*/}
															</div>
															{/*end::Item*/}
															{/*begin::Link*/}
															<NavLink to="../../demo14/dist/pages/blog/post.html" className="link-primary fs-6 fw-bold">Explore More</NavLink>
															{/*end::Link*/}
														</div>
														{/*end::Body*/}
													</div>
													{/*end::Careers about*/}
												</div>
												{/*end::Sidebar*/}
											</div>
											{/*end::Layout*/}
											{/*begin::Section*/}
											<div className="mb-19">
												{/*begin::Top*/}
												<div className="text-center mb-12">
													{/*begin::Title*/}
													<h3 className="fs-2hx text-dark mb-5">Publications</h3>
													{/*end::Title*/}
													{/*begin::Text*/}
													<div className="fs-5 text-muted fw-bold">Our goal is to provide a complete and robust theme solution
														<br />to boost all of our customer’s project deployments</div>
													{/*end::Text*/}
												</div>
												{/*end::Top*/}
												{/*begin::Row*/}
												<div className="row g-10">
													{/*begin::Col*/}
													<div className="col-md-4">
														{/*begin::Publications post*/}
														<div className="card-xl-stretch me-md-6">
															{/*begin::Overlay*/}
															<NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-73.jpg">
																{/*begin::Image*/}
																<div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-73.jpg")' }} />
																{/*end::Image*/}
																{/*begin::Action*/}
																<div className="overlay-layer bg-dark card-rounded bg-opacity-25">
																	<i className="bi bi-eye-fill fs-2x text-white" />
																</div>
																{/*end::Action*/}
															</NavLink>
															{/*end::Overlay*/}
															{/*begin::Body*/}
															<div className="m-0">
																{/*begin::Title*/}
																<NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
																{/*end::Title*/}
																{/*begin::Text*/}
																<div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making a the from also not been afraid to and step away been focused create eye</div>
																{/*end::Text*/}
																{/*begin::Content*/}
																<div className="fs-6 fw-bolder">
																	{/*begin::Author*/}
																	<NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Jane Miller</NavLink>
																	{/*end::Author*/}
																	{/*begin::Date*/}
																	<span className="text-muted">on Mar 21 2021</span>
																	{/*end::Date*/}
																</div>
																{/*end::Content*/}
															</div>
															{/*end::Body*/}
														</div>
														{/*end::Publications post*/}
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-md-4">
														{/*begin::Publications post*/}
														<div className="card-xl-stretch mx-md-3">
															{/*begin::Overlay*/}
															<NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-74.jpg">
																{/*begin::Image*/}
																<div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-74.jpg")' }} />
																{/*end::Image*/}
																{/*begin::Action*/}
																<div className="overlay-layer bg-dark card-rounded bg-opacity-25">
																	<i className="bi bi-eye-fill fs-2x text-white" />
																</div>
																{/*end::Action*/}
															</NavLink>
															{/*end::Overlay*/}
															{/*begin::Body*/}
															<div className="m-0">
																{/*begin::Title*/}
																<NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
																{/*end::Title*/}
																{/*begin::Text*/}
																<div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making the from v4 to v5 but we have also not been afraid to step away been focused</div>
																{/*end::Text*/}
																{/*begin::Content*/}
																<div className="fs-6 fw-bolder">
																	{/*begin::Author*/}
																	<NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Cris Morgan</NavLink>
																	{/*end::Author*/}
																	{/*begin::Date*/}
																	<span className="text-muted">on Apr 14 2021</span>
																	{/*end::Date*/}
																</div>
																{/*end::Content*/}
															</div>
															{/*end::Body*/}
														</div>
														{/*end::Publications post*/}
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-md-4">
														{/*begin::Publications post*/}
														<div className="card-xl-stretch ms-md-6">
															{/*begin::Overlay*/}
															<NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-47.jpg">
																{/*begin::Image*/}
																<div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-47.jpg")' }} />
																{/*end::Image*/}
																{/*begin::Action*/}
																<div className="overlay-layer bg-dark card-rounded bg-opacity-25">
																	<i className="bi bi-eye-fill fs-2x text-white" />
																</div>
																{/*end::Action*/}
															</NavLink>
															{/*end::Overlay*/}
															{/*begin::Body*/}
															<div className="m-0">
																{/*begin::Title*/}
																<NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
																{/*end::Title*/}
																{/*begin::Text*/}
																<div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making the from v4 to v5 but we’ve also not been afraid to step away been focused</div>
																{/*end::Text*/}
																{/*begin::Content*/}
																<div className="fs-6 fw-bolder">
																	{/*begin::Author*/}
																	<NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Carles Nilson</NavLink>
																	{/*end::Author*/}
																	{/*begin::Date*/}
																	<span className="text-muted">on May 14 2021</span>
																	{/*end::Date*/}
																</div>
																{/*end::Content*/}
															</div>
															{/*end::Body*/}
														</div>
														{/*end::Publications post*/}
													</div>
													{/*end::Col*/}
												</div>
												{/*end::Row*/}
											</div>
											{/*end::Section*/}
											{/*begin::Card*/}
											<div className="card mb-4 bg-light text-center">
												{/*begin::Body*/}
												<div className="card-body py-12">
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/facebook-4.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/instagram-2-1.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/github.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/behance.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/pinterest-p.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/twitter.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/dribbble-icon-1.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Card*/}
										</div>
										{/*end::Body*/}
									</div>
									{/*end::Careers - Apply*/}
								</div>
								{/*end::Post*/}
								{/*begin::Footer*/}
								<div className="footer py-4 d-flex flex-column flex-md-row flex-stack" id="kt_footer">
									{/*begin::Copyright*/}
									<div className="text-dark order-2 order-md-1">
										<span className="text-muted fw-bold me-1">2021©</span>
										<NavLink to="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</NavLink>
									</div>
									{/*end::Copyright*/}
									{/*begin::Menu*/}
									<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
										<li className="menu-item">
											<NavLink to="https://keenthemes.com" target="_blank" className="menu-link px-2">About</NavLink>
										</li>
										<li className="menu-item">
											<NavLink to="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</NavLink>
										</li>
										<li className="menu-item">
											<NavLink to="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</NavLink>
										</li>
									</ul>
									{/*end::Menu*/}
								</div>
								{/*end::Footer*/}
							</div>
							{/*end::Container*/}
						</div>
						{/*end::Content wrapper*/}
					</div>
					{/*end::Wrapper*/}
				</div>
				{/*end::Page*/}
			</div>

		</div>
	);
}

export default apply
