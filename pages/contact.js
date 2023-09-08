import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
      <Head>
          <title>Welcome to NextJs</title>
      </Head>
<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Anime!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href=".">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" href="contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
  <Link className="btn btn-success text-n" href="dashboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                                    </svg>&nbsp;&nbsp;Login</Link>&nbsp; &nbsp;
  <button type="button" className="btn btn-primary">Sign-up</button>&nbsp; &nbsp;   
</nav>
</header>

<main>
<center>
<div className="w3-padding-64 w3-content w3-text-grey" id="contact">
  <h2 className="w3-text-light-grey">contact</h2>
  <hr style={{width: 200}} className="w3-opacity" />
  <div className="w3-section">
    <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" /> CHIANGMAI , THAILAND</p>
    <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Phone: 0924201797</p>
    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: kookkaipraew17@gmail.com</p>
  </div><br />

</div>
</center>
</main>
<br />
<br />
<br />


<footer>
<section id="Contact" class="py-5"> 
            <div class="container">
                <footer class="py-3 my-4">
                  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link href="." class="nav-link px-2 text-muted"><i class="bi bi-house-heart-fill"></i> <b>Home</b></Link></li>
                    <li class="nav-item"><a href="https://www.facebook.com/Terachat17/" class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i> <b>Facebook</b></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/terachat_t/" class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i> <b>Instagram</b></a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="bi bi-telephone"></i> <b>0612724616</b></a></li>
                  </ul>
                  <p class="text-center text-muted">&copy; <b>2022 Center Game Company, Inc</b></p>
                </footer>
              </div>
</section>
</footer>

    
    </>
  )
}
