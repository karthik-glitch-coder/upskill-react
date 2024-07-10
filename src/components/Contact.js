const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl m-4 p-2 text-center font-bold">Contact Us</h1>
      <form action="">
        <input type="text" placeholder="name" className="border border-black p-2 m-2 " />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button  className="border border-black p-2 m-2 bg-slate-200 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
