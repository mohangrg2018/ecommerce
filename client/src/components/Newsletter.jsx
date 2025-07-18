import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully");
    setEmail("");
  };
  return (
    <section className="container__width flex flex-col items-center gap-6 my-20 sm:my-30">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Subscribe now & get 20% off
      </h2>
      <p className="text-gray-400 text-center w-full sm:w-1/2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        unde itaque quia atque consectetur numquam ratione ducimus debitis
        tempora vero!
      </p>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="px-4 py-2 outline-none border border-gray-300"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-[#414141] hover:bg-black px-4 py-2 text-white cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
