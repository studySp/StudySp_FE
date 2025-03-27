import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import InputLayout from "@/components/modules/SettingModule/inputLayout";
import TextAreaLayout from "@/components/modules/SettingModule/textAreaLayout";
import SelectLayout from "@/components/modules/SettingModule/selectLayout";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { updateProfile } from "@/store/slices/auth";
import type { IUser } from "@/data/user";

const genders = [
  {
    label: "Chọn giới tính",
    items: [
      { value: "male", label: "Nam" },
      { value: "female", label: "Nữ" },
      { value: "noAnswer", label: "Không muốn trả lời" },
    ],
  },
];

function EditProfileSection() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: userInfo,
  });

  const onSubmit = (data: IUser) => {
    console.log("adasdasd", data);
    dispatch(updateProfile(data));
  };
  const methods = useForm({
    mode: "onChange",
    defaultValues: userInfo,
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-3 text-left font-title text-xl font-bold sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl">
          Hồ Sơ
        </h3>
        <div className="mb-4 grid grid-cols-4 gap-4">
          <InputLayout
            className="col-span-1"
            type="text"
            label="User Name"
            placeholder="Nhập tên của bạn"
            {...register("userName", { required: "Tên không được để trống" })}
          />

          {control && (
            <SelectLayout
              className="col-span-1"
              label="Giới tính"
              placeholder="Chọn giới tính"
              options={genders}
              name="gender"
              control={methods.control}
            />
          )}
          <Controller
            control={control}
            name="dayOfBirth"
            render={({ field }) => {
              const formatDateForInput = (dateString: string | undefined) => {
                if (!dateString) return "";
                const parts = dateString.split("/");
                if (parts.length === 3) {
                  return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
                }
                return dateString;
              };

              const handleDateChange = (
                e: React.ChangeEvent<HTMLInputElement>,
              ) => {
                const value = e.target.value;
                const parts = value.split("-");
                if (parts.length === 3) {
                  field.onChange(`${parts[2]}/${parts[1]}/${parts[0]}`);
                } else {
                  field.onChange(value);
                }
              };

              return (
                <InputLayout
                  label="Giới tính"
                  {...field}
                  type="date"
                  value={formatDateForInput(field.value)}
                  onChange={handleDateChange}
                  max={new Date().toISOString().split("T")[0]}
                />
              );
            }}
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <InputLayout
            className="col-span-1"
            type="email"
            label="Email"
            placeholder="Nhập địa chỉ email của bạn"
            {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ",
              },
            })}
          />
        </div>
        <Controller
          control={control}
          name="bio"
          render={({ field }) => (
            <TextAreaLayout
              label="Mô tả bản thân"
              className="pt-4"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <div className="mt-4 grid justify-items-end">
          <Button type="submit" haveOverlay>
            <span>Cập nhật</span>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default EditProfileSection;
