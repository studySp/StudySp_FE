"use client";
import React from "react";
import { subjects } from "@/data/study-area";
import { useRouter } from "next-nprogress-bar";
import axios from "axios";
import { useAppSelector } from "@/hooks/redux-toolkit";
const CreateRoomModule = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    subject: "",
    isPrivate: false,
    camera: true,
    microphone: true,
    hasPassword: false,
    password: "",
  });
  const { userInfo } = useAppSelector((state) => state.auth);
  console.log(userInfo);

  const router = useRouter();
  const handleCreateRoom = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:6060/api/v1/room", {
        title: formData.title,
        author: userInfo.user._id,
        tag: formData.subject,
        isPrivate: formData.isPrivate,
        allowCamera: formData.camera,
        allowMic: formData.microphone,
        hasPassword: formData.hasPassword,
        password: formData.password,
      })
      .then((res) => {
        console.log(res.data);
        router.push(`/study-room/${res.data.room._id}`);
      })
      .catch((err) => {
        console.log(err.response.message);
        alert(err.response.data.message);
      });
  };

  return (
    <section className="w-full p-5">
      <form className="mx-auto mt-10 max-w-md">
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=""
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
            Tiêu đề
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Danh mục
          </label>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          >
            {subjects.map((subject, index) => (
              <option key={index} value={subject.subject}>
                {subject.subject}
              </option>
            ))}
          </select>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              checked={formData.isPrivate}
              onChange={(e) =>
                setFormData({ ...formData, isPrivate: e.target.checked })
              }
            />
            <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Chế độ riêng tư
            </span>
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              checked={formData.camera}
              onChange={(e) =>
                setFormData({ ...formData, camera: e.target.checked })
              }
            />
            <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Camera
            </span>
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              checked={formData.microphone}
              onChange={(e) =>
                setFormData({ ...formData, microphone: e.target.checked })
              }
            />

            <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Microphone
            </span>
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              checked={formData.hasPassword}
              onChange={(e) =>
                setFormData({ ...formData, hasPassword: e.target.checked })
              }
            />
            <div className="peer relative h-6 w-11 rounded-full bg-blue-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-blue-300 after:bg-blue-600 after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </span>
          </label>
        </div>
        {formData.hasPassword && (
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="password"
              name="pass"
              id="pass"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
              Password
            </label>
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={handleCreateRoom}
        >
          Tạo Phòng
        </button>
      </form>
    </section>
  );
};

export default CreateRoomModule;
