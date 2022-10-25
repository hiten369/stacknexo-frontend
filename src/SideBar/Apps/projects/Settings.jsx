import React from 'react'
import NewTargetModal from '../../../CommonElements/NewTargetModal';
import ViewUserModal from '../../../CommonElements/ViewUserModal';
import { NavLink } from 'react-router-dom';

const Settings = () => {
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
											Project Settings
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
											<li className="breadcrumb-item text-gray-600">Projects</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Settings</li>
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
												id="kt_menu_61b9c7b5e115b"
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
																data-dropdown-parent="#kt_menu_61b9c7b5e115b"
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
									{/*begin::Navbar*/}
									<div className="card mb-9">
										<div className="card-body pt-9 pb-0">
											{/*begin::Details*/}
											<div className="d-flex flex-wrap flex-sm-nowrap mb-6">
												{/*begin::Image*/}
												<div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
													<img
														className="mw-50px mw-lg-75px"
														src="/assets/media/svg/brand-logos/volicity-9.svg"
														alt="image"
													/>
												</div>
												{/*end::Image*/}
												{/*begin::Wrapper*/}
												<div className="flex-grow-1">
													{/*begin::Head*/}
													<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
														{/*begin::Details*/}
														<div className="d-flex flex-column">
															{/*begin::Status*/}
															<div className="d-flex align-items-center mb-1">
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3"
																>
																	CRM Dashboard
																</NavLink>
																<span className="badge badge-light-success me-auto">
																	In Progress
																</span>
															</div>
															{/*end::Status*/}
															{/*begin::Description*/}
															<div className="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
																#1 Tool to get started with Web Apps any Kind &amp;
																size
															</div>
															{/*end::Description*/}
														</div>
														{/*end::Details*/}
														{/*begin::Actions*/}
														<div className="d-flex mb-4">
															<NavLink
																to="#"
																className="btn btn-sm btn-bg-light btn-active-color-primary me-3"
																data-bs-toggle="modal"
																data-bs-target="#kt_modal_users_search"
															>
																Add User
															</NavLink>
															<NavLink
																to="#"
																className="btn btn-sm btn-primary me-3"
																data-bs-toggle="modal"
																data-bs-target="#kt_modal_new_target"
															>
																Add Target
															</NavLink>
															{/*begin::Menu*/}
															<div className="me-0">
																<button
																	className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
																	data-kt-menu-trigger="click"
																	data-kt-menu-placement="bottom-end"
																>
																	<i className="bi bi-three-dots fs-3" />
																</button>
																{/*begin::Menu 3*/}
																<div
																	className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
																	data-kt-menu="true"
																>
																	{/*begin::Heading*/}
																	<div className="menu-item px-3">
																		<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
																			Payments
																		</div>
																	</div>
																	{/*end::Heading*/}
																	{/*begin::Menu item*/}
																	<div className="menu-item px-3">
																		<NavLink to="#" className="menu-link px-3">
																			Create Invoice
																		</NavLink>
																	</div>
																	{/*end::Menu item*/}
																	{/*begin::Menu item*/}
																	<div className="menu-item px-3">
																		<NavLink to="#" className="menu-link flex-stack px-3">
																			Create Payment
																			<i
																				className="fas fa-exclamation-circle ms-2 fs-7"
																				data-bs-toggle="tooltip"
																				title="Specify a target name for future usage and reference"
																			/>
																		</NavLink>
																	</div>
																	{/*end::Menu item*/}
																	{/*begin::Menu item*/}
																	<div className="menu-item px-3">
																		<NavLink to="#" className="menu-link px-3">
																			Generate Bill
																		</NavLink>
																	</div>
																	{/*end::Menu item*/}
																	{/*begin::Menu item*/}
																	<div
																		className="menu-item px-3"
																		data-kt-menu-trigger="hover"
																		data-kt-menu-placement="right-end"
																	>
																		<NavLink to="#" className="menu-link px-3">
																			<span className="menu-title">Subscription</span>
																			<span className="menu-arrow" />
																		</NavLink>
																		{/*begin::Menu sub*/}
																		<div className="menu-sub menu-sub-dropdown w-175px py-4">
																			{/*begin::Menu item*/}
																			<div className="menu-item px-3">
																				<NavLink to="#" className="menu-link px-3">
																					Plans
																				</NavLink>
																			</div>
																			{/*end::Menu item*/}
																			{/*begin::Menu item*/}
																			<div className="menu-item px-3">
																				<NavLink to="#" className="menu-link px-3">
																					Billing
																				</NavLink>
																			</div>
																			{/*end::Menu item*/}
																			{/*begin::Menu item*/}
																			<div className="menu-item px-3">
																				<NavLink to="#" className="menu-link px-3">
																					Statements
																				</NavLink>
																			</div>
																			{/*end::Menu item*/}
																			{/*begin::Menu separator*/}
																			<div className="separator my-2" />
																			{/*end::Menu separator*/}
																			{/*begin::Menu item*/}
																			<div className="menu-item px-3">
																				<div className="menu-content px-3">
																					{/*begin::Switch*/}
																					<label className="form-check form-switch form-check-custom form-check-solid">
																						{/*begin::Input*/}
																						<input
																							className="form-check-input w-30px h-20px"
																							type="checkbox"
																							defaultValue={1}
																							defaultChecked="checked"
																							name="notifications"
																						/>
																						{/*end::Input*/}
																						{/*end::Label*/}
																						<span className="form-check-label text-muted fs-6">
																							Recuring
																						</span>
																						{/*end::Label*/}
																					</label>
																					{/*end::Switch*/}
																				</div>
																			</div>
																			{/*end::Menu item*/}
																		</div>
																		{/*end::Menu sub*/}
																	</div>
																	{/*end::Menu item*/}
																	{/*begin::Menu item*/}
																	<div className="menu-item px-3 my-1">
																		<NavLink to="#" className="menu-link px-3">
																			Settings
																		</NavLink>
																	</div>
																	{/*end::Menu item*/}
																</div>
																{/*end::Menu 3*/}
															</div>
															{/*end::Menu*/}
														</div>
														{/*end::Actions*/}
													</div>
													{/*end::Head*/}
													{/*begin::Info*/}
													<div className="d-flex flex-wrap justify-content-start">
														{/*begin::Stats*/}
														<div className="d-flex flex-wrap">
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	<div className="fs-4 fw-bolder">29 Jan, 2021</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-bold fs-6 text-gray-400">
																	Due Date
																</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
																	<span className="svg-icon svg-icon-3 svg-icon-danger me-2">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={11}
																				y={18}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(-90 11 18)"
																				fill="black"
																			/>
																			<path
																				d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	<div
																		className="fs-4 fw-bolder"
																		data-kt-countup="true"
																		data-kt-countup-value={75}
																	>
																		0
																	</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-bold fs-6 text-gray-400">
																	Open Tasks
																</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
																	<span className="svg-icon svg-icon-3 svg-icon-success me-2">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={13}
																				y={6}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(90 13 6)"
																				fill="black"
																			/>
																			<path
																				d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																	<div
																		className="fs-4 fw-bolder"
																		data-kt-countup="true"
																		data-kt-countup-value={15000}
																		data-kt-countup-prefix="$"
																	>
																		0
																	</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-bold fs-6 text-gray-400">
																	Budget Spent
																</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
														</div>
														{/*end::Stats*/}
														{/*begin::Users*/}
														<div className="symbol-group symbol-hover mb-3">
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Alan Warden"
															>
																<span className="symbol-label bg-warning text-inverse-warning fw-bolder">
																	A
																</span>
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Michael Eberon"
															>
																<img
																	alt="Pic"
																	src="/assets/media/avatars/150-12.jpg"
																/>
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Michelle Swanston"
															>
																<img
																	alt="Pic"
																	src="/assets/media/avatars/150-13.jpg"
																/>
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Francis Mitcham"
															>
																<img alt="Pic" src="/assets/media/avatars/150-5.jpg" />
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Susan Redwood"
															>
																<span className="symbol-label bg-primary text-inverse-primary fw-bolder">
																	S
																</span>
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Melody Macy"
															>
																<img alt="Pic" src="/assets/media/avatars/150-3.jpg" />
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Perry Matthew"
															>
																<span className="symbol-label bg-info text-inverse-info fw-bolder">
																	P
																</span>
															</div>
															{/*end::User*/}
															{/*begin::User*/}
															<div
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="tooltip"
																title="Barry Walter"
															>
																<img alt="Pic" src="/assets/media/avatars/150-7.jpg" />
															</div>
															{/*end::User*/}
															{/*begin::All users*/}
															<NavLink
																to="#"
																className="symbol symbol-35px symbol-circle"
																data-bs-toggle="modal"
																data-bs-target="#kt_modal_view_users"
															>
																<span
																	className="symbol-label bg-dark text-inverse-dark fs-8 fw-bolder"
																	data-bs-toggle="tooltip"
																	data-bs-trigger="hover"
																	title="View more users"
																>
																	+42
																</span>
															</NavLink>
															{/*end::All users*/}
														</div>
														{/*end::Users*/}
													</div>
													{/*end::Info*/}
												</div>
												{/*end::Wrapper*/}
											</div>
											{/*end::Details*/}
											<div className="separator" />
											{/*begin::Nav wrapper*/}
											<div className="d-flex overflow-auto h-55px">
												{/*begin::Nav links*/}
												<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/project.html"
														>
															Overview
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/targets.html"
														>
															Targets
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/budget.html"
														>
															Budget
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/users.html"
														>
															Users
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/files.html"
														>
															Files
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/projects/activity.html"
														>
															Activity
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6 active"
															to="../../demo14/dist/apps/projects/settings.html"
														>
															Settings
														</NavLink>
													</li>
													{/*end::Nav item*/}
												</ul>
												{/*end::Nav links*/}
											</div>
											{/*end::Nav wrapper*/}
										</div>
									</div>
									{/*end::Navbar*/}
									{/*begin::Card*/}
									<div className="card">
										{/*begin::Card header*/}
										<div className="card-header">
											{/*begin::Card title*/}
											<div className="card-title fs-3 fw-bolder">
												Project Settings
											</div>
											{/*end::Card title*/}
										</div>
										{/*end::Card header*/}
										{/*begin::Form*/}
										<form id="kt_project_settings_form" className="form">
											{/*begin::Card body*/}
											<div className="card-body p-9">
												{/*begin::Row*/}
												<div className="row mb-5">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">Project Logo</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-lg-8">
														{/*begin::Image input*/}
														<div
															className="image-input image-input-outline"
															data-kt-image-input="true"
															style={{
																backgroundImage:
																	'url("assets/media/avatars/blank.png")'
															}}
														>
															{/*begin::Preview existing avatar*/}
															<div
																className="image-input-wrapper w-125px h-125px bgi-position-center"
																style={{
																	backgroundSize: "75%",
																	backgroundImage:
																		'url("assets/media/svg/brand-logos/volicity-9.svg")'
																}}
															/>
															{/*end::Preview existing avatar*/}
															{/*begin::Label*/}
															<label
																className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																data-kt-image-input-action="change"
																data-bs-toggle="tooltip"
																title="Change avatar"
															>
																<i className="bi bi-pencil-fill fs-7" />
																{/*begin::Inputs*/}
																<input
																	type="file"
																	name="avatar"
																	accept=".png, .jpg, .jpeg"
																/>
																<input type="hidden" name="avatar_remove" />
																{/*end::Inputs*/}
															</label>
															{/*end::Label*/}
															{/*begin::Cancel*/}
															<span
																className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																data-kt-image-input-action="cancel"
																data-bs-toggle="tooltip"
																title="Cancel avatar"
															>
																<i className="bi bi-x fs-2" />
															</span>
															{/*end::Cancel*/}
															{/*begin::Remove*/}
															<span
																className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																data-kt-image-input-action="remove"
																data-bs-toggle="tooltip"
																title="Remove avatar"
															>
																<i className="bi bi-x fs-2" />
															</span>
															{/*end::Remove*/}
														</div>
														{/*end::Image input*/}
														{/*begin::Hint*/}
														<div className="form-text">
															Allowed file types: png, jpg, jpeg.
														</div>
														{/*end::Hint*/}
													</div>
													{/*end::Col*/}
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row mb-8">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">Project Name</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9 fv-row">
														<input
															type="text"
															className="form-control form-control-solid"
															name="name"
															defaultValue="9 Degree Award"
														/>
													</div>
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row mb-8">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">Project Type</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9 fv-row">
														<input
															type="text"
															className="form-control form-control-solid"
															name="type"
															defaultValue="Client Relationship"
														/>
													</div>
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row mb-8">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">
															Project Description
														</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9 fv-row">
														<textarea
															name="description"
															className="form-control form-control-solid h-100px"
															defaultValue={
																"Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it’ll help you make your message"
															}
														/>
													</div>
													{/*begin::Col*/}
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row mb-8">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">Due Date</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9 fv-row">
														<div className="position-relative d-flex align-items-center">
															{/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
															<span className="svg-icon position-absolute ms-4 mb-1 svg-icon-2">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		opacity="0.3"
																		d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
																		fill="black"
																	/>
																	<path
																		d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
																		fill="black"
																	/>
																	<path
																		d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
															<input
																className="form-control form-control-solid ps-12"
																name="date"
																placeholder="Pick a date"
																id="kt_datepicker_1"
															/>
														</div>
													</div>
													{/*begin::Col*/}
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row mb-8">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">
															Notifications
														</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9">
														<div className="d-flex fw-bold h-100">
															<div className="form-check form-check-custom form-check-solid me-9">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue
																	id="email"
																/>
																<label
																	className="form-check-label ms-3"
																	htmlFor="email"
																>
																	Email
																</label>
															</div>
															<div className="form-check form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="checkbox"
																	defaultValue
																	id="phone"
																	defaultChecked="checked"
																/>
																<label
																	className="form-check-label ms-3"
																	htmlFor="phone"
																>
																	Phone
																</label>
															</div>
														</div>
													</div>
													{/*end::Col*/}
												</div>
												{/*end::Row*/}
												{/*begin::Row*/}
												<div className="row">
													{/*begin::Col*/}
													<div className="col-xl-3">
														<div className="fs-6 fw-bold mt-2 mb-3">Status</div>
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-xl-9">
														<div className="form-check form-switch form-check-custom form-check-solid">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
																id="status"
																name="status"
																defaultChecked="checked"
															/>
															<label
																className="form-check-label fw-bold text-gray-400 ms-3"
																htmlFor="status"
															>
																Active
															</label>
														</div>
													</div>
													{/*end::Col*/}
												</div>
												{/*end::Row*/}
											</div>
											{/*end::Card body*/}
											{/*begin::Card footer*/}
											<div className="card-footer d-flex justify-content-end py-6 px-9">
												<button
													type="reset"
													className="btn btn-light btn-active-light-primary me-2"
												>
													Discard
												</button>
												<button
													type="submit"
													className="btn btn-primary"
													id="kt_project_settings_submit"
												>
													Save Changes
												</button>
											</div>
											{/*end::Card footer*/}
										</form>
										{/*end:Form*/}
									</div>
									{/*end::Card*/}
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
			<NewTargetModal />
            <ViewUserModal />
		</div>
	)
}

export default Settings;