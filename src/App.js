import "./App.css";
import { FaChevronDown } from "react-icons/fa";
import { navItems } from "./utils/constants";

function App() {
  const startIndex = 10;
  const endIndex = 18;
  return (
    <div className="main">
      <aside>
        <div className="sidebar">
          <div className="store">
            <div className="store-logo">
              <img
                className="store-logo-img"
                src={require("./assets/images/store-logo.jpg")}
                alt="store-logo"
              />
            </div>
            <div className="store-info">
              <div className="store-name">Nishyan</div>
              <div className="store-link">
                <a href="https://example.com">Visit Store</a>
              </div>
            </div>
            <div className="store-dropdown">
              <FaChevronDown className="down-arrow " />
            </div>
          </div>
          <ul className="store-nav-items">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item  ${
                  item.name === "Payments" ? "link-active" : ""
                }`}
              >
                <a className="nav-item-link" href="#">
                  {item.icon}
                  <span className="nav-item-link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="credits">
            <div className="credits-icon">
              <svg
                className="credits-icon-wallet"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="credits-details">
              <div className="credits-text">Available credits</div>
              <div className="credits-amount">222.10</div>
            </div>
          </div>
        </div>
      </aside>
      <section className="payments">
        <div className="header">
          <div className="header-title">
            <div className="header-title-text">Payments</div>
            <div className="header-help-btn">
              <span className="help-btn">
                <svg
                  className="header-help-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </span>

              <span className="header-help-btn-text">How it works</span>
            </div>
          </div>
          <div className="header-search-bar">
            <div className="search-container">
              <span className="search-icon-wrapper">
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                    fill="#808080"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="search-input"
                placeholder="Search features, tutorials etc."
              />
            </div>
          </div>
          <div className="header-action-btns">
            <span className="action-btn">
              {" "}
              <svg
                className="header-action-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                  fill="#4D4D4D"
                />
              </svg>
            </span>
            <span className="action-btn">
              {" "}
              <svg
                className="header-action-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path
                  d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z"
                  fill="#4D4D4D"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="overview">
          <div className="overview-header">
            <div className="overview-title">Overview</div>
            <div className="overview-filter-dropdown">
              <div className="overview-filter-dropdown-wrapper">
                <span className="overview-filter-dropdown-text">
                  Last Month
                </span>
                <span>
                  <svg
                    className="overview-filter-dropdown-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="overview-content">
            <div className="overview-orders">
              <div className="overview-orders-title">Online orders</div>
              <div className="overview-orders-stats">231</div>
            </div>
            <div className="overview-amount">
              <div className="overview-amount-title">Amount received</div>
              <div className="overview-amount-stats">₹23,92,312.19</div>
            </div>
          </div>
        </div>
        <div className="transactions">
          <div className="transactions-header">
            <div className="transactions-title">Transactions | This Month</div>
          </div>
        </div>

        <div className="transactions-content">
          <div className="transactions-action-header">
            <div className="transactions-search-bar">
              <span className="transactions-search-icon-wrapper">
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                    fill="#808080"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="transactions-search-input"
                placeholder="Search by order ID..."
              />
            </div>
            <div className="transactions-action-btns">
              <div className="transactions-sort-dropdown-wrapper">
                <span className="transactions-sort-dropdown-text">Sort</span>
                <svg
                  className="transactions-sort-dropdown-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
              <div className="transactions-download-wrapper">
                <svg
                  className="transactions-download-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="transactions-table-wrapper">
            <table className="transactions-table">
              <tr>
                <th>Order ID</th>
                <th className="order-date-header">
                  Order Date
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                  >
                    <path
                      d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </th>
                <th>Order Amount</th>
                <th className="transaction-fees-header">
                  Transactions Fees
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </th>
              </tr>

              {Array.from({ length: 19 }, (_, index) => (
                <tr key={index} index={index}>
                  <td>#281209</td>
                  <td>7 July, 2023</td>
                  <td>₹1,278.23</td>
                  <td>₹22</td>
                </tr>
              ))}
              {}
            </table>
          </div>
          <nav className="pagination-wrapper">
            <div className="pagination">
              <div>
                <button className="page-btn-skip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    stroke="#71717a"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  Previous
                </button>
              </div>
              <div>
                <button className="page-btn">1</button>
              </div>
              <div>
                <button className="page-btn">...</button>
              </div>
              <div>
                <button className="page-btn active">10</button>
              </div>
              {Array.from({ length: endIndex - startIndex + 1 }, (_, index) => (
                <div key={index}>
                  <button className="page-btn">{index + 11}</button>
                </div>
              ))}
              <div>
                <button className="page-btn-skip">
                  Next{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    stroke="#71717a"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default App;
