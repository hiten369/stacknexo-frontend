import React from 'react'
import { NavLink } from 'react-router-dom';

const GettingStarted = () => {
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
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">
											Getting Started
										</h1>
										{/*end::Title*/}
										{/*begin::Breadcrumb*/}
										<ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">
												<NavLink
													to="../../demo14/dist/index.html"
													className="text-gray-600 text-hover-primary"
												>
													Home
												</NavLink>
											</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Customers</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">
												Getting Started
											</li>
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
											<NavLink
												to="#"
												className="btn btn-light fw-bolder"
												data-kt-menu-trigger="click"
												data-kt-menu-placement="bottom-end"
											>
												{/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
												<span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
													>
														<path
															d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
															fill="black"
														/>
													</svg>
												</span>
												{/*end::Svg Icon*/}Filter
											</NavLink>
											{/*begin::Menu 1*/}
											<div
												className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
												data-kt-menu="true"
												id="kt_menu_61b9c7c8d2197"
											>
												{/*begin::Header*/}
												<div className="px-7 py-5">
													<div className="fs-5 text-dark fw-bolder">
														Filter Options
													</div>
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
															<select
																className="form-select form-select-solid"
																data-kt-select2="true"
																data-placeholder="Select option"
																data-dropdown-parent="#kt_menu_61b9c7c8d2197"
																data-allow-clear="true"
															>
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
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
																<span className="form-check-label">Author</span>
															</label>
															{/*end::Options*/}
															{/*begin::Options*/}
															<label className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={2}
																	defaultChecked="checked"
																/>
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
														<label className="form-label fw-bold">
															Notifications:
														</label>
														{/*end::Label*/}
														{/*begin::Switch*/}
														<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
																name="notifications"
																defaultChecked="checked"
															/>
															<label className="form-check-label">Enabled</label>
														</div>
														{/*end::Switch*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Actions*/}
													<div className="d-flex justify-content-end">
														<button
															type="reset"
															className="btn btn-sm btn-light btn-active-light-primary me-2"
															data-kt-menu-dismiss="true"
														>
															Reset
														</button>
														<button
															type="submit"
															className="btn btn-sm btn-primary"
															data-kt-menu-dismiss="true"
														>
															Apply
														</button>
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
										<NavLink
											to="#"
											className="btn btn-dark fw-bolder"
											data-bs-toggle="modal"
											data-bs-target="#kt_modal_create_app"
											id="kt_toolbar_primary_button"
										>
											Create
										</NavLink>
										{/*end::Button*/}
									</div>
									{/*end::Actions*/}
								</div>
								{/*end::Toolbar*/}
								{/*begin::Post*/}
								<div className="content flex-column-fluid" id="kt_content">
									{/*begin::Card*/}
									<div className="card">
										{/*begin::Card body*/}
										<div className="card-body p-0">
											{/*begin::Wrapper*/}
											<div className="card-px text-center py-20 my-10">
												{/*begin::Title*/}
												<h2 className="fs-2x fw-bolder mb-10">Welcome!</h2>
												{/*end::Title*/}
												{/*begin::Description*/}
												<p className="text-gray-400 fs-4 fw-bold mb-10">
													There are no customers added yet.
													<br />
													Kickstart your CRM by adding a your first customer
												</p>
												{/*end::Description*/}
												{/*begin::Action*/}
												<NavLink
													to="#"
													className="btn btn-primary"
													data-bs-toggle="modal"
													data-bs-target="#kt_modal_add_customer"
												>
													Add Customer
												</NavLink>
												{/*end::Action*/}
											</div>
											{/*end::Wrapper*/}
											{/*begin::Illustration*/}
											<div className="text-center px-4">
												<img
													className="mw-100 mh-300px"
													alt
													src="/assets/media/illustrations/sketchy-1/2.png"
												/>
											</div>
											{/*end::Illustration*/}
										</div>
										{/*end::Card body*/}
									</div>
									{/*end::Card*/}
									{/*begin::Modals*/}
									{/*begin::Modal - Customers - Add*/}
									<div
										className="modal fade"
										id="kt_modal_add_customer"
										tabIndex={-1}
										aria-hidden="true"
									>
										{/*begin::Modal dialog*/}
										<div className="modal-dialog modal-dialog-centered mw-650px">
											{/*begin::Modal content*/}
											<div className="modal-content">
												{/*begin::Form*/}
												<form
													className="form"
													action="#"
													id="kt_modal_add_customer_form"
													data-kt-redirect="../../demo14/dist/apps/customers/list.html"
												>
													{/*begin::Modal header*/}
													<div
														className="modal-header"
														id="kt_modal_add_customer_header"
													>
														{/*begin::Modal title*/}
														<h2 className="fw-bolder">Add a Customer</h2>
														{/*end::Modal title*/}
														{/*begin::Close*/}
														<div
															id="kt_modal_add_customer_close"
															className="btn btn-icon btn-sm btn-active-icon-primary"
														>
															{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
															<span className="svg-icon svg-icon-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<rect
																		opacity="0.5"
																		x={6}
																		y="17.3137"
																		width={16}
																		height={2}
																		rx={1}
																		transform="rotate(-45 6 17.3137)"
																		fill="black"
																	/>
																	<rect
																		x="7.41422"
																		y={6}
																		width={16}
																		height={2}
																		rx={1}
																		transform="rotate(45 7.41422 6)"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
														</div>
														{/*end::Close*/}
													</div>
													{/*end::Modal header*/}
													{/*begin::Modal body*/}
													<div className="modal-body py-10 px-lg-17">
														{/*begin::Scroll*/}
														<div
															className="scroll-y me-n7 pe-7"
															id="kt_modal_add_customer_scroll"
															data-kt-scroll="true"
															data-kt-scroll-activate="{default: false, lg: true}"
															data-kt-scroll-max-height="auto"
															data-kt-scroll-dependencies="#kt_modal_add_customer_header"
															data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
															data-kt-scroll-offset="300px"
														>
															{/*begin::Input group*/}
															<div className="fv-row mb-7">
																{/*begin::Label*/}
																<label className="required fs-6 fw-bold mb-2">
																	Name
																</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input
																	type="text"
																	className="form-control form-control-solid"
																	placeholder
																	name="name"
																	defaultValue="Sean Bean"
																/>
																{/*end::Input*/}
															</div>
															{/*end::Input group*/}
															{/*begin::Input group*/}
															<div className="fv-row mb-7">
																{/*begin::Label*/}
																<label className="fs-6 fw-bold mb-2">
																	<span className="required">Email</span>
																	<i
																		className="fas fa-exclamation-circle ms-1 fs-7"
																		data-bs-toggle="tooltip"
																		title="Email address must be active"
																	/>
																</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input
																	type="email"
																	className="form-control form-control-solid"
																	placeholder
																	name="email"
																	defaultValue="sean@dellito.com"
																/>
																{/*end::Input*/}
															</div>
															{/*end::Input group*/}
															{/*begin::Input group*/}
															<div className="fv-row mb-15">
																{/*begin::Label*/}
																<label className="fs-6 fw-bold mb-2">
																	Description
																</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<input
																	type="text"
																	className="form-control form-control-solid"
																	placeholder
																	name="description"
																/>
																{/*end::Input*/}
															</div>
															{/*end::Input group*/}
															{/*begin::Billing toggle*/}
															<div
																className="fw-bolder fs-3 rotate collapsible mb-7"
																data-bs-toggle="collapse"
																to="#kt_modal_add_customer_billing_info"
																role="button"
																aria-expanded="false"
																aria-controls="kt_customer_view_details"
															>
																Shipping Information
																<span className="ms-2 rotate-180">
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																	<span className="svg-icon svg-icon-3">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<path
																				d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</span>
															</div>
															{/*end::Billing toggle*/}
															{/*begin::Billing form*/}
															<div
																id="kt_modal_add_customer_billing_info"
																className="collapse show"
															>
																{/*begin::Input group*/}
																<div className="d-flex flex-column mb-7 fv-row">
																	{/*begin::Label*/}
																	<label className="required fs-6 fw-bold mb-2">
																		Address Line 1
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<input
																		className="form-control form-control-solid"
																		placeholder
																		name="address1"
																		defaultValue="101, Collins Street"
																	/>
																	{/*end::Input*/}
																</div>
																{/*end::Input group*/}
																{/*begin::Input group*/}
																<div className="d-flex flex-column mb-7 fv-row">
																	{/*begin::Label*/}
																	<label className="fs-6 fw-bold mb-2">
																		Address Line 2
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<input
																		className="form-control form-control-solid"
																		placeholder
																		name="address2"
																		defaultValue
																	/>
																	{/*end::Input*/}
																</div>
																{/*end::Input group*/}
																{/*begin::Input group*/}
																<div className="d-flex flex-column mb-7 fv-row">
																	{/*begin::Label*/}
																	<label className="required fs-6 fw-bold mb-2">
																		Town
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<input
																		className="form-control form-control-solid"
																		placeholder
																		name="city"
																		defaultValue="Melbourne"
																	/>
																	{/*end::Input*/}
																</div>
																{/*end::Input group*/}
																{/*begin::Input group*/}
																<div className="row g-9 mb-7">
																	{/*begin::Col*/}
																	<div className="col-md-6 fv-row">
																		{/*begin::Label*/}
																		<label className="required fs-6 fw-bold mb-2">
																			State / Province
																		</label>
																		{/*end::Label*/}
																		{/*begin::Input*/}
																		<input
																			className="form-control form-control-solid"
																			placeholder
																			name="state"
																			defaultValue="Victoria"
																		/>
																		{/*end::Input*/}
																	</div>
																	{/*end::Col*/}
																	{/*begin::Col*/}
																	<div className="col-md-6 fv-row">
																		{/*begin::Label*/}
																		<label className="required fs-6 fw-bold mb-2">
																			Post Code
																		</label>
																		{/*end::Label*/}
																		{/*begin::Input*/}
																		<input
																			className="form-control form-control-solid"
																			placeholder
																			name="postcode"
																			defaultValue={3000}
																		/>
																		{/*end::Input*/}
																	</div>
																	{/*end::Col*/}
																</div>
																{/*end::Input group*/}
																{/*begin::Input group*/}
																<div className="d-flex flex-column mb-7 fv-row">
																	{/*begin::Label*/}
																	<label className="fs-6 fw-bold mb-2">
																		<span className="required">Country</span>
																		<i
																			className="fas fa-exclamation-circle ms-1 fs-7"
																			data-bs-toggle="tooltip"
																			title="Country of origination"
																		/>
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<select
																		name="country"
																		aria-label="Select a Country"
																		data-control="select2"
																		data-placeholder="Select a Country..."
																		data-dropdown-parent="#kt_modal_add_customer"
																		className="form-select form-select-solid fw-bolder"
																	>
																		<option value>Select a Country...</option>
																		<option value="AF">Afghanistan</option>
																		<option value="AX">Aland Islands</option>
																		<option value="AL">Albania</option>
																		<option value="DZ">Algeria</option>
																		<option value="AS">American Samoa</option>
																		<option value="AD">Andorra</option>
																		<option value="AO">Angola</option>
																		<option value="AI">Anguilla</option>
																		<option value="AG">Antigua and Barbuda</option>
																		<option value="AR">Argentina</option>
																		<option value="AM">Armenia</option>
																		<option value="AW">Aruba</option>
																		<option value="AU">Australia</option>
																		<option value="AT">Austria</option>
																		<option value="AZ">Azerbaijan</option>
																		<option value="BS">Bahamas</option>
																		<option value="BH">Bahrain</option>
																		<option value="BD">Bangladesh</option>
																		<option value="BB">Barbados</option>
																		<option value="BY">Belarus</option>
																		<option value="BE">Belgium</option>
																		<option value="BZ">Belize</option>
																		<option value="BJ">Benin</option>
																		<option value="BM">Bermuda</option>
																		<option value="BT">Bhutan</option>
																		<option value="BO">
																			Bolivia, Plurinational State of
																		</option>
																		<option value="BQ">
																			Bonaire, Sint Eustatius and Saba
																		</option>
																		<option value="BA">Bosnia and Herzegovina</option>
																		<option value="BW">Botswana</option>
																		<option value="BR">Brazil</option>
																		<option value="IO">
																			British Indian Ocean Territory
																		</option>
																		<option value="BN">Brunei Darussalam</option>
																		<option value="BG">Bulgaria</option>
																		<option value="BF">Burkina Faso</option>
																		<option value="BI">Burundi</option>
																		<option value="KH">Cambodia</option>
																		<option value="CM">Cameroon</option>
																		<option value="CA">Canada</option>
																		<option value="CV">Cape Verde</option>
																		<option value="KY">Cayman Islands</option>
																		<option value="CF">
																			Central African Republic
																		</option>
																		<option value="TD">Chad</option>
																		<option value="CL">Chile</option>
																		<option value="CN">China</option>
																		<option value="CX">Christmas Island</option>
																		<option value="CC">
																			Cocos (Keeling) Islands
																		</option>
																		<option value="CO">Colombia</option>
																		<option value="KM">Comoros</option>
																		<option value="CK">Cook Islands</option>
																		<option value="CR">Costa Rica</option>
																		<option value="CI">Côte d'Ivoire</option>
																		<option value="HR">Croatia</option>
																		<option value="CU">Cuba</option>
																		<option value="CW">Curaçao</option>
																		<option value="CZ">Czech Republic</option>
																		<option value="DK">Denmark</option>
																		<option value="DJ">Djibouti</option>
																		<option value="DM">Dominica</option>
																		<option value="DO">Dominican Republic</option>
																		<option value="EC">Ecuador</option>
																		<option value="EG">Egypt</option>
																		<option value="SV">El Salvador</option>
																		<option value="GQ">Equatorial Guinea</option>
																		<option value="ER">Eritrea</option>
																		<option value="EE">Estonia</option>
																		<option value="ET">Ethiopia</option>
																		<option value="FK">
																			Falkland Islands (Malvinas)
																		</option>
																		<option value="FJ">Fiji</option>
																		<option value="FI">Finland</option>
																		<option value="FR">France</option>
																		<option value="PF">French Polynesia</option>
																		<option value="GA">Gabon</option>
																		<option value="GM">Gambia</option>
																		<option value="GE">Georgia</option>
																		<option value="DE">Germany</option>
																		<option value="GH">Ghana</option>
																		<option value="GI">Gibraltar</option>
																		<option value="GR">Greece</option>
																		<option value="GL">Greenland</option>
																		<option value="GD">Grenada</option>
																		<option value="GU">Guam</option>
																		<option value="GT">Guatemala</option>
																		<option value="GG">Guernsey</option>
																		<option value="GN">Guinea</option>
																		<option value="GW">Guinea-Bissau</option>
																		<option value="HT">Haiti</option>
																		<option value="VA">
																			Holy See (Vatican City State)
																		</option>
																		<option value="HN">Honduras</option>
																		<option value="HK">Hong Kong</option>
																		<option value="HU">Hungary</option>
																		<option value="IS">Iceland</option>
																		<option value="IN">India</option>
																		<option value="ID">Indonesia</option>
																		<option value="IR">
																			Iran, Islamic Republic of
																		</option>
																		<option value="IQ">Iraq</option>
																		<option value="IE">Ireland</option>
																		<option value="IM">Isle of Man</option>
																		<option value="IL">Israel</option>
																		<option value="IT">Italy</option>
																		<option value="JM">Jamaica</option>
																		<option value="JP">Japan</option>
																		<option value="JE">Jersey</option>
																		<option value="JO">Jordan</option>
																		<option value="KZ">Kazakhstan</option>
																		<option value="KE">Kenya</option>
																		<option value="KI">Kiribati</option>
																		<option value="KP">
																			Korea, Democratic People's Republic of
																		</option>
																		<option value="KW">Kuwait</option>
																		<option value="KG">Kyrgyzstan</option>
																		<option value="LA">
																			Lao People's Democratic Republic
																		</option>
																		<option value="LV">Latvia</option>
																		<option value="LB">Lebanon</option>
																		<option value="LS">Lesotho</option>
																		<option value="LR">Liberia</option>
																		<option value="LY">Libya</option>
																		<option value="LI">Liechtenstein</option>
																		<option value="LT">Lithuania</option>
																		<option value="LU">Luxembourg</option>
																		<option value="MO">Macao</option>
																		<option value="MG">Madagascar</option>
																		<option value="MW">Malawi</option>
																		<option value="MY">Malaysia</option>
																		<option value="MV">Maldives</option>
																		<option value="ML">Mali</option>
																		<option value="MT">Malta</option>
																		<option value="MH">Marshall Islands</option>
																		<option value="MQ">Martinique</option>
																		<option value="MR">Mauritania</option>
																		<option value="MU">Mauritius</option>
																		<option value="MX">Mexico</option>
																		<option value="FM">
																			Micronesia, Federated States of
																		</option>
																		<option value="MD">Moldova, Republic of</option>
																		<option value="MC">Monaco</option>
																		<option value="MN">Mongolia</option>
																		<option value="ME">Montenegro</option>
																		<option value="MS">Montserrat</option>
																		<option value="MA">Morocco</option>
																		<option value="MZ">Mozambique</option>
																		<option value="MM">Myanmar</option>
																		<option value="NA">Namibia</option>
																		<option value="NR">Nauru</option>
																		<option value="NP">Nepal</option>
																		<option value="NL">Netherlands</option>
																		<option value="NZ">New Zealand</option>
																		<option value="NI">Nicaragua</option>
																		<option value="NE">Niger</option>
																		<option value="NG">Nigeria</option>
																		<option value="NU">Niue</option>
																		<option value="NF">Norfolk Island</option>
																		<option value="MP">
																			Northern Mariana Islands
																		</option>
																		<option value="NO">Norway</option>
																		<option value="OM">Oman</option>
																		<option value="PK">Pakistan</option>
																		<option value="PW">Palau</option>
																		<option value="PS">
																			Palestinian Territory, Occupied
																		</option>
																		<option value="PA">Panama</option>
																		<option value="PG">Papua New Guinea</option>
																		<option value="PY">Paraguay</option>
																		<option value="PE">Peru</option>
																		<option value="PH">Philippines</option>
																		<option value="PL">Poland</option>
																		<option value="PT">Portugal</option>
																		<option value="PR">Puerto Rico</option>
																		<option value="QA">Qatar</option>
																		<option value="RO">Romania</option>
																		<option value="RU">Russian Federation</option>
																		<option value="RW">Rwanda</option>
																		<option value="BL">Saint Barthélemy</option>
																		<option value="KN">Saint Kitts and Nevis</option>
																		<option value="LC">Saint Lucia</option>
																		<option value="MF">
																			Saint Martin (French part)
																		</option>
																		<option value="VC">
																			Saint Vincent and the Grenadines
																		</option>
																		<option value="WS">Samoa</option>
																		<option value="SM">San Marino</option>
																		<option value="ST">Sao Tome and Principe</option>
																		<option value="SA">Saudi Arabia</option>
																		<option value="SN">Senegal</option>
																		<option value="RS">Serbia</option>
																		<option value="SC">Seychelles</option>
																		<option value="SL">Sierra Leone</option>
																		<option value="SG">Singapore</option>
																		<option value="SX">
																			Sint Maarten (Dutch part)
																		</option>
																		<option value="SK">Slovakia</option>
																		<option value="SI">Slovenia</option>
																		<option value="SB">Solomon Islands</option>
																		<option value="SO">Somalia</option>
																		<option value="ZA">South Africa</option>
																		<option value="KR">South Korea</option>
																		<option value="SS">South Sudan</option>
																		<option value="ES">Spain</option>
																		<option value="LK">Sri Lanka</option>
																		<option value="SD">Sudan</option>
																		<option value="SR">Suriname</option>
																		<option value="SZ">Swaziland</option>
																		<option value="SE">Sweden</option>
																		<option value="CH">Switzerland</option>
																		<option value="SY">Syrian Arab Republic</option>
																		<option value="TW">
																			Taiwan, Province of China
																		</option>
																		<option value="TJ">Tajikistan</option>
																		<option value="TZ">
																			Tanzania, United Republic of
																		</option>
																		<option value="TH">Thailand</option>
																		<option value="TG">Togo</option>
																		<option value="TK">Tokelau</option>
																		<option value="TO">Tonga</option>
																		<option value="TT">Trinidad and Tobago</option>
																		<option value="TN">Tunisia</option>
																		<option value="TR">Turkey</option>
																		<option value="TM">Turkmenistan</option>
																		<option value="TC">
																			Turks and Caicos Islands
																		</option>
																		<option value="TV">Tuvalu</option>
																		<option value="UG">Uganda</option>
																		<option value="UA">Ukraine</option>
																		<option value="AE">United Arab Emirates</option>
																		<option value="GB">United Kingdom</option>
																		<option value="US" selected="selected">
																			United States
																		</option>
																		<option value="UY">Uruguay</option>
																		<option value="UZ">Uzbekistan</option>
																		<option value="VU">Vanuatu</option>
																		<option value="VE">
																			Venezuela, Bolivarian Republic of
																		</option>
																		<option value="VN">Vietnam</option>
																		<option value="VI">Virgin Islands</option>
																		<option value="YE">Yemen</option>
																		<option value="ZM">Zambia</option>
																		<option value="ZW">Zimbabwe</option>
																	</select>
																	{/*end::Input*/}
																</div>
																{/*end::Input group*/}
																{/*begin::Input group*/}
																<div className="fv-row mb-7">
																	{/*begin::Wrapper*/}
																	<div className="d-flex flex-stack">
																		{/*begin::Label*/}
																		<div className="me-5">
																			{/*begin::Label*/}
																			<label className="fs-6 fw-bold">
																				Use as a billing adderess?
																			</label>
																			{/*end::Label*/}
																			{/*begin::Input*/}
																			<div className="fs-7 fw-bold text-muted">
																				If you need more info, please check budget
																				planning
																			</div>
																			{/*end::Input*/}
																		</div>
																		{/*end::Label*/}
																		{/*begin::Switch*/}
																		<label className="form-check form-switch form-check-custom form-check-solid">
																			{/*begin::Input*/}
																			<input
																				className="form-check-input"
																				name="billing"
																				type="checkbox"
																				defaultValue={1}
																				id="kt_modal_add_customer_billing"
																				defaultChecked="checked"
																			/>
																			{/*end::Input*/}
																			{/*begin::Label*/}
																			<span
																				className="form-check-label fw-bold text-muted"
																				htmlFor="kt_modal_add_customer_billing"
																			>
																				Yes
																			</span>
																			{/*end::Label*/}
																		</label>
																		{/*end::Switch*/}
																	</div>
																	{/*begin::Wrapper*/}
																</div>
																{/*end::Input group*/}
															</div>
															{/*end::Billing form*/}
														</div>
														{/*end::Scroll*/}
													</div>
													{/*end::Modal body*/}
													{/*begin::Modal footer*/}
													<div className="modal-footer flex-center">
														{/*begin::Button*/}
														<button
															type="reset"
															id="kt_modal_add_customer_cancel"
															className="btn btn-light me-3"
														>
															Discard
														</button>
														{/*end::Button*/}
														{/*begin::Button*/}
														<button
															type="submit"
															id="kt_modal_add_customer_submit"
															className="btn btn-primary"
														>
															<span className="indicator-label">Submit</span>
															<span className="indicator-progress">
																Please wait...
																<span className="spinner-border spinner-border-sm align-middle ms-2" />
															</span>
														</button>
														{/*end::Button*/}
													</div>
													{/*end::Modal footer*/}
												</form>
												{/*end::Form*/}
											</div>
										</div>
									</div>
									{/*end::Modal - Customers - Add*/}
									{/*end::Modals*/}
								</div>
								{/*end::Post*/}
								{/*begin::Footer*/}
								<div
									className="footer py-4 d-flex flex-column flex-md-row flex-stack"
									id="kt_footer"
								>
									{/*begin::Copyright*/}
									<div className="text-dark order-2 order-md-1">
										<span className="text-muted fw-bold me-1">2021©</span>
										<NavLink
											to="https://keenthemes.com"
											target="_blank"
											className="text-gray-800 text-hover-primary"
										>
											Keenthemes
										</NavLink>
									</div>
									{/*end::Copyright*/}
									{/*begin::Menu*/}
									<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
										<li className="menu-item">
											<NavLink
												to="https://keenthemes.com"
												target="_blank"
												className="menu-link px-2"
											>
												About
											</NavLink>
										</li>
										<li className="menu-item">
											<NavLink
												to="https://keenthemes.com/support"
												target="_blank"
												className="menu-link px-2"
											>
												Support
											</NavLink>
										</li>
										<li className="menu-item">
											<NavLink
												to="https://1.envato.market/EA4JP"
												target="_blank"
												className="menu-link px-2"
											>
												Purchase
											</NavLink>
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
	)
}

export default GettingStarted
