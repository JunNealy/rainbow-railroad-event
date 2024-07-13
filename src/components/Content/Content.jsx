import About from '../About/About';
import EventList from '../Events/Events';
import './Content.scss';

const Content = () => {
  return (
    <main className="content">
      <h1 className="content__title"></h1>
      <About />
      <EventList />
    </main>
  );
};

export default Content;
