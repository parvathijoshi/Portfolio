const Contact = () => {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Let's Discuss Your Project</h2>
        <form className="mt-6">
          <input className="border border-gray-300 p-2 rounded-md w-1/3 m-2" type="text" placeholder="Full Name" />
          <input className="border border-gray-300 p-2 rounded-md w-1/3 m-2" type="email" placeholder="Your Email" />
          <input className="border border-gray-300 p-2 rounded-md w-1/3 m-2" type="text" placeholder="Budget" />
          <textarea className="border border-gray-300 p-2 rounded-md w-2/3 m-2" placeholder="Message"></textarea>
          <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-700">Submit</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  