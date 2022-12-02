import React from "react";
import { useLocation } from "react-router";

const Navs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class={`nav-link
                    ${active === "home" ? "active" : ""}`}
          id="home-tab"
          data-toggle="tab"
          href="/profile/home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Home
        </a>
      </li>
      <li class="nav-item">
        <a
          class={`nav-link
                    ${active === "account" ? "active" : ""}`}
          data-toggle="tab"
          href="/profile/account"
          role="tab"
          aria-controls="account"
          aria-selected="false"
        >
          Account Settings
        </a>
      </li>
      <li class="nav-item">
        <a
          class={`nav-link
                    ${active === "ratings" ? "active" : ""}`}
          id="ratings-tab"
          data-toggle="tab"
          href="/profile/ratings"
          role="tab"
          aria-controls="ratings"
          aria-selected="false"
        >
          Your Ratings
        </a>
      </li>
      <li class="nav-item">
        <a
          class={`nav-link
                    ${active === "professors" ? "active" : ""}`}
          id="professors-tab"
          data-toggle="tab"
          href="/profile/professors"
          role="tab"
          aria-controls="professors"
          aria-selected="false"
        >
          Saved Professors
        </a>
      </li>
    </ul>
  );
};
export default Navs;
