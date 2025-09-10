import React from 'react'
 import { toast } from 'react-toastify';
  // : React.FormEvent<HTMLFormElement>
const ContactForm = () => {
  const onSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement
     const formData = new FormData(form);
 
    formData.append("access_key", "1d1e8af5-18cb-42e4-9d46-8fc316b22895");
    
     try{
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
       
      toast.success("Form Submitted Successfully" , { style : { color : "#eee" ,  backgroundColor : "#17181a"}});
      form.reset()
    } else {
      toast.error("Error Submitting The Form" , { style : { color : "#eee" ,  backgroundColor : "#17181a"} } );
     } 
     }catch{
            toast.error("Network Error" , { style : { color : "#eee" ,  backgroundColor : "#17181a"} } );

     }
    };
  return (
      <form 
  onSubmit={onSubmit} 
  className=" mx:10 md:mx-auto flex flex-col gap-6 bg-white/5 backdrop-blur-md   md:rounded-2xl p-10 shadow-lg text-left"
>
  {/* First & Last Name in one row */}
  <div className="flex gap-5 flex-col md:flex-row">
    <div className="flex flex-col w-full md:w-1/2">
      <label htmlFor="firstName" className="text-base text-white/80">
        First Name
      </label>
      <input
        required
        name="firstname"
        type="text"
        id="firstName"
        placeholder="John"
        className="w-full p-2 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 
                   focus:border-[#69c0ef] focus:ring-0 outline-none transition-colors"
      />
    </div>

    <div className="flex w-full md:w-1/2 flex-col ">
      <label htmlFor="lastName" className="text-base text-white/80">
        Last Name
      </label>
      <input
        required
        name="lastname"
        type="text"
        id="lastName"
        placeholder="Doe"
        className="w-full p-2 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 
        focus:border-[#69c0ef] focus:ring-0 outline-none transition-colors"
      />
    </div>
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label htmlFor="email" className="text-base text-white/80">
      Email
    </label>
    <input
      required
      type="email"
      id="email"
      name="email"
      placeholder="you@example.com"
      className="w-full p-2 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 
                 focus:border-[#69c0ef] focus:ring-0 outline-none transition-colors"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col">
    <label htmlFor="message" className="text-base text-white/80">
      Message
    </label>
    <textarea
      required
      name="message"
      id="message"
      rows={5}
      placeholder="Write your message..."
      className="resize-none w-full p-2 bg-transparent border-b-2 border-white/30 text-white placeholder-white/50 
      focus:border-[#69c0ef] focus:ring-0 outline-none transition-colors"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    
    className="mt-4 w-full py-3 rounded-xl bg-blue-400 hover:bg-[#69c0ef] transition-all duration-300 text-white font-semibold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Send A Message
  </button>
</form>
 
  )
}

export default ContactForm
