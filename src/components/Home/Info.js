import React from "react";
import Title from "../Globals/Title";
import { Link } from "gatsby";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              We love the earth. We live to enjoy the small instances that We feel in our daily routines. We enjoy taking a break in the morning and drink our coffee. We love watching the sun rise with our water melon juice in our hands and sip our healthy green tea when the sun goes down. We live each moment everyday like it's our last and sip our fresh coffee beans from Escobar himself and greetings from Argentina. 
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
