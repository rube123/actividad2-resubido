import './App.css';
import Testimonial from './components/Testiomonial'

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <h1>Testimonials</h1>
        <Testimonial
          name='Daniel Bostian'
          country='Sweden'
          img='daniel'
          job='Software Engineer'
          corporation='Spotify'
          testimonial='Working at Spotify has been an incredible experience. The company`s commitment to innovation and the quality of its engineering teams is unmatched. I am proud to be a part of such a talented and diverse group of individuals. Spotify truly values its employees and provides a supportive and inclusive work environment. I have had the opportunity to work on cutting-edge projects and collaborate with some of the brightest minds in the industry. I highly recommend Spotify as a place to work for any software engineer.' />
        <Testimonial
          name='Laura Wang'
          country='Singapore'
          img='laura'
          job='Software Engineer'
          corporation='Amazon'
          testimonial='Working at Amazon has been an amazing experience. The company`s focus on customer obsession and continuous innovation is truly inspiring. As a software engineer, I have had the opportunity to work on challenging projects and collaborate with talented individuals from diverse backgrounds. Amazon`s culture of ownership and high standards has helped me grow both professionally and personally. I am proud to be a part of such a dynamic and customer-centric organization. I highly recommend Amazon as a place to work for any software engineer.' />
        <Testimonial
          name='Jerry Chima'
          country='Nigeria'
          img='jerry'
          job='Software Engineer'
          corporation='ChatDesk'
          testimonial='Working at ChatDesk has been a rewarding experience. The company`s dedication to providing innovative solutions for customer support is impressive. As a software engineer, I have had the opportunity to work on exciting projects and collaborate with a talented team. ChatDesk`s supportive and inclusive work environment has allowed me to grow both personally and professionally. I highly recommend ChatDesk as a place to work for any software engineer.' />
      </div>
    </div>
  );
}

export default App;
