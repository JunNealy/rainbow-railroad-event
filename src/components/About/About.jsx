import CallToAction from '../CTA/CallToAction';
import './About.scss';

const About = () => {
  return (
    <article id="about" className="about">
      <h2 className="about__title">About the Cause</h2>
      <p className="about__paragraph">
        Hi! We're a resettlement team working with Rainbow Railroad to help
        resettle Julie Red-Collins, a Ugandan trans woman fleeing to Canada
        later this year. Learn more about rainbow railroad at
        <a href="https://www.rainbowrailroad.org/">
          https://www.rainbowrailroad.org/
        </a>{' '}
        and Julie's case at
        <a href="https://donate.rainbowrailroad.org/team/515983.">
          https://donate.rainbowrailroad.org/team/515983.
        </a>
      </p>
      <p className="about__paragraph">
        On August 18th and September 15th, we will be working with Storm Crow
        Manor (https://www.stormcrow.com/) to host a series of DnD one shots,
        with participants registering by paying an entry fee which will go
        towards Julie's fundraising goal. Storm Crow will also be mixing up a
        specialty cocktail just for our event and donating $1 per sale to
        Julie's case.
      </p>{' '}
      <p className="about__paragraph">
        If you’d like to sign up to play in one of our campaigns, click the link
        below to fill out your info. We’re asking for a $30 donation to Julie’s
        cause as an entry fee, but shareable appetizers will be provided at
        Storm Crow, so there will be no other costs associated.
      </p>
      <CallToAction />
    </article>
  );
};

export default About;
