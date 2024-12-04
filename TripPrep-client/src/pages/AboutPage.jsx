import Header from "../components/Header";
import React from "react";


function AboutPage() {

  return (
    <>
      <Header>About TripPrep</Header>
      <p>
        TripPrep is an app based on my personal travel prep system,
        that allows me to keep track of everything that happens before my trip,
        so that I can leave the house relaxed, knowing that everything is done and I forgot nothing.
      </p>
      <br />
      <p>
        I am using three sheets of paper:
        One for everything that needs to be done before the trip,
        one for everything I need to buy,
        and one for all the things I am going to pack.
      </p>
      <br />
      <p>
        A digital version of this system is not only convenient because you can add things on the go,
        it also adds more possibilities:
        A packing mode, that allows you to simply check off the packing list items while packing.
        The option to share your packing list with other users and to look at others' packing lists for inspiration.
      </p>
      <br />
      <p>
        Your list will only be shared publicly after you marked it as "Everything is packed!" and set your trip to public.
        And then only your To Pack list will be seen by others, nobody will see your To Do and To Buy lists.
      </p>
      <br />
      <p>
        Right now this app is still under construction.
        If something is not working perfectly, I am probably just working on it.
        I recommend using it on desktop in Chrome.
      </p>
    </>
  );
}


export default AboutPage;
