import React from 'react'
import { NavLink } from 'react-router-dom';

const EditCategory = () => {
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
											Edit Category
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
											<li className="breadcrumb-item text-gray-600">eCommerce</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Catalog</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Edit Category</li>
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
												id="kt_menu_61b9c7bcaecb3"
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
																data-dropdown-parent="#kt_menu_61b9c7bcaecb3"
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
									<form
										id="kt_ecommerce_add_category_form"
										className="form d-flex flex-column flex-lg-row gap-7 gap-lg-10"
										data-kt-redirect="../../demo14/dist/apps/ecommerce/catalog/category.html"
									>
										{/*begin::Aside column*/}
										<div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px">
											{/*begin::Thumbnail settings*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													{/*begin::Card title*/}
													<div className="card-title">
														<h2>Thumbnail</h2>
													</div>
													{/*end::Card title*/}
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body text-center pt-0">
													{/*begin::Image input*/}
													<div
														className="image-input image-input-empty image-input-outline mb-3"
														data-kt-image-input="true"
														style={{}}
													>
														{/*begin::Preview existing avatar*/}
														<div
															className="image-input-wrapper w-150px h-150px"
															style={{
																backgroundImage:
																	"url(assets/media//stock/ecommerce/123.gif)"
															}}
														/>
														{/*end::Preview existing avatar*/}
														{/*begin::Label*/}
														<label
															className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
															data-kt-image-input-action="change"
															data-bs-toggle="tooltip"
															title="Change avatar"
														>
															{/*begin::Icon*/}
															<i className="bi bi-pencil-fill fs-7" />
															{/*end::Icon*/}
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
															className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
															data-kt-image-input-action="cancel"
															data-bs-toggle="tooltip"
															title="Cancel avatar"
														>
															<i className="bi bi-x fs-2" />
														</span>
														{/*end::Cancel*/}
														{/*begin::Remove*/}
														<span
															className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
															data-kt-image-input-action="remove"
															data-bs-toggle="tooltip"
															title="Remove avatar"
														>
															<i className="bi bi-x fs-2" />
														</span>
														{/*end::Remove*/}
													</div>
													{/*end::Image input*/}
													{/*begin::Description*/}
													<div className="text-muted fs-7">
														Set the product thumbnail image. Only *.png, *.jpg and
														*.jpeg image files are accepted
													</div>
													{/*end::Description*/}
												</div>
												{/*end::Card body*/}
											</div>
											{/*end::Thumbnail settings*/}
											{/*begin::Status*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													{/*begin::Card title*/}
													<div className="card-title">
														<h2>Status</h2>
													</div>
													{/*end::Card title*/}
													{/*begin::Card toolbar*/}
													<div className="card-toolbar">
														<div
															className="rounded-circle bg-success w-15px h-15px"
															id="kt_ecommerce_add_category_status"
														/>
													</div>
													{/*begin::Card toolbar*/}
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body pt-0">
													{/*begin::Select2*/}
													<select
														className="form-select mb-2"
														data-control="select2"
														data-hide-search="true"
														data-placeholder="Select an option"
														id="kt_ecommerce_add_category_status_select"
													>
														<option />
														<option value="published" selected="selected">
															Published
														</option>
														<option value="scheduled">Scheduled</option>
														<option value="unpublished">Unpublished</option>
													</select>
													{/*end::Select2*/}
													{/*begin::Description*/}
													<div className="text-muted fs-7">
														Set the category status.
													</div>
													{/*end::Description*/}
													{/*begin::Datepicker*/}
													<div className="d-none mt-10">
														<label
															htmlFor="kt_ecommerce_add_category_status_datepicker"
															className="form-label"
														>
															Select publishing date and time
														</label>
														<input
															className="form-control"
															id="kt_ecommerce_add_category_status_datepicker"
															placeholder="Pick date & time"
														/>
													</div>
													{/*end::Datepicker*/}
												</div>
												{/*end::Card body*/}
											</div>
											{/*end::Status*/}
											{/*begin::Template settings*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													{/*begin::Card title*/}
													<div className="card-title">
														<h2>Store Template</h2>
													</div>
													{/*end::Card title*/}
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body pt-0">
													{/*begin::Select store template*/}
													<label
														htmlFor="kt_ecommerce_add_category_store_template"
														className="form-label"
													>
														Select a store template
													</label>
													{/*end::Select store template*/}
													{/*begin::Select2*/}
													<select
														className="form-select mb-2"
														data-control="select2"
														data-hide-search="true"
														data-placeholder="Select an option"
														id="kt_ecommerce_add_category_store_template"
													>
														<option />
														<option value="default" selected="selected">
															Default template
														</option>
														<option value="electronics">Electronics</option>
														<option value="office">Office stationary</option>
														<option value="fashion">Fashion</option>
													</select>
													{/*end::Select2*/}
													{/*begin::Description*/}
													<div className="text-muted fs-7">
														Assign a template from your current theme to define how
														the category products are displayed.
													</div>
													{/*end::Description*/}
												</div>
												{/*end::Card body*/}
											</div>
											{/*end::Template settings*/}
										</div>
										{/*end::Aside column*/}
										{/*begin::Main column*/}
										<div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
											{/*begin::General options*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													<div className="card-title">
														<h2>General</h2>
													</div>
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body pt-0">
													{/*begin::Input group*/}
													<div className="mb-10 fv-row">
														{/*begin::Label*/}
														<label className="required form-label">
															Category Name
														</label>
														{/*end::Label*/}
														{/*begin::Input*/}
														<input
															type="text"
															name="category_name"
															className="form-control mb-2"
															placeholder="Product name"
															defaultValue="Footwear"
														/>
														{/*end::Input*/}
														{/*begin::Description*/}
														<div className="text-muted fs-7">
															A category name is required and recommended to be
															unique.
														</div>
														{/*end::Description*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div>
														{/*begin::Label*/}
														<label className="form-label">Description</label>
														{/*end::Label*/}
														{/*begin::Editor*/}
														<div
															id="kt_ecommerce_add_category_description"
															name="kt_ecommerce_add_category_description"
															className="min-h-200px mb-2"
														/>
														{/*end::Editor*/}
														{/*begin::Description*/}
														<div className="text-muted fs-7">
															Set a description to the category for better visibility.
														</div>
														{/*end::Description*/}
													</div>
													{/*end::Input group*/}
												</div>
												{/*end::Card header*/}
											</div>
											{/*end::General options*/}
											{/*begin::Meta options*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													<div className="card-title">
														<h2>Meta Options</h2>
													</div>
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body pt-0">
													{/*begin::Input group*/}
													<div className="mb-10">
														{/*begin::Label*/}
														<label className="form-label">Meta Tag Title</label>
														{/*end::Label*/}
														{/*begin::Input*/}
														<input
															type="text"
															className="form-control mb-2"
															name="meta_title"
															placeholder="Meta tag name"
														/>
														{/*end::Input*/}
														{/*begin::Description*/}
														<div className="text-muted fs-7">
															Set a meta tag title. Recommended to be simple and
															precise keywords.
														</div>
														{/*end::Description*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div className="mb-10">
														{/*begin::Label*/}
														<label className="form-label">Meta Tag Description</label>
														{/*end::Label*/}
														{/*begin::Editor*/}
														<div
															id="kt_ecommerce_add_category_meta_description"
															name="kt_ecommerce_add_category_meta_description"
															className="min-h-100px mb-2"
														/>
														{/*end::Editor*/}
														{/*begin::Description*/}
														<div className="text-muted fs-7">
															Set a meta tag description to the category for increased
															SEO ranking.
														</div>
														{/*end::Description*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div>
														{/*begin::Label*/}
														<label className="form-label">Meta Tag Keywords</label>
														{/*end::Label*/}
														{/*begin::Editor*/}
														<input
															id="kt_ecommerce_add_category_meta_keywords"
															name="kt_ecommerce_add_category_meta_keywords"
															className="form-control mb-2"
														/>
														{/*end::Editor*/}
														{/*begin::Description*/}
														<div className="text-muted fs-7">
															Set a list of keywords that the category is related to.
															Separate the keywords by adding a comma
															<code>,</code>between each keyword.
														</div>
														{/*end::Description*/}
													</div>
													{/*end::Input group*/}
												</div>
												{/*end::Card header*/}
											</div>
											{/*end::Meta options*/}
											{/*begin::Automation*/}
											<div className="card card-flush py-4">
												{/*begin::Card header*/}
												<div className="card-header">
													<div className="card-title">
														<h2>Automation</h2>
													</div>
												</div>
												{/*end::Card header*/}
												{/*begin::Card body*/}
												<div className="card-body pt-0">
													{/*begin::Input group*/}
													<div>
														{/*begin::Label*/}
														<label className="form-label mb-5">
															Product assignment method
														</label>
														{/*end::Label*/}
														{/*begin::Methods*/}
														{/*begin::Input row*/}
														<div className="d-flex fv-row">
															{/*begin::Radio*/}
															<div className="form-check form-check-custom form-check-solid">
																{/*begin::Input*/}
																<input
																	className="form-check-input me-3"
																	name="method"
																	type="radio"
																	defaultValue={0}
																	id="kt_ecommerce_add_category_automation_0"
																/>
																{/*end::Input*/}
																{/*begin::Label*/}
																<label
																	className="form-check-label"
																	htmlFor="kt_ecommerce_add_category_automation_0"
																>
																	<div className="fw-bolder text-gray-800">
																		Manual
																	</div>
																	<div className="text-gray-600">
																		Add products to this category one by one by
																		manually selecting this category during product
																		creation or update.
																	</div>
																</label>
																{/*end::Label*/}
															</div>
															{/*end::Radio*/}
														</div>
														{/*end::Input row*/}
														<div className="separator separator-dashed my-5" />
														{/*begin::Input row*/}
														<div className="d-flex fv-row">
															{/*begin::Radio*/}
															<div className="form-check form-check-custom form-check-solid">
																{/*begin::Input*/}
																<input
																	className="form-check-input me-3"
																	name="method"
																	type="radio"
																	defaultValue={1}
																	id="kt_ecommerce_add_category_automation_1"
																	defaultChecked="checked"
																/>
																{/*end::Input*/}
																{/*begin::Label*/}
																<label
																	className="form-check-label"
																	htmlFor="kt_ecommerce_add_category_automation_1"
																>
																	<div className="fw-bolder text-gray-800">
																		Automatic
																	</div>
																	<div className="text-gray-600">
																		Products matched with the following conditions
																		will be automatically assigned to this category.
																	</div>
																</label>
																{/*end::Label*/}
															</div>
															{/*end::Radio*/}
														</div>
														{/*end::Input row*/}
														{/*end::Methods*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Input group*/}
													<div
														className="mt-10"
														data-kt-ecommerce-catalog-add-category="auto-options"
													>
														{/*begin::Label*/}
														<label className="form-label">Conditions</label>
														{/*end::Label*/}
														{/*begin::Conditions*/}
														<div className="d-flex flex-wrap align-items-center text-gray-600 gap-5 mb-7">
															<span>Products must match:</span>
															{/*begin::Radio*/}
															<div className="form-check form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="radio"
																	name="conditions"
																	defaultValue
																	id="all_conditions"
																	defaultChecked="checked"
																/>
																<label
																	className="form-check-label"
																	htmlFor="all_conditions"
																>
																	All conditions
																</label>
															</div>
															{/*end::Radio*/}
															{/*begin::Radio*/}
															<div className="form-check form-check-custom form-check-solid">
																<input
																	className="form-check-input"
																	type="radio"
																	name="conditions"
																	defaultValue
																	id="any_conditions"
																/>
																<label
																	className="form-check-label"
																	htmlFor="any_conditions"
																>
																	Any conditions
																</label>
															</div>
															{/*end::Radio*/}
														</div>
														{/*end::Conditions*/}
														{/*begin::Repeater*/}
														<div id="kt_ecommerce_add_category_conditions">
															{/*begin::Form group*/}
															<div className="form-group">
																<div
																	data-repeater-list="kt_ecommerce_add_category_conditions"
																	className="d-flex flex-column gap-3"
																>
																	<div
																		data-repeater-item
																		className="form-group d-flex flex-wrap gap-5"
																	>
																		{/*begin::Select2*/}
																		<div className="w-100 w-md-200px">
																			<select
																				className="form-select"
																				name="condition_type"
																				data-placeholder="Select an option"
																				data-kt-ecommerce-catalog-add-category="condition_type"
																			>
																				<option />
																				<option value="title">Product Title</option>
																				<option value="tag" selected="selected">
																					Product Tag
																				</option>
																				<option value="price">Prodict Price</option>
																			</select>
																		</div>
																		{/*end::Select2*/}
																		{/*begin::Select2*/}
																		<div className="w-100 w-md-200px">
																			<select
																				className="form-select"
																				name="condition_equals"
																				data-placeholder="Select an option"
																				data-kt-ecommerce-catalog-add-category="condition_equals"
																			>
																				<option />
																				<option value="equal" selected="selected">
																					is equal to
																				</option>
																				<option value="notequal">
																					is not equal to
																				</option>
																				<option value="greater">
																					is greater than
																				</option>
																				<option value="less">is less than</option>
																				<option value="starts">starts with</option>
																				<option value="ends">ends with</option>
																			</select>
																		</div>
																		{/*end::Select2*/}
																		{/*begin::Input*/}
																		<input
																			type="text"
																			className="form-control mw-100 w-200px"
																			name="condition_label"
																			placeholder
																		/>
																		{/*end::Input*/}
																		{/*begin::Button*/}
																		<button
																			type="button"
																			data-repeater-delete
																			className="btn btn-sm btn-icon btn-light-danger"
																		>
																			{/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
																			<span className="svg-icon svg-icon-2">
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
																		</button>
																		{/*end::Button*/}
																	</div>
																</div>
															</div>
															{/*end::Form group*/}
															{/*begin::Form group*/}
															<div className="form-group mt-5">
																{/*begin::Button*/}
																<button
																	type="button"
																	data-repeater-create
																	className="btn btn-sm btn-light-primary"
																>
																	{/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
																	<span className="svg-icon svg-icon-2">
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
																				width={12}
																				height={2}
																				rx={1}
																				transform="rotate(-90 11 18)"
																				fill="black"
																			/>
																			<rect
																				x={6}
																				y={11}
																				width={12}
																				height={2}
																				rx={1}
																				fill="black"
																			/>
																		</svg>
																	</span>
																	{/*end::Svg Icon*/}Add another condition
																</button>
																{/*end::Button*/}
															</div>
															{/*end::Form group*/}
														</div>
														{/*end::Repeater*/}
													</div>
													{/*end::Input group*/}
												</div>
												{/*end::Card header*/}
											</div>
											{/*end::Automation*/}
											<div className="d-flex justify-content-end">
												{/*begin::Button*/}
												<NavLink
													to="../../demo14/dist/apps/ecommerce/catalog/products.html"
													id="kt_ecommerce_add_product_cancel"
													className="btn btn-light me-5"
												>
													Cancel
												</NavLink>
												{/*end::Button*/}
												{/*begin::Button*/}
												<button
													type="submit"
													id="kt_ecommerce_add_category_submit"
													className="btn btn-primary"
												>
													<span className="indicator-label">Save Changes</span>
													<span className="indicator-progress">
														Please wait...
														<span className="spinner-border spinner-border-sm align-middle ms-2" />
													</span>
												</button>
												{/*end::Button*/}
											</div>
										</div>
										{/*end::Main column*/}
									</form>
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

export default EditCategory
