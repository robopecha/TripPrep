import Header from "../components/Header";
import Button from "../components/Button";
import React from "react";
import { Link } from "react-router-dom";


function AboutPage() {

  return (
    <>
      <Header>About TripPrep</Header>
      <p className='mb-12'>
        TripPrep is an app based on my personal pen & paper travel prep system,<br />
        that allows me to keep track of everything that happens before my trip.<br />
        This way I can leave the house relaxed, knowing that everything is done and I forgot nothing.
      </p>
      <p className='mb-12'>
        I am using three sheets of paper:<br />
        <span className='bg-yellow-200'>One for everything that needs to be done before the trip,<br />
        one for everything I need to buy,<br />
        and one for all the things I am going to pack.</span>
      </p>
      <p className='mb-12'>
        A digital version of this system is not only convenient, because you can add things on the go,<br />
        it also adds more possibilities:<br />
        <span className='bg-green-200'>A packing mode that allows you to simply check off the packing list items while packing.</span><br />
        And the option to share your packing list with other users and to look at others' packing lists for inspiration.
      </p>
      <p className='mb-12'>
        <span className='bg-red-200'>Your list will only be shared publicly after you mark it as "Everything is packed!" and set your trip to public.<br />
        Only your To Pack list will be seen by others. Nobody will see your To Do and To Buy lists.</span>
      </p>
      <div>
        <p className='xl:inline-block'>
          I am still improving this app.<br />
          If something is not working perfectly, I am probably just working on it.<br />
          I recommend using it in Chrome on desktop.
        </p>
        <Link to={'/new-trip'}>
          <Button className='blue-button xl:inline-block md:ml-0.5 xl:ml-10 text-5xl p-8 !pt-4 my-10 xl:-mt-10 xl:mb-0 !border-4 -rotate-2 hover:rotate-0'>
            Start here
          </Button>
        </Link>
      </div>
    </>
  );
}


export default AboutPage;
