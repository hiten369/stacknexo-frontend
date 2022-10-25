import React from 'react'
import { NavLink } from 'react-router-dom';

const Files = () => {
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
											File Manager - Files
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
											<li className="breadcrumb-item text-gray-600">File Manager</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Files</li>
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
												id="kt_menu_61b9c7cf45e5f"
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
																data-dropdown-parent="#kt_menu_61b9c7cf45e5f"
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
									<div
										className="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
										style={{
											backgroundSize: "auto calc(100% + 10rem)",
											backgroundPositionX: "100%",
											backgroundImage:
												'url("assets/media/illustrations/sketchy-1/4.png")'
										}}
									>
										{/*begin::Card header*/}
										<div className="card-header pt-10">
											<div className="d-flex align-items-center">
												{/*begin::Icon*/}
												<div className="symbol symbol-circle me-5">
													<div className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
														{/*begin::Svg Icon | path: icons/duotune/abstract/abs020.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	d="M17.302 11.35L12.002 20.55H21.202C21.802 20.55 22.202 19.85 21.902 19.35L17.302 11.35Z"
																	fill="black"
																/>
																<path
																	opacity="0.3"
																	d="M12.002 20.55H2.802C2.202 20.55 1.80202 19.85 2.10202 19.35L6.70203 11.45L12.002 20.55ZM11.302 3.45L6.70203 11.35H17.302L12.702 3.45C12.402 2.85 11.602 2.85 11.302 3.45Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
													</div>
												</div>
												{/*end::Icon*/}
												{/*begin::Title*/}
												<div className="d-flex flex-column">
													<h2 className="mb-1">File Manager</h2>
													<div className="text-muted fw-bolder">
														<NavLink to="#">Keenthemes</NavLink>
														<span className="mx-3">|</span>
														<NavLink to="#">File Manager</NavLink>
														<span className="mx-3">|</span>2.6 GB
														<span className="mx-3">|</span>758 items
													</div>
												</div>
												{/*end::Title*/}
											</div>
										</div>
										{/*end::Card header*/}
										{/*begin::Card body*/}
										<div className="card-body pb-0">
											{/*begin::Navs*/}
											<div className="d-flex overflow-auto h-55px">
												<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6 active"
															to="../../demo14/dist/apps/file-manager/folders.html"
														>
															Files
														</NavLink>
													</li>
													{/*end::Nav item*/}
													{/*begin::Nav item*/}
													<li className="nav-item">
														<NavLink
															className="nav-link text-active-primary me-6"
															to="../../demo14/dist/apps/file-manager/settings.html"
														>
															Settings
														</NavLink>
													</li>
													{/*end::Nav item*/}
												</ul>
											</div>
											{/*begin::Navs*/}
										</div>
										{/*end::Card body*/}
									</div>
									{/*end::Card*/}
									{/*begin::Card*/}
									<div className="card card-flush">
										{/*begin::Card header*/}
										<div className="card-header pt-8">
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
														data-kt-filemanager-table-filter="search"
														className="form-control form-control-solid w-250px ps-15"
														placeholder="Search Files & Folders"
													/>
												</div>
												{/*end::Search*/}
											</div>
											{/*begin::Card toolbar*/}
											<div className="card-toolbar">
												{/*begin::Toolbar*/}
												<div
													className="d-flex justify-content-end"
													data-kt-filemanager-table-toolbar="base"
												>
													{/*begin::Back to folders*/}
													<NavLink
														to="../../demo14/dist/apps/file-manager/folders.html"
														className="btn btn-icon btn-light-primary me-3"
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
														{/*end::Svg Icon*/}
													</NavLink>
													{/*end::Back to folders*/}
													{/*begin::Export*/}
													<button
														type="button"
														className="btn btn-light-primary me-3"
														id="kt_file_manager_new_folder"
													>
														{/*begin::Svg Icon | path: icons/duotune/files/fil013.svg*/}
														<span className="svg-icon svg-icon-2">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	opacity="0.3"
																	d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																	fill="black"
																/>
																<path
																	d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.2C9.7 3 10.2 3.20001 10.4 3.60001ZM16 12H13V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V12H8C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14H11V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V14H16C16.6 14 17 13.6 17 13C17 12.4 16.6 12 16 12Z"
																	fill="black"
																/>
																<path
																	opacity="0.3"
																	d="M11 14H8C7.4 14 7 13.6 7 13C7 12.4 7.4 12 8 12H11V14ZM16 12H13V14H16C16.6 14 17 13.6 17 13C17 12.4 16.6 12 16 12Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}New Folder
													</button>
													{/*end::Export*/}
													{/*begin::Add customer*/}
													<button
														type="button"
														className="btn btn-primary"
														data-bs-toggle="modal"
														data-bs-target="#kt_modal_upload"
													>
														{/*begin::Svg Icon | path: icons/duotune/files/fil018.svg*/}
														<span className="svg-icon svg-icon-2">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	opacity="0.3"
																	d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																	fill="black"
																/>
																<path
																	d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM16 11.6L12.7 8.29999C12.3 7.89999 11.7 7.89999 11.3 8.29999L8 11.6H11V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H16Z"
																	fill="black"
																/>
																<path
																	opacity="0.3"
																	d="M11 11.6V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H11Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}Upload Files
													</button>
													{/*end::Add customer*/}
												</div>
												{/*end::Toolbar*/}
												{/*begin::Group actions*/}
												<div
													className="d-flex justify-content-end align-items-center d-none"
													data-kt-filemanager-table-toolbar="selected"
												>
													<div className="fw-bolder me-5">
														<span
															className="me-2"
															data-kt-filemanager-table-select="selected_count"
														/>
														Selected
													</div>
													<button
														type="button"
														className="btn btn-danger"
														data-kt-filemanager-table-select="delete_selected"
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
										<div className="card-body">
											{/*begin::Table header*/}
											<div className="d-flex flex-stack">
												{/*begin::Folder path*/}
												<div className="badge badge-lg badge-light-primary">
													<div className="d-flex align-items-center flex-wrap">
														{/*begin::Svg Icon | path: icons/duotune/abstract/abs039.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary me-3">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	opacity="0.3"
																	d="M14.1 15.013C14.6 16.313 14.5 17.813 13.7 19.113C12.3 21.513 9.29999 22.313 6.89999 20.913C5.29999 20.013 4.39999 18.313 4.39999 16.613C5.09999 17.013 5.99999 17.313 6.89999 17.313C8.39999 17.313 9.69998 16.613 10.7 15.613C11.1 15.713 11.5 15.813 11.9 15.813C12.7 15.813 13.5 15.513 14.1 15.013ZM8.5 12.913C8.5 12.713 8.39999 12.513 8.39999 12.313C8.39999 11.213 8.89998 10.213 9.69998 9.613C9.19998 8.313 9.30001 6.813 10.1 5.513C10.6 4.713 11.2 4.11299 11.9 3.71299C10.4 2.81299 8.49999 2.71299 6.89999 3.71299C4.49999 5.11299 3.70001 8.113 5.10001 10.513C5.80001 11.813 7.1 12.613 8.5 12.913ZM16.9 7.313C15.4 7.313 14.1 8.013 13.1 9.013C14.3 9.413 15.1 10.513 15.3 11.713C16.7 12.013 17.9 12.813 18.7 14.113C19.2 14.913 19.3 15.713 19.3 16.613C20.8 15.713 21.8 14.113 21.8 12.313C21.9 9.513 19.7 7.313 16.9 7.313Z"
																	fill="black"
																/>
																<path
																	d="M9.69998 9.61307C9.19998 8.31307 9.30001 6.81306 10.1 5.51306C11.5 3.11306 14.5 2.31306 16.9 3.71306C18.5 4.61306 19.4 6.31306 19.4 8.01306C18.7 7.61306 17.8 7.31306 16.9 7.31306C15.4 7.31306 14.1 8.01306 13.1 9.01306C12.7 8.91306 12.3 8.81306 11.9 8.81306C11.1 8.81306 10.3 9.11307 9.69998 9.61307ZM8.5 12.9131C7.1 12.6131 5.90001 11.8131 5.10001 10.5131C4.60001 9.71306 4.5 8.91306 4.5 8.01306C3 8.91306 2 10.5131 2 12.3131C2 15.1131 4.2 17.3131 7 17.3131C8.5 17.3131 9.79999 16.6131 10.8 15.6131C9.49999 15.1131 8.7 14.1131 8.5 12.9131ZM18.7 14.1131C17.9 12.8131 16.7 12.0131 15.3 11.7131C15.3 11.9131 15.4 12.1131 15.4 12.3131C15.4 13.4131 14.9 14.4131 14.1 15.0131C14.6 16.3131 14.5 17.8131 13.7 19.1131C13.2 19.9131 12.6 20.5131 11.9 20.9131C13.4 21.8131 15.3 21.9131 16.9 20.9131C19.3 19.6131 20.1 16.5131 18.7 14.1131Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
														<NavLink to="../../demo14/dist/apps/file-manager/folders.html">
															Keenthemes
														</NavLink>
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
														<NavLink to="../../demo14/dist/apps/file-manager/folders.html">
															themes
														</NavLink>
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
														<NavLink to="../../demo14/dist/apps/file-manager/folders.html">
															html
														</NavLink>
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
														<NavLink to="../../demo14/dist/apps/file-manager/folders.html">
															demo1
														</NavLink>
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}account
													</div>
												</div>
												{/*end::Folder path*/}
												{/*begin::Folder Stats*/}
												<div className="badge badge-lg badge-primary">
													<span id="kt_file_manager_items_counter">66 items</span>
												</div>
												{/*end::Folder Stats*/}
											</div>
											{/*end::Table header*/}
											{/*begin::Table*/}
											<table
												id="kt_file_manager_list"
												data-kt-filemanager-table="files"
												className="table align-middle table-row-dashed fs-6 gy-5"
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
																	data-kt-check-target="#kt_file_manager_list .form-check-input"
																	defaultValue={1}
																/>
															</div>
														</th>
														<th className="min-w-250px">Name</th>
														<th className="min-w-10px">Size</th>
														<th className="min-w-125px">Last Modified</th>
														<th className="w-125px" />
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	api-keys.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>489 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>05 May 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	billing.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 11:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	overview.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 9:23 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	referrals.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>19 Aug 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	security.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	settings.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>15 Apr 2021, 6:43 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	statements.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>552 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-1.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-2.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Jul 2021, 11:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-3.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 8:43 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-4.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Dec 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-5.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 6:43 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 6:43 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Mar 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>19 Aug 2021, 6:43 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>15 Apr 2021, 10:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 10:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Dec 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Dec 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	api-keys.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>489 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Mar 2021, 9:23 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	billing.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	overview.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	referrals.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>05 May 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	security.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>05 May 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	settings.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 10:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	statements.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>552 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-1.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-2.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-3.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Mar 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-4.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-5.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>15 Apr 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Dec 2021, 6:43 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 10:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>05 May 2021, 9:23 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>19 Aug 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Jul 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	api-keys.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>489 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	billing.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	overview.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Jul 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	referrals.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Jul 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	security.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 6:05 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	settings.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Mar 2021, 2:40 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	statements.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>552 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>24 Jun 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-1.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>554 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Mar 2021, 5:30 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-2.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>522 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-3.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>477 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Oct 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-4.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>514 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 9:23 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
																			fill="black"
																		/>
																		<path
																			d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	widgets-5.html
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>475 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 11:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>10 Nov 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>20 Jun 2021, 11:05 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 5:20 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	pattern-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>11 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>22 Sep 2021, 10:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-1.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>19 Aug 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-2.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>21 Feb 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-3.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>05 May 2021, 11:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-4.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>25 Jul 2021, 11:30 am</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
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
															<div className="d-flex align-items-center">
																{/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
																			fill="black"
																		/>
																		<path
																			d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
																<NavLink
																	to="#"
																	className="text-gray-800 text-hover-primary"
																>
																	background-5.jpg
																</NavLink>
															</div>
														</td>
														{/*end::Name=*/}
														{/*begin::Size*/}
														<td>48 KB</td>
														{/*end::Size*/}
														{/*begin::Last modified*/}
														<td>15 Apr 2021, 10:10 pm</td>
														{/*end::Last modified*/}
														{/*begin::Actions*/}
														<td
															className="text-end"
															data-kt-filemanager-table="action_dropdown"
														>
															<div className="d-flex justify-content-end">
																{/*begin::Share link*/}
																<div
																	className="ms-2"
																	data-kt-filemanger-table="copy_link"
																>
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<path
																					opacity="0.3"
																					d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																					fill="black"
																				/>
																				<path
																					d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
																		data-kt-menu="true"
																	>
																		{/*begin::Card*/}
																		<div className="card card-flush">
																			<div className="card-body p-5">
																				{/*begin::Loader*/}
																				<div
																					className="d-flex"
																					data-kt-filemanger-table="copy_link_generator"
																				>
																					{/*begin::Spinner*/}
																					<div
																						className="me-5"
																						data-kt-indicator="on"
																					>
																						<span className="indicator-progress">
																							<span className="spinner-border spinner-border-sm align-middle ms-2" />
																						</span>
																					</div>
																					{/*end::Spinner*/}
																					{/*begin::Label*/}
																					<div className="fs-6 text-dark">
																						Generating Share Link...
																					</div>
																					{/*end::Label*/}
																				</div>
																				{/*end::Loader*/}
																				{/*begin::Link*/}
																				<div
																					className="d-flex flex-column text-start d-none"
																					data-kt-filemanger-table="copy_link_result"
																				>
																					<div className="d-flex mb-3">
																						{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																						<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																						<div className="fs-6 text-dark">
																							Share Link Generated
																						</div>
																					</div>
																					<input
																						type="text"
																						className="form-control form-control-sm"
																						defaultValue="https://path/to/file/or/folder/"
																					/>
																					<div className="text-muted fw-normal mt-2 fs-8 px-3">
																						Read only.
																						<NavLink
																							to="../../demo14/dist/apps/file-manager/settings/.html"
																							className="ms-2"
																						>
																							Change permissions
																						</NavLink>
																					</div>
																				</div>
																				{/*end::Link*/}
																			</div>
																		</div>
																		{/*end::Card*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::Share link*/}
																{/*begin::More*/}
																<div className="ms-2">
																	<button
																		type="button"
																		className="btn btn-sm btn-icon btn-light btn-active-light-primary"
																		data-kt-menu-trigger="click"
																		data-kt-menu-placement="bottom-end"
																	>
																		{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
																		<span className="svg-icon svg-icon-5 m-0">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width={24}
																				height={24}
																				viewBox="0 0 24 24"
																				fill="none"
																			>
																				<rect
																					x={10}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={17}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																				<rect
																					x={3}
																					y={10}
																					width={4}
																					height={4}
																					rx={2}
																					fill="black"
																				/>
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</button>
																	{/*begin::Menu*/}
																	<div
																		className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
																		data-kt-menu="true"
																	>
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink to="#" className="menu-link px-3">
																				Download File
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table="rename"
																			>
																				Rename
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link px-3"
																				data-kt-filemanager-table-filter="move_row"
																				data-bs-toggle="modal"
																				data-bs-target="#kt_modal_move_to_folder"
																			>
																				Move to folder
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<NavLink
																				to="#"
																				className="menu-link text-danger px-3"
																				data-kt-filemanager-table-filter="delete_row"
																			>
																				Delete
																			</NavLink>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu*/}
																</div>
																{/*end::More*/}
															</div>
														</td>
														{/*end::Actions*/}
													</tr>
												</tbody>
												{/*end::Table body*/}
											</table>
											{/*end::Table*/}
										</div>
										{/*end::Card body*/}
									</div>
									{/*end::Card*/}
									{/*begin::Upload template*/}
									<table className="d-none">
										<tbody>
											<tr
												id="kt_file_manager_new_folder_row"
												data-kt-filemanager-template="upload"
											>
												<td />
												<td id="kt_file_manager_add_folder_form" className="fv-row">
													<div className="d-flex align-items-center">
														{/*begin::Folder icon*/}
														{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
														<span className="svg-icon svg-icon-2x svg-icon-primary me-4">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
															>
																<path
																	opacity="0.3"
																	d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																	fill="black"
																/>
																<path
																	d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																	fill="black"
																/>
															</svg>
														</span>
														{/*end::Svg Icon*/}
														{/*end::Folder icon*/}
														{/*begin:Input*/}
														<input
															type="text"
															name="new_folder_name"
															placeholder="Enter the folder name"
															className="form-control mw-250px me-3"
														/>
														{/*end:Input*/}
														{/*begin:Submit button*/}
														<button
															className="btn btn-icon btn-light-primary me-3"
															id="kt_file_manager_add_folder"
														>
															<span className="indicator-label">
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																<span className="svg-icon svg-icon-1">
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
															<span className="indicator-progress">
																<span className="spinner-border spinner-border-sm align-middle" />
															</span>
														</button>
														{/*end:Submit button*/}
														{/*begin:Cancel button*/}
														<button
															className="btn btn-icon btn-light-danger"
															id="kt_file_manager_cancel_folder"
														>
															<span className="indicator-label">
																{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
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
															<span className="indicator-progress">
																<span className="spinner-border spinner-border-sm align-middle" />
															</span>
														</button>
														{/*end:Cancel button*/}
													</div>
												</td>
												<td />
												<td />
												<td />
											</tr>
										</tbody>
									</table>
									{/*end::Upload template*/}
									{/*begin::Rename template*/}
									<div className="d-none" data-kt-filemanager-template="rename">
										<div className="fv-row">
											<div className="d-flex align-items-center">
												<span id="kt_file_manager_rename_folder_icon" />
												<input
													type="text"
													id="kt_file_manager_rename_input"
													name="rename_folder_name"
													placeholder="Enter the new folder name"
													className="form-control mw-250px me-3"
													defaultValue
												/>
												<button
													className="btn btn-icon btn-light-primary me-3"
													id="kt_file_manager_rename_folder"
												>
													{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
													<span className="svg-icon svg-icon-1">
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
												</button>
												<button
													className="btn btn-icon btn-light-danger"
													id="kt_file_manager_rename_folder_cancel"
												>
													<span className="indicator-label">
														{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
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
													<span className="indicator-progress">
														<span className="spinner-border spinner-border-sm align-middle" />
													</span>
												</button>
											</div>
										</div>
									</div>
									{/*end::Rename template*/}
									{/*begin::Action template*/}
									<div className="d-none" data-kt-filemanager-template="action">
										<div className="d-flex justify-content-end">
											{/*begin::Share link*/}
											<div className="ms-2" data-kt-filemanger-table="copy_link">
												<button
													type="button"
													className="btn btn-sm btn-icon btn-light btn-active-light-primary"
													data-kt-menu-trigger="click"
													data-kt-menu-placement="bottom-end"
												>
													{/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
													<span className="svg-icon svg-icon-5 m-0">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															fill="none"
														>
															<path
																opacity="0.3"
																d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z"
																fill="black"
															/>
															<path
																d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z"
																fill="black"
															/>
														</svg>
													</span>
													{/*end::Svg Icon*/}
												</button>
												{/*begin::Menu*/}
												<div
													className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px"
													data-kt-menu="true"
												>
													{/*begin::Card*/}
													<div className="card card-flush">
														<div className="card-body p-5">
															{/*begin::Loader*/}
															<div
																className="d-flex"
																data-kt-filemanger-table="copy_link_generator"
															>
																{/*begin::Spinner*/}
																<div className="me-5" data-kt-indicator="on">
																	<span className="indicator-progress">
																		<span className="spinner-border spinner-border-sm align-middle ms-2" />
																	</span>
																</div>
																{/*end::Spinner*/}
																{/*begin::Label*/}
																<div className="fs-6 text-dark">
																	Generating Share Link...
																</div>
																{/*end::Label*/}
															</div>
															{/*end::Loader*/}
															{/*begin::Link*/}
															<div
																className="d-flex flex-column text-start d-none"
																data-kt-filemanger-table="copy_link_result"
															>
																<div className="d-flex mb-3">
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
																	<span className="svg-icon svg-icon-2 svg-icon-success me-3">
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
																	<div className="fs-6 text-dark">
																		Share Link Generated
																	</div>
																</div>
																<input
																	type="text"
																	className="form-control form-control-sm"
																	defaultValue="https://path/to/file/or/folder/"
																/>
																<div className="text-muted fw-normal mt-2 fs-8 px-3">
																	Read only.
																	<NavLink
																		to="../../demo14/dist/apps/file-manager/settings/.html"
																		className="ms-2"
																	>
																		Change permissions
																	</NavLink>
																</div>
															</div>
															{/*end::Link*/}
														</div>
													</div>
													{/*end::Card*/}
												</div>
												{/*end::Menu*/}
											</div>
											{/*end::Share link*/}
											{/*begin::More*/}
											<div className="ms-2">
												<button
													type="button"
													className="btn btn-sm btn-icon btn-light btn-active-light-primary"
													data-kt-menu-trigger="click"
													data-kt-menu-placement="bottom-end"
												>
													{/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
													<span className="svg-icon svg-icon-5 m-0">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															fill="none"
														>
															<rect
																x={10}
																y={10}
																width={4}
																height={4}
																rx={2}
																fill="black"
															/>
															<rect
																x={17}
																y={10}
																width={4}
																height={4}
																rx={2}
																fill="black"
															/>
															<rect
																x={3}
																y={10}
																width={4}
																height={4}
																rx={2}
																fill="black"
															/>
														</svg>
													</span>
													{/*end::Svg Icon*/}
												</button>
												{/*begin::Menu*/}
												<div
													className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4"
													data-kt-menu="true"
												>
													{/*begin::Menu item*/}
													<div className="menu-item px-3">
														<NavLink to="#" className="menu-link px-3">
															Download File
														</NavLink>
													</div>
													{/*end::Menu item*/}
													{/*begin::Menu item*/}
													<div className="menu-item px-3">
														<NavLink
															to="#"
															className="menu-link px-3"
															data-kt-filemanager-table="rename"
														>
															Rename
														</NavLink>
													</div>
													{/*end::Menu item*/}
													{/*begin::Menu item*/}
													<div className="menu-item px-3">
														<NavLink
															to="#"
															className="menu-link px-3"
															data-kt-filemanager-table-filter="move_row"
															data-bs-toggle="modal"
															data-bs-target="#kt_modal_move_to_folder"
														>
															Move to folder
														</NavLink>
													</div>
													{/*end::Menu item*/}
													{/*begin::Menu item*/}
													<div className="menu-item px-3">
														<NavLink
															to="#"
															className="menu-link text-danger px-3"
															data-kt-filemanager-table-filter="delete_row"
														>
															Delete
														</NavLink>
													</div>
													{/*end::Menu item*/}
												</div>
												{/*end::Menu*/}
											</div>
											{/*end::More*/}
										</div>
									</div>
									{/*end::Action template*/}
									{/*begin::Checkbox template*/}
									<div className="d-none" data-kt-filemanager-template="checkbox">
										<div className="form-check form-check-sm form-check-custom form-check-solid">
											<input
												className="form-check-input"
												type="checkbox"
												defaultValue={1}
											/>
										</div>
									</div>
									{/*end::Checkbox template*/}
									{/*begin::Modals*/}
									{/*begin::Modal - Upload File*/}
									<div
										className="modal fade"
										id="kt_modal_upload"
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
													action="none"
													id="kt_modal_upload_form"
												>
													{/*begin::Modal header*/}
													<div className="modal-header">
														{/*begin::Modal title*/}
														<h2 className="fw-bolder">Upload files</h2>
														{/*end::Modal title*/}
														{/*begin::Close*/}
														<div
															className="btn btn-icon btn-sm btn-active-icon-primary"
															data-bs-dismiss="modal"
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
													<div className="modal-body pt-10 pb-15 px-lg-17">
														{/*begin::Input group*/}
														<div className="form-group">
															{/*begin::Dropzone*/}
															<div
																className="dropzone dropzone-queue mb-2"
																id="kt_modal_upload_dropzone"
															>
																{/*begin::Controls*/}
																<div className="dropzone-panel mb-4">
																	<NavLink className="dropzone-select btn btn-sm btn-primary me-2">
																		Attach files
																	</NavLink>
																	<NavLink className="dropzone-upload btn btn-sm btn-light-primary me-2">
																		Upload All
																	</NavLink>
																	<NavLink className="dropzone-remove-all btn btn-sm btn-light-primary">
																		Remove All
																	</NavLink>
																</div>
																{/*end::Controls*/}
																{/*begin::Items*/}
																<div className="dropzone-items wm-200px">
																	<div
																		className="dropzone-item p-5"
																		style={{ display: "none" }}
																	>
																		{/*begin::File*/}
																		<div className="dropzone-file">
																			<div
																				className="dropzone-filename text-dark"
																				title="some_image_file_name.jpg"
																			>
																				<span data-dz-name>
																					some_image_file_name.jpg
																				</span>
																				<strong>
																					(<span data-dz-size>340kb</span>)
																				</strong>
																			</div>
																			<div
																				className="dropzone-error mt-0"
																				data-dz-errormessage
																			/>
																		</div>
																		{/*end::File*/}
																		{/*begin::Progress*/}
																		<div className="dropzone-progress">
																			<div className="progress bg-light-primary">
																				<div
																					className="progress-bar bg-primary"
																					role="progressbar"
																					aria-valuemin={0}
																					aria-valuemax={100}
																					aria-valuenow={0}
																					data-dz-uploadprogress
																				/>
																			</div>
																		</div>
																		{/*end::Progress*/}
																		{/*begin::Toolbar*/}
																		<div className="dropzone-toolbar">
																			<span className="dropzone-start">
																				<i className="bi bi-play-fill fs-3" />
																			</span>
																			<span
																				className="dropzone-cancel"
																				data-dz-remove
																				style={{ display: "none" }}
																			>
																				<i className="bi bi-x fs-3" />
																			</span>
																			<span
																				className="dropzone-delete"
																				data-dz-remove
																			>
																				<i className="bi bi-x fs-1" />
																			</span>
																		</div>
																		{/*end::Toolbar*/}
																	</div>
																</div>
																{/*end::Items*/}
															</div>
															{/*end::Dropzone*/}
															{/*begin::Hint*/}
															<span className="form-text fs-6 text-muted">
																Max file size is 1MB per file.
															</span>
															{/*end::Hint*/}
														</div>
														{/*end::Input group*/}
													</div>
													{/*end::Modal body*/}
												</form>
												{/*end::Form*/}
											</div>
										</div>
									</div>
									{/*end::Modal - Upload File*/}
									{/*begin::Modal - New Product*/}
									<div
										className="modal fade"
										id="kt_modal_move_to_folder"
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
													id="kt_modal_move_to_folder_form"
												>
													{/*begin::Modal header*/}
													<div className="modal-header">
														{/*begin::Modal title*/}
														<h2 className="fw-bolder">Move to folder</h2>
														{/*end::Modal title*/}
														{/*begin::Close*/}
														<div
															className="btn btn-icon btn-sm btn-active-icon-primary"
															data-bs-dismiss="modal"
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
													<div className="modal-body pt-10 pb-15 px-lg-17">
														{/*begin::Input group*/}
														<div className="form-group fv-row">
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={0}
																		id="kt_modal_move_to_folder_0"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_0"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}account
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={1}
																		id="kt_modal_move_to_folder_1"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_1"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}apps
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={2}
																		id="kt_modal_move_to_folder_2"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_2"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}widgets
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={3}
																		id="kt_modal_move_to_folder_3"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_3"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}assets
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={4}
																		id="kt_modal_move_to_folder_4"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_4"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}documentation
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={5}
																		id="kt_modal_move_to_folder_5"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_5"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}layouts
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={6}
																		id="kt_modal_move_to_folder_6"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_6"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}modals
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={7}
																		id="kt_modal_move_to_folder_7"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_7"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}authentication
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={8}
																		id="kt_modal_move_to_folder_8"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_8"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}dashboards
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
															<div className="separator separator-dashed my-5" />
															{/*begin::Item*/}
															<div className="d-flex">
																{/*begin::Checkbox*/}
																<div className="form-check form-check-custom form-check-solid">
																	{/*begin::Input*/}
																	<input
																		className="form-check-input me-3"
																		name="move_to_folder"
																		type="radio"
																		defaultValue={9}
																		id="kt_modal_move_to_folder_9"
																	/>
																	{/*end::Input*/}
																	{/*begin::Label*/}
																	<label
																		className="form-check-label"
																		htmlFor="kt_modal_move_to_folder_9"
																	>
																		<div className="fw-bolder">
																			{/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
																			<span className="svg-icon svg-icon-2 svg-icon-primary me-2">
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					width={24}
																					height={24}
																					viewBox="0 0 24 24"
																					fill="none"
																				>
																					<path
																						opacity="0.3"
																						d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z"
																						fill="black"
																					/>
																					<path
																						d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z"
																						fill="black"
																					/>
																				</svg>
																			</span>
																			{/*end::Svg Icon*/}pages
																		</div>
																	</label>
																	{/*end::Label*/}
																</div>
																{/*end::Checkbox*/}
															</div>
															{/*end::Item*/}
														</div>
														{/*end::Input group*/}
														{/*begin::Action buttons*/}
														<div className="d-flex flex-center mt-12">
															{/*begin::Button*/}
															<button
																type="button"
																className="btn btn-primary"
																id="kt_modal_move_to_folder_submit"
															>
																<span className="indicator-label">Save</span>
																<span className="indicator-progress">
																	Please wait...
																	<span className="spinner-border spinner-border-sm align-middle ms-2" />
																</span>
															</button>
															{/*end::Button*/}
														</div>
														{/*begin::Action buttons*/}
													</div>
													{/*end::Modal body*/}
												</form>
												{/*end::Form*/}
											</div>
										</div>
									</div>
									{/*end::Modal - Move file*/}
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

export default Files;