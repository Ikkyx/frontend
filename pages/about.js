import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    <>
      <Head>
          <title>About </title>
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
  <h1>แนะนำ Anime Fantasy </h1>
  <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; แฟนตาซีคือ ต่างโลก หรือ อิเซไก (ญี่ปุ่น: 異世界; โรมาจิ: Isekai) เป็นประเภทของไลท์โนเวล, มังงะ, อนิเมะ และวิดีโอเกม ซึ่งว่าด้วยเรื่องราวของมนุษย์ธรรมดาจากโลกถูกโยกย้าย <br></br>&nbsp; &nbsp;&nbsp; &nbsp;, ถูกส่ง, ไปเกิดใหม่, หรืออาจจะติดอยู่ในจักรวาลคู่ขนาน, โลกจินตนิมิต หรือโลกเสมือน ที่ซึ่งพวกเขาต้องปรับตัวให้เข้ากับโลกใหม่ รวมไปถึงกฎเกณฑ์, วัฒนธรรม และปรัชญาใหม่ การนำบุคคลจาก  <br></br>&nbsp; &nbsp;&nbsp; &nbsp;"โลกจริง" ย้ายไปยังโลกจินตนิมิตด้วยวิธีการบางอย่างทำให้ผู้อ่านหรือผู้ชมได้รับรู้เกี่ยวกับโลกใหม่ในเวลาเดียวกันกับตัวละครเอก เป็นแนวคิดที่เป็นที่นิยมสำหรับนักเขียนมังงะและไลท์โนเวล <br></br>&nbsp; &nbsp;&nbsp; &nbsp;

บ่อยครั้งที่จักรวาลคู่ขนานนี้มีอยู่ในโลกเดิมของตัวละครเอกในฐานะจักรวาลสมมติ แต่ก็อาจเป็นจักรวาลที่ไม่รู้จักมาก่อนก็ได้ จักรวาลใหม่อาจเป็นโลกที่แตกต่างออกไปอย่างสิ้นเชิง  <br></br>&nbsp; &nbsp;&nbsp; &nbsp;โดยมีเพียงตัวละครเอกที่มีความทรงจำบางส่วนจากชาติก่อนหน้า เช่นในเรื่องบันทึกสงครามของยัยเผด็จการ หรืออาจจะเป็นโลกเสมือนที่กลายเป็นโลกความเป็นจริง เช่นในเรื่อง ล็อกฮอไรซอน  <br></br>&nbsp; &nbsp;&nbsp; &nbsp;, โอเวอร์ลอร์ด , รีซีโร่(Re:Zero)

ในแนว ต่างโลกด้านกลับ ตัวละครในโลกแฟนตาซีจะถูกส่งจากโลกเดิม และ/หรือถูกบังคับให้ปรับตัวให้เข้ากับสังคมยุคใหม่ เช่นในเรื่อง ผู้กล้าซึนซ่าส์กับจอมมารสู้ชีวิต!</p>
<center><div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
    <div className="card h-100">
      <img src="https://img.my-best.in.th/product_images/17ac6b2b910d36ca7e6d98154c88b604.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=ecde655f90a0df2385f51df021662b20"
      height="350" width="400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ไซคิหนุ่มพลังจิตอลเวง</h5>
        
      </div>
      <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>วัน ๆ ของเด็กหนุ่มผู้มีพลังจิตที่ต้องหลบซ่อนพลังจากผองเพื่อน
การมีพลังพิเศษจนเข้าขั้น OP อาจเป็นเรื่องน่ายินดีและตื่นตาตื่นใจสำหรับใครหลายคน แต่ไม่ใช่กับ ไซคิ คุสึโอะ 
เด็กหนุ่มมัธยมปลายที่เกิดมาพร้อมพลังจิตแข็งแกร่งถึงขั้นทำลายล้างโลกได้เพียงแค่คิด ยามเป็นทารกก็เดินกลางอากาศได้ 
วาร์ปไปไหนก็ได้ตามต้องการ แถมยังอ่านใจคนอื่นได้อีก ทว่าเพราะพลังที่มากล้นจนเกินไป ไซคิจึงปรารถนาจะใช้ชีวิตเยี่ยงคนธรรมดา 
ทำตัวสันโดษและปกปิดเรื่องพลังจิตของตนไปเรื่อย ๆ แม้จะดูเป็นไปอย่างยากลำบากเพราะรอบตัวเขาดันมีแต่คนแปลก ๆ เสียอย่างนั้น</p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.my-best.in.th/product_images/750601baa4e043383d060e4ca48d1590.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=853d465ca10829d04d3a29b30c678c17" height="350" width="400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Fairy Tail ศึกจอมเวทอภินิหาร</h5>
        
      </div>
      <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>เรื่องราวการผจญภัยของกิลด์จอมเวทที่เต็มไปด้วยมิตรภาพ
ในดินแดนที่เวทมนตร์สามารถพบได้ทั่วไปในชีวิตประจำวัน ทำให้กำเนิดกิลด์ที่รวบรวมเหล่านักเวทออกเป็นกลุ่ม ๆ 
ซึ่งมีอาชีพรับจ้างตามคำจ้างวาน และในบรรดากิลด์มากมายนั้นถ้าหากจะถามถึงกิลด์ที่แข็งแกร่งที่สุดย่อมเป็นกิลด์ แฟรี่เทล 
จอมเวทสาว ลูซี่ ใฝ่ฝันอยากเข้าร่วมกับกิลด์แฟรี่เทล เธอจึงออกเดินทางเพื่อทำตามฝันและระหว่างทางก็ได้พบกับ 
นัตสึกับแฮปปี้ สองสมาชิกแห่งกิลด์แฟรี่เทลที่กำลังตามหา อิกนีล มังกรที่เคยเลี้ยงนัตสึ นั่นจึงเป็นจุดเริ่มต้นของการผจญภัยของลูซี่ในฐานะสมาชิกกิลด์แฟรี่เทล   </p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card h-100">
      <img src="https://1417094351.rsc.cdn77.org/publicassets/5360226/images/20211010_193126.jpg"  height="350" width="400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Prince of Tennis เจ้าชายลูกสักหลาด</h5>
       
      </div>
      
      <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>ปริ๊นซ์ ออฟ เทนนิส เจ้าชายลูกสักหลาด เป็นการ์ตูนญี่ปุ่นแนวกีฬาเทนนิส แต่งโดย ทาเคชิ โคโนมิ ลงตีพิมพ์ในนิตยสารโชเน็นจัมป์รายสัปดาห์
ปัจจุบันมีฉบับรวมเล่มออกมาถึง 42 เล่มจบ หลังจากลงตีพิมพ์ได้ไม่นานก็ได้รับความนิยมอย่างสูงจนถูกสร้างเป็นอนิเมะ เกม ละครเพลง และภาพยนตร์เรื่องย่อ
เอจิเซ็น เรียวมะ ย้ายเข้ามาเรียนที่มัธยมต้นโรงเรียนเซชุนหรือในภาษาญี่ปุ่นคือ "เซซุน งาคุเอน" หรือเรียกสั้น ๆ ว่า "เซงาคุ" โรงเรียนดังที่มีชื่อเสียงด้านเทนนิส
เรียวมะ เป็นหนุ่มน้อยอัจฉริยะ แชมป์ 4 สมัยซ้อนในการแข่งขันรุ่นจูเนียร์ของอเมริกา เรียวมะเข้าชมรมได้ไม่ทันไร ก็ไต่เต้าขึ้นเป็นนักกีฬาตัวจริงที่เป็นเด็กปี 1
คนแรกในชมรม!</p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
      </div>
    </div>
  </div>
  




  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://img.my-best.in.th/product_images/99fac485690c4da85d1592c3d6c0a19c.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=c950a6553e84e2b07ea2ba59905472a7" height="350" width="400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ไวโอเล็ต เอเวอร์การ์เดน</h5>
        
      </div>
      <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>การเดินทางค้นหาความหมายของคำว่า รัก ของอดีตทหารสงคราม
เรื่องราวของ ไวโอเล็ต หญิงสาวกำพร้าที่ถูกฝึกเป็นทหารต่อสู้ในสงคราม ทำให้เธอมีบุคลิกเงียบขรึมเสมือนเครื่องจักรไร้อารมณ์ที่ใช้ชีวิตตามคำสั่งของผู้บังคับบัญชา 
ในกองทัพเธอทำงานขึ้นตรงกับผู้พันกิลเบิร์ต จนกระทั่งต่างฝ่ายต่างได้รับบาดเจ็บสาหัสหลังสงครามจบจึงต้องแยกจากกัน ไวโอเล็ตที่เสียแขนทั้งสองข้างได้รับการผ่าตัดใส่แขนเหล็กเทียม 
และทำงานเป็นออโต้เมมโมรี่ดอลล์หรือผู้เขียนจดหมายในสำนักงานไปรษณีย์ของเพื่อนผู้พัน เพื่อค้นหาความหมายของคำพูดสุดท้ายที่ผู้พันกิลเบิร์ตได้พูดกับเธอ</p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
      <div className="modal-footer">
       
      </div>
    </div>
  </div>

  <div className="card">
    <img src="https://img.my-best.in.th/product_images/f4ce390eed79e8d8bb022e326286fe49.png?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=048d91381f6f6aae5cc4001fbac1f8b8" className="card-img-top" height="350" width="400" alt="..." />
    <div className="card-body">
      <h5 className="card-title">แบล็คโคลเวอร์ Black Clover</h5>
      
    </div>
    <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>เส้นทางการเป็นจักรพรรดิเวทมนตร์ของเด็กกำพร้าผู้ไร้พลังเวท
เรื่องราวของ อัสต้าและยูโน เด็กกำพร้าสองคนผู้มีนิสัยแตกต่างกันอย่างสิ้นเชิง ทว่ากลับมีเป้าหมายอย่างเดียวกันนั่นก็คือ การเป็นจักรพรรดิเวทมนตร์แห่งอาณาจักรโคลเวอร์ 
ผู้ซึ่งจะได้ชื่อว่าเป็นจอมเวทที่แข็งแกร่งที่สุดเหนือใคร ๆ นอกจากนิสัยที่ต่างกันแล้วพลังเวทของทั้งคู่ก็เรียกว่าเป็นขั้วตรงข้าม เพราะในขณะที่ยูโนมีพลังเวทที่เก่งกาจ 
อัสต้ากลับไม่สามารถใช้พลังเวทได้เลย เขาจึงมุ่งฝึกฝนร่างกายอย่างหนักแทน 
จนกระทั่งวันหนึ่งเขาได้รับเลือกจากดาบปริศนาที่มีพลังปีศาจ</p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
    <div className="modal-footer">
     
    </div>
  </div>

  <div className="card">
    <img src="https://img.my-best.in.th/product_images/d042e285c88e86337af3866761cae242.png?ixlib=rails-4.3.1&q=70&lossless=0&w=640&h=640&fit=clip&s=e67a8ac65e49e51bc24641b8585336ca" height="350" width="400" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">อิรุมะคุง ผจญในแดนปีศาจ!</h5>
      
    </div>
    <div>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    รายละเอียด
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">รายละเอียด</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <form>
            
          <div className="mb-3">
            <p>เด็กชายจากโลกมนุษย์กลายเป็นหลานชายของผู้อำนวยการปีศาจ
อิรุมะ เด็กชายวัย 15 ปีถูกพ่อแม่แท้ ๆ ขายให้กับปีศาจนามว่า ซัลลิแวน ซึ่งเป็นผู้อำนวยการโรงเรียนในโลกปีศาจ ด้วยเหตุผลที่ว่าปีศาจรุ่นปู่ตนนี้อยาก
มีหลานชายแบบปีศาจตนอื่นเขาบ้าง จึงได้ขอร้องให้อิรุมะเซ็นสัญญาตกลงเป็นหลานชายนั่นเอง และเพราะโลกมนุษย์กับโลกของปีศาจนั้นแตกต่างกัน 
อิรุมะจึงต้องเรียนรู้ที่จะทำตัวแบบปีศาจเพื่อปกปิดตัวตนเพื่อความปลอดภัย โดยการเข้าเรียนในโรงเรียนปีศาจที่ซัลลิแวนเป็นผู้อำนวยการ 
ไม่นานอิรุมะก็ได้เพื่อนเป็นปีศาจที่มีนิสัยแปลกประหลาดถึงสองตน </p>
            <div className="modal-footer">
              
            </div>
          </div></form></div></div></div></div>
    <div className="modal-footer">
     
    </div>
  </div>
</div>
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
</center>
</main>
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