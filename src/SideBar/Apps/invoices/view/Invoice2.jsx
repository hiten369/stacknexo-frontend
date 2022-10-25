import React from 'react'
import { NavLink } from 'react-router-dom';

const Invoice2 = () => {
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
											Invoice 2
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
											<li className="breadcrumb-item text-gray-600">
												Invoice Manager
											</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">View Invoices</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Invoice 2</li>
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
												id="kt_menu_61b9c7d4986a0"
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
																data-dropdown-parent="#kt_menu_61b9c7d4986a0"
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
									{/* begin::Invoice 1*/}
									<div className="card">
										{/* begin::Body*/}
										<div className="card-body py-20">
											{/* begin::Wrapper*/}
											<div className="mw-lg-950px mx-auto w-100">
												{/* begin::Header*/}
												<div className="d-flex justify-content-between flex-column flex-sm-row mb-19">
													<h4 className="fw-boldest text-gray-800 fs-2qx pe-5 pb-7">
														INVOICE
													</h4>
													{/*end::Logo*/}
													<div className="text-sm-end">
														{/*begin::Logo*/}
														<NavLink to="#">
															<img
																alt="Logo"
																src="/assets/media/svg/brand-logos/duolingo.svg"
															/>
														</NavLink>
														{/*end::Logo*/}
														{/*begin::Text*/}
														<div className="text-sm-end fw-bold fs-4 text-muted mt-7">
															<div>Cecilia Chapman, 711-2880 Nulla St, Mankato</div>
															<div>Mississippi 96522</div>
														</div>
														{/*end::Text*/}
													</div>
												</div>
												{/*end::Header*/}
												{/*begin::Body*/}
												<div className="border-bottom pb-12">
													{/*begin::Image*/}
													<div
														className="d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-cover card-rounded h-150px h-lg-250px mb-lg-20"
														style={{
															backgroundImage: "url(assets/media/misc/pattern-4.jpg)"
														}}
													/>
													{/*end::Image*/}
													{/*begin::Wrapper*/}
													<div className="d-flex justify-content-between flex-column flex-md-row">
														{/*begin::Content*/}
														<div className="flex-grow-1 pt-8 mb-13">
															{/*begin::Table*/}
															<div className="table-responsive border-bottom mb-14">
																<table className="table">
																	<thead>
																		<tr className="border-bottom fs-6 fw-bolder text-muted text-uppercase">
																			<th className="min-w-175px pb-9">
																				Description
																			</th>
																			<th className="min-w-70px pb-9 text-end">
																				Hours
																			</th>
																			<th className="min-w-80px pb-9 text-end">
																				Rate
																			</th>
																			<th className="min-w-100px pe-lg-6 pb-9 text-end">
																				Amount
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr className="fw-bolder text-gray-700 fs-5 text-end">
																			<td className="d-flex align-items-center pt-11">
																				<i className="fa fa-genderless text-danger fs-1 me-2" />
																				Creative Design
																			</td>
																			<td className="pt-11">80</td>
																			<td className="pt-11">$40.00</td>
																			<td className="pt-11 fs-5 pe-lg-6 text-dark fw-boldest">
																				$3200.00
																			</td>
																		</tr>
																		<tr className="fw-bolder text-gray-700 fs-5 text-end">
																			<td className="d-flex align-items-center">
																				<i className="fa fa-genderless text-success fs-1 me-2" />
																				Logo Design
																			</td>
																			<td>120</td>
																			<td>$40.00</td>
																			<td className="fs-5 text-dark fw-boldest pe-lg-6">
																				$4800.00
																			</td>
																		</tr>
																		<tr className="fw-bolder text-gray-700 fs-5 text-end">
																			<td className="d-flex align-items-center pb-10">
																				<i className="fa fa-genderless text-primary fs-1 me-2" />
																				Web Development
																			</td>
																			<td>210</td>
																			<td>$60.00</td>
																			<td className="fs-5 text-dark fw-boldest pe-lg-6">
																				$12600.00
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
															{/*end::Table*/}
															{/*begin::Section*/}
															<div className="d-flex flex-column mw-md-300px w-100">
																{/*begin::Label*/}
																<div className="fw-bold fs-5 mb-3 text-dark00">
																	BANK TRANSFER
																</div>
																{/*end::Label*/}
																{/*begin::Item*/}
																<div className="d-flex flex-stack text-gray-800 mb-3 fs-6">
																	{/*begin::Accountname*/}
																	<div className="fw-bold pe-5">Account Name:</div>
																	{/*end::Accountname*/}
																	{/*begin::Label*/}
																	<div className="text-end fw-norma">Barclays UK</div>
																	{/*end::Label*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="d-flex flex-stack text-gray-800 mb-3 fs-6">
																	{/*begin::Accountnumber*/}
																	<div className="fw-bold pe-5">Account Number:</div>
																	{/*end::Accountnumber*/}
																	{/*begin::Number*/}
																	<div className="text-end fw-norma">
																		1234567890934
																	</div>
																	{/*end::Number*/}
																</div>
																{/*end::Item*/}
																{/*begin::Item*/}
																<div className="d-flex flex-stack text-gray-800 fs-6">
																	{/*begin::Code*/}
																	<div className="fw-bold pe-5">Code:</div>
																	{/*end::Code*/}
																	{/*begin::Label*/}
																	<div className="text-end fw-norma">BARC0032UK</div>
																	{/*end::Label*/}
																</div>
																{/*end::Item*/}
															</div>
															{/*end::Section*/}
														</div>
														{/*end::Content*/}
														{/*begin::Separator*/}
														<div className="border-end d-none d-md-block mh-450px mx-9" />
														{/*end::Separator*/}
														{/*begin::Content*/}
														<div className="text-end pt-10">
															{/*begin::Total Amount*/}
															<div className="fs-3 fw-bolder text-muted mb-3">
																TOTAL AMOUNT
															</div>
															<div className="fs-xl-2x fs-2 fw-boldest">
																$20,600.00
															</div>
															<div className="text-muted fw-bold">Taxes included</div>
															{/*end::Total Amount*/}
															<div className="border-bottom w-100 my-7 my-lg-16" />
															{/*begin::Invoice To*/}
															<div className="text-gray-600 fs-6 fw-bold mb-3">
																INVOICE TO.
															</div>
															<div className="fs-6 text-gray-800 fw-bold mb-8">
																Iris Watson.
																<br />
																Fredrick Nebraska 20620
															</div>
															{/*end::Invoice To*/}
															{/*begin::Invoice No*/}
															<div className="text-gray-600 fs-6 fw-bold mb-3">
																INVOICE NO.
															</div>
															<div className="fs-6 text-gray-800 fw-bold mb-8">
																56758
															</div>
															{/*end::Invoice No*/}
															{/*begin::Invoice Date*/}
															<div className="text-gray-600 fs-6 fw-bold mb-3">
																DATE
															</div>
															<div className="fs-6 text-gray-800 fw-bold">
																12 May, 2020
															</div>
															{/*end::Invoice Date*/}
														</div>
														{/*end::Content*/}
													</div>
													{/*end::Wrapper*/}
												</div>
												{/*end::Body*/}
												{/* begin::Footer*/}
												<div className="d-flex flex-stack flex-wrap mt-lg-20 pt-13">
													{/* begin::Actions*/}
													<div className="my-1 me-5">
														{/* begin::Pint*/}
														<button
															type="button"
															className="btn btn-success my-1 me-12"
															onclick="window.print();"
														>
															Print Invoice
														</button>
														{/* end::Pint*/}
														{/* begin::Download*/}
														<button
															type="button"
															className="btn btn-light-success my-1"
														>
															Download
														</button>
														{/* end::Download*/}
													</div>
													{/* end::Actions*/}
													{/* begin::Action*/}
													<button type="button" className="btn btn-primary my-1">
														Create Invoice
													</button>
													{/* end::Action*/}
												</div>
												{/* end::Footer*/}
											</div>
											{/* end::Wrapper*/}
										</div>
										{/* end::Body*/}
									</div>
									{/* end::Invoice 1*/}
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

export default Invoice2
