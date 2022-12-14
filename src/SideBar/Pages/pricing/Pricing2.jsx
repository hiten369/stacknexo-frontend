import React from 'react'
import { NavLink } from 'react-router-dom';

const Pricing2 = () => {
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
											Pricing 2
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
											<li className="breadcrumb-item text-gray-600">Pages</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Pricing</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Pricing 2</li>
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
												id="kt_menu_61b9c7845c954"
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
																data-dropdown-parent="#kt_menu_61b9c7845c954"
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
									{/*begin::Pricing*/}
									<div className="card">
										{/*begin::Card body*/}
										<div className="card-body px-10 px-lg-20 pt-17 pb-10">
											{/*begin::Table container*/}
											<div className="table-responsive">
												{/*begin::Table*/}
												<table className="table align-middle table-striped gy-7">
													{/*begin::Table head*/}
													<thead className="align-middle">
														<tr id="kt_pricing">
															<th>
																{/*begin::Nav group*/}
																<div
																	className="nav bg-light rounded-pill px-3 py-2 ms-9 mb-15"
																	data-kt-buttons="true"
																	style={{ width: 222 }}
																>
																	{/*begin::Nav link*/}
																	<NavLink
																		className="nav-link active btn btn-active btn-active-dark fw-bolder btn-color-gray-600 active py-3 px-5 m-1 rounded-pill"
																		data-kt-plan="month"
																	>
																		Monthly
																	</NavLink>
																	{/*end::Nav link*/}
																	{/*begin::Nav link*/}
																	<NavLink
																		className="nav-link btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5 m-1 rounded-pill"
																		data-kt-plan="annual"
																	>
																		Annually
																	</NavLink>
																	{/*end::Nav link*/}
																</div>
																{/*end::Nav group*/}
															</th>
															<th className="text-center min-w-200px">
																<div className="min-w-200px mb-15">
																	<div className="text-primary fs-3 fw-bolder mb-7">
																		Free
																	</div>
																	<div className="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm">
																		<span className="align-self-start fs-2 mt-3">
																			$
																		</span>
																		0
																	</div>
																	<div className="text-muted fw-bolder mb-7">
																		Monthly
																	</div>
																	<NavLink
																		to="#"
																		className="btn btn-light-primary fw-bolder mx-auto"
																	>
																		Start
																	</NavLink>
																</div>
															</th>
															<th className="text-center min-w-200px">
																<div className="min-w-200px bg-primary card-rounded py-12 mb-15">
																	<div className="text-white fs-3 fw-bolder mb-7">
																		Pro
																	</div>
																	<div className="fs-5x text-white d-flex justify-content-center align-items-start">
																		<span className="fs-2 mt-3">$</span>
																		<span
																			className="lh-sm fw-bold"
																			data-kt-plan-price-month={99}
																			data-kt-plan-price-annual={399}
																		>
																			99
																		</span>
																	</div>
																	<div className="text-white fw-bolder mb-7">
																		Monthly
																	</div>
																	<NavLink
																		to="#"
																		className="btn bg-white bg-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder mx-auto"
																	>
																		Start
																	</NavLink>
																</div>
															</th>
															<th className="text-center min-w-200px">
																<div className="min-w-200px mb-15">
																	<div className="text-primary fs-3 fw-bolder mb-7">
																		Lifetime
																	</div>
																	<div className="fs-5x d-flex justify-content-center align-items-start">
																		<span className="fs-2 mt-3">$</span>
																		<span
																			className="lh-sm fw-bold"
																			data-kt-plan-price-month={199}
																			data-kt-plan-price-annual={999}
																		>
																			199
																		</span>
																	</div>
																	<div className="text-muted fw-bolder mb-7">
																		Monthly
																	</div>
																	<NavLink
																		to="#"
																		className="btn btn-light-primary fw-bolder mx-auto"
																	>
																		Select
																	</NavLink>
																</div>
															</th>
														</tr>
													</thead>
													{/*end::Table head*/}
													{/*begin::Table body*/}
													<tbody>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	Sublicense Visuals
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	Free Updates
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	Theme Support
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	Unlimited Websites
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	DDOS Protection
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
														<tr>
															<th className="card-rounded-start">
																<div className="fw-bolder d-flex align-items-center ps-9 fs-3">
																	Domain Reseller
																</div>
															</th>
															<td>
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td>
																<div className="px-7 flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
															<td className="card-rounded-end">
																<div className="flex-root d-flex justify-content-center">
																	<span className="h-40px w-40px d-flex flex-center d-block">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																	<span className="h-40px w-40px d-flex flex-center d-none">
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					opacity="0.5"
																					x="7.05025"
																					y="15.5356"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(-45 7.05025 15.5356)"
																					fill="black"
																				/>
																				<rect
																					x="8.46447"
																					y="7.05029"
																					width={12}
																					height={2}
																					rx={1}
																					transform="rotate(45 8.46447 7.05029)"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</span>
																</div>
															</td>
														</tr>
													</tbody>
													{/*end::Table body*/}
												</table>
												{/*end::Table*/}
											</div>
											{/*end::Table container*/}
										</div>
										{/*end::Card body*/}
									</div>
									{/*end::Pricisng*/}
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

export default Pricing2
