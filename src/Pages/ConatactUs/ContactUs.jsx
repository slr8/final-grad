import Header from '../../Components/Header/Header';
import css from './contactus.module.css'

const ContactUs = () => {
    return (
        <div className='bg-[#e8f0fe] -z-20 h-screen'>
            <img src="/Images/ContactUs/WhatsApp Image 2024-01-10 at 22.38 1.png" className='-z-10 absolute left-[30rem] top-4 w-[600px]' />
            <div classNameName={css.contact + 'bg-[#0059D5] bg-opacity-50 h-full flex items-center justify-center text-white p-8'}>
                <div className={css.container}>
                    <Header title={'Contact us'} />
                    <div className={css['content-wrapper']}>
                        <div className={css["contact-info"]}>
                            <h3 className={css['contact-info h3']}> Getting in touch is easy! </h3>
                            <p className={css['contact-info p']}><i className={css['contact-info i']}></i> +123 456 789</p>
                            <p className={css['contact-info p']}><i className={css['contact-info i']}></i> info@example.com</p>
                            <p className={css['contact-info p']}> <i className={css['contact-info i']}></i>123 Street , city ,Country</p>
                            <p className={css['contact-info p'] + ' mt-16'}>Your feedback is greatly appreciated!
                                Please feel free to get in touch with us if you have any questions or comments. Keeping up with our most
                                recent news and updates is also possible by following us on social media.
                            </p>
                        </div>
                        <div className={css['contact-form']}>
                            <form action="">
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-none bg-white">
                                        <legend className={css.legend + "text-[#0059D5] "}>Full Name</legend>
                                        <input type="text" className={css.input + ' focus:outline-none pl-2'} />
                                    </fieldset>
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + "text-[#0059D5] "}> Email</legend>
                                        <input type="email" name="" id="" placeholder="" className={css.input + ' focus:outline-none pl-2'} />
                                    </fieldset>
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + "text-[#0059D5] "}> Phone-Num</legend>
                                        <input type="email" name="" id="" placeholder="" className={css.input + ' focus:outline-none pl-2'} />
                                    </fieldset>
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + "text-[#0059D5]"}> Comment</legend>
                                        <textarea name="" id="" cols="2" rows="2" className={css.textarea + ' focus:outline-none pl-2 text-[#0059D5]'}></textarea>
                                    </fieldset>
                                </div>
                                <button type="submit" className={css.button + ' bg-[#0060E4]'}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className={css["social-icons"]}>
                        <a href="#" className={css["icons"]}><i className='bx bxl-github'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-twitter'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-facebook-circle'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ContactUs;