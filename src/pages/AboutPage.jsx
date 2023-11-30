import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/backpack.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Backpacks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/tent.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Tents</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/sleepingbag.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sleeping Bags</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/Sleepingpads.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sleeping pads</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/camp.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Camp kitchen</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/campfurniture.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Camp furniture</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/camphydration.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Camp hydration</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/lighting.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Lighting</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/electronics.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/electronics.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gadgets & Gear</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/hiking.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Hiking footwear</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/hikingclothing.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Hiking Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/hikingclothing.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Heal & safety</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/overlanding.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Kids' Camping gear</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/overlanding.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Overlanding essentials</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top object-fit-cover" src="./categories/overlanding.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Camp & Hike deals</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="./assets/live.jpg" />
          <div class="container card-img-overlay mt-5">
            <h3 class="card-title text-white text-center">Plan your next adventure</h3>
            <p class="text-white text-center ">Gear up for wild views, cozy campfires and more with advice and inspiration.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage