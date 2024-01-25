import React from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from "react-router-dom";
import bootstrap from "bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Header () {
  return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid home-page-header">
    <a class="navbar-brand" href="#"><img src={logo}/></a>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item mx-3">
          <a class="nav-link active Header-text" aria-current="page" href="#">Home Page</a>
        </li>
        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle Header-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Thiết kế nội thất
          </a>
          <ul class="dropdown-menu">
          <li><Link to="/Thiết kế nội thất chung cư" className='dropdown-item Header-text'>Thiết kế nội thất chung cư</Link></li>
            <li><a class="dropdown-item Header-text" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item Header-text" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle Header-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Thi công
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item Header-text" href="#">Action</a></li>
            <li><a class="dropdown-item Header-text" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item Header-text" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active Header-text" href="#">Dự án đã thi công</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active Header-text" href="#">Blog</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active Header-text" href="#">Liên hệ</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active Header-text" href="#">Login</a>
        </li>
      </ul>
      <form class="d-flex" id="searchArea" role="search">
        <input class="form-control" id='searchForm' type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" id='searchFormBtn' type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </form>
    </div>
  </div>
</nav>
  )
}
