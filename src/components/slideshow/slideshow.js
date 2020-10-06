
import React, { Component } from 'react';
import './slideshow.css';



const Slideshow=()=>{
    return(
      
      <section>
      <div class="slide-show-container">
        <div >
            <img className="wrapper-one" src="https://tse4.mm.bing.net/th?id=OIP.mNHyRg-nFo-G6ao68QvgkgHaFK&pid=Api&P=0&w=231&h=162"/>

          {/* <div class="wrapper-text">Dummy Text</div> */}
        </div>
        <div >
      <img className="wrapper-two" src="http://navadiha.ir/files/uploads/images/1359894366.3085-b.jpg"/>
          {/* <div class="wrapper-text">Dummy Text Slide Two</div> */}
        </div>
        <div >
     <img className="wrapper-three" src="http://www.stnlatam.com/images/pitch/pitch3.jpg"/>

          {/* <div class="wrapper-text">Dummy Text Slide Three</div> */}
        </div>
      </div>
    </section>




      // <section class="slideshow">
      //   <div class="slideshow-container slide">
      //     <img src="https://tse4.mm.bing.net/th?id=OIP.KX82hFNecgRpUuhY52QdogHaHa&pid=Api&P=0&w=300&h=300"/>
      //     {/* <div class="text-container">
      //       <p> I work with text too! And I'm just testing length here and stuff it's cool you know because that's important to do I guess hey did I ever tell you about that time that I did that stuff with the thing</p>
      //     </div> */}
      //     <img src="https://www.19kala.com/image/cache/home-page/slide-show/zemestan-98/esfand/desktop/new/slideshow-huawei-n1-1300x460.jpg"/>
      //     <img src="http://placeimg.com/625/225/arch"/>
      //   </div>
      // </section>
      
      
    )
}
export default  Slideshow;