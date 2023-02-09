import React from "react";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/img4.jpg"
import img2 from "../assets/img2.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Learner's place</h1>
                    <p>Solution to all your problems! </p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita fugiat odio vero qui aliquam rem repellendus suscipit. Accusantium dicta sequi nulla suscipit explicabo ducimus voluptatibus beatae ipsum rem rerum ipsam accusamus adipisci harum quaerat cupiditate, facilis commodi eveniet labore, necessitatibus eaque laborum consequatur? Atque maiores accusantium nobis sint cupiditate!</p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil ab debitis delectus dolore. Explicabo officiis neque, eius pariatur fuga porro et similique, autem suscipit id quia ex laudantium tenetur quos, est commodi vero ipsa ipsum necessitatibus nisi illo sapiente mollitia. Eaque tempore autem saepe quam, quasi ipsum atque nostrum a recusandae asperiores, voluptas consequatur voluptatibus vitae adipisci quia mollitia, accusamus dolorum labore! Numquam architecto non placeat, assumenda quam recusandae, officia corporis accusamus iure voluptatum ratione! Quia blanditiis quaerat odit!</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <p>These are some famous brands which acquire services from Us.</p>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="home5" id="services">
                <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1500} showThumbs={false} className="services">
                    <div>
                        <img src={img1} alt="Service 1" />
                        <p className='legend'>FullStack Development</p>

                    </div>
                    <div>
                        <img src={img2} alt="Service 2" />
                        <p className='legend'>Peer-to-Peer Support</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
};
export default Home;