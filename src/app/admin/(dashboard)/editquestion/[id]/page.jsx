"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { API_URL } from "../../../../../../config/constants";

const EditQuestion = ({ params }) => {
  const router = useRouter();
  const [questions, setQuestions] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    if (!localStorage.donmarktoken) {
      router.push("/login");
    }
    axios
      .get(API_URL + "/question/" + params.id)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(questions);
  const { question,answer } = questions;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(questions);

    await axios
      .put(API_URL + "/question/" + params.id, questions)
      .then((res) => {
        Swal.fire("สำเร็จ!", "แก้ไขคำถามแล้ว!", "success");
        router.push("/admin/adminquestion");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="flex flex-col justify-start px-5">
      <article className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <aside className="mx-auto w-full max-w-lg">
          <p className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          คำถามที่พบบ่อย
          </p>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
          >
            <p className="text-center text-lg font-medium">คำถาม</p>

            <div>
              <label htmlFor="question" className="sr-only">
              question
              </label>

              <div className="relative">
                <textarea
                  onChange={(e) => {
                    setQuestions((questions) => ({
                      ...questions,
                      question: e.target.value,
                    }));
                  }}
                  value={question}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="คำถาม"
                />
              </div>
            </div>

            <div>
              <label htmlFor="answer" className="sr-only">
              answer
              </label>

              <div className="relative">
                <textarea
                  onChange={(e) => {
                    setQuestions((questions) => ({
                      ...questions,
                      answer: e.target.value,
                    }));
                  }}
                  value={answer}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="คำตอบ"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              แก้ไขคำถาม
            </button>
          </form>
        </aside>
      </article>
    </section>
  );
};

export default EditQuestion;
