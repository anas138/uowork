import React, { useEffect, useState } from "react"
import './App.css';
import { FaDiscord, FaSortDown, FaSortUp, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { height } from "@mui/system";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function App() {
  const [answer, setAnswer] = useState(false)
  const [screen, setScreen] = useState()
  const [index, setIndex] = useState(null)
  const [number,setNumber] =useState(1)
  const images = ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "bunny.png", "bunn2.png"]
  useEffect(() => {
    AOS.init();
    if (window.innerWidth <= "450") {
      console.log(window.innerWidth)
      setScreen(false)
    }
  })

  const questiClick = (number) => {
    setAnswer(!answer)
    setIndex(number)
  }
 
  document.addEventListener('scroll', function(e) {
    if (window.innerWidth <= "450") {
      console.log(window.innerWidth)
      setScreen(false)
    }
    else{
      setScreen(true)
    }
   

  })
  return (

    <div className="App" >
      <div className="wrapper">
        
        <div className="header" >
          <img src="logo.png" className="headerlogo" />
          <div className="flexHeader">
            <a id="achor" href="#home">HOME</a>
            <a id="achor" href="#roadMap">ROAD MAP</a>
            <a id="achor" href="#team">TEAM</a>
            <a id="achor" href="#faq">FAQ</a>
          </div>

          <a id="headImg"><a target="_blank" href="http://www.instagram.com/evilapeclubnft" id="sIcon"><FaInstagram className="insta" size="2.5em" style={{ padding: "7px", borderRadius: "50%", backgroundColor: "rgb(185, 21, 21)", marginLeft: "0px",color:"white" }} /></a>
          <a target="_blank" href="http://www.twitter.com/evilapeclubNFT" id="sIcon"><FaTwitter className="twit" size="2.5em" style={{ padding: "7px", borderRadius: "50%", backgroundColor: "rgb(185, 21, 21)", marginLeft: "0px",color:"white" }} /></a>
          <a id="sIcon">< FaDiscord className="discodIcon" size="2.5em" style={{ padding: "7px", borderRadius: "50%", backgroundColor: "rgb(185, 21, 21)", marginLeft: "0px",color:"white" }} /></a>
          </a>
          {/* <button style={{ fontWeight: "bold", fontSize: "18px" }} className="navButton">MINT EVIL APE</button> */}

        </div>

     
        
        <div className="home" id="home">
        <img src="sbg2.png" className="headerImg"/>
          <div className="home-sub-text">


            <h2> <span style={{ fontSize: "30px" }}>WELCOME TO </span>     <br />
              <span className="colored">THE <span className="evil-text">EVIL APE</span></span> <br />
              <span style={{ fontSize: "50px" }}>CLUB.</span></h2>
            <span>Lorem ipsum is simply dummy text of printing and<br />type setting industry </span>
            <div className="main-calender">
              <div className="calender">
                <span id="no">04</span>
                <small id="te">Days</small>
              </div>
              <div className="calender">
                <span id="no">06</span>
                <small id="te">Hours</small>
              </div>
              <div className="calender">
                <span id="no">31</span>
                <small id="te">Minuts</small>
              </div>
              <div className="calender">
                <span id="no">04</span>
                <small id="te">Seconds</small>
              </div>

            </div>
            <div className="buttonFlex">
            <button className="home-button">MINT EVIL  APE</button>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"20px"}} className="upDownDiv">
            <button className="updown" onClick={()=>{setNumber((prev)=>(prev+1))}}> <span style={{fontSize:"20px"}}>+</span></button>
            <span className="buttonSpan">{number}</span>
            <button  className="updown"  onClick={()=>{ number >=0 &&  setNumber((prev)=>(prev -1))}} ><span style={{fontSize:"20px"}}>-</span></button>
            </div>
            </div>
            <div style={{fontSize:"30px"}}>10000/10000 Available</div>
          </div>
          <div className="sideHeading"></div>
        </div>
      </div>

      <div className="imagesWraper">

        <div className="images">
          <h2 style={{ color: "white", fontSize: "45px", marginTop: "10px" }} className="gh">My Gallery</h2>
          {screen !== false &&
            <Carousel showThumbs={false} className="carosal" autoPlay={true} showStatus={false} showIndicators={false} interval={500} >
              <div className="cI">
                <img src="a.png" width="200px" height="250px" id="ci" />
                <img src="lava.png" width="200px" height="250px" id="ci" />
                <img src="b.png" width="200px" height="250px" id="ci" />
                <img src="c.png" width="200px" height="250px" id="ci" />
                <img src="d.png" width="200px" height="250px" id="ci" />
              </div>

              <div className="cI">
                <img src="gallery-1.png" width="200px" height="250px" id="ci" />
                <img src="d.png" width="200px" height="250px" id="ci" />
                <img src="e.png" width="200px" height="250px" id="ci" />
                <img src="f.png" width="200px" height="250px" id="ci" />
                <img src="g.png" width="200px" height="250px" id="ci" />
              </div>

            </Carousel>
          }
          {screen === false &&
            <div className="falseImage">

              <img src="a.png" id="cd" />
              <img src="galler-2.png" id="cd" />
              <img src="b.png" id="cd" />
              <img src="c.png" id="cd" />
              <img src="d.png" id="cd" />



              <img src="gallery-1.png" id="cd" />
              <img src="d.png" id="cd" />
              <img src="e.png" id="cd" />
              <img src="f.png" id="cd" />
              <img src="g.png" id="cd" />

            </div>

          }





          {/* {images.map((img,i)=>{
            return <img src={img} key={i} style={{borderRadius:"10px"}}/>
          })} */}


        </div>
      </div>


      <div className="RoadMap" id="roadMap">
        <h1 className="roadMapHeading"> Raod Map V1.5</h1>
        {/* <div className="roadmapCircles">
        <span style={{color:"white",marginRight:"5px"}}>ORIGINAL<br/> ROADMAP</span>
          <div>
          <img src="map-circle.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <div>
          
          <img src="map-circle-2.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <span style={{color:"white",marginLeft:"5px"}}> ROADMAP FOR HE NEW<br/> EA [EVIL APP]!</span>
        </div> */}


        <div className="line" style={{ borderLeft: "5px solid rgb(185, 21, 21)" }}></div>

        <div
          className="roadmApText" style={{ color: "white" }} data-aos="fade-up" >

          <div data-aos="fade-up"
            data-aos-duration="3000"><span id="number">15% </span>We will begin launching additional marketing with influencers<br />
            that are relevant and significant in the NFT space to get more eyes than ever <br />
            on our project during and after our public sale.</div>
          <br />
          <br />
          <div data-aos="fade-up"
            data-aos-duration="3000"><span id="number">25% </span>We will begin to distribute 10 ETH right back into the community among<br />
            random Evil Ape Club NFT holders.</div>
          <br />

          <div data-aos="fade-up"
            data-aos-duration="3000"> <span id="number">50% </span>Acquire land in both Sandbox and Decentraland to establish our<br />
            presence in the Metaverse. We believe as the metaverse grows everyone<br />
            needs a place to call their own. We will acquire land and build a unique<br />
            meeting place exclusive to Evil Ape Club holders where we will host virtual <br/>
            community gatherings, holiday parties, contest, space for EAC holders to hold<br />
            their own events and more.</div>
          <br />
          <br />
          <div data-aos="fade-up"
            data-aos-duration="3000"> <span id="number">60% </span>60 ETH goes directly into our community wallet, this will be used for:<br />
            Marketing, Merch development, and our community DAO, where holders will<br />
            be able to vote on community decisions as we ascend into the Metaverse</div>
          <br />
          <br />
          <div data-aos="fade-up"
            data-aos-duration="3000"> <span id="number">70% </span>We are going to be doing limited edition merch. For now this includes<br />
            stylish T-Shirts, hoodies, and more. Designs will be limited to create <br />
            exclusivity. Merch drops will be in limited supply</div>
          <br />
          <br />
          <div data-aos="fade-up"
            data-aos-duration="3000"><span id="number">80% </span>We will begin launching our staking contract that allows EAC holders to<br />
            earn $EVIL coins. $EVIL can be used to purchase NFTs, Whitelist to upcoming<br />
            projects, limited edition Metaverse wearables, limited edition Evil Ape Club<br />
            Merch, Gift cards, Vacations and more.</div>
          <br />
          <br />
          <div data-aos="fade-up"
            data-aos-duration="3000"><span id="number">100% </span>Roadmap v2.0 - At the completion of roadmap v1.5 we will unveil <br />
            roadmap v2.0…Stay Tuned…Stay evil!</div>
        </div>


        <img src="road-map-chracters.png" height="200" width="550" className="roadMapImg" />
      </div>


      <div className="meetTheTeam" id="team">
        <h2>MEET THE TEAM</h2>
        <div className="team">

          <div className="teamMembers">
            <img src="team-1.png" />
            <h3>The EVIL ONE</h3>
            <span>Founder-The Evil One</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>

          <div className="teamMembers">
            <img src="team-2.png" />
            <h3>EVIL kniEvil</h3>
            <span>Marketing\PR</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>



          <div className="teamMembers">
            <img src="circle-team-3.png" />
            <h3>Pirate</h3>
            <span>Artist</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>




          <div className="teamMembers">
            <img src="circle-team-5.png" />
            <h3>ABash</h3>
            <span>Dev \ Web 3 Expert</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>



        </div>
      </div>


      <div className="FAQ" id="faq">
      
        <div className="faqWraper">
        <img src="sbg1.png" className="faqImg"/>
        <div className="faq-text">

        
          <span className="h2">FAQ</span>

          <div onClick={() => { questiClick(1) }}>Q : WHAT IS THE TOTAL AMOUNT OF NFTS IN THE EVIL APE CLUB COLLECTION? {index == 1 && answer == true ? <FaSortUp /> : <FaSortDown />}</div>
          <div className={`${(answer == true && index == 1) ? 'answerVisible' : "anewers"}`} data-aos="fade-down" data-aos-easing="ease-in">A : THERE ARE 6969 UNIQUE EVIL APES</div>

          <div onClick={() => { questiClick(2) }} >Q : HOW MUCH IS IT TO MINT? {index == 2 && answer == true ? <FaSortUp /> : <FaSortDown />}</div>
          <div className={`${(answer == true && index == 2) ? 'answerVisible' : "anewers"}`} data-aos="fade-down" data-aos-easing="ease-in-sine">A : OUR WHITELIST PRESALE MINT PRICE IS <br /> 0.06 ETH PUBLIC SALE IS 0.065 ETH ?</div>



          <div onClick={() => { questiClick(3) }}>Q : HOW MUCH WILL EACH EVIL APE COST TO MINT ? {index == 3 && answer == true ? <FaSortUp /> : <FaSortDown />}</div>
          <div className={`${(answer == true && index == 3) ? 'answerVisible' : "anewers"}`} data-aos="fade-down" data-aos-easing="ease-in-sine"> A : Our Whitelist presale mint starts <br /> March 12, 2022 at 10 AM EST and last <br />for 24 hours. Our public sale <br />starts the following<br /> day March 13, 2022 at 10 AM EST.</div>

          <div onClick={() => { questiClick(4) }}>Q : Where can I view my Evil Ape Club NFT ? {index == 4 && answer == true ? <FaSortUp /> : <FaSortDown />} </div>
          <div className={`${(answer == true && index == 4) ? 'answerVisible' : "anewers"}`} data-aos="fade-down" data-aos-easing="ease-in-sine">A : After a successful mint, <br />you can view your EVIL APE on OpenSea.<br /> by connecting your wallet.</div>



          <div onClick={() => { questiClick(6) }}>Q : What Blockchain ? {index == 6 && answer == true ? <FaSortUp /> : <FaSortDown />}</div>
          <div className={`${(answer == true && index == 6) ? 'answerVisible' : "anewers"}`} data-aos="fade-down" data-aos-easing="ease-in-sine">A : ETH Blockchain</div>
        </div>
        </div>


      </div>
      <div className="footer">
        <div className="footerWraper">
        <div className="footer-icon">
          <img src="logo.png" height="100px" width="200px" />
          <img src="social-icon.png" />
        </div>
        <div className="lastHeading">@ 2022 EVIL APE | ALL RIGHTS RESERVED</div>
        
      </div>
      </div>

    </div>
  );
}

export default App;
