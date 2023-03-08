import "./newhome.css"
import React from "react"
import Header from "/Users/erinlynch/new-forest-escapes-1/src/Components/header/header"
import Footer from "/Users/erinlynch/new-forest-escapes-1/src/Components/footer/footer"
import Slideshow from "/Users/erinlynch/new-forest-escapes-1/src/Components/slideshow/slideshow"

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="slideshow">
        <Slideshow />
      </div>
      <form>
        <div className="div">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="input"
            placeholder=" "
            required
          />
          <label htmlFor="floating_email" className="label">
            Email address
          </label>
        </div>
        <div className="div">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="input"
            placeholder=" "
            required
          />
          <label htmlFor="floating_password" className="label">
            Password
          </label>
        </div>
        <div className="div">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="input"
            placeholder=" "
            required
          />
          <label htmlFor="floating_repeat_password" className="label">
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="div">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="floating_first_name" className="label">
              First name
            </label>
          </div>
          <div className="div">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="floating_last_name" className="label">
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="floating_phone" className="label">
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="floating_company" className="Label">
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default App
