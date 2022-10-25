import React from 'react'
import { NavLink } from 'react-router-dom';
import Activities from '../CommonElements/Activities';
import CreateAppModal from '../CommonElements/CreateAppModal';
import DrawerChat from '../CommonElements/DrawerChat';
import EngageDemos from '../CommonElements/EngageDemos';
import EngageToolbar from '../CommonElements/EngageToolbar';
import InviteFriendModal from '../CommonElements/InviteFriendModal';
import ScrollTop from '../CommonElements/ScrollTop';
import UserSearchModal from '../CommonElements/UserSearchModal';

const licenses = () => {
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
										<h1 className="d-flex text-dark fw-bolder my-1 fs-3">Licenses</h1>
										{/*end::Title*/}
										{/*begin::Breadcrumb*/}
										<ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">
												<NavLink to="../../demo14/dist/index.html" className="text-gray-600 text-hover-primary">Home</NavLink>
											</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-600">Pages</li>
											{/*end::Item*/}
											{/*begin::Item*/}
											<li className="breadcrumb-item text-gray-500">Licenses</li>
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
											<NavLink to="#" className="btn btn-light fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
												{/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
												<span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
													</svg>
												</span>
												{/*end::Svg Icon*/}Filter</NavLink>
											{/*begin::Menu 1*/}
											<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61b9c78183cf4">
												{/*begin::Header*/}
												<div className="px-7 py-5">
													<div className="fs-5 text-dark fw-bolder">Filter Options</div>
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
															<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61b9c78183cf4" data-allow-clear="true">
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
																<input className="form-check-input" type="checkbox" defaultValue={1} />
																<span className="form-check-label">Author</span>
															</label>
															{/*end::Options*/}
															{/*begin::Options*/}
															<label className="form-check form-check-sm form-check-custom form-check-solid">
																<input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
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
														<label className="form-label fw-bold">Notifications:</label>
														{/*end::Label*/}
														{/*begin::Switch*/}
														<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
															<label className="form-check-label">Enabled</label>
														</div>
														{/*end::Switch*/}
													</div>
													{/*end::Input group*/}
													{/*begin::Actions*/}
													<div className="d-flex justify-content-end">
														<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
														<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
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
										<NavLink to="#" className="btn btn-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Create</NavLink>
										{/*end::Button*/}
									</div>
									{/*end::Actions*/}
								</div>
								{/*end::Toolbar*/}
								{/*begin::Post*/}
								<div className="content flex-column-fluid" id="kt_content">
									{/*begin::About card*/}
									<div className="card">
										{/*begin::Body*/}
										<div className="card-body p-5 px-lg-19 py-lg-16">
											{/*begin::Content main*/}
											<div className="mb-14">
												{/*begin::Heading*/}
												<div className="mb-15">
													{/*begin::Title*/}
													<h1 className="fs-2x text-dark mb-6">License Comparision</h1>
													{/*end::Title*/}
													{/*begin::Text*/}
													<div className="fs-5 text-gray-600 fw-bold">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</div>
													{/*end::Text*/}
												</div>
												{/*end::Heading*/}
												{/*begin::Body*/}
												{/*begin::Table*/}
												<div className="mb-14">
													{/*begin::Table container*/}
													<div className="table-responsive">
														{/*begin::Table*/}
														<table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
															{/*begin::Table head*/}
															<thead>
																<tr className="fw-bolder fs-6 text-gray-800 text-center border-0 bg-light">
																	<th className="min-w-200px rounded-start" />
																	<th className="min-w-140px">Regular</th>
																	<th className="min-w-120px">Multiple</th>
																	<th className="min-w-100px rounded-end">Extended</th>
																</tr>
															</thead>
															{/*end::Table head*/}
															{/*begin::Table body*/}
															<tbody className="border-bottom border-dashed">
																<tr className="fw-bold fs-6 text-gray-800 text-center">
																	<td className="text-start ps-6 fs-4">Number of end products or domains</td>
																	<td>1</td>
																	<td>Unlimited</td>
																	<td>1</td>
																</tr>
																<tr className="text-center">
																	<td className="text-start ps-6">
																		<div className="fw-bold fs-4 text-gray-800">Free end product</div>
																	</td>
																	<td>
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																				<path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																		{/*SVG file not found: 0*/}
																	</td>
																	<td>
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																				<path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																		{/*SVG file not found: 0*/}
																	</td>
																	<td>
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																				<path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																		{/*SVG file not found: 0*/}
																	</td>
																</tr>
																<tr className="text-center">
																	<td className="text-start ps-6">
																		<div className="fw-bold fs-4 text-gray-800">End product with paid services</div>
																	</td>
																	<td>
																		{/*SVG file not found: 0*/}
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
																				<rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</td>
																	<td>
																		{/*SVG file not found: 0*/}
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
																				<rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</td>
																	<td>
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-success">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																				<path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																		{/*SVG file not found: 0*/}
																	</td>
																</tr>
																<tr className="text-center">
																	<td className="text-start ps-6">
																		<div className="fw-bold fs-4 text-gray-800">Use in derivative themes or “generators”</div>
																	</td>
																	<td>
																		{/*SVG file not found: 0*/}
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
																				<rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</td>
																	<td>
																		{/*SVG file not found: 0*/}
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
																				<rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</td>
																	<td>
																		{/*SVG file not found: 0*/}
																		{/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
																		<span className="svg-icon svg-icon-2x svg-icon-danger">
																			<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
																				<rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
																			</svg>
																		</span>
																		{/*end::Svg Icon*/}
																	</td>
																</tr>
															</tbody>
															{/*end::Table body*/}
														</table>
														{/*end::Table*/}
													</div>
													{/*end::Table container*/}
												</div>
												{/*end::Table*/}
												{/*begin::Block*/}
												<div className="mb-20 pb-lg-20">
													{/*begin::Title*/}
													<h2 className="fw-bolder text-dark mb-8">Regular License:</h2>
													{/*end::Title*/}
													{/*begin::List*/}
													<ul className="fs-4 fw-bold mb-6">
														<li>
															<span className="text-gray-700">E-commerce site</span>
														</li>
														<li className="my-2">
															<span className="text-gray-700">Company business activity dashboard</span>
														</li>
														<li>
															<span className="text-gray-700">Customer support center</span>
														</li>
													</ul>
													{/*end::List*/}
													{/*begin::Text*/}
													<div className="fs-4 fw-bold text-gray-700 mb-13">If users can free browse and use your website or Admin Panel is used only as interface(eCommerce site) to sell other's products you can use Regular license.
														<br />If you are going to use the item on one domain and multiple subdomains, you only require one Licence.(ex: www.
														<span className="text-dark">domain.com</span>/site1 – site2.
														<span className="text-dark">domain.com</span>– site.3.
														<span className="text-dark">domain.com</span>).</div>
													{/*end::Text*/}
													{/*begin::Title*/}
													<h2 className="fw-bolder text-dark mb-7">Multisite License:</h2>
													{/*end::Title*/}
													{/*begin::List*/}
													<ul>
														<li>
															<span className="fs-4 fw-bold text-gray-700">It works the same as the Standard License, but you can use it in unlimited count of projects.</span>
														</li>
													</ul>
													{/*end::List*/}
													{/*begin::Text*/}
													<div className="fs-4 fw-bold text-gray-700 mb-13">If users can free browse and use your website is used only as interface(eCommerce site) to sell other's products you can use Regular license. if you are going to use the item on multiple domains, then you will need to purchase a Licence for each domain or buy Multisite License.
														<br />(ex: www.domain-site-
														<span className="text-dark">one.com</span>– www.domain-site.
														<span className="text-dark">two.com</span>– www.site-three-
														<span className="text-dark">domain.com</span>).</div>
													{/*end::Text*/}
													{/*begin::Title*/}
													<h2 className="fw-bolder text-dark mb-8">Extended License:</h2>
													{/*end::Title*/}
													{/*begin::List*/}
													<ul className="fs-4 fw-bold mb-6">
														<li>
															<span className="text-gray-700">SaaS projects</span>
														</li>
														<li className="my-2">
															<span className="text-gray-700">Photo stock with PRO subscription</span>
														</li>
														<li>
															<span className="text-gray-700">Cloud service with paid plans</span>
														</li>
													</ul>
													{/*end::List*/}
													{/*begin::Text*/}
													<div className="fs-4 fw-bold text-gray-700">E-commerce site Company business activity dashboard Customer support center If users can free browse and use your website is used only as interface(eCommerce site) to sell other's products you can use Regular license. If you are going to use the item on one domain and multiple subdomains, you only require one Licence . (ex: www.domain.com/site1 – site2.domain.com – site.3.domain.com).</div>
													{/*end::Text*/}
												</div>
												{/*end::Block*/}
												{/*end::Body*/}
											</div>
											{/*end::Content main*/}
											{/*begin::Card*/}
											<div className="card mb-4 bg-light text-center mb-4">
												{/*begin::Body*/}
												<div className="card-body py-12">
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/facebook-4.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/instagram-2-1.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/github.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/behance.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/pinterest-p.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/twitter.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
													{/*begin::Icon*/}
													<NavLink to="#" className="mx-4">
														<img src="/assets/media/svg/brand-logos/dribbble-icon-1.svg" className="h-30px my-2" alt="" />
													</NavLink>
													{/*end::Icon*/}
												</div>
												{/*end::Body*/}
											</div>
											{/*end::Card*/}
										</div>
										{/*end::Body*/}
									</div>
									{/*end::About card*/}
								</div>
								{/*end::Post*/}
								{/*begin::Footer*/}
								<div className="footer py-4 d-flex flex-column flex-md-row flex-stack" id="kt_footer">
									{/*begin::Copyright*/}
									<div className="text-dark order-2 order-md-1">
										<span className="text-muted fw-bold me-1">2021©</span>
										<NavLink to="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</NavLink>
									</div>
									{/*end::Copyright*/}
									{/*begin::Menu*/}
									<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
										<li className="menu-item">
											<NavLink to="https://keenthemes.com" target="_blank" className="menu-link px-2">About</NavLink>
										</li>
										<li className="menu-item">
											<NavLink to="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</NavLink>
										</li>
										<li className="menu-item">
											<NavLink to="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</NavLink>
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
	);
}

export default licenses;