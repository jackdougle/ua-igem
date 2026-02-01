import AnimWrapper from "../Transition";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

function Home() {
    return(
        <AnimWrapper>
          <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
            <p className="text-[40px] sm:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -mt-2">iGEM @ UArizona</p>
            <p className="text-gray-800 text-2xl translate-x-1">The new home of synthetic biology endeavors at UA!</p>
          </div>
          <div className="relative w-full h-[700px] mt-8 mb-10 xs:hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <img src="/mole.jpg" className="w-full h-[700px] object-cover" alt="Cell Placeholder Image" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div className="font-sans flex flex-col justify-center text-[21px] px-8 mr-6">
            <div className="flex flex-col m-4 font-light">
              <p className="text-2xl font-bold font-mono mb-2">What do we do?</p>
              <p>UA iGEM focuses on spreading interest about synthetic biology through hands-on projects. We are a group of undergraduate students from various majors who are passionate about emerging biology and its potential to solve real-world problems. Our primary way of creating impact is through facilitating the construction of teams to compete in international synthetic biology competitions, primarily <strong>iGEM</strong>.</p>
              <Link to="/projects" className="font-mono font-bold mt-2 text-lg text-sky-500 hover:text-sky-300 transition duration-300">Our work &rarr;</Link>
            </div>
            <div className="flex flex-col m-4 font-light">
              <p className="text-2xl font-bold font-mono mb-2">What is iGEM?</p>
              <p>The iGEM (International Genetically Engineered Machine) competition is a prestigious global synthetic biology contest that challenges students to design and build biological systems using standard, interchangeable parts called BioBricks. Teams from around the world work on innovative projects that address real-world issues, ranging from environmental sustainability to healthcare.</p>
              <p className="mt-2">The iGEM competition provides a platform for students to collaborate, learn, and showcase their skills in synthetic biology. It fosters creativity, critical thinking, and teamwork, allowing participants to contribute to the advancement of synthetic biology and its applications.</p>
              <Link to="https://competition.igem.org/" className="font-mono font-bold mt-2 text-lg text-sky-500 hover:text-sky-300 transition duration-300">iGEM's Website &rarr;</Link>
            </div>
            <div className="flex flex-col m-4 font-light">
              <p className="text-2xl font-bold font-mono mb-2">How can you help?</p>
              <p>We are always looking for support and mentorship from the community. If you are interested in helping us with our projects, please reach out to us and apply. If you're not interested in fully joining the team but would like to get involved in a smaller capacity, we'd love to get an email from you!</p>
              <HashLink smooth to="/contact#apply" className="font-mono font-bold mt-2 text-lg text text-sky-500 hover:text-sky-300 transition duration-300">Apply &rarr;</HashLink>
              <p className="mt-2">Additionally, if you would like to support our team financially, we accept donations to help cover the costs of materials, equipment, and travel for the competition.</p>
              <HashLink smooth to="/contact#donate" className="font-mono font-bold mt-2 text-lg text text-sky-500 hover:text-sky-300 transition duration-300 mb-4">Donate &rarr;</HashLink>
            </div>
          </div>
        </AnimWrapper>
    )
}

export default Home;