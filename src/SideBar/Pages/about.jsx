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

const about = () => {
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
                                        <h1 className="d-flex text-dark fw-bolder my-1 fs-3">About Us</h1>
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
                                            <li className="breadcrumb-item text-gray-500">About Us</li>
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
                                            <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61b9c77eb5822">
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
                                                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61b9c77eb5822" data-allow-clear="true">
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
                                        <div className="card-body p-lg-17">
                                            {/*begin::About*/}
                                            <div className="mb-18">
                                                {/*begin::Wrapper*/}
                                                <div className="mb-10">
                                                    {/*begin::Top*/}
                                                    <div className="text-center mb-15">
                                                        {/*begin::Title*/}
                                                        <h3 className="fs-2hx text-dark mb-5">About Us</h3>
                                                        {/*end::Title*/}
                                                        {/*begin::Text*/}
                                                        <div className="fs-5 text-muted fw-bold">Within the last 10 years, we have sold over 100,000 admin theme copies that have been
                                                            <br />successfully deployed by small businesses to global enterprises</div>
                                                        {/*end::Text*/}
                                                    </div>
                                                    {/*end::Top*/}
                                                    {/*begin::Overlay*/}
                                                    <div className="overlay">
                                                        {/*begin::Image*/}
                                                        <img className="w-100 card-rounded" src="/assets/media/stock/2000x800/1.jpg" alt="" />
                                                        {/*end::Image*/}
                                                        {/*begin::Links*/}
                                                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                                            <NavLink to="../../demo14/dist/pages/pricing/pricing-2.html" className="btn btn-primary">Pricing</NavLink>
                                                            <NavLink to="../../demo14/dist/pages/careers/apply.html" className="btn btn-light-primary ms-3">Join Us</NavLink>
                                                        </div>
                                                        {/*end::Links*/}
                                                    </div>
                                                    {/*end::Container*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                                {/*begin::Description*/}
                                                <div className="fs-5 fw-bold text-gray-600">
                                                    {/*begin::Text*/}
                                                    <p className="mb-8">First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting “Publish,” you might spend several days or maybe even a week “writing” a blog post, but it’s important to spend those vital hours planning your post and even thinking about
                                                        <NavLink to="../../demo14/dist/pages/blog/post.html" className="link-primary pe-1">Your Post</NavLink>(yes, thinking counts as working if you’re a blogger) before you actually write it.</p>
                                                    {/*end::Text*/}
                                                    {/*begin::Text*/}
                                                    <p className="mb-8">There’s an old maxim that states,
                                                        <span className="text-gray-800 pe-1">“No fun for the writer, no fun for the reader.”</span>No matter what industry you’re working in, as a blogger, you should live and die by this statement.</p>
                                                    {/*end::Text*/}
                                                    {/*begin::Text*/}
                                                    <p className="mb-8">Before you do any of the following steps, be sure to pick a topic that actually interests you. Nothing – and
                                                        <NavLink to="../../demo14/dist/pages/blog/home.html" className="link-primary pe-1">I mean NOTHING</NavLink>– will kill a blog post more effectively than a lack of enthusiasm from the writer. You can tell when a writer is bored by their subject, and it’s so cringe-worthy it’s a little embarrassing.</p>
                                                    {/*end::Text*/}
                                                    {/*begin::Text*/}
                                                    <p className="mb-17">I can hear your objections already. “But Dan, I have to blog for a cardboard box manufacturing company.” I feel your pain, I really do. During the course of my career, I’ve written content for dozens of clients in some less-than-thrilling industries (such as financial regulatory compliance and corporate housing), but the hallmark of a professional blogger is the ability to write well about any topic, no matter how dry it may be. Blogging is a lot easier, however, if you can muster at least a little enthusiasm for the topic at hand.</p>
                                                    {/*end::Text*/}
                                                </div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::About*/}
                                            {/*begin::Statistics*/}
                                            <div className="card bg-light mb-18">
                                                {/*begin::Body*/}
                                                <div className="card-body py-15">
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex flex-center">
                                                        {/*begin::Items*/}
                                                        <div className="d-flex justify-content-between mb-10 mx-auto w-xl-900px">
                                                            {/*begin::Item*/}
                                                            <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                                                {/*begin::Content*/}
                                                                <div className="text-center">
                                                                    {/*begin::Symbol*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                    <span className="svg-icon svg-icon-2tx svg-icon-primary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <rect x={2} y={2} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="black" />
                                                                            <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Symbol*/}
                                                                    {/*begin::Text*/}
                                                                    <div className="mt-1">
                                                                        {/*begin::Animation*/}
                                                                        <div className="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                                            <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value={700}>0</div>+</div>
                                                                        {/*end::Animation*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="text-gray-600 fw-bold fs-5 lh-0">Businesses</span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                                                {/*begin::Content*/}
                                                                <div className="text-center">
                                                                    {/*begin::Symbol*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                                                                    <span className="svg-icon svg-icon-2tx svg-icon-success">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="black" />
                                                                            <path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="black" />
                                                                            <path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Symbol*/}
                                                                    {/*begin::Text*/}
                                                                    <div className="mt-1">
                                                                        {/*begin::Animation*/}
                                                                        <div className="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                                            <div className="min-w-50px" data-kt-countup="true" data-kt-countup-value={80}>0</div>K+</div>
                                                                        {/*end::Animation*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="text-gray-600 fw-bold fs-5 lh-0">Quick Reports</span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                            {/*begin::Item*/}
                                                            <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                                                {/*begin::Content*/}
                                                                <div className="text-center">
                                                                    {/*begin::Symbol*/}
                                                                    {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                    <span className="svg-icon svg-icon-2tx svg-icon-info">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                            <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="black" />
                                                                            <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="black" />
                                                                            <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    {/*end::Symbol*/}
                                                                    {/*begin::Text*/}
                                                                    <div className="mt-1">
                                                                        {/*begin::Animation*/}
                                                                        <div className="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                                            <div className="min-w-50px" data-kt-countup="true" data-kt-countup-value={35}>0</div>M+</div>
                                                                        {/*end::Animation*/}
                                                                        {/*begin::Label*/}
                                                                        <span className="text-gray-600 fw-bold fs-5 lh-0">Payments</span>
                                                                        {/*end::Label*/}
                                                                    </div>
                                                                    {/*end::Text*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Item*/}
                                                        </div>
                                                        {/*end::Items*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Testimonial*/}
                                                    <div className="fs-2 fw-bold text-muted text-center mb-3">
                                                        <span className="fs-1 lh-1 text-gray-700">“</span>When you care about your topic, you’ll write about it in a
                                                        <br />
                                                        <span className="text-gray-700 me-1">more powerful</span>, emotionally expressive way
                                                        <span className="fs-1 lh-1 text-gray-700">“</span></div>
                                                    {/*end::Testimonial*/}
                                                    {/*begin::Author*/}
                                                    <div className="fs-2 fw-bold text-muted text-center">
                                                        <NavLink to="../../demo14/dist/account/security.html" className="link-primary fs-4 fw-bolder">Marcus Levy</NavLink>
                                                        <span className="fs-4 fw-bolder text-gray-600">,KeenThemes CEO</span>
                                                    </div>
                                                    {/*end::Author*/}
                                                </div>
                                                {/*end::Body*/}
                                            </div>
                                            {/*end::Statistics*/}
                                            {/*begin::Section*/}
                                            <div className="mb-16">
                                                {/*begin::Top*/}
                                                <div className="text-center mb-12">
                                                    {/*begin::Title*/}
                                                    <h3 className="fs-2hx text-dark mb-5">Publications</h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Text*/}
                                                    <div className="fs-5 text-muted fw-bold">Our goal is to provide a complete and robust theme solution
                                                        <br />to boost all of our customer’s project deployments</div>
                                                    {/*end::Text*/}
                                                </div>
                                                {/*end::Top*/}
                                                {/*begin::Row*/}
                                                <div className="row g-10">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Publications post*/}
                                                        <div className="card-xl-stretch me-md-6">
                                                            {/*begin::Overlay*/}
                                                            <NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-73.jpg">
                                                                {/*begin::Image*/}
                                                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-73.jpg")' }} />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making a the from also not been afraid to and step away been focused create eye</div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Jane Miller</NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on Mar 21 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Publications post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Publications post*/}
                                                        <div className="card-xl-stretch mx-md-3">
                                                            {/*begin::Overlay*/}
                                                            <NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-74.jpg">
                                                                {/*begin::Image*/}
                                                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-74.jpg")' }} />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making the from v4 to v5 but we have also not been afraid to step away been focused</div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Cris Morgan</NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on Apr 14 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Publications post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-4">
                                                        {/*begin::Publications post*/}
                                                        <div className="card-xl-stretch ms-md-6">
                                                            {/*begin::Overlay*/}
                                                            <NavLink className="d-block overlay mb-4" data-fslightbox="lightbox-hot-sales" to="/assets/media/stock/600x400/img-47.jpg">
                                                                {/*begin::Image*/}
                                                                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{ backgroundImage: 'url("assets/media/stock/600x400/img-47.jpg")' }} />
                                                                {/*end::Image*/}
                                                                {/*begin::Action*/}
                                                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                                                    <i className="bi bi-eye-fill fs-2x text-white" />
                                                                </div>
                                                                {/*end::Action*/}
                                                            </NavLink>
                                                            {/*end::Overlay*/}
                                                            {/*begin::Body*/}
                                                            <div className="m-0">
                                                                {/*begin::Title*/}
                                                                <NavLink to="../../demo14/dist/pages/profile/overview.html" className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Admin Panel - How To Started the Dashboard Tutorial</NavLink>
                                                                {/*end::Title*/}
                                                                {/*begin::Text*/}
                                                                <div className="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">We’ve been focused on making the from v4 to v5 but we’ve also not been afraid to step away been focused</div>
                                                                {/*end::Text*/}
                                                                {/*begin::Content*/}
                                                                <div className="fs-6 fw-bolder">
                                                                    {/*begin::Author*/}
                                                                    <NavLink to="../../demo14/dist/apps/projects/users.html" className="text-gray-700 text-hover-primary">Carles Nilson</NavLink>
                                                                    {/*end::Author*/}
                                                                    {/*begin::Date*/}
                                                                    <span className="text-muted">on May 14 2021</span>
                                                                    {/*end::Date*/}
                                                                </div>
                                                                {/*end::Content*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                        </div>
                                                        {/*end::Publications post*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Row*/}
                                            </div>
                                            {/*end::Section*/}
                                            {/*begin::Team*/}
                                            <div className="mb-18">
                                                {/*begin::Heading*/}
                                                <div className="text-center mb-12">
                                                    {/*begin::Title*/}
                                                    <h3 className="fs-2hx text-dark mb-5">Our Great Team</h3>
                                                    {/*end::Title*/}
                                                    {/*begin::Sub-title*/}
                                                    <div className="fs-5 text-muted fw-bold">It’s no doubt that when a development takes longer to complete, additional costs to
                                                        <br />integrate and test each extra feature creeps up and haunts most of us.</div>
                                                    {/*end::Sub-title=*/}
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Slider*/}
                                                <div className="tns tns-default mb-10">
                                                    {/*begin::Wrapper*/}
                                                    <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed={2000} data-tns-autoplay="true" data-tns-autoplay-timeout={18000} data-tns-controls="true" data-tns-nav="false" data-tns-items={1} data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev" data-tns-next-button="#kt_team_slider_next" data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}">
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-2.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Paul Miles</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Development Lead</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-3.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Melisa Marcus</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Creative Director</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-4.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">David Nilson</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Python Expert</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-5.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Anne Clarc</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Project Manager</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-6.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Ricky Hunt</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Art Director</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-7.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Alice Wayde</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">Marketing Manager</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="text-center">
                                                            {/*begin::Photo*/}
                                                            <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: 'url("assets/media/avatars/150-8.jpg")' }} />
                                                            {/*end::Photo*/}
                                                            {/*begin::Person*/}
                                                            <div className="mb-0">
                                                                {/*begin::Name*/}
                                                                <NavLink to="#" className="text-dark fw-bolder text-hover-primary fs-3">Carles Puyol</NavLink>
                                                                {/*end::Name*/}
                                                                {/*begin::Position*/}
                                                                <div className="text-muted fs-6 fw-bold mt-1">QA Managers</div>
                                                                {/*begin::Position*/}
                                                            </div>
                                                            {/*end::Person*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                    {/*begin::Button*/}
                                                    <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr074.svg*/}
                                                        <span className="svg-icon svg-icon-3x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                <path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </button>
                                                    {/*end::Button*/}
                                                    {/*begin::Button*/}
                                                    <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_next">
                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                                                        <span className="svg-icon svg-icon-3x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                                <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                    </button>
                                                    {/*end::Button*/}
                                                </div>
                                                {/*end::Slider*/}
                                            </div>
                                            {/*end::Team*/}
                                            {/*begin::Card*/}
                                            <div className="card mb-4 bg-light text-center">
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

export default about;