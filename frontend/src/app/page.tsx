"use client"; 
import Image from "next/image";
import Comment from "@/components/core/Comment";
import { useState } from "react";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import Description from "@/components/core/description";


export default function Home() {
  const [transcripts, setTranscripts] = useState([])
  const deleteComment = ()=> {
    console.log("Hello world")

  }

  const addComment=() =>{

  }

  const updateComment = () =>{

  }

  const addFileToComment = () =>{

  }
  return (
    <main className="bg-black ">
      <Navbar />
    <Comment comment="hello you ae diewek dnke" attachFile={addFileToComment} editComment={updateComment} deleteComment={deleteComment}/>

    <Description />
    </main>
  );
}
