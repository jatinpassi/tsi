import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
    return (
        <Layout noHeaderBg pageName={"Home"}>
            <section
                className="hero-section-one"
                style={{ backgroundImage: "url(assets/img/hero-img.png)" }}
            >
                <div className="container">
                    <div className="heading-boder">
                        <h2>
                            <span>Unlock</span>
                            The Full Potential Of Your Business.{" "}
                        </h2>
                        <p>Creative concepting and visual design</p>
                        <a href="#" className="themebtu full">
                            More Services
                        </a>
                    </div>
                </div>
            </section>
            <div>
                <div className="container">
                    <div className="small-services-color">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <div className="small-services">
                                    <svg
                                        enableBackground="new 0 0 32 32"
                                        height={512}
                                        viewBox="0 0 32 32"
                                        width={512}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path d="m30.197 28.331-7.843-7.555c1.802-2.057 2.789-4.634 2.789-7.361 0-3.058-1.234-5.931-3.475-8.089-4.603-4.435-12.092-4.434-16.693 0-2.241 2.158-3.475 5.031-3.475 8.089s1.234 5.931 3.475 8.09c2.301 2.218 5.324 3.326 8.347 3.325 2.725 0 5.445-.91 7.642-2.712l7.892 7.602c.888.883 2.257-.532 1.341-1.389zm-23.88-8.216c-1.86-1.792-2.884-4.171-2.884-6.7 0-2.528 1.024-4.908 2.884-6.699 1.931-1.861 4.468-2.791 7.005-2.791s5.074.93 7.005 2.791c1.86 1.792 2.884 4.171 2.884 6.699 0 2.529-1.024 4.908-2.884 6.7-3.863 3.721-10.148 3.721-14.01 0z" />
                                            <path d="m18.154 12.449h-3.866v-3.862c0-.533-.433-.965-.966-.965-.534 0-.966.432-.966.965v3.862h-3.866c-.534 0-.966.432-.966.965s.432.966.966.966h3.866v3.862c0 .533.433.965.966.965.534 0 .966-.432.966-.965v-3.862h3.866c.534 0 .966-.432.966-.965s-.433-.966-.966-.966z" />
                                        </g>
                                    </svg>
                                    <div>
                                        <a href="#">Research And Discovery</a>
                                        <span>
                                            Morbi interdum mollis sapien.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="small-services">
                                    <svg
                                        enableBackground="new 0 0 418.945 418.945"
                                        height={512}
                                        viewBox="0 0 418.945 418.945"
                                        width={512}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path d="m9.213 397.61h401.004c4.849 0 8.728-3.879 8.728-8.728s-3.879-8.728-8.728-8.728h-25.214v-233.232c0-4.849-3.879-8.243-8.728-8.728h-55.762c-4.849 0-8.728 3.879-8.728 8.728v233.717h-16.486v-188.623c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v188.622h-16.486v-141.102c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v141.103h-16.486v-90.19c0-4.849-3.879-8.728-8.728-8.728h-56.249c-4.849 0-8.728 3.879-8.728 8.728v90.19h-23.76v-350.576c0-4.849-3.879-8.728-8.728-8.728s-8.728 3.879-8.728 8.728v358.819c.97 4.849 4.849 8.728 9.213 8.728zm319.542-241.96h39.761v224.989h-39.761zm-90.189 44.61h39.761v180.379h-39.761zm-90.19 48.004h39.761v132.375h-39.761zm-89.704 50.913h39.761v81.462h-39.761z" />
                                            <path d="m136.739 172.136 110.555-68.369-3.879 16.486c-.97 4.364 1.455 9.213 6.304 10.183 4.364.97 9.213-1.455 10.183-6.304l9.213-36.367c.97-4.849-.485-8.243-6.304-10.183l-36.367-9.213c-4.364-.97-9.213 1.455-10.183 6.304-.97 4.364 1.455 9.213 6.304 10.183l16.971 4.364-111.525 68.369c-3.879 2.424-5.334 7.758-2.909 11.637 3.394 4.85 8.728 4.85 11.637 2.91z" />
                                        </g>
                                    </svg>
                                    <div>
                                        <a href="#">Planning For The Future</a>
                                        <span>
                                            Phasellus lacinia, ullamcorper
                                            laoreet.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="small-services lest mb-0">
                                    <svg
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M444.709,239.616v227.621H67.877V239.616H32.768v245.175c0,9.696,7.858,17.554,17.554,17.554h411.941
            c9.696,0,17.554-7.858,17.554-17.554V239.616H444.709z"
                                        />
                                        <path
                                            d="M494.446,107.953H17.554C7.858,107.953,0,115.811,0,125.507v114.688c0,9.696,7.858,17.554,17.554,17.554h476.891
            c9.696,0,17.554-7.853,17.554-17.554V125.507C512,115.811,504.142,107.953,494.446,107.953z M476.891,222.647H35.109v-79.579
            h441.783V222.647z"
                                        />
                                        <path
                                            d="M273.273,121.066c-1.194-4.552-30.152-111.411-114.7-111.411c-36.782,0-66.706,29.924-66.706,66.706
            c0,36.782,29.661,66.706,66.121,66.706h98.304c5.436,0,10.574-2.522,13.897-6.829S274.648,126.326,273.273,121.066z
             M157.989,107.959c-17.39,0-31.013-13.88-31.013-31.598c0-17.127,14.471-31.598,31.598-31.598
            c38.52,0,61.586,37.947,72.675,63.195H157.989z"
                                        />
                                        <path
                                            d="M354.011,9.655c-84.547,0-113.506,106.859-114.7,111.411c-1.381,5.26-0.24,10.866,3.084,15.173
            c3.324,4.307,8.455,6.829,13.897,6.829h98.304c36.46,0,66.121-29.924,66.121-66.706C420.718,39.579,390.794,9.655,354.011,9.655z
             M354.597,107.959h-73.33c11.007-25.249,34.003-63.195,72.751-63.195c17.127,0,31.598,14.471,31.598,31.598
            C385.615,94.079,371.993,107.959,354.597,107.959z"
                                        />
                                        <rect
                                            x="238.738"
                                            y="125.513"
                                            width="35.109"
                                            height="359.278"
                                        />
                                    </svg>
                                    <div>
                                        <a href="#">Building Your Brand</a>
                                        <span>
                                            Pulvinar risus, vitae facilisis
                                            dolor.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brands-we-work one gap">
                <div className="container">
                    <BrandSlider />
                </div>
            </div>
            <section className="gap no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome">
                                <img alt="img" src="assets/img/welcome-1.jpg" />
                                <img
                                    alt="img"
                                    className="img-welcome"
                                    src="assets/img/welcome-2.jpg"
                                />
                                <img
                                    alt="dots"
                                    className="dots"
                                    src="assets/img/dots.png"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 pl-75">
                            <div className="heading design-enjoy">
                                <h6>Dream. Design. Enjoy.</h6>
                                <h2>
                                    {" "}
                                    We're an Independent Design &amp;
                                    Development Agency.
                                </h2>
                                <img
                                    alt="line"
                                    src="assets/img/headingline.png"
                                />
                            </div>
                            <div className="welcome-text">
                                <h6 className="pt-4 pb-5">
                                    Phasellus hendrerit. Pellentesque aliquet
                                    nibh nec urna. In nisi neque, aliquet vel
                                    dapibusid, mattis velnisi.
                                </h6>
                                <h5>User Experience</h5>
                                <p>
                                    Morbi interdum mollis sapien. Sed ac risus.
                                    Phasellus lacinia, magna a ullamcorper
                                    laoreet, lectus arcu pulvinar facilisis.{" "}
                                </p>
                                <h5>Digital Design</h5>
                                <p>
                                    Sed ac risus. Donec nec justo eget felis
                                    facilisis fermentum. Aliquam porttitor
                                    mauris sit amet orci. Aenean dignissim
                                    pellentesque felis.
                                </p>
                                <a href="#" className="themebtu">
                                    More Services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="w-100" alt="line" src="assets/img/line.jpg" />
            </section>
            <section className="how-it-works gap no-top">
                <div className="container">
                    <div className="heading">
                        <h6>How It Works?</h6>
                        <h2> We Are Strategic- Creative Digital Agency.</h2>
                        <img alt="line" src="assets/img/headingline.png" />
                    </div>
                    <div className="row pt-4">
                        <div className="col-xl-4 col-lg-6">
                            <div className="strategic">
                                <h2>O1/</h2>
                                <div className="pl-80">
                                    <h4>Submit Your Design Request</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Phasellus hendrerit.
                                        Pellentesque aliquet nibh nec urna.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="strategic">
                                <h2>O2/</h2>
                                <div className="pl-80">
                                    <h4>We Start Workin</h4>
                                    <p>
                                        Phasellus hendrerit. Pellentesque
                                        aliquet nibh nec urna. In nisi neque,
                                        aliquet vel, dapibus id, mattis vel,
                                        nisi.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="strategic">
                                <h2>O3/</h2>
                                <div className="pl-80">
                                    <h4>Get Your Projects Done! </h4>
                                    <p>
                                        In nisi neque, aliquet vel, dapibus id,
                                        mattis vel, nisi. Sed pretium, ligula
                                        sollicitudin laoreet viverra.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="heading-boder">
                                <h2>
                                    Why
                                    <br />
                                    <span>Choose</span> Us
                                </h2>
                            </div>
                            <div className="why-choose-text">
                                <h6>
                                    Phasellus hendrerit. Pellentesque aliquet
                                    nibh nec urna. In nisi neque, aliquet vel
                                    dapibusid, mattis velnisi.
                                </h6>
                                <h5>Ideas</h5>
                                <p>
                                    Morbi interdum mollis sapien. Sed ac risus.
                                    Phasellus lacinia, magna a ullamcorper
                                    laoreet.
                                </p>
                                <h5>Solution</h5>
                                <p>
                                    Praesent dapibus, neque id cursus faucibus,
                                    tortor neque egestas auguae, eu vulputate
                                    magna eros eu erat.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="choose-us-img">
                                <figure>
                                    <img
                                        alt="img"
                                        src="assets/img/choose-us-1.jpg"
                                    />
                                </figure>
                                <div className="choose-us-img-text">
                                    <i>
                                        <svg
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m502.71875 58.410156-59.996094 30-13.417968-26.832031 60-30zm0 0" />
                                            <path d="m489.300781 298.429688-60-30 13.417969-26.832032 59.996094 30zm0 0" />
                                            <path d="m451 150h61v30h-61zm0 0" />
                                            <path d="m22.707031 31.582031 60 30-13.417969 26.832031-59.996093-30zm0 0" />
                                            <path d="m22.699219 298.417969-13.414063-26.832031 59.996094-30 13.417969 26.832031zm0 0" />
                                            <path d="m0 150h61v30h-61zm0 0" />
                                            <path d="m211 482h90v30h-90zm0 0" />
                                            <path d="m421 165c0-90.980469-74.019531-165-165-165s-165 74.019531-165 165c0 62.039062 35.011719 118.609375 90 146.761719v48.238281h-30v30h30v62h150v-62h30v-30h-30v-48.238281c54.988281-28.152344 90-84.722657 90-146.761719zm-120 257h-90v-32h90zm-60-227c0-8.269531 6.730469-15 15-15s15 6.730469 15 15-6.730469 15-15 15-15-6.730469-15-15zm30 165v-122.578125c17.460938-6.195313 30-22.867187 30-42.421875 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45c0 19.554688 12.539062 36.226562 30 42.421875v122.578125h-30v-67.511719l-8.972656-3.9375c-49.222656-21.609375-81.027344-70.105469-81.027344-123.550781 0-74.4375 60.5625-135 135-135s135 60.5625 135 135c0 53.445312-31.804688 101.941406-81.027344 123.550781l-8.972656 3.9375v67.511719zm0 0" />
                                        </svg>
                                    </i>
                                    <h5>
                                        Building
                                        <br />
                                        Your Brand
                                    </h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div className="choose-us-img">
                                <figure>
                                    <img
                                        alt="img"
                                        src="assets/img/choose-us-2.jpg"
                                    />
                                </figure>
                                <div className="choose-us-img-text">
                                    <i>
                                        <svg
                                            enableBackground="new 0 0 124 124"
                                            height={512}
                                            viewBox="0 0 124 124"
                                            width={512}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m82.899 50.646c-6.059 0-10.988-4.918-10.988-10.963s4.929-10.963 10.988-10.963 10.988 4.918 10.988 10.963-4.929 10.963-10.988 10.963zm0-17.979c-3.877 0-7.031 3.147-7.031 7.015s3.154 7.015 7.031 7.015 7.031-3.147 7.031-7.015-3.154-7.015-7.031-7.015z" />
                                            <path d="m122.558 2.183c-.069-.986-.853-1.773-1.841-1.848-14.728-1.125-41.975-.347-58.941 17.482-.002.002-.005.004-.007.007-2.3 2.441-4.418 5.209-6.382 8.136-24.65 8.882-35.589 25.07-38.168 33.298-.376 1.202.496 2.487 1.756 2.582l17.94 1.359c-1.478 3.901-2.824 7.823-4.017 11.748-.215.706-.02 1.472.504 1.992l11.995 11.891c.513.508 1.288.703 1.98.495 4-1.194 7.996-2.545 11.97-4.027l1.381 17.923c.097 1.253 1.377 2.122 2.581 1.752 7.562-2.328 24.216-13.247 33.545-37.919 2.953-1.954 5.73-4.064 8.153-6.359 17.668-16.682 18.58-43.82 17.551-58.512-.07-.987 1.029 14.692 0 0zm-3.878 2.008c.413 7.551.219 17.908-2.38 28.202l-26.124-25.897c10.42-2.625 20.888-2.767 28.504-2.305zm-96.722 53.877c3.21-7.053 12.265-18.732 29.892-26.418-2.945 5.084-5.502 10.331-7.777 15.002-2.04 4.172-3.917 8.403-5.638 12.665zm42.549 42.183-1.267-16.452c4.264-1.695 8.496-3.541 12.668-5.545 4.732-2.244 10.045-4.763 15.169-7.669-7.959 17.563-19.588 26.513-26.57 29.666zm37.752-42.448c-7.489 7.094-18.422 12.277-28.076 16.854-8.762 4.212-17.778 7.744-26.816 10.507l-10.293-10.205c2.785-8.95 6.346-17.879 10.592-26.562 4.394-9.022 9.862-20.251 17.01-27.839 5.992-6.295 13.426-10.299 21.11-12.794l29.252 28.998c-2.497 7.687-6.497 15.108-12.779 21.041z" />
                                            <path d="m4.185 122.808c-1.728 0-2.631-2.145-1.437-3.378l27.357-28.26c1.788-1.841 4.666.918 2.874 2.77l-27.357 28.259c-.392.405-.914.609-1.437.609z" />
                                            <path d="m23.435 124c-1.688 0-2.609-2.063-1.493-3.318l17.73-19.91c1.71-1.913 4.7.723 2.987 2.648l-17.73 19.91c-.394.444-.943.67-1.494.67z" />
                                            <path d="m2.982 104.917c-1.688 0-2.609-2.063-1.493-3.318l17.731-19.91c1.709-1.914 4.7.724 2.987 2.648l-17.731 19.91c-.395.444-.943.67-1.494.67z" />
                                        </svg>
                                    </i>
                                    <h5>
                                        User Experience &amp;
                                        <br />
                                        Site Design
                                    </h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="choose-us-img">
                                <figure>
                                    <img
                                        alt="img"
                                        src="assets/img/choose-us-3.jpg"
                                    />
                                </figure>
                                <div className="choose-us-img-text">
                                    <i>
                                        <svg
                                            enableBackground="new 0 0 64 64"
                                            height={512}
                                            viewBox="0 0 64 64"
                                            width={512}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m33 19v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.552 0-1-.449-1-1v-1h3c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.552 0 1 .449 1 1v1h-3c-.552 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3v2z" />
                                            <path d="m62.618 47-5-10h-13.974c2.044-1.651 3.356-4.174 3.356-7v-1h-7c-2.826 0-5.349 1.312-7 3.356v-9.406c5.598-.508 10-5.222 10-10.95 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 5.728 4.402 10.442 10 10.949v5.406c-1.651-2.043-4.174-3.355-7-3.355h-7v1c0 4.962 4.037 9 9 9h5v2h-1.382-3.236-20l-5 10h3.618v16h52v-16zm-36.618-14c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm14-2h4.929c-.486 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm-17-19c0-4.962 4.037-9 9-9s9 4.038 9 9-4.037 9-9 9-9-4.038-9-9zm8 27h7 18.382l3 6h-26.764l-3-6zm-23.382 0h18.764l-3 6h-18.764zm-.618 8h17.618l2.382-4.764v18.764h-20zm48 14h-26v-18.764l2.382 4.764h23.618z" />
                                            <path d="m53 53h-15v6h15zm-2 4h-11v-2h11z" />
                                            <path d="m9 53h2v2h-2z" />
                                            <path d="m9 57h2v2h-2z" />
                                            <path d="m9 49h2v2h-2z" />
                                            <path d="m49 33h2v-19h-2.233l4.233-7.056 4.233 7.056h-2.233v9h2v-7h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                                            <path d="m55 25h2v2h-2z" />
                                            <path d="m55 29h2v2h-2z" />
                                            <path d="m6 23h2v-9h-2.233l4.233-7.056 4.233 7.056h-2.233v19h2v-17h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                                            <path d="m6 25h2v2h-2z" />
                                            <path d="m6 29h2v2h-2z" />
                                            <path d="m46 41h2v2h-2z" />
                                            <path d="m50 41h2v2h-2z" />
                                            <path d="m54 41h2v2h-2z" />
                                            <path d="m8 41h2v2h-2z" />
                                            <path d="m12 41h2v2h-2z" />
                                            <path d="m16 41h2v2h-2z" />
                                        </svg>
                                    </i>
                                    <h5>
                                        Planning For
                                        <br />
                                        The Future
                                    </h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div className="choose-us-img">
                                <figure>
                                    <img
                                        alt="img"
                                        src="assets/img/choose-us-4.jpg"
                                    />
                                </figure>
                                <div className="choose-us-img-text">
                                    <i>
                                        <svg
                                            enableBackground="new 0 0 48 48"
                                            height={512}
                                            viewBox="0 0 48 48"
                                            width={512}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path d="m25 7.03c0-.552-.447-1-1-1-5.514 0-10 4.486-10 10 0 .552.447 1 1 1s1-.448 1-1c0-4.411 3.589-8 8-8 .553 0 1-.448 1-1z" />
                                                <path d="m22.246 45.79h1.754 1.754c1.652 0 2.999-1.345 3-3v-1.099c1.032-.475 1.755-1.512 1.755-2.721v-3.72c.176-.382.281-.802.281-1.25 0-1.016.226-2 .671-2.927.441-.919 1.086-1.752 1.864-2.409 3.746-3.165 5.709-7.989 5.25-12.909-.7-7.375-6.813-13.189-14.265-13.525l-.31-.01-.354.011c-7.408.335-13.521 6.149-14.222 13.526-.458 4.917 1.505 9.742 5.251 12.906.778.658 1.423 1.491 1.864 2.41.445.927.671 1.911.671 2.927 0 .447.105.868.281 1.25v3.721c0 1.209.722 2.247 1.755 2.721v1.1c.001 1.653 1.348 2.998 3 2.998zm4.508-3c0 .552-.449 1-1 1h-1.754-1.754c-.551 0-1-.449-1-1v-.82h2.754 2.754zm1.755-3.819c0 .551-.448 1-1 1h-3.509-3.509c-.552 0-1-.449-1-1v-2.068c.232.058.47.097.719.097h3.79 3.79c.249 0 .487-.039.719-.097zm-9.299-4.971c0-1.318-.292-2.595-.868-3.793-.563-1.171-1.385-2.233-2.376-3.071-3.247-2.742-4.948-6.926-4.551-11.191.607-6.389 5.903-11.426 12.275-11.715l.31-.01.265.009c6.417.29 11.713 5.327 12.319 11.714.398 4.267-1.303 8.451-4.55 11.193-.991.838-1.813 1.9-2.376 3.071-.576 1.198-.868 2.475-.868 3.793 0 .551-.448 1-1 1h-3.79-3.79c-.552 0-1-.449-1-1z" />
                                            </g>
                                        </svg>
                                    </i>
                                    <h5>
                                        Search Engine
                                        <br />
                                        Optimisation
                                    </h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="no-bottom video-section"
                style={{ backgroundColor: "#f2edf5" }}
            >
                <div className="get-in-touch gap">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-1 col-xl-10">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="heading">
                                            <h6>Get In Touch</h6>
                                            <h2>
                                                {" "}
                                                Kick Start Your Awesome Project
                                                Now!
                                            </h2>
                                            <img
                                                alt="line"
                                                src="assets/img/headingline.png"
                                            />
                                            <p>
                                                Sed egestas, ante et vulputate
                                                volutpat, eros pede semper est,
                                                vitae luctus metus libero eu
                                                augue.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <form className="touch">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your name *"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email address *"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        placeholder="Your Phone (optional)"
                                                    />
                                                </div>
                                                <div className="col-xl-12">
                                                    <textarea
                                                        placeholder="Your message *"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="btugap">
                                                    <a
                                                        href="#"
                                                        className="themebtu full"
                                                    >
                                                        Send Message
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="satisfied-clients gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="heading-boder">
                                <h2>
                                    Satisfied <span>Clients</span>
                                </h2>
                                <p className="pb-4">
                                    Donec nec justo eget felis facilisis
                                    fermentum. Aliquam porttitor mauris sit amet
                                    orci. Aenean dignissim pellentesque felis.
                                </p>
                                <a href="#" className="themebtu">
                                    More About Us
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="client-review">
                                <i className="fa-solid fa-quote-left" />
                                <h4>
                                    A multi-disciplinary team of creators ...
                                </h4>
                                <p>
                                    " Suspendisse potenti. Sed egestas, ante
                                    etvulputate volutpat, eros pede semper est,
                                    vitae luctus metus libero eu augue. “
                                </p>
                                <span>Milly Carson (Designer)</span>
                            </div>
                            <div className="client-review mt-xl-5">
                                <i className="fa-solid fa-quote-left" />
                                <h4>Create unique experiences ...</h4>
                                <p>
                                    " " Praesent elementum hendrerit tortor. Sed
                                    semper lorem at felis. Vestibulum volutpat,
                                    lacus a ultrices sagittismi neque euismod
                                    dui, eu pulvinar nunc sapien ornare nisl.”
                                </p>
                                <span>Edward Kim (Marketing Manager)</span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="client-review mb-xl-5">
                                <i className="fa-solid fa-quote-left" />
                                <h4>Best marketing ...</h4>
                                <p>
                                    " Vestibulum volutpat, lacus a ultrices
                                    sagittis, mi neque euismod dui, eu pulvinar
                                    nunc sapien ornare nisl. Phasellus pede
                                    arcu, dapibus eu, fermentum et, dapibus sed,
                                    urna.”
                                </p>
                                <span>Caspar Galloway (Product Manager)</span>
                            </div>
                            <div className="client-review">
                                <i className="fa-solid fa-quote-left" />
                                <h4>Best marketing ...</h4>
                                <p>
                                    " Donec nec justo eget felis facilisis
                                    fermentum. Aliquam porttitor mauris sit amet
                                    orci. “
                                </p>
                                <span>Quentin (Content Specialist)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Index;
