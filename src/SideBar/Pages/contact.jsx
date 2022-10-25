import React from 'react'
import { NavLink } from 'react-router-dom';

const contact = () => {
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
                    <h1 className="d-flex text-dark fw-bolder my-1 fs-3">Contact Us</h1>
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
                      <li className="breadcrumb-item text-gray-500">Contact Us</li>
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
                      <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_61b9c77faed3b">
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
                              <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_61b9c77faed3b" data-allow-clear="true">
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
                  {/*begin::Contact*/}
                  <div className="card">
                    {/*begin::Body*/}
                    <div className="card-body p-lg-17">
                      {/*begin::Row*/}
                      <div className="row mb-3">
                        {/*begin::Col*/}
                        <div className="col-md-6 pe-lg-10">
                          {/*begin::Form*/}
                          <form action className="form mb-15" method="post" id="kt_contact_form">
                            <h1 className="fw-bolder text-dark mb-9">Send Us Email</h1>
                            {/*begin::Input group*/}
                            <div className="row mb-5">
                              {/*begin::Col*/}
                              <div className="col-md-6 fv-row">
                                {/*begin::Label*/}
                                <label className="fs-5 fw-bold mb-2">Name</label>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <input type="text" className="form-control form-control-solid" placeholder name="name" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col-md-6 fv-row">
                                {/*end::Label*/}
                                <label className="fs-5 fw-bold mb-2">Email</label>
                                {/*end::Label*/}
                                {/*end::Input*/}
                                <input type="text" className="form-control form-control-solid" placeholder name="email" />
                                {/*end::Input*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mb-5 fv-row">
                              {/*begin::Label*/}
                              <label className="fs-5 fw-bold mb-2">Subject</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input className="form-control form-control-solid" placeholder name="subject" />
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mb-10 fv-row">
                              <label className="fs-6 fw-bold mb-2">Message</label>
                              <textarea className="form-control form-control-solid" rows={6} name="message" placeholder defaultValue={""} />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Submit*/}
                            <button type="submit" className="btn btn-primary" id="kt_contact_submit_button">
                              {/*begin::Indicator*/}
                              <span className="indicator-label">Send Feedback</span>
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                              {/*end::Indicator*/}
                            </button>
                            {/*end::Submit*/}
                          </form>
                          {/*end::Form*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 ps-lg-10">
                          {/*begin::Map*/}
                          <div id="kt_contact_map" className="w-100 rounded mb-2 mb-lg-0 mt-2" style={{ height: '486px' }} />
                          {/*end::Map*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
                      {/*begin::Row*/}
                      <div className="row g-5 mb-5 mb-lg-15">
                        {/*begin::Col*/}
                        <div className="col-sm-6 pe-lg-10">
                          {/*begin::Phone*/}
                          <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100">
                            {/*begin::Icon*/}
                            {/*SVG file not found: icons/duotune/finance/fin006.svgPhone.svg*/}
                            {/*end::Icon*/}
                            {/*begin::Subtitle*/}
                            <h1 className="text-dark fw-bolder my-5">Let’s Speak</h1>
                            {/*end::Subtitle*/}
                            {/*begin::Number*/}
                            <div className="text-gray-700 fw-bold fs-2">1 (833) 597-7538</div>
                            {/*end::Number*/}
                          </div>
                          {/*end::Phone*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-sm-6 ps-lg-10">
                          {/*begin::Address*/}
                          <div className="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100">
                            {/*begin::Icon*/}
                            {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                            <span className="svg-icon svg-icon-3tx svg-icon-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            {/*end::Icon*/}
                            {/*begin::Subtitle*/}
                            <h1 className="text-dark fw-bolder my-5">Our Head Office</h1>
                            {/*end::Subtitle*/}
                            {/*begin::Description*/}
                            <div className="text-gray-700 fs-3 fw-bold">Churchill-laan 16 II, 1052 CD, Amsterdam</div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Address*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
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
                  {/*end::Contact*/}
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

export default contact
