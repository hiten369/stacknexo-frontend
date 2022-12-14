import React from 'react'
import { NavLink } from 'react-router-dom';

const List = () => {
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
											Customer List
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
												Customer Listing
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
												id="kt_menu_61b9c7c9bc2de"
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
																data-dropdown-parent="#kt_menu_61b9c7c9bc2de"
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
										{/*begin::Card header*/}
										<div className="card-header border-0 pt-6">
											{/*begin::Card title*/}
											<div className="card-title">
												{/*begin::Search*/}
												<div className="d-flex align-items-center position-relative my-1">
													{/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
													<span className="svg-icon svg-icon-1 position-absolute ms-6">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															fill="none"
														>
															<rect
																opacity="0.5"
																x="17.0365"
																y="15.1223"
																width="8.15546"
																height={2}
																rx={1}
																transform="rotate(45 17.0365 15.1223)"
																fill="black"
															/>
															<path
																d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
																fill="black"
															/>
														</svg>
													</span>
													{/*end::Svg Icon*/}
													<input
														type="text"
														data-kt-customer-table-filter="search"
														className="form-control form-control-solid w-250px ps-15"
														placeholder="Search Customers"
													/>
												</div>
												{/*end::Search*/}
											</div>
											{/*begin::Card title*/}
											{/*begin::Card toolbar*/}
											<div className="card-toolbar">
												{/*begin::Toolbar*/}
												<div
													className="d-flex justify-content-end"
													data-kt-customer-table-toolbar="base"
												>
													{/*begin::Filter*/}
													<button
														type="button"
														className="btn btn-light-primary me-3"
														data-kt-menu-trigger="click"
														data-kt-menu-placement="bottom-end"
													>
														{/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
														<span className="svg-icon svg-icon-2">
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
													</button>
													{/*begin::Menu 1*/}
													<div
														className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
														data-kt-menu="true"
														id="kt-toolbar-filter"
													>
														{/*begin::Header*/}
														<div className="px-7 py-5">
															<div className="fs-4 text-dark fw-bolder">
																Filter Options
															</div>
														</div>
														{/*end::Header*/}
														{/*begin::Separator*/}
														<div className="separator border-gray-200" />
														{/*end::Separator*/}
														{/*begin::Content*/}
														<div className="px-7 py-5">
															{/*begin::Input group*/}
															<div className="mb-10">
																{/*begin::Label*/}
																<label className="form-label fs-5 fw-bold mb-3">
																	Month:
																</label>
																{/*end::Label*/}
																{/*begin::Input*/}
																<select
																	className="form-select form-select-solid fw-bolder"
																	data-kt-select2="true"
																	data-placeholder="Select option"
																	data-allow-clear="true"
																	data-kt-customer-table-filter="month"
																	data-dropdown-parent="#kt-toolbar-filter"
																>
																	<option />
																	<option value="aug">August</option>
																	<option value="sep">September</option>
																	<option value="oct">October</option>
																	<option value="nov">November</option>
																	<option value="dec">December</option>
																</select>
																{/*end::Input*/}
															</div>
															{/*end::Input group*/}
															{/*begin::Input group*/}
															<div className="mb-10">
																{/*begin::Label*/}
																<label className="form-label fs-5 fw-bold mb-3">
																	Payment Type:
																</label>
																{/*end::Label*/}
																{/*begin::Options*/}
																<div
																	className="d-flex flex-column flex-wrap fw-bold"
																	data-kt-customer-table-filter="payment_type"
																>
																	{/*begin::Option*/}
																	<label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
																		<input
																			className="form-check-input"
																			type="radio"
																			name="payment_type"
																			defaultValue="all"
																			defaultChecked="checked"
																		/>
																		<span className="form-check-label text-gray-600">
																			All
																		</span>
																	</label>
																	{/*end::Option*/}
																	{/*begin::Option*/}
																	<label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
																		<input
																			className="form-check-input"
																			type="radio"
																			name="payment_type"
																			defaultValue="visa"
																		/>
																		<span className="form-check-label text-gray-600">
																			Visa
																		</span>
																	</label>
																	{/*end::Option*/}
																	{/*begin::Option*/}
																	<label className="form-check form-check-sm form-check-custom form-check-solid mb-3">
																		<input
																			className="form-check-input"
																			type="radio"
																			name="payment_type"
																			defaultValue="mastercard"
																		/>
																		<span className="form-check-label text-gray-600">
																			Mastercard
																		</span>
																	</label>
																	{/*end::Option*/}
																	{/*begin::Option*/}
																	<label className="form-check form-check-sm form-check-custom form-check-solid">
																		<input
																			className="form-check-input"
																			type="radio"
																			name="payment_type"
																			defaultValue="american_express"
																		/>
																		<span className="form-check-label text-gray-600">
																			American Express
																		</span>
																	</label>
																	{/*end::Option*/}
																</div>
																{/*end::Options*/}
															</div>
															{/*end::Input group*/}
															{/*begin::Actions*/}
															<div className="d-flex justify-content-end">
																<button
																	type="reset"
																	className="btn btn-light btn-active-light-primary me-2"
																	data-kt-menu-dismiss="true"
																	data-kt-customer-table-filter="reset"
																>
																	Reset
																</button>
																<button
																	type="submit"
																	className="btn btn-primary"
																	data-kt-menu-dismiss="true"
																	data-kt-customer-table-filter="filter"
																>
																	Apply
																</button>
															</div>
															{/*end::Actions*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Menu 1*/}
													{/*end::Filter*/}
													{/*begin::Export*/}
													<button
														type="button"
														className="btn btn-light-primary me-3"
														data-bs-toggle="modal"
														data-bs-target="#kt_customers_export_modal"
													>
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
														<span className="svg-icon svg-icon-2">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<rect
																	opacity="0.3"
																	x="12.75"
																	y="4.25"
																	width={12}
																	height={2}
																	rx={1}
																	transform="rotate(90 12.75 4.25)"
																	fill="black"
																/>
																<path
																	d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
																	fill="black"
																/>
																<path
																	d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
																	fill="#C4C4C4"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}Export
													</button>
													{/*end::Export*/}
													{/*begin::Add customer*/}
													<button
														type="button"
														className="btn btn-primary"
														data-bs-toggle="modal"
														data-bs-target="#kt_modal_add_customer"
													>
														Add Customer
													</button>
													{/*end::Add customer*/}
												</div>
												{/*end::Toolbar*/}
												{/*begin::Group actions*/}
												<div
													className="d-flex justify-content-end align-items-center d-none"
													data-kt-customer-table-toolbar="selected"
												>
													<div className="fw-bolder me-5">
														<span
															className="me-2"
															data-kt-customer-table-select="selected_count"
														/>
														Selected
													</div>
													<button
														type="button"
														className="btn btn-danger"
														data-kt-customer-table-select="delete_selected"
													>
														Delete Selected
													</button>
												</div>
												{/*end::Group actions*/}
											</div>
											{/*end::Card toolbar*/}
										</div>
										{/*end::Card header*/}
										{/*begin::Card body*/}
										<div className="card-body pt-0">
											{/*begin::Table*/}
											<table
												className="table align-middle table-row-dashed fs-6 gy-5"
												id="kt_customers_table"
											>
												{/*begin::Table head*/}
												<thead>
													{/*begin::Table row*/}
													<tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
														<th className="w-10px pe-2">
															<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
																<input
																	className="form-check-input"
																	type="checkbox"
																	data-kt-check="true"
																	data-kt-check-target="#kt_customers_table .form-check-input"
																	defaultValue={1}
																/>
															</div>
														</th>
														<th className="min-w-125px">Customer Name</th>
														<th className="min-w-125px">Email</th>
														<th className="min-w-125px">Company</th>
														<th className="min-w-125px">Payment Method</th>
														<th className="min-w-125px">Created Date</th>
														<th className="text-end min-w-70px">Actions</th>
													</tr>
													{/*end::Table row*/}
												</thead>
												{/*end::Table head*/}
												{/*begin::Table body*/}
												<tbody className="fw-bold text-gray-600">
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																e.smith@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7009
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Dec 2020, 8:43 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Melody Macy
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																melody@altbox.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Google</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9604
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Dec 2020, 10:12 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Max Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																max@kt.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Bistro Union</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7015
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>12 Nov 2020, 2:01 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Sean Bean
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																sean@dellito.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Astro Limited</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3269
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>21 Oct 2020, 5:54 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Brian Cox
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																brian@exchange.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 6266
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>19 Oct 2020, 7:32 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Mikaela Collins
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																mikaela@pexcom.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Keenthemes</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7430
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>23 Sep 2020, 12:37 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Francis Mitcham
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																f.mitcham@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paypal</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 8056
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Sep 2020, 3:15 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Olivia Wild
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																olivia@corpmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9052
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>03 Sep 2020, 1:08 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Neil Owen
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																owen.neil@gmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paramount</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3071
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Sep 2020, 4:58 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Dan Wilson
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																dam@consilting.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Trinity Studio</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 1817
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>18 Aug 2020, 3:34 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Bold
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																emma@intenso.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>B&amp;T Legal Services</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7679
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Aug 2020, 1:21 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Ana Crown
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																ana.cf@limtel.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paysafe Security</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 4446
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Aug 2020, 5:13 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																e.smith@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7009
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Dec 2020, 8:43 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Melody Macy
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																melody@altbox.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Google</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9604
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Dec 2020, 10:12 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Max Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																max@kt.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Bistro Union</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7015
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>12 Nov 2020, 2:01 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Sean Bean
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																sean@dellito.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Astro Limited</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3269
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>21 Oct 2020, 5:54 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Brian Cox
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																brian@exchange.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 6266
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>19 Oct 2020, 7:32 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Mikaela Collins
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																mikaela@pexcom.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Keenthemes</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7430
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>23 Sep 2020, 12:37 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Francis Mitcham
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																f.mitcham@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paypal</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 8056
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Sep 2020, 3:15 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Olivia Wild
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																olivia@corpmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9052
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>03 Sep 2020, 1:08 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Neil Owen
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																owen.neil@gmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paramount</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3071
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Sep 2020, 4:58 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Dan Wilson
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																dam@consilting.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Trinity Studio</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 1817
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>18 Aug 2020, 3:34 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Bold
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																emma@intenso.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>B&amp;T Legal Services</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7679
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Aug 2020, 1:21 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Ana Crown
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																ana.cf@limtel.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paysafe Security</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 4446
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Aug 2020, 5:13 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																e.smith@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7009
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Dec 2020, 8:43 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Melody Macy
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																melody@altbox.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Google</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9604
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Dec 2020, 10:12 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Max Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																max@kt.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Bistro Union</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7015
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>12 Nov 2020, 2:01 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Sean Bean
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																sean@dellito.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Astro Limited</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3269
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>21 Oct 2020, 5:54 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Brian Cox
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																brian@exchange.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 6266
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>19 Oct 2020, 7:32 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Mikaela Collins
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																mikaela@pexcom.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Keenthemes</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7430
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>23 Sep 2020, 12:37 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Francis Mitcham
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																f.mitcham@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paypal</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 8056
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Sep 2020, 3:15 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Olivia Wild
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																olivia@corpmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9052
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>03 Sep 2020, 1:08 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Neil Owen
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																owen.neil@gmail.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paramount</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3071
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Sep 2020, 4:58 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Dan Wilson
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																dam@consilting.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Trinity Studio</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 1817
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>18 Aug 2020, 3:34 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Bold
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																emma@intenso.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>B&amp;T Legal Services</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7679
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Aug 2020, 1:21 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Ana Crown
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																ana.cf@limtel.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Paysafe Security</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 4446
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>11 Aug 2020, 5:13 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Emma Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																e.smith@kpmg.com.au
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>-</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7009
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>14 Dec 2020, 8:43 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Melody Macy
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																melody@altbox.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Google</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="visa">
															<img
																src="/assets/media/svg/card-logos/visa.svg"
																className="w-35px me-3"
																alt
															/>
															**** 9604
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>01 Dec 2020, 10:12 am</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Max Smith
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																max@kt.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Bistro Union</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="mastercard">
															<img
																src="/assets/media/svg/card-logos/mastercard.svg"
																className="w-35px me-3"
																alt
															/>
															**** 7015
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>12 Nov 2020, 2:01 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
													<tr>
														{/*begin::Checkbox*/}
														<td>
															<div className="form-check form-check-sm form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue={1}
																/>
															</div>
														</td>
														{/*end::Checkbox*/}
														{/*begin::Name=*/}
														<td>
															<NavLink
																to="../../demo14/dist/apps/customers/view.html"
																className="text-gray-800 text-hover-primary mb-1"
															>
																Sean Bean
															</NavLink>
														</td>
														{/*end::Name=*/}
														{/*begin::Email=*/}
														<td>
															<NavLink
																to="#"
																className="text-gray-600 text-hover-primary mb-1"
															>
																sean@dellito.com
															</NavLink>
														</td>
														{/*end::Email=*/}
														{/*begin::Company=*/}
														<td>Astro Limited</td>
														{/*end::Company=*/}
														{/*begin::Payment method=*/}
														<td data-filter="american_express">
															<img
																src="/assets/media/svg/card-logos/american-express.svg"
																className="w-35px me-3"
																alt
															/>
															**** 3269
														</td>
														{/*end::Payment method=*/}
														{/*begin::Date=*/}
														<td>21 Oct 2020, 5:54 pm</td>
														{/*end::Date=*/}
														{/*begin::Action=*/}
														<td className="text-end">
															<NavLink
																to="#"
																className="btn btn-sm btn-light btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
															>
																Actions
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
																<span className="svg-icon svg-icon-5 m-0">
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
															</NavLink>
															{/*begin::Menu*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="../../demo14/dist/apps/customers/view.html"
																		className="menu-link px-3"
																	>
																		View
																	</NavLink>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<NavLink
																		to="#"
																		className="menu-link px-3"
																		data-kt-customer-table-filter="delete_row"
																	>
																		Delete
																	</NavLink>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu*/}
														</td>
														{/*end::Action=*/}
													</tr>
												</tbody>
												{/*end::Table body*/}
											</table>
											{/*end::Table*/}
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
																		<option value="CI">C??te d'Ivoire</option>
																		<option value="HR">Croatia</option>
																		<option value="CU">Cuba</option>
																		<option value="CW">Cura??ao</option>
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
																		<option value="BL">Saint Barth??lemy</option>
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
									{/*begin::Modal - Adjust Balance*/}
									<div
										className="modal fade"
										id="kt_customers_export_modal"
										tabIndex={-1}
										aria-hidden="true"
									>
										{/*begin::Modal dialog*/}
										<div className="modal-dialog modal-dialog-centered mw-650px">
											{/*begin::Modal content*/}
											<div className="modal-content">
												{/*begin::Modal header*/}
												<div className="modal-header">
													{/*begin::Modal title*/}
													<h2 className="fw-bolder">Export Customers</h2>
													{/*end::Modal title*/}
													{/*begin::Close*/}
													<div
														id="kt_customers_export_close"
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
												<div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
													{/*begin::Form*/}
													<form
														id="kt_customers_export_form"
														className="form"
														action="#"
													>
														{/*begin::Input group*/}
														<div className="fv-row mb-10">
															{/*begin::Label*/}
															<label className="fs-5 fw-bold form-label mb-5">
																Select Export Format:
															</label>
															{/*end::Label*/}
															{/*begin::Input*/}
															<select
																data-control="select2"
																data-placeholder="Select a format"
																data-hide-search="true"
																name="format"
																className="form-select form-select-solid"
															>
																<option value="excell">Excel</option>
																<option value="pdf">PDF</option>
																<option value="cvs">CVS</option>
																<option value="zip">ZIP</option>
															</select>
															{/*end::Input*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="fv-row mb-10">
															{/*begin::Label*/}
															<label className="fs-5 fw-bold form-label mb-5">
																Select Date Range:
															</label>
															{/*end::Label*/}
															{/*begin::Input*/}
															<input
																className="form-control form-control-solid"
																placeholder="Pick a date"
																name="date"
															/>
															{/*end::Input*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Row*/}
														<div className="row fv-row mb-15">
															{/*begin::Label*/}
															<label className="fs-5 fw-bold form-label mb-5">
																Payment Type:
															</label>
															{/*end::Label*/}
															{/*begin::Radio group*/}
															<div className="d-flex flex-column">
																{/*begin::Radio button*/}
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		defaultValue={1}
																		defaultChecked="checked"
																		name="payment_type"
																	/>
																	<span className="form-check-label text-gray-600 fw-bold">
																		All
																	</span>
																</label>
																{/*end::Radio button*/}
																{/*begin::Radio button*/}
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		defaultValue={2}
																		defaultChecked="checked"
																		name="payment_type"
																	/>
																	<span className="form-check-label text-gray-600 fw-bold">
																		Visa
																	</span>
																</label>
																{/*end::Radio button*/}
																{/*begin::Radio button*/}
																<label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		defaultValue={3}
																		name="payment_type"
																	/>
																	<span className="form-check-label text-gray-600 fw-bold">
																		Mastercard
																	</span>
																</label>
																{/*end::Radio button*/}
																{/*begin::Radio button*/}
																<label className="form-check form-check-custom form-check-sm form-check-solid">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		defaultValue={4}
																		name="payment_type"
																	/>
																	<span className="form-check-label text-gray-600 fw-bold">
																		American Express
																	</span>
																</label>
																{/*end::Radio button*/}
															</div>
															{/*end::Input group*/}
														</div>
														{/*end::Row*/}
														{/*begin::Actions*/}
														<div className="text-center">
															<button
																type="reset"
																id="kt_customers_export_cancel"
																className="btn btn-light me-3"
															>
																Discard
															</button>
															<button
																type="submit"
																id="kt_customers_export_submit"
																className="btn btn-primary"
															>
																<span className="indicator-label">Submit</span>
																<span className="indicator-progress">
																	Please wait...
																	<span className="spinner-border spinner-border-sm align-middle ms-2" />
																</span>
															</button>
														</div>
														{/*end::Actions*/}
													</form>
													{/*end::Form*/}
												</div>
												{/*end::Modal body*/}
											</div>
											{/*end::Modal content*/}
										</div>
										{/*end::Modal dialog*/}
									</div>
									{/*end::Modal - New Card*/}
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
										<span className="text-muted fw-bold me-1">2021??</span>
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

export default List;