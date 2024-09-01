import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { lawyerwritearticleRoute } from '../../utlis/APIRoutes';
import { useNavigate } from 'react-router-dom';

function Writearticle() {
  const navigate = useNavigate()
  const [article, setarticle] = useState({})
  const toastOptions = {
    position: "bottom-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handlechange = (e) =>{
      setarticle({ ...article, [e.target.name]: e.target.value });
  }
  const validform  =()=>{
    const {title,description} =  article;
    if(title === "")
    {
      toast.error("Title is empty please fill it with some words.", toastOptions);
      return false
    }
    if(description === "" )
    {
      toast.error("Article is empty please fill it with some words.", toastOptions);
      return false
    }
    return true
  }
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const {title,description} = article
    if(validform())
    {
      const headers = {
        'auth-token': localStorage.getItem('token')
      }
        const response = await axios.post(
        lawyerwritearticleRoute
          ,
          {
            title,description
      },
      {headers})
      if (response.data.status === false) {
        toast.error(response.data.error, toastOptions);
      } else {
        localStorage.setItem(
          "E-Court-Management-System",
          JSON.stringify(response.data.saveArticle)
          );
          navigate("/articles")
        } 
    }
  }
  return (
    <>
<div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Case Study</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Case Study</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content ">
    <div className="card card-primary ml-5 mr-5">
      <div className="card-header">
        <h3 className="card-title">Case Study</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body ml-5">
        <form onSubmit={(event)=>{handleSubmit(event)}}>
          <div className="">
            <div className="">
              <div className="form-group">
                <label>Write a Title</label>
                <input type="text" name='title' className="form-control " placeholder="Write a title" onChange={(e)=>{handlechange(e)}} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="form-group">
                <label>Write a Description</label>
                <textarea className="form-control" name='description' rows={6} placeholder="Write here" defaultValue={""} onChange={(e)=>{handlechange(e)}} />
              </div>
            </div>
          </div>
          <div className="">
            <button className="btn btn-primary ml-2">Add Case Study</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
  <ToastContainer />
    </>
  )
}

export default Writearticle