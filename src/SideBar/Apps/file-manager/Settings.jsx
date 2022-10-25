import React from 'react'
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
                                            File Manager - Settings
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
                                                id="kt_menu_61b9c7d2bdad8"
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
                                                                data-dropdown-parent="#kt_menu_61b9c7d2bdad8"
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
                                                    <h2 className="mb-1">Settings</h2>
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
                                                            className="nav-link text-active-primary me-6"
                                                            to="../../demo14/dist/apps/file-manager/folders.html"
                                                        >
                                                            Files
                                                        </NavLink>
                                                    </li>
                                                    {/*end::Nav item*/}
                                                    {/*begin::Nav item*/}
                                                    <li className="nav-item">
                                                        <NavLink
                                                            className="nav-link text-active-primary me-6 active"
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
                                            {/*begin::Card title*/}
                                            <div className="card-title">
                                                <h2>Preferences</h2>
                                            </div>
                                            {/*end::Card title*/}
                                        </div>
                                        {/*end::Card header*/}
                                        {/*begin::Card body*/}
                                        <div className="card-body">
                                            {/*begin::Form*/}
                                            <form className="form" id="kt_file_manager_settings">
                                                {/*begin::Input group*/}
                                                <div className="fv-row row mb-15">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-3 d-flex align-items-center">
                                                        {/*begin::Label*/}
                                                        <label className="fs-6 fw-bold">Language</label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-9">
                                                        {/*begin::Input*/}
                                                        <select
                                                            name="language"
                                                            aria-label="Select a Language"
                                                            data-control="select2"
                                                            data-placeholder="Select a Language..."
                                                            className="form-select mb-2"
                                                        >
                                                            <option />
                                                            <option value="id">
                                                                Bahasa Indonesia - Indonesian
                                                            </option>
                                                            <option value="msa">Bahasa Melayu - Malay</option>
                                                            <option value="ca">Català - Catalan</option>
                                                            <option value="cs">Čeština - Czech</option>
                                                            <option value="da">Dansk - Danish</option>
                                                            <option value="de">Deutsch - German</option>
                                                            <option value="en">English</option>
                                                            <option value="en-gb">
                                                                English UK - British English
                                                            </option>
                                                            <option value="es">Español - Spanish</option>
                                                            <option value="fil">Filipino</option>
                                                            <option value="fr">Français - French</option>
                                                            <option value="ga">Gaeilge - Irish (beta)</option>
                                                            <option value="gl">Galego - Galician (beta)</option>
                                                            <option value="hr">Hrvatski - Croatian</option>
                                                            <option value="it">Italiano - Italian</option>
                                                            <option value="hu">Magyar - Hungarian</option>
                                                            <option value="nl">Nederlands - Dutch</option>
                                                            <option value="no">Norsk - Norwegian</option>
                                                            <option value="pl">Polski - Polish</option>
                                                            <option value="pt">Português - Portuguese</option>
                                                            <option value="ro">Română - Romanian</option>
                                                            <option value="sk">Slovenčina - Slovak</option>
                                                            <option value="fi">Suomi - Finnish</option>
                                                            <option value="sv">Svenska - Swedish</option>
                                                            <option value="vi">Tiếng Việt - Vietnamese</option>
                                                            <option value="tr">Türkçe - Turkish</option>
                                                            <option value="el">Ελληνικά - Greek</option>
                                                            <option value="bg">Български език - Bulgarian</option>
                                                            <option value="ru">Русский - Russian</option>
                                                            <option value="sr">Српски - Serbian</option>
                                                            <option value="uk">Українська мова - Ukrainian</option>
                                                            <option value="he">עִבְרִית - Hebrew</option>
                                                            <option value="ur">اردو - Urdu (beta)</option>
                                                            <option value="ar">العربية - Arabic</option>
                                                            <option value="fa">فارسی - Persian</option>
                                                            <option value="mr">मराठी - Marathi</option>
                                                            <option value="hi">हिन्दी - Hindi</option>
                                                            <option value="bn">বাংলা - Bangla</option>
                                                            <option value="gu">ગુજરાતી - Gujarati</option>
                                                            <option value="ta">தமிழ் - Tamil</option>
                                                            <option value="kn">ಕನ್ನಡ - Kannada</option>
                                                            <option value="th">ภาษาไทย - Thai</option>
                                                            <option value="ko">한국어 - Korean</option>
                                                            <option value="ja">日本語 - Japanese</option>
                                                            <option value="zh-cn">
                                                                简体中文 - Simplified Chinese
                                                            </option>
                                                            <option value="zh-tw">
                                                                繁體中文 - Traditional Chinese
                                                            </option>
                                                        </select>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row row mb-15">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-3">
                                                        {/*begin::Label*/}
                                                        <label className="fs-6 fw-bold mt-2">Date Format</label>
                                                        <div className="text-muted fs-7">
                                                            For more info on moment() date formats, please
                                                            <NavLink
                                                                to="https://momentjs.com/docs/#/displaying/format/"
                                                                target="_blank"
                                                            >
                                                                click here
                                                            </NavLink>
                                                            .
                                                        </div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-9">
                                                        {/*begin::Input*/}
                                                        <select
                                                            name="dateformat"
                                                            aria-label="Select a date format"
                                                            data-hide-search="true"
                                                            data-control="select2"
                                                            data-placeholder="Select a date format..."
                                                            className="form-select mb-2"
                                                        >
                                                            <option />
                                                            <option value={1}>10 Sep 2021, 10:15 AM</option>
                                                            <option value={2}>10/09/2021, 10:15 AM</option>
                                                            <option value={3}>09-10-2021</option>
                                                            <option value={4}>Sunday, September 10th 2010</option>
                                                        </select>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row row mb-15">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-3 d-flex align-items-center">
                                                        {/*begin::Label*/}
                                                        <label className="fs-6 fw-bold">
                                                            Automatic time zone
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-9">
                                                        {/*begin::Switch*/}
                                                        <div className="form-check form-switch form-check-custom form-check-solid me-10">
                                                            <input
                                                                className="form-check-input h-30px w-50px"
                                                                name="autotimezone"
                                                                type="checkbox"
                                                                defaultValue
                                                                id="autotimezone"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="autotimezone"
                                                            >
                                                                GMT +10:00
                                                            </label>
                                                        </div>
                                                        {/*begin::Switch*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row row mb-15">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-3">
                                                        {/*begin::Label*/}
                                                        <label className="fs-6 fw-bold mt-2">
                                                            Folder Compression
                                                        </label>
                                                        <div className="text-muted fs-7">
                                                            Default file compression type when downloading folders
                                                        </div>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-9">
                                                        {/*begin::Input*/}
                                                        <select
                                                            name="compression"
                                                            aria-label="Select a Compressions type"
                                                            data-control="select2"
                                                            data-hide-search="true"
                                                            data-placeholder="Select a Compressions type..."
                                                            className="form-select mb-2"
                                                        >
                                                            <option />
                                                            <option value={1}>*.zip</option>
                                                            <option value={2}>*.7z</option>
                                                            <option value={3}>*.rar</option>
                                                            <option value={4}>*.tar.gz</option>
                                                        </select>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row row mb-15">
                                                    {/*begin::Col*/}
                                                    <div className="col-md-3">
                                                        {/*begin::Label*/}
                                                        <label className="fs-6 fw-bold">
                                                            Sharing Permissions
                                                        </label>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-md-9">
                                                        {/*begin::Subtitle*/}
                                                        <label className="fs-6 fw-bold mb-3">Organisation</label>
                                                        {/*end::Subtitle*/}
                                                        {/*begin::Options*/}
                                                        <div className="d-flex">
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-30px w-50px"
                                                                    name="org_read"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="org_read"
                                                                    defaultChecked="checked"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="org_read"
                                                                >
                                                                    Read
                                                                </label>
                                                            </div>
                                                            {/*begin::Switch*/}
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-30px w-50px"
                                                                    name="org_write"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="org_write"
                                                                    defaultChecked="checked"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="org_write"
                                                                >
                                                                    Write
                                                                </label>
                                                            </div>
                                                            {/*begin::Switch*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                        {/*begin::Separator*/}
                                                        <div className="separator mt-6 mb-5" />
                                                        {/*end::Separator*/}
                                                        {/*begin::Subtitle*/}
                                                        <label className="fs-6 fw-bold mb-3">Public</label>
                                                        {/*end::Subtitle*/}
                                                        {/*begin::Options*/}
                                                        <div className="d-flex">
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-30px w-50px"
                                                                    name="public_read"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="public_read"
                                                                    defaultChecked="checked"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="public_read"
                                                                >
                                                                    Read
                                                                </label>
                                                            </div>
                                                            {/*begin::Switch*/}
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-check-custom form-check-solid me-10">
                                                                <input
                                                                    className="form-check-input h-30px w-50px"
                                                                    name="public_write"
                                                                    type="checkbox"
                                                                    defaultValue
                                                                    id="public_write"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="public_write"
                                                                >
                                                                    Write
                                                                </label>
                                                            </div>
                                                            {/*begin::Switch*/}
                                                        </div>
                                                        {/*end::Options*/}
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Action buttons*/}
                                                <div className="row mt-12">
                                                    <div className="col-md-9 offset-md-3">
                                                        {/*begin::Cancel*/}
                                                        <button type="button" className="btn btn-light me-3">
                                                            Cancel
                                                        </button>
                                                        {/*end::Cancel*/}
                                                        {/*begin::Button*/}
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            id="kt_file_manager_settings_submit"
                                                        >
                                                            <span className="indicator-label">Save</span>
                                                            <span className="indicator-progress">
                                                                Please wait...
                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                            </span>
                                                        </button>
                                                        {/*end::Button*/}
                                                    </div>
                                                </div>
                                                {/*begin::Action buttons*/}
                                            </form>
                                            {/*end::Form*/}
                                        </div>
                                        {/*end::Card body*/}
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

        </div>
    )
}

export default Settings
