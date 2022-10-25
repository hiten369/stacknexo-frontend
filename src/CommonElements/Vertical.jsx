import React from 'react';
import { NavLink } from 'react-router-dom';

const Vertical = () => {
	return (
		<>
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
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">Vertical</h1>
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
											<li className="breadcrumb-item text-gray-600">Pages</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Search</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Vertical</li>
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
												id="kt_menu_61b9c779e66ee"
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
																data-dropdown-parent="#kt_menu_61b9c779e66ee"
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
									{/*begin::Search vertical*/}
									<div className="d-flex flex-column flex-lg-row">
										{/*begin::Aside*/}
										<div className="flex-column flex-lg-row-auto w-100 w-lg-250px w-xxl-325px mb-8 mb-lg-0 me-lg-9 me-5">
											{/*begin::Form*/}
											<form action="#">
												{/*begin::Card*/}
												<div className="card">
													{/*begin::Body*/}
													<div className="card-body">
														{/*begin:Search*/}
														<div className="position-relative">
															{/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
															<span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
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
																className="form-control form-control-solid ps-10"
																name="search"
																defaultValue
																placeholder="Search"
															/>
														</div>
														{/*end:Search*/}
														{/*begin::Border*/}
														<div className="separator separator-dashed my-8" />
														{/*end::Border*/}
														{/*begin::Input group*/}
														<div className="mb-5">
															<label className="fs-6 form-label fw-bolder text-dark">
																Team Type
															</label>
															{/*begin::Select*/}
															<select
																className="form-select form-select-solid"
																data-control="select2"
																data-placeholder="In Progress"
																data-hide-search="true"
															>
																<option value />
																<option value={1}>Not Started</option>
																<option value={2} selected="selected">
																	In Progress
																</option>
																<option value={3}>Done</option>
															</select>
															{/*end::Select*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="mb-5">
															<label className="fs-6 form-label fw-bolder text-dark">
																Team Name
															</label>
															<input
																type="text"
																className="form-control form-control form-control-solid"
																name="city"
															/>
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="mb-5">
															<label className="fs-6 form-label fw-bolder text-dark">
																Team Size
															</label>
															{/*begin::Radio group*/}
															<div className="nav-group nav-group-fluid">
																{/*begin::Option*/}
																<label>
																	<input
																		type="radio"
																		className="btn-check"
																		name="type"
																		defaultValue="has"
																		defaultChecked="checked"
																	/>
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">
																		1-5
																	</span>
																</label>
																{/*end::Option*/}
																{/*begin::Option*/}
																<label>
																	<input
																		type="radio"
																		className="btn-check"
																		name="type"
																		defaultValue="users"
																	/>
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">
																		5-10
																	</span>
																</label>
																{/*end::Option*/}
																{/*begin::Option*/}
																<label>
																	<input
																		type="radio"
																		className="btn-check"
																		name="type"
																		defaultValue="orders"
																	/>
																	<span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">
																		10++
																	</span>
																</label>
																{/*end::Option*/}
															</div>
															{/*end::Radio group*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="mb-5">
															<label className="fs-6 form-label fw-bolder text-dark">
																Max. Amount
															</label>
															{/*begin::Dialer*/}
															<div
																className="position-relative"
																data-kt-dialer="true"
																data-kt-dialer-min={1000}
																data-kt-dialer-max={50000}
																data-kt-dialer-step={1000}
																data-kt-dialer-prefix="$"
																data-kt-dialer-decimals={2}
															>
																{/*begin::Decrease control*/}
																<button
																	type="button"
																	className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
																	data-kt-dialer-control="decrease"
																>
																	{/*begin::Svg Icon | path: icons/duotune/general/gen042.svg*/}
																	<span className="svg-icon svg-icon-1">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.3"
																				x={2}
																				y={2}
																				width={20}
																				height={20}
																				rx={10}
																				fill="black"
																			/>
																			<rect
																				x="6.01041"
																				y="10.9247"
																				width={12}
																				height={2}
																				rx={1}
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</button>
																{/*end::Decrease control*/}
																{/*begin::Input control*/}
																<input
																	type="text"
																	className="form-control form-control-solid border-0 ps-12"
																	data-kt-dialer-control="input"
																	placeholder="Amount"
																	name="manageBudget"
																	readOnly="readonly"
																	defaultValue="$50"
																/>
																{/*end::Input control*/}
																{/*begin::Increase control*/}
																<button
																	type="button"
																	className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
																	data-kt-dialer-control="increase"
																>
																	{/*begin::Svg Icon | path: icons/duotune/general/gen041.svg*/}
																	<span className="svg-icon svg-icon-1">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.3"
																				x={2}
																				y={2}
																				width={20}
																				height={20}
																				rx={10}
																				fill="black"
																			/>
																			<rect
																				x="10.8891"
																				y="17.8033"
																				width={12}
																				height={2}
																				rx={1}
																				transform="rotate(-90 10.8891 17.8033)"
																				fill="black"
																			/>
																			<rect
																				x="6.01041"
																				y="10.9247"
																				width={12}
																				height={2}
																				rx={1}
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</button>
																{/*end::Increase control*/}
															</div>
															{/*end::Dialer*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Input group*/}
														<div className="mb-10">
															<label className="fs-6 form-label fw-bolder text-dark mb-5">
																Categories
															</label>
															{/*begin::Checkbox*/}
															<div className="form-check form-check-custom form-check-solid mb-5">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="kt_search_category_1"
																/>
																<label
																	className="form-check-label flex-grow-1 fw-bold text-gray-700 fs-6"
																	htmlFor="kt_search_category_1"
																>
																	Electronics
																</label>
																<span className="text-gray-400 fw-bolder">28</span>
															</div>
															{/*end::Checkbox*/}
															{/*begin::Checkbox*/}
															<div className="form-check form-check-custom form-check-solid mb-5">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="kt_search_category_2"
																	defaultChecked="checked"
																/>
																<label
																	className="form-check-label flex-grow-1 fw-bold text-gray-700 fs-6"
																	htmlFor="kt_search_category_2"
																>
																	Sport Equipments
																</label>
																<span className="text-gray-400 fw-bolder">307</span>
															</div>
															{/*end::Checkbox*/}
															{/*begin::Checkbox*/}
															<div className="form-check form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	id="kt_search_category_3"
																/>
																<label
																	className="form-check-label flex-grow-1 fw-bold text-gray-700 fs-6"
																	htmlFor="kt_search_category_3"
																>
																	Furnuture
																</label>
																<span className="text-gray-400 fw-bolder">54</span>
															</div>
															{/*end::Checkbox*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Action*/}
														<div className="d-flex align-items-center justify-content-end">
															<NavLink
																to="#"
																className="btn btn-active-light-primary btn-color-gray-400 me-3"
															>
																Discard
															</NavLink>
															<NavLink to="#" className="btn btn-primary">
																Search
															</NavLink>
														</div>
														{/*end::Action*/}
													</div>
													{/*end::Body*/}
												</div>
												{/*end::Card*/}
											</form>
											{/*end::Form*/}
										</div>
										{/*end::Aside*/}
										{/*begin::Layout*/}
										<div className="flex-lg-row-fluid">
											{/*begin::Toolbar*/}
											<div className="d-flex flex-wrap flex-stack pb-7">
												{/*begin::Title*/}
												<div className="d-flex flex-wrap align-items-center my-1">
													<h3 className="fw-bolder me-5 my-1">
														57 Items Found
														<span className="text-gray-400 fs-6">
															by Recent Updates ↓
														</span>
													</h3>
												</div>
												{/*end::Title*/}
												{/*begin::Controls*/}
												<div className="d-flex flex-wrap my-1">
													{/*begin::Tab nav*/}
													<ul className="nav nav-pills me-6 mb-2 mb-sm-0">
														<li className="nav-item m-0">
															<NavLink
																className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active"
																data-bs-toggle="tab"
																to="#kt_project_users_card_pane"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="24px"
																		height="24px"
																		viewBox="0 0 24 24"
																	>
																		<g
																			stroke="none"
																			strokeWidth={1}
																			fill="none"
																			fillRule="evenodd"
																		>
																			<rect
																				x={5}
																				y={5}
																				width={5}
																				height={5}
																				rx={1}
																				fill="#000000"
																			/>
																			<rect
																				x={14}
																				y={5}
																				width={5}
																				height={5}
																				rx={1}
																				fill="#000000"
																				opacity="0.3"
																			/>
																			<rect
																				x={5}
																				y={14}
																				width={5}
																				height={5}
																				rx={1}
																				fill="#000000"
																				opacity="0.3"
																			/>
																			<rect
																				x={14}
																				y={14}
																				width={5}
																				height={5}
																				rx={1}
																				fill="#000000"
																				opacity="0.3"
																			/>
																		</g>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</NavLink>
														</li>
														<li className="nav-item m-0">
															<NavLink
																className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary"
																data-bs-toggle="tab"
																to="#kt_project_users_table_pane"
															>
																{/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
																			fill="black"
																		/>
																		<path
																			opacity="0.3"
																			d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</NavLink>
														</li>
													</ul>
													{/*end::Tab nav*/}
													{/*begin::Actions*/}
													<div className="d-flex my-0">
														{/*begin::Select*/}
														<select
															name="status"
															data-control="select2"
															data-hide-search="true"
															data-placeholder="Filter"
															className="form-select form-select-sm border-body bg-body w-150px me-5"
														>
															<option value={1}>Recently Updated</option>
															<option value={2}>Last Month</option>
															<option value={3}>Last Quarter</option>
															<option value={4}>Last Year</option>
														</select>
														{/*end::Select*/}
														{/*begin::Select*/}
														<select
															name="status"
															data-control="select2"
															data-hide-search="true"
															data-placeholder="Export"
															className="form-select form-select-sm border-body bg-body w-100px"
														>
															<option value={1}>Excel</option>
															<option value={1}>PDF</option>
															<option value={2}>Print</option>
														</select>
														{/*end::Select*/}
													</div>
													{/*end::Actions*/}
												</div>
												{/*end::Controls*/}
											</div>
											{/*end::Toolbar*/}
											{/*begin::Tab Content*/}
											<div className="tab-content">
												{/*begin::Tab pane*/}
												<div
													id="kt_project_users_card_pane"
													className="tab-pane fade show active"
												>
													{/*begin::Row*/}
													<div className="row g-6 g-xl-9">
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<img
																			src="/assets/media//avatars/150-3.jpg"
																			alt="image"
																		/>
																		<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Karina Clark
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Art Director at Novica Co.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<span className="symbol-label fs-2x fw-bold text-primary bg-light-primary">
																			S
																		</span>
																		<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Sean Bean
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Developer at Loop Inc
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<img
																			src="/assets/media//avatars/150-2.jpg"
																			alt="image"
																		/>
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Alan Johnson
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Web Designer at Nextop Ltd.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<img
																			src="/assets/media//avatars/150-11.jpg"
																			alt="image"
																		/>
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Robert Doe
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Marketing Analytic at Avito Ltd.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<img
																			src="/assets/media//avatars/150-1.jpg"
																			alt="image"
																		/>
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Olivia Wild
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Art Director at Seal Inc.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<span className="symbol-label fs-2x fw-bold text-warning bg-light-warning">
																			A
																		</span>
																		<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Adam Williams
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		System Arcitect at Wolto Co.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<span className="symbol-label fs-2x fw-bold text-info bg-light-info">
																			P
																		</span>
																		<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3" />
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Peter Marcus
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Art Director at Novica Co.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<span className="symbol-label fs-2x fw-bold text-success bg-light-success">
																			N
																		</span>
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Neil Owen
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Accountant at Numbers Co.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
														{/*begin::Col*/}
														<div className="col-md-6 col-xl-12 col-xxl-6">
															{/*begin::Card*/}
															<div className="card">
																{/*begin::Card body*/}
																<div className="card-body d-flex flex-center flex-column pt-12 p-9">
																	{/*begin::Avatar*/}
																	<div className="symbol symbol-65px symbol-circle mb-5">
																		<img
																			src="/assets/media//avatars/150-7.jpg"
																			alt="image"
																		/>
																	</div>
																	{/*end::Avatar*/}
																	{/*begin::Name*/}
																	<NavLink
																		to="#"
																		className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
																	>
																		Benjamin Jacob
																	</NavLink>
																	{/*end::Name*/}
																	{/*begin::Position*/}
																	<div className="fw-bold text-gray-400 mb-6">
																		Art Director at Novica Co.
																	</div>
																	{/*end::Position*/}
																	{/*begin::Info*/}
																	<div className="d-flex flex-center flex-wrap">
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$14,560
																			</div>
																			<div className="fw-bold text-gray-400">
																				Earnings
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				23
																			</div>
																			<div className="fw-bold text-gray-400">
																				Tasks
																			</div>
																		</div>
																		{/*end::Stats*/}
																		{/*begin::Stats*/}
																		<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
																			<div className="fs-6 fw-bolder text-gray-700">
																				$236,400
																			</div>
																			<div className="fw-bold text-gray-400">
																				Sales
																			</div>
																		</div>
																		{/*end::Stats*/}
																	</div>
																	{/*end::Info*/}
																</div>
																{/*end::Card body*/}
															</div>
															{/*end::Card*/}
														</div>
														{/*end::Col*/}
													</div>
													{/*end::Row*/}
													{/*begin::Pagination*/}
													<div className="d-flex flex-stack flex-wrap pt-10">
														<div className="fs-6 fw-bold text-gray-700">
															Showing 1 to 10 of 50 entries
														</div>
														{/*begin::Pages*/}
														<ul className="pagination">
															<li className="page-item previous">
																<NavLink to="#" className="page-link">
																	<i className="previous" />
																</NavLink>
															</li>
															<li className="page-item active">
																<NavLink to="#" className="page-link">
																	1
																</NavLink>
															</li>
															<li className="page-item">
																<NavLink to="#" className="page-link">
																	2
																</NavLink>
															</li>
															<li className="page-item">
																<NavLink to="#" className="page-link">
																	3
																</NavLink>
															</li>
															<li className="page-item">
																<NavLink to="#" className="page-link">
																	4
																</NavLink>
															</li>
															<li className="page-item">
																<NavLink to="#" className="page-link">
																	5
																</NavLink>
															</li>
															<li className="page-item">
																<NavLink to="#" className="page-link">
																	6
																</NavLink>
															</li>
															<li className="page-item next">
																<NavLink to="#" className="page-link">
																	<i className="next" />
																</NavLink>
															</li>
														</ul>
														{/*end::Pages*/}
													</div>
													{/*end::Pagination*/}
												</div>
												{/*end::Tab pane*/}
												{/*begin::Tab pane*/}
												<div
													id="kt_project_users_table_pane"
													className="tab-pane fade"
												>
													{/*begin::Card*/}
													<div className="card card-flush">
														{/*begin::Card body*/}
														<div className="card-body pt-0">
															{/*begin::Table container*/}
															<div className="table-responsive">
																{/*begin::Table*/}
																<table
																	id="kt_project_users_table"
																	className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder"
																>
																	{/*begin::Head*/}
																	<thead className="fs-7 text-gray-400 text-uppercase">
																		<tr>
																			<th className="min-w-250px">Manager</th>
																			<th className="min-w-150px">Date</th>
																			<th className="min-w-90px">Amount</th>
																			<th className="min-w-90px">Status</th>
																			<th className="min-w-50px text-end">Details</th>
																		</tr>
																	</thead>
																	{/*end::Head*/}
																	{/*begin::Body*/}
																	<tbody className="fs-6">
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-1.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Smith
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							e.smith@kpmg.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Dec 20, 2021</td>
																			<td>$711.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								M
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Melody Macy
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							melody@altbox.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Oct 25, 2021</td>
																			<td>$900.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-26.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Max Smith
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							max@kt.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 24, 2021</td>
																			<td>$997.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-4.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Sean Bean
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							sean@dellito.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 24, 2021</td>
																			<td>$921.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-15.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Brian Cox
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							brian@exchange.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jul 25, 2021</td>
																			<td>$514.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-warning text-warning fw-bold">
																								C
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Mikaela Collins
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							mikaela@pexcom.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 24, 2021</td>
																			<td>$401.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-8.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Francis Mitcham
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							f.mitcham@kpmg.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Nov 10, 2021</td>
																			<td>$761.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								O
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Olivia Wild
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							olivia@corpmail.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 20, 2021</td>
																			<td>$821.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-primary text-primary fw-bold">
																								N
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Neil Owen
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							owen.neil@gmail.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>May 05, 2021</td>
																			<td>$588.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-6.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Dan Wilson
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							dam@consilting.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Oct 25, 2021</td>
																			<td>$772.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								E
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Bold
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							emma@intenso.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Apr 15, 2021</td>
																			<td>$913.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-7.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Ana Crown
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							ana.cf@limtel.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Apr 15, 2021</td>
																			<td>$741.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-info text-info fw-bold">
																								A
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Robert Doe
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							robert@benko.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 24, 2021</td>
																			<td>$495.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-17.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							John Miller
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							miller@mapple.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Dec 20, 2021</td>
																			<td>$786.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-success text-success fw-bold">
																								L
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Lucy Kunic
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							lucy.m@fentech.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Oct 25, 2021</td>
																			<td>$581.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-10.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Ethan Wilder
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							ethan@loop.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Feb 21, 2021</td>
																			<td>$912.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-info text-info fw-bold">
																								A
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Robert Doe
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							robert@benko.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Feb 21, 2021</td>
																			<td>$879.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-1.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Smith
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							e.smith@kpmg.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Aug 19, 2021</td>
																			<td>$915.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								O
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Olivia Wild
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							olivia@corpmail.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 20, 2021</td>
																			<td>$757.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-info text-info fw-bold">
																								A
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Robert Doe
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							robert@benko.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jul 25, 2021</td>
																			<td>$463.00</td>
																			<td>
																				<span className="badge badge-light-info fw-bolder px-4 py-3">
																					In progress
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-7.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Ana Crown
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							ana.cf@limtel.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>May 05, 2021</td>
																			<td>$565.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-1.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Smith
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							e.smith@kpmg.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Jun 24, 2021</td>
																			<td>$767.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-17.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							John Miller
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							miller@mapple.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Nov 10, 2021</td>
																			<td>$519.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-info text-info fw-bold">
																								A
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Robert Doe
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							robert@benko.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>May 05, 2021</td>
																			<td>$845.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								E
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Bold
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							emma@intenso.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Aug 19, 2021</td>
																			<td>$761.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-15.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Brian Cox
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							brian@exchange.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Mar 10, 2021</td>
																			<td>$541.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-danger text-danger fw-bold">
																								E
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Emma Bold
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							emma@intenso.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Mar 10, 2021</td>
																			<td>$765.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<span className="symbol-label bg-light-info text-info fw-bold">
																								A
																							</span>
																						</div>
																						{/*end::Avatar*/}
																						{/*begin::Online*/}
																						<div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1" />
																						{/*end::Online*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Robert Doe
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							robert@benko.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>May 05, 2021</td>
																			<td>$893.00</td>
																			<td>
																				<span className="badge badge-light-danger fw-bolder px-4 py-3">
																					Rejected
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-15.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Brian Cox
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							brian@exchange.com
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Oct 25, 2021</td>
																			<td>$619.00</td>
																			<td>
																				<span className="badge badge-light-success fw-bolder px-4 py-3">
																					Approved
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																		<tr>
																			<td>
																				{/*begin::User*/}
																				<div className="d-flex align-items-center">
																					{/*begin::Wrapper*/}
																					<div className="me-5 position-relative">
																						{/*begin::Avatar*/}
																						<div className="symbol symbol-35px symbol-circle">
																							<img
																								alt="Pic"
																								src="/assets/media/avatars/150-8.jpg"
																							/>
																						</div>
																						{/*end::Avatar*/}
																					</div>
																					{/*end::Wrapper*/}
																					{/*begin::Info*/}
																					<div className="d-flex flex-column justify-content-center">
																						<NavLink
																							href
																							className="mb-1 text-gray-800 text-hover-primary"
																						>
																							Francis Mitcham
																						</NavLink>
																						<div className="fw-bold fs-6 text-gray-400">
																							f.mitcham@kpmg.com.au
																						</div>
																					</div>
																					{/*end::Info*/}
																				</div>
																				{/*end::User*/}
																			</td>
																			<td>Sep 22, 2021</td>
																			<td>$859.00</td>
																			<td>
																				<span className="badge badge-light-warning fw-bolder px-4 py-3">
																					Pending
																				</span>
																			</td>
																			<td className="text-end">
																				<NavLink to="#" className="btn btn-light btn-sm">
																					View
																				</NavLink>
																			</td>
																		</tr>
																	</tbody>
																	{/*end::Body*/}
																</table>
																{/*end::Table*/}
															</div>
															{/*end::Table container*/}
														</div>
														{/*end::Card body*/}
													</div>
													{/*end::Card*/}
												</div>
												{/*end::Tab pane*/}
											</div>
											{/*end::Tab Content*/}
										</div>
										{/*end::Layout*/}
									</div>
									{/*begin::Search vertical*/}
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
		</>
	)
}

export default Vertical;