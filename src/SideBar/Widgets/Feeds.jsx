import React from 'react'

const Feeds = () => {
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
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">Feeds</h1>
										{/*end::Title*/}
										{/*begin::Breadcrumb*/}
										<ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">
												<a
													href="../../demo14/dist/index.html"
													className="text-gray-600 text-hover-primary"
												>
													Home
												</a>
											</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Widgets</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Feeds</li>
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
											<a
												href="#"
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
											</a>
											{/*begin::Menu 1*/}
											<div
												className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
												data-kt-menu="true"
												id="kt_menu_61b9c7ad963cf"
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
																data-dropdown-parent="#kt_menu_61b9c7ad963cf"
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
										<a
											href="#"
											className="btn btn-dark fw-bolder"
											data-bs-toggle="modal"
											data-bs-target="#kt_modal_create_app"
											id="kt_toolbar_primary_button"
										>
											Create
										</a>
										{/*end::Button*/}
									</div>
									{/*end::Actions*/}
								</div>
								{/*end::Toolbar*/}
								{/*begin::Post*/}
								<div className="content flex-column-fluid" id="kt_content">
									{/*begin::Row*/}
									<div className="row g-5 g-xl-8">
										{/*begin::Col*/}
										<div className="col-xl-6">
											{/*begin::Feeds Widget 1*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-1.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Grace Green
																</a>
																<span className="text-gray-400 fw-bold">
																	PHP, SQLite, Artisan CLI
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
															</button>
															{/*begin::Menu 2*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
																		Quick Actions
																	</div>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mb-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Ticket
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Customer
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-start"
																>
																	{/*begin::Menu item*/}
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">New Group</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*end::Menu item*/}
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Admin Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Staff Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Member Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Contact
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mt-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content px-3 py-3">
																		<a
																			className="btn btn-primary btn-sm px-4"
																			href="#"
																		>
																			Generate Reports
																		</a>
																	</div>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 2*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Form*/}
													<form
														id="kt_forms_widget_1_form"
														className="ql-quil ql-quil-plain pb-3"
													>
														{/*begin::Editor*/}
														<div id="kt_forms_widget_1_editor" className="py-6" />
														{/*end::Editor*/}
														<div className="separator" />
														{/*begin::Toolbar*/}
														<div
															id="kt_forms_widget_1_editor_toolbar"
															className="ql-toolbar d-flex flex-stack py-2"
														>
															<div className="me-2">
																<span className="ql-formats ql-size ms-0">
																	<select className="ql-size w-75px" />
																</span>
																<span className="ql-formats">
																	<button className="ql-bold" />
																	<button className="ql-italic" />
																	<button className="ql-underline" />
																	<button className="ql-strike" />
																	<button className="ql-image" />
																	<button className="ql-link" />
																	<button className="ql-clean" />
																</span>
															</div>
															<div className="me-n3">
																<span className="btn btn-icon btn-sm btn-active-color-primary">
																	<i className="flaticon2-clip-symbol icon-ms" />
																</span>
																<span className="btn btn-icon btn-sm btn-active-color-primary">
																	<i className="flaticon2-pin icon-ms" />
																</span>
															</div>
														</div>
														{/*end::Toolbar*/}
													</form>
													{/*end::Form*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds Widget 1*/}
											{/*begin::Feeds Widget 2*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-5">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-6.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Nick Logan
																</a>
																<span className="text-gray-400 fw-bold">
																	PHP, SQLite, Artisan CLI
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
															</button>
															{/*begin::Menu 2*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
																		Quick Actions
																	</div>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mb-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Ticket
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Customer
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-start"
																>
																	{/*begin::Menu item*/}
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">New Group</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*end::Menu item*/}
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Admin Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Staff Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Member Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Contact
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mt-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content px-3 py-3">
																		<a
																			className="btn btn-primary btn-sm px-4"
																			href="#"
																		>
																			Generate Reports
																		</a>
																	</div>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 2*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-5">
														{/*begin::Text*/}
														<p className="text-gray-800 fw-normal mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors about driving and keep
															you focused on the overall structure of your post
														</p>
														{/*end::Text*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}120
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}15
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Post*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds Widget 2*/}
											{/*begin::Feeds Widget 3*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-3">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-10.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Carles Nilson
																</a>
																<span className="text-gray-400 fw-bold">
																	Yestarday at 5:06 PM
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
															</button>
															{/*begin::Menu 2*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
																		Quick Actions
																	</div>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mb-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Ticket
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Customer
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-start"
																>
																	{/*begin::Menu item*/}
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">New Group</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*end::Menu item*/}
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Admin Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Staff Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Member Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Contact
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mt-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content px-3 py-3">
																		<a
																			className="btn btn-primary btn-sm px-4"
																			href="#"
																		>
																			Generate Reports
																		</a>
																	</div>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 2*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-7">
														{/*begin::Text*/}
														<div className="text-gray-800 mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors about driving and keep
															you focused on the overall structure of your post
														</div>
														{/*end::Text*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}12
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}150
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Post*/}
													{/*begin::Replies*/}
													<div className="mb-7 ps-10">
														{/*begin::Reply*/}
														<div className="d-flex mb-5">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-11.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column flex-row-fluid">
																{/*begin::Info*/}
																<div className="d-flex align-items-center flex-wrap mb-1">
																	<a
																		href="#"
																		className="text-gray-800 text-hover-primary fw-bolder me-2"
																	>
																		Alice Danchik
																	</a>
																	<span className="text-gray-400 fw-bold fs-7">
																		1 day
																	</span>
																	<a
																		href="#"
																		className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
																	>
																		Reply
																	</a>
																</div>
																{/*end::Info*/}
																{/*begin::Post*/}
																<span className="text-gray-800 fs-7 fw-normal pt-1">
																	Long before you sit dow to put digital pen to paper
																	you need to make sure you have to sit down and
																	write.
																</span>
																{/*end::Post*/}
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Reply*/}
														{/*begin::Reply*/}
														<div className="d-flex">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-8.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column flex-row-fluid">
																{/*begin::Info*/}
																<div className="d-flex align-items-center flex-wrap mb-1">
																	<a
																		href="#"
																		className="text-gray-800 text-hover-primary fw-bolder me-2"
																	>
																		Harris Bold
																	</a>
																	<span className="text-gray-400 fw-bold fs-7">
																		2 days
																	</span>
																	<a
																		href="#"
																		className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7"
																	>
																		Reply
																	</a>
																</div>
																{/*end::Info*/}
																{/*begin::Post*/}
																<span className="text-gray-800 fs-7 fw-normal pt-1">
																	Outlines keep you honest. They stop you from
																	indulging in poorly
																</span>
																{/*end::Post*/}
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Reply*/}
													</div>
													{/*end::Replies*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds Widget 3*/}
											{/*begin::Feeds Widget 4*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-5">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-13.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Carles Nilson
																</a>
																<span className="text-gray-400 fw-bold">
																	Last week at 10:00 PM
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
																	<a href="#" className="menu-link px-3">
																		Create Invoice
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link flex-stack px-3">
																		Create Payment
																		<i
																			className="fas fa-exclamation-circle ms-2 fs-7"
																			data-bs-toggle="tooltip"
																			title="Specify a target name for future usage and reference"
																		/>
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		Generate Bill
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-end"
																>
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">Subscription</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Plans
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Billing
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Statements
																			</a>
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
																	<a href="#" className="menu-link px-3">
																		Settings
																	</a>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 3*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-7">
														{/*begin::Text*/}
														<div className="text-gray-800 mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors about driving and keep
															you focused on the overall structure of your post
														</div>
														{/*end::Text*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}22
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}59
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Post*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds Widget 4*/}
											{/*begin::Feeds widget 5*/}
											<div className="card d-none" id="kt_widget_5">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-5">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-13.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Carles Nilson
																</a>
																<span className="text-gray-400 fw-bold">
																	Last week at 10:00 PM
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
															</button>
															{/*begin::Menu 2*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
																		Quick Actions
																	</div>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mb-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Ticket
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Customer
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-start"
																>
																	{/*begin::Menu item*/}
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">New Group</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*end::Menu item*/}
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Admin Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Staff Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Member Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Contact
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mt-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content px-3 py-3">
																		<a
																			className="btn btn-primary btn-sm px-4"
																			href="#"
																		>
																			Generate Reports
																		</a>
																	</div>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 2*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-7">
														{/*begin::Image*/}
														<div
															className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
															style={{
																backgroundImage:
																	'url("assets/media/stock/900x600/19.jpg")'
															}}
														/>
														{/*end::Image*/}
														{/*begin::Text*/}
														<div className="text-gray-800 mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors about driving and keep
															you focused on the overall structure of your post
														</div>
														{/*end::Text*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}20
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}50
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Post*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds widget 5*/}
											{/*begin::Feeds widget 4, 5 load more*/}
											<button
												className="btn btn-primary w-100 text-center"
												id="kt_widget_5_load_more_btn"
											>
												<span className="indicator-label">More Feeds</span>
												<span className="indicator-progress">
													Loading...
													<span className="spinner-border spinner-border-sm align-middle ms-2" />
												</span>
											</button>
											{/*end::Feeds widget 4, 5 load more*/}
										</div>
										{/*end::Col*/}
										{/*begin::Col*/}
										<div className="col-xl-6">
											{/*begin::Feeds Widget 5*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-5">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-15.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Sam Logan
																</a>
																<span className="text-gray-400 fw-bold">
																	Mango, Java, Python
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
															</button>
															{/*begin::Menu 2*/}
															<div
																className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
																data-kt-menu="true"
															>
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
																		Quick Actions
																	</div>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mb-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Ticket
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Customer
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-start"
																>
																	{/*begin::Menu item*/}
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">New Group</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*end::Menu item*/}
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Admin Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Staff Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Member Group
																			</a>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		New Contact
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu separator*/}
																<div className="separator mt-3 opacity-75" />
																{/*end::Menu separator*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<div className="menu-content px-3 py-3">
																		<a
																			className="btn btn-primary btn-sm px-4"
																			href="#"
																		>
																			Generate Reports
																		</a>
																	</div>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 2*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-5">
														{/*begin::Image*/}
														<div
															className="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
															style={{
																backgroundImage:
																	'url("assets/media/stock/900x600/20.jpg")'
															}}
														/>
														{/*end::Image*/}
														{/*begin::Text*/}
														<div className="text-gray-800 mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors about driving and keep
															you focused on the overall structure of your post
														</div>
														{/*end::Text*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}89
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}29
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Post*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Feeds Widget 5*/}
											{/*begin::Forms Widget 6*/}
											<div className="card mb-5 mb-xl-8">
												{/*begin::Body*/}
												<div className="card-body pb-0">
													{/*begin::Header*/}
													<div className="d-flex align-items-center mb-5">
														{/*begin::User*/}
														<div className="d-flex align-items-center flex-grow-1">
															{/*begin::Avatar*/}
															<div className="symbol symbol-45px me-5">
																<img src="/assets/media/avatars/150-17.jpg" alt />
															</div>
															{/*end::Avatar*/}
															{/*begin::Info*/}
															<div className="d-flex flex-column">
																<a
																	href="#"
																	className="text-gray-900 text-hover-primary fs-6 fw-bolder"
																>
																	Mat Dillon
																</a>
																<span className="text-gray-400 fw-bold">
																	Last month
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::User*/}
														{/*begin::Menu*/}
														<div className="my-0">
															<button
																type="button"
																className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
																data-kt-menu-trigger="click"
																data-kt-menu-placement="bottom-end"
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
																	<a href="#" className="menu-link px-3">
																		Create Invoice
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link flex-stack px-3">
																		Create Payment
																		<i
																			className="fas fa-exclamation-circle ms-2 fs-7"
																			data-bs-toggle="tooltip"
																			title="Specify a target name for future usage and reference"
																		/>
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">
																		Generate Bill
																	</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div
																	className="menu-item px-3"
																	data-kt-menu-trigger="hover"
																	data-kt-menu-placement="right-end"
																>
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">Subscription</span>
																		<span className="menu-arrow" />
																	</a>
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Plans
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Billing
																			</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">
																				Statements
																			</a>
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
																	<a href="#" className="menu-link px-3">
																		Settings
																	</a>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 3*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Header*/}
													{/*begin::Post*/}
													<div className="mb-6">
														{/*begin::Text*/}
														<div className="text-gray-800 fs-6 fw-normal mb-5">
															Outlines keep you honest. They stop you from indulging
															in poorly thought-out metaphors
														</div>
														{/*end::Text*/}
														{/*begin::Video*/}
														<div className="mb-5">
															<iframe
																className="embed-responsive-item rounded h-300px w-100"
																src="https://www.youtube.com/embed/qIHXpnASPAA"
																allowFullScreen="allowfullscreen"
															/>
														</div>
														{/*end::Video*/}
														{/*begin::Toolbar*/}
														<div className="d-flex align-items-center mb-5">
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
															>
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={12}
																			width={7}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																		<rect
																			x={6}
																			y={7}
																			width={12}
																			height={2}
																			rx={1}
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}189
															</a>
															<a
																href="#"
																className="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
															>
																{/*begin::Svg Icon | path: icons/duotune/general/gen030.svg*/}
																<span className="svg-icon svg-icon-2">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}229
															</a>
														</div>
														{/*end::Toolbar*/}
													</div>
													{/*end::Bottom*/}
													{/*begin::Separator*/}
													<div className="separator mb-4" />
													{/*end::Separator*/}
													{/*begin::Reply input*/}
													<form className="position-relative mb-6">
														<textarea
															className="form-control border-0 p-0 pe-10 resize-none min-h-25px"
															data-kt-autosize="true"
															rows={1}
															placeholder="Reply.."
															defaultValue={""}
														/>
														<div className="position-absolute top-0 end-0 me-n5">
															<span className="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
																{/*begin::Svg Icon | path: icons/duotune/communication/com008.svg*/}
																<span className="svg-icon svg-icon-3 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
																			fill="black"
																		/>
																		<path
																			d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
															<span className="btn btn-icon btn-sm btn-active-color-primary ps-0">
																{/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
																<span className="svg-icon svg-icon-2 mb-3">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
													</form>
													{/*edit::Reply input*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Forms Widget 6*/}
										</div>
										{/*end::Col*/}
									</div>
									{/*end::Row*/}
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
										<a
											href="https://keenthemes.com"
											target="_blank"
											className="text-gray-800 text-hover-primary"
										>
											Keenthemes
										</a>
									</div>
									{/*end::Copyright*/}
									{/*begin::Menu*/}
									<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
										<li className="menu-item">
											<a
												href="https://keenthemes.com"
												target="_blank"
												className="menu-link px-2"
											>
												About
											</a>
										</li>
										<li className="menu-item">
											<a
												href="https://keenthemes.com/support"
												target="_blank"
												className="menu-link px-2"
											>
												Support
											</a>
										</li>
										<li className="menu-item">
											<a
												href="https://1.envato.market/EA4JP"
												target="_blank"
												className="menu-link px-2"
											>
												Purchase
											</a>
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

export default Feeds;