import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function index() {
  return (
    <>
    <Head>
    <title>Index</title>
    </Head>

 
    

<header data-bs-theme="dark">
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
  
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={4000}>
      <img src="a1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={4000}>
      <img src="a2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item"data-bs-interval={4000}>
      <img src="a3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



<div>
  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Anime</h1>
        <p className="lead text-body-secondary">"อะนิเมะ" (アニメ) เป็นคำย่อของ アニメーション ซึ่งเป็นคำที่ยืมมาจากภาษาอังกฤษ (สังเกตได้ว่าเขียนเป็นคะตะคะนะ) "แอนิเมชัน" (animation) ซึ่งหมายความถึงภาพยนตร์การ์ตูน คำทั้งสองคำนี้สามารถใช้แทนกันได้ในภาษาญี่ปุ่น อย่างไรก็ดีรูปย่อเป็นที่นิยมใช้มากกว่า คำว่า "อะนิเมะ" มีขอบเขตกว้างครอบคลุมภาพยนตร์การ์ตูนทั้งหมด ไม่จำกัดอยู่ที่แนวหรือรูปแบบของภาพยนตร์การ์ตูนใด ๆ
</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>&nbsp;&nbsp;
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
<div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://image.bestreview.asia/wp-content/uploads/2021/08/Jujutsu-Kaisen.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">มหาเวทย์ผนึกมาร (Jujutsu Kaisen)  </p>
              <p className="card-text"> แนว	ต่อสู้, ผจญภัย, เหนือธรรมชาติ<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	24 ตอน </p>
             
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s2.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">แบล็คโคลเวอร์ (Black Clover) </p>
              <p className="card-text">แนว	แฟนตาซี, ต่อสู้, ผจญภัย<br></br>
จำนวนซีซั่น	3 ซีซั่น<br></br>
จำนวนตอน	170 ตอน</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s3.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">โตเกียว รีเวนเจอร์ส (Tokyo Revengers) </p>
              <p className="card-text"> แนว	แฟนตาซี, ต่อสู้<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	24 ตอน </p>
             
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="s4.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">คุณชายนักสืบ รวยไม่จำกัด (Fugou Keiji Balance UNLIMITED) </p>
              <p className="card-text"> แนว	ตลก, สืบสวน, ดราม่า<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	11 ตอน </p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s5.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">โฮริมิยะ สาวมั่นกับนายมืดมน (Horimiya) </p>
              <p className="card-text"> แนว	โรแมนติก, คอมเมดี้<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	13 ตอน</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s6.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text"> ดาบพิฆาตอสูร (Kimetsu no Yaiba) </p>
              <p className="card-text"> แนว	ผจญภัย, ดาร์กแฟนตาซี<br></br>
จำนวนซีซั่น	1 ซีซั่น + The Movie 1 เรื่อง<br></br>
จำนวนตอน	26 ตอน </p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s7.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">ไฮคิว!! คู่ตบฟ้าประทาน (Haikyuu!!) </p>
              <p className="card-text"> แนว	กีฬา (วอลเล่ย์บอล), ตลก, ดราม่า<br></br>
จำนวนซีซั่น	4 ซีซั่น<br></br>
จำนวนตอน	85 ตอน </p>
             
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s8.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text"> พ่อบ้านสุดเก๋า (The Way of the Househusband) </p>
              <p className="card-text"> แนว	คอมเมดี้<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	5 ตอน </p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="s9.jpg" alt="Bootstrap" width="100%" height={225} />
            <div className="card-body">
              <p className="card-text">มหาศึกคนชนเทพ (Record of Ragnarok)
 </p>
              <p className="card-text"> แนว	แอคชั่น, ดาร์กแฟนตาซี<br></br>
จำนวนซีซั่น	1 ซีซั่น<br></br>
จำนวนตอน	10 ตอน</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</main>

<footer>
  
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">  
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

</footer> 
    </>
  )
}
