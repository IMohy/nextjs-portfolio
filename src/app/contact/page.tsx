"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import { Modal } from "antd";
import BannerLayout from "@/components/shared/BannerLayout";
import Footer from "@/components/Footer";
import { CONTACTS } from "@/constants/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '');
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '');
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (
      values: { name: string; email: string; message: string },
      { resetForm }: { resetForm: () => void }
    ) => {
      setIsLoading(true);
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        );
        setIsSuccess(true);
        resetForm();
      } catch (error) {
        setIsSuccess(false);
        console.error('Email error:', error);
      } finally {
        setIsLoading(false);
        setIsOpen(true);
      }
    },
  });

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.COUNTRY}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.CITY}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.COMPANY}</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">{CONTACTS.EMAIL}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">{CONTACTS.PHONE}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <a href={CONTACTS.LINKEDIN} className="text-LightGray text-sm">
                  {CONTACTS.USER}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            target="_blank"
            rel="noreferrer"
            href="mailto: mohy.web@email.com"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/imohy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/imohy/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className={`input_stylings ${formik.touched.name && formik.errors.name ? "border-red-500" : ""}`}
                    placeholder="Name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="email"
                    className={`input_stylings ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className={`input_stylings ${
                      formik.touched.message && formik.errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Message"
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.message}</div>
                  )}
                </div>
              </div>

              <div className="my-4">
                <button type="submit" className="button disabled:opacity-50" disabled={isLoading}>
                  {isLoading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={true}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className={`font-bold text-2xl ${isSuccess ? "text-Green" : "text-red-500"}`}>
            {isSuccess ? "Message sent successfully!" : "Failed to send message. Please try again."}
          </h1>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
