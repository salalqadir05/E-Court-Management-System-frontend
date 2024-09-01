import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  lawyerdeletearticleRoute,
  lawyerviewarticleRoute,
  lawyerfindOneArticleRoute,
  lawyerupdatearticleRoute,
} from '../../utlis/APIRoutes';

function Articles() {
  const [updatearticle, setupdatearticle] = useState({
    etitle: '',
    edescription: '',
  });

  const [article, setarticle] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const headers = {
        'auth-token': localStorage.getItem('token'),
      };
      const response = await axios.get(lawyerviewarticleRoute, { headers });
      setarticle(response.data.lawyerArticle);
    };
    fetchdata();
  }, []);

  const handleedit = async (articleid) => {
    // console.log("article id is :",articleid)
    // console.log("api route is :",lawyerfindOneArticleRoute)
    const response = await axios.post(lawyerfindOneArticleRoute, {
      _id : articleid ,
    });
  // 
    // console.log(response.data)
    setupdatearticle({
      etitle: response.data.title,
      edescription: response.data.description,
    });

  };
  
  const updatechanges = async (articleid) => {
    const headers = {
      'auth-token': localStorage.getItem('token'),
    };
    const apicall = `${lawyerupdatearticleRoute}${articleid}`;
    const response = await axios.put(
      apicall,
      {
        title: updatearticle.etitle,
        description: updatearticle.edescription,
      },
      { headers }
    );
    window.location.reload();
      
    // console.log(response.data);
    // navigate('/articles');
  };

  const handledelete = async (articleid, event) => {
    event.preventDefault();
    try {
      const headers = {
        'auth-token': localStorage.getItem('token'),
      };
      const apicall = `${lawyerdeletearticleRoute}${articleid}`;
      await axios.delete(apicall, { headers });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = (e) => {
    setupdatearticle({ ...updatearticle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event, articleid) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Case Studies</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Article</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row ml-2 mr-2">
            {article &&
              article.map((articleItem) => (
                <div key={articleItem._id} className="col-md-4">
                  <div className="card my-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="card-title">
                          <b>{articleItem.title}</b>
                        </h5>

                        <i
                          className="far fa-edit mb-2 mx-2"
                          onClick={() => {
                            handleedit(articleItem._id);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target={`#exampleModal${articleItem._id}`}
                        ></i>
                        <i
                          className="far fa-trash-alt mb-2 mx-2"
                          onClick={(event) => {
                            handledelete(articleItem._id, event);
                          }}
                        ></i>
                        <div
                          className="modal fade"
                          id={`exampleModal${articleItem._id}`}
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                  Article
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <form onSubmit={(event) => { handleSubmit(event, articleItem._id); }}>
                                  <div className="container ml-5 d-flex flex-column justify-content-centre">
                                    <div className="form-group">
                                      <label>Update a Title</label>
                                      <input
                                        type="text"
                                        name="etitle"
                                        className="form-control w-75"
                                        placeholder="Write a title"
                                        value={updatearticle.etitle}
                                        onChange={(e) => { handlechange(e); }}
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Update an Article</label>
                                      <textarea
                                        className="form-control w-75"
                                        name="edescription"
                                        rows={6}
                                        placeholder="Write here"
                                        value={updatearticle.edescription}
                                        onChange={(e) => { handlechange(e); }}
                                      />
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                      Close
                                    </button>
                                    <button type="submit" className="btn btn-primary" onClick={() => { updatechanges(articleItem._id); }}>
                                      Update
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-text text-justify">{articleItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Articles;
