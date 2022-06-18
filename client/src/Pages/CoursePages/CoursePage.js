import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchCourse } from "../../HTTP/coursesAPI";
import NotFound from "./../ErrorPages/NotFound";

const CoursePage = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchCourse(id).then((data) => setCourse(data));
  }, []);

  console.log(`course: ${JSON.stringify(course, null, 2)}`);

  return (
    <section>
      <div class="row ml-0 mr-0">
        <div class="col-11 col-sm-9 col-lg-9 mx-auto mainCard">
          <p class="text-white font-weight-bold text-left courseNameAdjust mb-0">
            Fork React - Self Paced
          </p>
          <div class="instructorDesc pl-0 pr-0 mb-4 w-100">
            <p class="text-white d-inline w-100 text-left">
              <span class="">Self-Paced Course</span>
            </p>
          </div>
        </div>
        <div class="col-11 col-sm-9 col-lg-9 mx-auto courseCard">
          <section id="mainCourseCard">
            <div class="card courseCardBorders">
              <div class="row">
                <div class="col-md-5 icon-size img-skeleton">
                  <img
                    alt=""
                    class="img-fluid custom-rounded"
                    src="https://media.geeksforgeeks.org/img-practice/banner/fork-react-thumbnail-old.png?v=1655508176.0646183"
                  />
                </div>
                <div class="col-md-7 alignCardMeta">
                  <div class="card-body customPadding mb-3">
                    <p class="text-left font-weight-bold mt-2 sofia-pro cardHeadingSize">
                      Course Description
                    </p>
                    <div class="card-text text-left mb-3 sofia-pro text-muted descriptionSize">
                      Ever found it fascinating how sleek and precise{" "}
                      <b>User Interfaces</b> get built using React JS? We put
                      forth a complete in-detail and a granular Fork course for{" "}
                      <b>Free!!</b> Get ready for the journey to master
                      <b>React.js</b>
                    </div>
                    <div class="row">
                      <div class="col-7 col-sm-6">
                        <div class="my-auto alignStartEndDate">
                          <a
                            href="https://practice.geeksforgeeks.org/courses/fork-react?loginMode=625"
                            class="btn btn-success login-modal-btn btn-lg w-100 pt-3 pb-3 customButtonFont sofia-pro"
                          >
                            Login to Register
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-12">
          <section class="overview">
            <div class="container col-md-9">
              <h2 class="font-weight-bold d-block d-sm-none mb-5">
                Course Overview
              </h2>
              <div class="row">
                <div class="col-lg-4 col-12 custom-height my-auto">
                  <img
                    class="img-fluid d-block d-sm-none mb-5 mx-auto"
                    src="https://media.geeksforgeeks.org/img-practice/banner/fork-react-course-overview-image.png?v=1655508176"
                    alt="avtar"
                  />
                  <img
                    class="img-fluid d-none d-sm-block"
                    src="https://media.geeksforgeeks.org/img-practice/banner/fork-react-course-overview-image.png?v=1655508176"
                    alt="avtar"
                  />
                </div>
                <div class="col-lg-8 col-12">
                  <h2 class="font-weight-bold d-none d-sm-block text-left mb-4">
                    Course Overview
                  </h2>
                  <div class="text-muted d-none d-sm-block text-left urw-din text-lg overviewText">
                    In this course you will come across the important topics of{" "}
                    <b>React.js</b>, which are absolutely necessary to create
                    any project, personal or professional in a Geeks life.
                    <br />
                    <br />
                    We will start with Introduction to React, where we will
                    learn about the basics of <b>React, JSX</b>, its syntax and
                    functionalities along with <b>Babel, ES6, and npm</b>. React
                    has a <b>Component based architecture</b>. In this course we
                    have extensively talked about components. We will look into
                    the different types of components and mainly focused on the{" "}
                    <b>function-based</b> components. Here we would introduce
                    you to the concept of
                    <b>props</b> and <b>global state</b> which makes transfer of
                    data between different components easier. <br />
                    <br />
                    <b>React Hooks</b> make magic happen in React. From{" "}
                    <b>useState</b> to <b>useReducer</b>, every one of the React
                    Hooks has been explained with required code snippets and{" "}
                    <b>real world examples</b>
                    <br />
                    <br />
                    Lastly, we would look at two significant topics i.e.{" "}
                    <b>Updating Objects</b> in State and <b>Updating Arrays</b>{" "}
                    in State with proper examples and codes.
                  </div>
                  <div class="text-muted d-block d-sm-none urw-din overviewText">
                    In this course you will come across the important topics of{" "}
                    <b>React.js</b>, which are absolutely necessary to create
                    any project, personal or professional in a Geeks life.
                    <br />
                    <br />
                    We will start with Introduction to React, where we will
                    learn about the basics of <b>React, JSX</b>, its syntax and
                    functionalities along with <b>Babel, ES6, and npm</b>. React
                    has a <b>Component based architecture</b>. In this course we
                    have extensively talked about components. We will look into
                    the different types of components and mainly focused on the{" "}
                    <b>function-based</b> components. Here we would introduce
                    you to the concept of
                    <b>props</b> and <b>global state</b> which makes transfer of
                    data between different components easier. <br />
                    <br />
                    <b>React Hooks</b> make magic happen in React. From{" "}
                    <b>useState</b> to <b>useReducer</b>, every one of the React
                    Hooks has been explained with required code snippets and{" "}
                    <b>real world examples</b>
                    <br />
                    <br />
                    Lastly, we would look at two significant topics i.e.{" "}
                    <b>Updating Objects</b> in State and <b>Updating Arrays</b>{" "}
                    in State with proper examples and codes.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="learnings">
            <div class="container col-md-9">
              <h2 class="font-weight-bold d-block d-sm-none mb-4">
                What you will learn
              </h2>
              <div class="row">
                <div class="col-12 order-sm-12 col-sm-4 custom-height my-auto">
                  <img
                    class="img-fluid icon-size d-block d-sm-none mx-auto"
                    src="https://media.geeksforgeeks.org/img-practice/banner/whatwillyoulearn.svg"
                    alt="avtar"
                  />
                  <img
                    class="img-fluid icon-size d-none d-sm-block"
                    src="https://media.geeksforgeeks.org/img-practice/banner/whatwillyoulearn.svg"
                    alt="avtar"
                  />
                </div>
                <div class="col-12 order-sm-1 col-md-8 learnings-text my-auto">
                  <h2 class="font-weight-bold d-none d-sm-block text-left pl-3 mb-4">
                    What you will learn
                  </h2>
                  <div class="text-muted text-left urw-din text-lg learningsText">
                    <ul>
                      <li>
                        Basics of React, Features, Advantages, JSX, Babel and
                        npm
                      </li>
                      <li>Components, Functional Components and Props</li>
                      <li>
                        React Hooks: useState, useEffect, useContext and
                        useReducer
                      </li>
                      <li>
                        React Lists and Keys: Basics and functionalities of
                        Lists and Keys in React
                      </li>
                      <li>
                        Concepts regarding Using Objects and Arrays in State
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="benefits">
            <div class="container">
              <div class="col-md-12 mb-5">
                <h2 class="font-weight-bold">Other Benefits</h2>
              </div>
              <div class="row pr-2 pl-2">
                <div class="col-lg-4 col-6 mx-auto benefitsMargin mx-auto">
                  <img
                    alt=""
                    class="img-fluid"
                    src="https://media.geeksforgeeks.org/img-practice/banner/other_benefits/lifetime.png"
                  />
                  <p class="font-weight-bold mt-2 sofia-pro benefitsFont">
                    Lifetime Access To The Course
                  </p>
                </div>
                <div class="col-lg-4 col-6 mx-auto benefitsMargin mx-auto">
                  <img
                    alt=""
                    class="img-fluid"
                    src="https://media.geeksforgeeks.org/img-practice/banner/other_benefits/job_portal.png"
                  />
                  <p class="font-weight-bold mt-2 sofia-pro benefitsFont">
                    Access to GeeksforGeeks Job Portal
                  </p>
                </div>
                <div class="col-lg-4 col-6 mx-auto benefitsMargin mx-auto">
                  <img
                    alt=""
                    class="img-fluid"
                    src="https://media.geeksforgeeks.org/img-practice/banner/other_benefits/learning.png"
                  />
                  <p class="font-weight-bold mt-2 sofia-pro benefitsFont">
                    Track-based Learning
                  </p>
                </div>
                <div class="col-lg-4 col-6 mx-auto benefitsMargin mx-auto">
                  <img
                    alt=""
                    class="img-fluid"
                    src="https://media.geeksforgeeks.org/img-practice/banner/other_benefits/quiz_learning.png"
                  />
                  <p class="font-weight-bold mt-2 sofia-pro benefitsFont">
                    Quiz &amp; Theory based Learning
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="courseContent">
            <div class="container">
              <div class="col-md-12 mb-5">
                <h2 class="font-weight-bold sofia-pro">Course Content</h2>
              </div>
              <div class="mx-auto col-md-10">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="row alignContentIndex">
                      <div class="col-2 text-success d-block d-sm-none text-left sofia-pro">
                        <h2>01</h2>
                      </div>
                      <div class="col-1 text-success d-none d-sm-block text-left sofia-pro">
                        <h2>01</h2>
                      </div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Introduction to React
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Introduction to React
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2 d-block d-sm-none"></div>
                      <div class="col-1 d-none d-sm-block text-left"></div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Introduction to React</li>
                            <li>Introduction to JSX</li>
                            <li>Introduction to Babel, ES and npm</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Introduction to React</li>
                            <li>Introduction to JSX</li>
                            <li>Introduction to Babel, ES and npm</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row alignContentIndex">
                      <div class="col-2 text-success d-block d-sm-none text-left sofia-pro">
                        <h2>02</h2>
                      </div>
                      <div class="col-1 text-success d-none d-sm-block text-left sofia-pro">
                        <h2>02</h2>
                      </div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Components and Props
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Components and Props
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2 d-block d-sm-none"></div>
                      <div class="col-1 d-none d-sm-block text-left"></div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Components</li>
                            <li>Functional components and Props</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Components</li>
                            <li>Functional components and Props</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row alignContentIndex">
                      <div class="col-2 text-success d-block d-sm-none text-left sofia-pro">
                        <h2>03</h2>
                      </div>
                      <div class="col-1 text-success d-none d-sm-block text-left sofia-pro">
                        <h2>03</h2>
                      </div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          React Hooks
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          React Hooks
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2 d-block d-sm-none"></div>
                      <div class="col-1 d-none d-sm-block text-left"></div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Hooks</li>
                            <li>useState</li>
                            <li>useEffect</li>
                            <li>useContext</li>
                            <li>useReducer</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Hooks</li>
                            <li>useState</li>
                            <li>useEffect</li>
                            <li>useContext</li>
                            <li>useReducer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row alignContentIndex">
                      <div class="col-2 text-success d-block d-sm-none text-left sofia-pro">
                        <h2>04</h2>
                      </div>
                      <div class="col-1 text-success d-none d-sm-block text-left sofia-pro">
                        <h2>04</h2>
                      </div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Lists and Keys
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="h5 text-left font-weight-bold sofia-pro contentHeading">
                          Lists and Keys
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2 d-block d-sm-none"></div>
                      <div class="col-1 d-none d-sm-block text-left"></div>
                      <div class="col-10 d-block d-sm-none">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Introduction to Lists</li>
                            <li>Introduction to Keys</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-11 d-none d-sm-block">
                        <div class="text-left text-muted urw-din content-description">
                          <ul>
                            <li>Introduction to Lists</li>
                            <li>Introduction to Keys</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="collapse" id="contentsExpanded">
                <div class="mx-auto col-md-10">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="row alignContentIndex">
                        <div class="col-2 text-success d-block d-sm-none text-left">
                          <h2>05</h2>
                        </div>
                        <div class="col-1 text-success d-none d-sm-block text-left">
                          <h2>05</h2>
                        </div>
                        <div class="col-10 d-block d-sm-none">
                          <div class="h5 text-left font-weight-bold sofia-pro">
                            Updating Objects in State
                          </div>
                        </div>
                        <div class="col-11 d-none d-sm-block">
                          <div class="h5 text-left font-weight-bold sofia-pro">
                            Updating Objects in State
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-2 d-block d-sm-none"></div>
                        <div class="col-1 d-none d-sm-block text-left"></div>
                        <div class="col-10 d-block d-sm-none">
                          <div class="text-left text-muted urw-din">
                            <ul>
                              <li>Updating Objects in State</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-11 d-none d-sm-block">
                          <div class="text-left text-muted urw-din">
                            <ul>
                              <li>Updating Objects in State</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="row alignContentIndex">
                        <div class="col-2 text-success d-block d-sm-none text-left">
                          <h2>06</h2>
                        </div>
                        <div class="col-1 text-success d-none d-sm-block text-left">
                          <h2>06</h2>
                        </div>
                        <div class="col-10 d-block d-sm-none">
                          <div class="h5 text-left font-weight-bold sofia-pro">
                            Updating Arrays in State
                          </div>
                        </div>
                        <div class="col-11 d-none d-sm-block">
                          <div class="h5 text-left font-weight-bold sofia-pro">
                            Updating Arrays in State
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-2 d-block d-sm-none"></div>
                        <div class="col-1 d-none d-sm-block text-left"></div>
                        <div class="col-10 d-block d-sm-none">
                          <div class="text-left text-muted urw-din">
                            <ul>
                              <li>Updating Arrays in State</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-11 d-none d-sm-block">
                          <div class="text-left text-muted urw-din">
                            <ul>
                              <li>Updating Arrays in State</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto col-md-10">
                <button
                  class="btn btn-light col-md-12 text-success"
                  type="button"
                  data-toggle="collapse"
                  data-target="#contentsExpanded"
                  aria-expanded="false"
                  aria-controls="contentsExpanded"
                >
                  Show More
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="angle-down"
                    class="svg-inline--fa fa-angle-down fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mx-auto col-md-10 mt-4">
              <a
                href="https://practice.geeksforgeeks.org/courses/fork-react?loginMode=1"
                class="btn btn-success col-12 col-sm-3 sofia-pro login-modal-btn"
              >
                Login to view detailed syllabus
              </a>
            </div>
          </section>
          <div></div>
        </div>
        <div class="col-12 pl-0 pr-0">
          <div></div>
        </div>
        <div class="col-md-12 batchSection">
          <div class="mb-5">
            <div id="onlineCourseImage">
              <img
                class="img-fluid d-none d-sm-block mx-auto"
                src="https://media.geeksforgeeks.org/img-practice/Group5339-1618471344.svg"
                alt="Unable to load"
              />{" "}
              <img
                class="img-fluid d-sm-none d-block mx-auto"
                src="https://media.geeksforgeeks.org/img-practice/Group5443-1620806697.svg"
                alt="Unable to load"
              />
              <div class="centered col-9">
                <p class="text-success font-weight-bold pricingHeader pb-0 mb-0">
                  Pricing
                </p>
                <p class="mb-0 price pt-0">$ 0</p>
                <div></div>
                <div class="col-9 col-sm-5 mx-auto onlineCourseButton">
                  <a
                    href="https://practice.geeksforgeeks.org/courses/fork-react?loginMode=625"
                    class="btn btn-success login-modal-btn btn-lg mt-3 w-100 sofia-pro"
                  >
                    Login to Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 pl-0 pr-0">
          <section id="faq">
            <div class="jumbotron">
              <p class="font-weight-bold d-sm-none d-block mb-5 pl-0 pr-0 h4 sofia-pro">
                Frequently Asked Questions
              </p>
              <h2 class="font-weight-bold d-none d-sm-block mb-5 pl-0 pr-0">
                Frequently Asked Questions
              </h2>
              <div class="col-md-9 mx-auto">
                <div class="accordion" id="accordionExample">
                  <div
                    id="name0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#id0"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="card mb-3"
                  >
                    <div class="card-header" id="headingOne">
                      <div class="row">
                        <h5 class="col-3 col-lg-1 text-success font-weight-bold sofia-pro my-auto">
                          01.
                        </h5>
                        <div class="text-left sofia-pro font-weight-bold col-7 col-lg-10 pl-0 my-auto">
                          Is there any number to contact for any query?
                        </div>
                        <div class="col-2 col-lg-1">
                          <img
                            id="0"
                            class="downArrow"
                            src="https://media.geeksforgeeks.org/img-practice/Group5427-1623404234.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="id0" class="collapse" aria-labelledby="headingOne">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9 col-lg-11 ml-auto pl-0">
                            <div class="text-left urw-din">
                              <p>
                                You may call us on our toll-free number: 1800
                                258 4458 or Drop us an email at
                                courses@geeksforgeeks.org
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="name1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#id1"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="card mb-3"
                  >
                    <div class="card-header" id="headingOne">
                      <div class="row">
                        <h5 class="col-3 col-lg-1 text-success font-weight-bold sofia-pro my-auto">
                          02.
                        </h5>
                        <div class="text-left sofia-pro font-weight-bold col-7 col-lg-10 pl-0 my-auto">
                          How can I register for this course?
                        </div>
                        <div class="col-2 col-lg-1">
                          <img
                            id="1"
                            class="downArrow"
                            src="https://media.geeksforgeeks.org/img-practice/Group5427-1623404234.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="id1" class="collapse" aria-labelledby="headingOne">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9 col-lg-11 ml-auto pl-0">
                            <div class="text-left urw-din">
                              <p>
                                Visit the given link to register for JavaScript
                                course&nbsp;
                                <a href="https://practice.geeksforgeeks.org/courses/fork-javascript">
                                  https://practice.geeksforgeeks.org/courses/fork-javascript
                                </a>
                                . You need to be
                                <a href="https://auth.geeksforgeeks.org/">
                                  &nbsp;logged in
                                </a>
                                &nbsp;to register.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="name2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#id2"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="card mb-3"
                  >
                    <div class="card-header" id="headingOne">
                      <div class="row">
                        <h5 class="col-3 col-lg-1 text-success font-weight-bold sofia-pro my-auto">
                          03.
                        </h5>
                        <div class="text-left sofia-pro font-weight-bold col-7 col-lg-10 pl-0 my-auto">
                          Do I have to pay anything after registration?
                        </div>
                        <div class="col-2 col-lg-1">
                          <img
                            id="2"
                            class="downArrow"
                            src="https://media.geeksforgeeks.org/img-practice/Group5427-1623404234.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="id2" class="collapse" aria-labelledby="headingOne">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9 col-lg-11 ml-auto pl-0">
                            <div class="text-left urw-din">
                              <p>No, It is a free course.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="name3"
                    type="button"
                    data-toggle="collapse"
                    data-target="#id3"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="card mb-3"
                  >
                    <div class="card-header" id="headingOne">
                      <div class="row">
                        <h5 class="col-3 col-lg-1 text-success font-weight-bold sofia-pro my-auto">
                          04.
                        </h5>
                        <div class="text-left sofia-pro font-weight-bold col-7 col-lg-10 pl-0 my-auto">
                          Will the course content be available after the course
                          end date?
                        </div>
                        <div class="col-2 col-lg-1">
                          <img
                            id="3"
                            class="downArrow"
                            src="https://media.geeksforgeeks.org/img-practice/Group5427-1623404234.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="id3" class="collapse" aria-labelledby="headingOne">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9 col-lg-11 ml-auto pl-0">
                            <div class="text-left urw-din">
                              <p>
                                Course content comes with lifetime validity.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="name4"
                    type="button"
                    data-toggle="collapse"
                    data-target="#id4"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    class="card mb-3"
                  >
                    <div class="card-header" id="headingOne">
                      <div class="row">
                        <h5 class="col-3 col-lg-1 text-success font-weight-bold sofia-pro my-auto">
                          05.
                        </h5>
                        <div class="text-left sofia-pro font-weight-bold col-7 col-lg-10 pl-0 my-auto">
                          Is this a language-specific course?
                        </div>
                        <div class="col-2 col-lg-1">
                          <img
                            id="4"
                            class="downArrow"
                            src="https://media.geeksforgeeks.org/img-practice/Group5427-1623404234.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="id4" class="collapse" aria-labelledby="headingOne">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9 col-lg-11 ml-auto pl-0">
                            <div class="text-left urw-din">
                              <p>
                                Yes, the course is only in React. If you are
                                comfortable with basic JavaScript Syntax , you
                                are more than welcome to enroll in the course
                                .&nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
