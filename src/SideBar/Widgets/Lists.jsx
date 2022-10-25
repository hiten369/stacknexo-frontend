import React from 'react'

const Lists = () => {
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
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">Lists</h1>
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
											<li className="breadcrumb-item text-gray-500">Lists</li>
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
												id="kt_menu_61b9c7a781fe2"
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
																data-dropdown-parent="#kt_menu_61b9c7a781fe2"
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
										<div className="col-xl-4">
											{/*begin::List Widget 1*/}
											<div className="card card-xl-stretch mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header border-0 pt-5">
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bolder text-dark">
															Tasks Overview
														</span>
														<span className="text-muted mt-1 fw-bold fs-7">
															Pending 10 tasks
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*begin::Menu 1*/}
														<div
															className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
															data-kt-menu="true"
															id="kt_menu_61b9c7a782572"
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
																	<label className="form-label fw-bold">
																		Status:
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<div>
																		<select
																			className="form-select form-select-solid"
																			data-kt-select2="true"
																			data-placeholder="Select option"
																			data-dropdown-parent="#kt_menu_61b9c7a782572"
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
																	<label className="form-label fw-bold">
																		Member Type:
																	</label>
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
																			<span className="form-check-label">
																				Customer
																			</span>
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
																		<label className="form-check-label">
																			Enabled
																		</label>
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
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-5">
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label bg-light-success">
																{/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-success">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
																			fill="black"
																		/>
																		<path
																			d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Text*/}
														<div className="d-flex flex-column">
															<a
																href="#"
																className="text-dark text-hover-primary fs-6 fw-bolder"
															>
																Project Briefing
															</a>
															<span className="text-muted fw-bold">
																Project Manager
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label bg-light-warning">
																{/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-warning">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
																			fill="black"
																		/>
																		<path
																			d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Text*/}
														<div className="d-flex flex-column">
															<a
																href="#"
																className="text-dark text-hover-primary fs-6 fw-bolder"
															>
																Concept Design
															</a>
															<span className="text-muted fw-bold">Art Director</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label bg-light-primary">
																{/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-primary">
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
																{/*end::Svg Icon*/}
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Text*/}
														<div className="d-flex flex-column">
															<a
																href="#"
																className="text-dark text-hover-primary fs-6 fw-bolder"
															>
																Functional Logics
															</a>
															<span className="text-muted fw-bold">
																Lead Developer
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label bg-light-danger">
																{/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-danger">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
																			fill="black"
																		/>
																		<path
																			opacity="0.3"
																			d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Text*/}
														<div className="d-flex flex-column">
															<a
																href="#"
																className="text-dark text-hover-primary fs-6 fw-bolder"
															>
																Development
															</a>
															<span className="text-muted fw-bold">DevOps</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label bg-light-info">
																{/*begin::Svg Icon | path: icons/duotune/general/gen049.svg*/}
																<span className="svg-icon svg-icon-2x svg-icon-info">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width={24}
																		height={24}
																		viewBox="0 0 24 24"
																		fill="none"
																	>
																		<path
																			opacity="0.3"
																			d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
																			fill="black"
																		/>
																		<path
																			d="M12.0006 11.1542C13.1434 11.1542 14.0777 10.22 14.0777 9.0771C14.0777 7.93424 13.1434 7 12.0006 7C10.8577 7 9.92348 7.93424 9.92348 9.0771C9.92348 10.22 10.8577 11.1542 12.0006 11.1542Z"
																			fill="black"
																		/>
																		<path
																			d="M15.5652 13.814C15.5108 13.6779 15.4382 13.551 15.3566 13.4331C14.9393 12.8163 14.2954 12.4081 13.5697 12.3083C13.479 12.2993 13.3793 12.3174 13.3067 12.3718C12.9257 12.653 12.4722 12.7981 12.0006 12.7981C11.5289 12.7981 11.0754 12.653 10.6944 12.3718C10.6219 12.3174 10.5221 12.2902 10.4314 12.3083C9.70578 12.4081 9.05272 12.8163 8.64456 13.4331C8.56293 13.551 8.49036 13.687 8.43595 13.814C8.40875 13.8684 8.41781 13.9319 8.44502 13.9864C8.51759 14.1133 8.60828 14.2403 8.68991 14.3492C8.81689 14.5215 8.95295 14.6757 9.10715 14.8208C9.23413 14.9478 9.37925 15.0657 9.52439 15.1836C10.2409 15.7188 11.1026 15.9999 11.9915 15.9999C12.8804 15.9999 13.7421 15.7188 14.4586 15.1836C14.6038 15.0748 14.7489 14.9478 14.8759 14.8208C15.021 14.6757 15.1661 14.5215 15.2931 14.3492C15.3838 14.2312 15.4655 14.1133 15.538 13.9864C15.5833 13.9319 15.5924 13.8684 15.5652 13.814Z"
																			fill="black"
																		/>
																	</svg>
																</span>
																{/*end::Svg Icon*/}
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Text*/}
														<div className="d-flex flex-column">
															<a
																href="#"
																className="text-dark text-hover-primary fs-6 fw-bolder"
															>
																Testing
															</a>
															<span className="text-muted fw-bold">QA Managers</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 1*/}
										</div>
										<div className="col-xl-4">
											{/*begin::List Widget 2*/}
											<div className="card card-xl-stretch mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header border-0">
													<h3 className="card-title fw-bolder text-dark">Authors</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
																	<a className="btn btn-primary btn-sm px-4" href="#">
																		Generate Reports
																	</a>
																</div>
															</div>
															{/*end::Menu item*/}
														</div>
														{/*end::Menu 2*/}
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-2">
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Avatar*/}
														<div className="symbol symbol-50px me-5">
															<img
																src="/assets/media/avatars/150-1.jpg"
																className
																alt
															/>
														</div>
														{/*end::Avatar*/}
														{/*begin::Text*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-dark fw-bolder text-hover-primary fs-6"
															>
																Emma Smith
															</a>
															<span className="text-muted d-block fw-bold">
																Project Manager
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Avatar*/}
														<div className="symbol symbol-50px me-5">
															<img
																src="/assets/media/avatars/150-4.jpg"
																className
																alt
															/>
														</div>
														{/*end::Avatar*/}
														{/*begin::Text*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-dark fw-bolder text-hover-primary fs-6"
															>
																Sean Bean
															</a>
															<span className="text-muted d-block fw-bold">
																PHP, SQLite, Artisan CLI
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Avatar*/}
														<div className="symbol symbol-50px me-5">
															<img
																src="/assets/media/avatars/150-12.jpg"
																className
																alt
															/>
														</div>
														{/*end::Avatar*/}
														{/*begin::Text*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-dark fw-bolder text-hover-primary fs-6"
															>
																Brian Cox
															</a>
															<span className="text-muted d-block fw-bold">
																PHP, SQLite, Artisan CLI
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-7">
														{/*begin::Avatar*/}
														<div className="symbol symbol-50px me-5">
															<img
																src="/assets/media/avatars/150-8.jpg"
																className
																alt
															/>
														</div>
														{/*end::Avatar*/}
														{/*begin::Text*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-dark fw-bolder text-hover-primary fs-6"
															>
																Francis Mitcham
															</a>
															<span className="text-muted d-block fw-bold">
																PHP, SQLite, Artisan CLI
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center">
														{/*begin::Avatar*/}
														<div className="symbol symbol-50px me-5">
															<img
																src="/assets/media/avatars/150-6.jpg"
																className
																alt
															/>
														</div>
														{/*end::Avatar*/}
														{/*begin::Text*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-dark fw-bolder text-hover-primary fs-6"
															>
																Dan Wilson
															</a>
															<span className="text-muted d-block fw-bold">
																PHP, SQLite, Artisan CLI
															</span>
														</div>
														{/*end::Text*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 2*/}
										</div>
										<div className="col-xl-4">
											{/*begin::List Widget 3*/}
											<div className="card card-xl-stretch mb-5 mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header border-0">
													<h3 className="card-title fw-bolder text-dark">Todo</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-2">
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-8">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-success" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																Create FireStone Logo
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 2 Days
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-success fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-8">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-primary" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																Stakeholder Meeting
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 3 Days
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-primary fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-8">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-warning" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																Scoping &amp; Estimations
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 5 Days
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-warning fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-8">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-primary" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																KPI App Showcase
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 2 Days
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-primary fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center mb-8">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-danger" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																Project Meeting
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 12 Days
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-danger fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center">
														{/*begin::Bullet*/}
														<span className="bullet bullet-vertical h-40px bg-success" />
														{/*end::Bullet*/}
														{/*begin::Checkbox*/}
														<div className="form-check form-check-custom form-check-solid mx-5">
															<input
																className="form-check-input"
																type="checkbox"
																defaultValue
															/>
														</div>
														{/*end::Checkbox*/}
														{/*begin::Description*/}
														<div className="flex-grow-1">
															<a
																href="#"
																className="text-gray-800 text-hover-primary fw-bolder fs-6"
															>
																Customers Update
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 1 week
															</span>
														</div>
														{/*end::Description*/}
														<span className="badge badge-light-success fs-8 fw-bolder">
															New
														</span>
													</div>
													{/*end:Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end:List Widget 3*/}
										</div>
									</div>
									{/*end::Row*/}
									{/*begin::Row*/}
									<div className="row g-5 g-xl-8">
										<div className="col-xl-4">
											{/*begin::List Widget 4*/}
											<div className="card card-xl-stretch mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header border-0 pt-5">
													<h3 className="card-title align-items-start flex-column">
														<span className="card-label fw-bolder text-dark">
															Trends
														</span>
														<span className="text-muted mt-1 fw-bold fs-7">
															Latest tech trends
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-5">
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/plurk.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Top Authors
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	Mark, Rowling, Esther
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+82$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/telegram.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Popular Authors
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	Randy, Steve, Mike
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+280$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/vimeo.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	New Users
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	John, Pat, Jimmy
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+4500$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/bebo.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Active Customers
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	Mark, Rowling, Esther
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+686$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/kickstarter.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Bestseller Theme
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	Disco, Retro, Sports
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+726$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center">
														{/*begin::Symbol*/}
														<div className="symbol symbol-50px me-5">
															<span className="symbol-label">
																<img
																	src="/assets/media/svg/brand-logos/fox-hub.svg"
																	className="h-50 align-self-center"
																	alt
																/>
															</span>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-row-fluid flex-wrap">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 text-hover-primary fs-6 fw-bolder"
																>
																	Fox Broker App
																</a>
																<span className="text-muted fw-bold d-block fs-7">
																	Finance, Corporate, Apps
																</span>
															</div>
															<span className="badge badge-light fw-bolder my-2">
																+145$
															</span>
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 4*/}
										</div>
										<div className="col-xl-4">
											{/*begin::List Widget 5*/}
											<div className="card card-xl-stretch mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header align-items-center border-0 mt-4">
													<h3 className="card-title align-items-start flex-column">
														<span className="fw-bolder mb-2 text-dark">
															Activities
														</span>
														<span className="text-muted fw-bold fs-7">
															890,344 Sales
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*begin::Menu 1*/}
														<div
															className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
															data-kt-menu="true"
															id="kt_menu_61b9c7a78387f"
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
																	<label className="form-label fw-bold">
																		Status:
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<div>
																		<select
																			className="form-select form-select-solid"
																			data-kt-select2="true"
																			data-placeholder="Select option"
																			data-dropdown-parent="#kt_menu_61b9c7a78387f"
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
																	<label className="form-label fw-bold">
																		Member Type:
																	</label>
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
																			<span className="form-check-label">
																				Customer
																			</span>
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
																		<label className="form-check-label">
																			Enabled
																		</label>
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
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-5">
													{/*begin::Timeline*/}
													<div className="timeline-label">
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																08:42
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-warning fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Text*/}
															<div className="fw-mormal timeline-content text-muted ps-3">
																Outlines keep you honest. And keep structure
															</div>
															{/*end::Text*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																10:00
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-success fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Content*/}
															<div className="timeline-content d-flex">
																<span className="fw-bolder text-gray-800 ps-3">
																	AEOL meeting
																</span>
															</div>
															{/*end::Content*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																14:37
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-danger fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Desc*/}
															<div className="timeline-content fw-bolder text-gray-800 ps-3">
																Make deposit
																<a href="#" className="text-primary">
																	USD 700
																</a>
																. to ESL
															</div>
															{/*end::Desc*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																16:50
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-primary fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Text*/}
															<div className="timeline-content fw-mormal text-muted ps-3">
																Indulging in poorly driving and keep structure keep
																great
															</div>
															{/*end::Text*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																21:03
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-danger fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Desc*/}
															<div className="timeline-content fw-bold text-gray-800 ps-3">
																New order placed
																<a href="#" className="text-primary">
																	#XF-2356
																</a>
																.
															</div>
															{/*end::Desc*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																16:50
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-primary fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Text*/}
															<div className="timeline-content fw-mormal text-muted ps-3">
																Indulging in poorly driving and keep structure keep
																great
															</div>
															{/*end::Text*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																21:03
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-danger fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Desc*/}
															<div className="timeline-content fw-bold text-gray-800 ps-3">
																New order placed
																<a href="#" className="text-primary">
																	#XF-2356
																</a>
																.
															</div>
															{/*end::Desc*/}
														</div>
														{/*end::Item*/}
														{/*begin::Item*/}
														<div className="timeline-item">
															{/*begin::Label*/}
															<div className="timeline-label fw-bolder text-gray-800 fs-6">
																10:30
															</div>
															{/*end::Label*/}
															{/*begin::Badge*/}
															<div className="timeline-badge">
																<i className="fa fa-genderless text-success fs-1" />
															</div>
															{/*end::Badge*/}
															{/*begin::Text*/}
															<div className="timeline-content fw-mormal text-muted ps-3">
																Finance KPI Mobile app launch preparion meeting
															</div>
															{/*end::Text*/}
														</div>
														{/*end::Item*/}
													</div>
													{/*end::Timeline*/}
												</div>
												{/*end: Card Body*/}
											</div>
											{/*end: List Widget 5*/}
										</div>
										<div className="col-xl-4">
											{/*begin::List Widget 6*/}
											<div className="card card-xl-stretch mb-5 mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header border-0">
													<h3 className="card-title fw-bolder text-dark">
														Notifications
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-0">
													{/*begin::Item*/}
													<div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
														{/*begin::Icon*/}
														<span className="svg-icon svg-icon-warning me-5">
															{/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
															<span className="svg-icon svg-icon-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		opacity="0.3"
																		d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
																		fill="black"
																	/>
																	<path
																		d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
														</span>
														{/*end::Icon*/}
														{/*begin::Title*/}
														<div className="flex-grow-1 me-2">
															<a
																href="#"
																className="fw-bolder text-gray-800 text-hover-primary fs-6"
															>
																Group lunch celebration
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 2 Days
															</span>
														</div>
														{/*end::Title*/}
														{/*begin::Lable*/}
														<span className="fw-bolder text-warning py-1">+28%</span>
														{/*end::Lable*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
														{/*begin::Icon*/}
														<span className="svg-icon svg-icon-success me-5">
															{/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
															<span className="svg-icon svg-icon-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		opacity="0.3"
																		d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
																		fill="black"
																	/>
																	<path
																		d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
														</span>
														{/*end::Icon*/}
														{/*begin::Title*/}
														<div className="flex-grow-1 me-2">
															<a
																href="#"
																className="fw-bolder text-gray-800 text-hover-primary fs-6"
															>
																Navigation optimization
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 2 Days
															</span>
														</div>
														{/*end::Title*/}
														{/*begin::Lable*/}
														<span className="fw-bolder text-success py-1">+50%</span>
														{/*end::Lable*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
														{/*begin::Icon*/}
														<span className="svg-icon svg-icon-danger me-5">
															{/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
															<span className="svg-icon svg-icon-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		opacity="0.3"
																		d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
																		fill="black"
																	/>
																	<path
																		d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
														</span>
														{/*end::Icon*/}
														{/*begin::Title*/}
														<div className="flex-grow-1 me-2">
															<a
																href="#"
																className="fw-bolder text-gray-800 text-hover-primary fs-6"
															>
																Rebrand strategy planning
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 5 Days
															</span>
														</div>
														{/*end::Title*/}
														{/*begin::Lable*/}
														<span className="fw-bolder text-danger py-1">-27%</span>
														{/*end::Lable*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-center bg-light-info rounded p-5">
														{/*begin::Icon*/}
														<span className="svg-icon svg-icon-info me-5">
															{/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
															<span className="svg-icon svg-icon-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={24}
																	height={24}
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		opacity="0.3"
																		d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
																		fill="black"
																	/>
																	<path
																		d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
																		fill="black"
																	/>
																</svg>
															</span>
															{/*end::Svg Icon*/}
														</span>
														{/*end::Icon*/}
														{/*begin::Title*/}
														<div className="flex-grow-1 me-2">
															<a
																href="#"
																className="fw-bolder text-gray-800 text-hover-primary fs-6"
															>
																Product goals strategy
															</a>
															<span className="text-muted fw-bold d-block">
																Due in 7 Days
															</span>
														</div>
														{/*end::Title*/}
														{/*begin::Lable*/}
														<span className="fw-bolder text-info py-1">+8%</span>
														{/*end::Lable*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 6*/}
										</div>
									</div>
									{/*end::Row*/}
									{/*begin::Row*/}
									<div className="row g-5 g-xl-8">
										<div className="col-xl-6">
											{/*begin::List Widget 7*/}
											<div className="card card-xl-stretch mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header align-items-center border-0 mt-4">
													<h3 className="card-title align-items-start flex-column">
														<span className="fw-bolder text-dark">Latest Media</span>
														<span className="text-muted mt-1 fw-bold fs-7">
															Articles and publications
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*begin::Menu 1*/}
														<div
															className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
															data-kt-menu="true"
															id="kt_menu_61b9c7a7841ea"
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
																	<label className="form-label fw-bold">
																		Status:
																	</label>
																	{/*end::Label*/}
																	{/*begin::Input*/}
																	<div>
																		<select
																			className="form-select form-select-solid"
																			data-kt-select2="true"
																			data-placeholder="Select option"
																			data-dropdown-parent="#kt_menu_61b9c7a7841ea"
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
																	<label className="form-label fw-bold">
																		Member Type:
																	</label>
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
																			<span className="form-check-label">
																				Customer
																			</span>
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
																		<label className="form-check-label">
																			Enabled
																		</label>
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
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-3">
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-20.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Title*/}
														<div className="d-flex flex-row-fluid flex-wrap align-items-center">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Cup &amp; Green
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Size: 87KB
																</span>
															</div>
															<span className="badge badge-light-success fs-8 fw-bolder my-2">
																Approved
															</span>
														</div>
														{/*end::Title*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-19.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Title*/}
														<div className="d-flex flex-row-fluid flex-wrap align-items-center">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Yellow Background
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Size: 1.2MB
																</span>
															</div>
															<span className="badge badge-light-warning fs-8 fw-bolder my-2">
																In Progress
															</span>
														</div>
														{/*end::Title*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-25.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Title*/}
														<div className="d-flex flex-row-fluid flex-wrap align-items-center">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Nike &amp; Blue
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Size: 87KB
																</span>
															</div>
															<span className="badge badge-light-success fs-8 fw-bolder my-2">
																Success
															</span>
														</div>
														{/*end::Title*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-24.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Title*/}
														<div className="d-flex flex-row-fluid flex-wrap align-items-center">
															<div className="flex-grow-1 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Red Boots
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Size: 345KB
																</span>
															</div>
															<span className="badge badge-light-danger fs-8 fw-bolder my-2">
																Rejected
															</span>
														</div>
														{/*end::Title*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 7*/}
										</div>
										<div className="col-xl-6">
											{/*begin::List Widget 8*/}
											<div className="card card-xl-stretch mb-5 mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header align-items-center border-0 mt-4">
													<h3 className="card-title align-items-start flex-column">
														<span className="fw-bolder text-dark">
															Latest Products
														</span>
														<span className="text-muted mt-1 fw-bold fs-7">
															Gifts and more
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
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
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-3">
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-17.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Content*/}
														<div className="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2">
															{/*begin::Title*/}
															<div className="flex-grow-1 my-lg-0 my-2 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Cup &amp; Green
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Visually stunning
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Section*/}
															<div className="d-flex align-items-center">
																<div className="me-6">
																	<i className="fa fa-star-half-alt me-1 text-warning fs-5" />
																	<span className="text-gray-800 fw-bolder">4.2</span>
																</div>
																<a
																	href="#"
																	className="btn btn-icon btn-light btn-sm border-0"
																>
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
																	<span className="svg-icon svg-icon-2 svg-icon-primary">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={18}
																				y={13}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(-180 18 13)"
																				fill="black"
																			/>
																			<path
																				d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</a>
															</div>
															{/*end::Section*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-10.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Content*/}
														<div className="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2">
															{/*begin::Title*/}
															<div className="flex-grow-1 my-lg-0 my-2 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Pink Patterns
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Feminine all around
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Section*/}
															<div className="d-flex align-items-center">
																<div className="me-6">
																	<i className="fa fa-star-half-alt me-1 text-warning fs-5" />
																	<span className="text-gray-800 fw-bolder">5.0</span>
																</div>
																<a
																	href="#"
																	className="btn btn-icon btn-light btn-sm border-0"
																>
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
																	<span className="svg-icon svg-icon-2 svg-icon-primary">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={18}
																				y={13}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(-180 18 13)"
																				fill="black"
																			/>
																			<path
																				d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</a>
															</div>
															{/*end::Section*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-1.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Content*/}
														<div className="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2">
															{/*begin::Title*/}
															<div className="flex-grow-1 my-lg-0 my-2 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Abstract Art
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	The will to capture readers
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Section*/}
															<div className="d-flex align-items-center">
																<div className="me-6">
																	<i className="fa fa-star-half-alt me-1 text-warning fs-5" />
																	<span className="text-gray-800 fw-bolder">5.7</span>
																</div>
																<a
																	href="#"
																	className="btn btn-icon btn-light btn-sm border-0"
																>
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
																	<span className="svg-icon svg-icon-2 svg-icon-primary">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={18}
																				y={13}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(-180 18 13)"
																				fill="black"
																			/>
																			<path
																				d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</a>
															</div>
															{/*end::Section*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex align-items-sm-center">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 me-4">
															<div
																className="symbol-label"
																style={{
																	backgroundImage:
																		'url("assets/media/stock/600x400/img-9.jpg")'
																}}
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Content*/}
														<div className="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2">
															{/*begin::Title*/}
															<div className="flex-grow-1 my-lg-0 my-2 me-2">
																<a
																	href="#"
																	className="text-gray-800 fw-bolder text-hover-primary fs-6"
																>
																	Desserts platter
																</a>
																<span className="text-muted fw-bold d-block pt-1">
																	Food trends &amp; inspirations
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Section*/}
															<div className="d-flex align-items-center">
																<div className="me-6">
																	<i className="fa fa-star-half-alt me-1 text-warning fs-5" />
																	<span className="text-gray-800 fw-bolder">3.7</span>
																</div>
																<a
																	href="#"
																	className="btn btn-icon btn-light btn-sm border-0"
																>
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
																	<span className="svg-icon svg-icon-2 svg-icon-primary">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width={24}
																			height={24}
																			viewBox="0 0 24 24"
																			fill="none"
																		>
																			<rect
																				opacity="0.5"
																				x={18}
																				y={13}
																				width={13}
																				height={2}
																				rx={1}
																				transform="rotate(-180 18 13)"
																				fill="black"
																			/>
																			<path
																				d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}
																</a>
															</div>
															{/*end::Section*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 8*/}
										</div>
									</div>
									{/*end::Row*/}
									{/*begin::Row*/}
									<div className="row g-5 g-xl-8">
										<div className="col-xl-6">
											{/*begin::List Widget 9*/}
											<div className="card card-xl-stretch mb-5 mb-xl-8">
												{/*begin::Header*/}
												<div className="card-header align-items-center border-0 mt-3">
													<h3 className="card-title align-items-start flex-column">
														<span className="fw-bolder text-dark fs-3">
															My Competitors
														</span>
														<span className="text-gray-400 mt-2 fw-bold fs-6">
															More than 400+ new members
														</span>
													</h3>
													<div className="card-toolbar">
														{/*begin::Menu*/}
														<button
															type="button"
															className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3"
															data-kt-menu-trigger="click"
															data-kt-menu-placement="bottom-end"
														>
															{/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
															<span className="svg-icon svg-icon-3 svg-icon-primary">
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
																	<a className="btn btn-primary btn-sm px-4" href="#">
																		Generate Reports
																	</a>
																</div>
															</div>
															{/*end::Menu item*/}
														</div>
														{/*end::Menu 2*/}
														{/*end::Menu*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="card-body pt-5">
													{/*begin::Item*/}
													<div className="d-flex mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
															<img
																src="/assets/media/stock/600x400/img-3.jpg"
																className="mw-100"
																alt
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
															{/*begin::Title*/}
															<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
																<a
																	href="#"
																	className="fs-5 text-gray-800 text-hover-primary fw-bolder"
																>
																	Cup &amp; Green
																</a>
																<span className="text-gray-400 fw-bold fs-7 my-1">
																	Study highway types
																</span>
																<span className="text-gray-400 fw-bold fs-7">
																	By:
																	<a href="#" className="text-primary fw-bold">
																		CoreAd
																	</a>
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Info*/}
															<div className="text-end py-lg-0 py-2">
																<span className="text-gray-800 fw-boldest fs-3">
																	24,900
																</span>
																<span className="text-gray-400 fs-7 fw-bold d-block">
																	Sales
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
															<img
																src="/assets/media/stock/600x400/img-4.jpg"
																className="mw-100"
																alt
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
															{/*begin::Title*/}
															<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
																<a
																	href="#"
																	className="fs-5 text-gray-800 text-hover-primary fw-bolder"
																>
																	Yellow Hearts
																</a>
																<span className="text-gray-400 fw-bold fs-7 my-1">
																	Study highway types
																</span>
																<span className="text-gray-400 fw-bold fs-7">
																	By:
																	<a href="#" className="text-primary fw-bold">
																		KeenThemes
																	</a>
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Info*/}
															<div className="text-end py-lg-0 py-2">
																<span className="text-gray-800 fw-boldest fs-3">
																	70,380
																</span>
																<span className="text-gray-400 fs-7 fw-bold d-block">
																	Sales
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
															<img
																src="/assets/media/stock/600x400/img-5.jpg"
																className="mw-100"
																alt
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
															{/*begin::Title*/}
															<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
																<a
																	href="#"
																	className="fs-5 text-gray-800 text-hover-primary fw-bolder"
																>
																	Nike &amp; Blue
																</a>
																<span className="text-gray-400 fw-bold fs-7 my-1">
																	Study highway types
																</span>
																<span className="text-gray-400 fw-bold fs-7">
																	By:
																	<a href="#" className="text-primary fw-bold">
																		Invision Inc.
																	</a>
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Info*/}
															<div className="text-end py-lg-0 py-2">
																<span className="text-gray-800 fw-boldest fs-3">
																	7,200
																</span>
																<span className="text-gray-400 fs-7 fw-bold d-block">
																	Sales
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex mb-7">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
															<img
																src="/assets/media/stock/600x400/img-6.jpg"
																className="mw-100"
																alt
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
															{/*begin::Title*/}
															<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
																<a
																	href="#"
																	className="fs-5 text-gray-800 text-hover-primary fw-bolder"
																>
																	Red Boots
																</a>
																<span className="text-gray-400 fw-bold fs-7 my-1">
																	Study highway types
																</span>
																<span className="text-gray-400 fw-bold fs-7">
																	By:
																	<a href="#" className="text-primary fw-bold">
																		Figma Studio
																	</a>
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Info*/}
															<div className="text-end py-lg-0 py-2">
																<span className="text-gray-800 fw-boldest fs-3">
																	36,450
																</span>
																<span className="text-gray-400 fs-7 fw-bold d-block">
																	Sales
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
													{/*begin::Item*/}
													<div className="d-flex">
														{/*begin::Symbol*/}
														<div className="symbol symbol-60px symbol-2by3 flex-shrink-0 me-4">
															<img
																src="/assets/media/stock/600x400/img-7.jpg"
																className="mw-100"
																alt
															/>
														</div>
														{/*end::Symbol*/}
														{/*begin::Section*/}
														<div className="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1">
															{/*begin::Title*/}
															<div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
																<a
																	href="#"
																	className="fs-5 text-gray-800 text-hover-primary fw-bolder"
																>
																	Desserts platter
																</a>
																<span className="text-gray-400 fw-bold fs-7 my-1">
																	Food trends &amp; reviews
																</span>
																<span className="text-gray-400 fw-bold fs-7">
																	By:
																	<a href="#" className="text-primary fw-bold">
																		Figma Studio
																	</a>
																</span>
															</div>
															{/*end::Title*/}
															{/*begin::Info*/}
															<div className="text-end py-lg-0 py-2">
																<span className="text-gray-800 fw-boldest fs-3">
																	64,753
																</span>
																<span className="text-gray-400 fs-7 fw-bold d-block">
																	Sales
																</span>
															</div>
															{/*end::Info*/}
														</div>
														{/*end::Section*/}
													</div>
													{/*end::Item*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::List Widget 9*/}
										</div>
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

export default Lists
