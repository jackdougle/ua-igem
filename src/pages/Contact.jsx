import AnimWrapper from "../Transition";

function Contact() {
    return(
      <AnimWrapper>
      <div className="flex flex-col ml-6 mr-12 my-2 text-[20px] font-sans font-light">
        <p className="text-[40px] md:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-extrabold font-mono">Contact Us</p>
        <div id="apply">
        <p className="text-gray-800 text-2xl translate-x-1 mt-2 font-extrabold font-mono">Apply for iGEM</p>
        <p className="mx-2 mt-1">If you'd like to apply to join our 2025-2026 iGEM team, fill out the form below and we'll get back to you as soon as we can. Thank you for your interest!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScolvXLC8vckyhxSAvxpsRAryHnHaht-QXe2qmzWFnOUHVJmw/viewform?usp=dialog" className="font-mono font-bold mx-2 mb-2 text-lg text-sky-500 hover:text-sky-300 transition duration-300">Application form &rarr;</a>
        </div>
        <div className="my-5">
        <p id="donate" className="text-gray-800 text-2xl translate-x-1 font-extrabold font-mono">Personal Donations</p>
        <p className="mx-2 mt-1">Your contribution (no matter how large) helps fund our lab work, public engagement, travel, and competition fees. If you'd like to donate, you can do with the link below. Thank you for your support!</p>
        <a href="https://google.com" className="font-mono font-bold mx-2 text-lg text-sky-500 hover:text-sky-300 transition duration-300">Donate here &rarr;</a>
        <p id="donate" className="text-gray-800 text-2xl translate-x-1 font-extrabold font-mono mt-5">Sponsors</p>
        <p className="mx-2 mt-1">We’re eager to partner with organizations aligned with our mission. Sponsor support helps fund research, travel, and equipment costs. For any inquiries, please send us an email!</p>
        </div>
        <p className="text-gray-800 text-2xl translate-x-1 font-extrabold font-mono">Reach out with any questions</p>
        <p className="mx-2 mt-1">UA iGEM is always looking for suggestions, advice, and new ideas to consider. If you have any ideas on how we can improve we'd love to talk. Also, if you have any questions regarding donations, the application process, or our current research, don't hesitate to reach out.</p>
        <p className="m-2 mt-2">Our email: <strong className="text-sky-500 font-mono font-bold text-lg hover:text-sky-300 transition duration-300">uazigem@gmail.com</strong></p><br />
        <div className="grid place-items-center -mt-6 mb-4 font-sans font-normal">
        <form className="flex flex-col gap-3 w-17/20 text-black text-[20px]" action="https://formsubmit.co/uazigem@gmail.com" method="POST">
          <strong className="font-mono font-normal text-[16px]">Name</strong> <input type="text" name="name" className="border-2 border-black rounded-lg p-3 w-full -mt-2 bg-white" required />
          <strong className="font-mono font-normal text-[16px]">Email</strong> <input type="email" name="email" className="border-2 border-black rounded-lg p-3 -mt-2 bg-white" required />
          <strong className="font-mono font-normal text-[16px]">Message</strong> <textarea type="text" name="message" className="border-2 border-black rounded-lg p-3 min-h-75 -mt-2 bg-white" required />
          <input type="submit" value="Send" className="text-white font-bold bg-gradient-to-tl from-blue-300 to-green-400 rounded-lg p-3 hover:scale-102 transition duration-300 text-xl mt-1 font-mono" />
        </form>
       </div>
      </div>
      </AnimWrapper>
    )
}

export default Contact;