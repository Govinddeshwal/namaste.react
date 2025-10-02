const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2"> Contact us </h1>
      <form>
        <input
          type="text"
          className="border border-black m-1 p-1"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-1 p-1"
          placeholder="message"
        />
        <button className="bg-gray-200 cursor-pointer m-1 p-1 rounded-lg hover:bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
