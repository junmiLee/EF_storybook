import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./stories/components/Label";
import DefaultTextField from "./stories/components/DefaultTextField";
import TagList from "./stories/components/TagList";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <div className="bg-primary w-screen h-screen">
      <TagList
        tagList={["All", "React", "TypeScript"]}
        onTagClick={console.log}
      ></TagList>
    </div>

    // <div className=" text-mono200 w-[400px] p-20">
    //   <Label htmlFor="email">이메일</Label>
    //   <DefaultTextField
    //     id="email"
    //     placeholder="이메일을 입력하세요"
    //     value=""
    //     errorMessage="이메일을 확인해주세요"
    //     isError={isError}
    //     iconAlt="delete"
    //     iconPath="/icons/ic-delete-dark.svg"
    //     onChange={() => {}}
    //     onIconClick={() => {}}
    //   />

    //   <div className=" my-6">
    //     <Label htmlFor="address">주소</Label>
    //     <DefaultTextField
    //       id="address"
    //       placeholder="주소을 입력하세요"
    //       value=""
    //       errorMessage="주소을 확인해주세요"
    //       isError={isError}
    //       iconAlt="delete"
    //       iconPath="/icons/ic-delete-dark.svg"
    //       onChange={() => {}}
    //       onIconClick={() => {}}
    //     />
    //   </div>
    //   <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
    // </div>
  );
}

export default App;
