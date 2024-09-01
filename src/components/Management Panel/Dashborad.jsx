import React,{useState,useEffect } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom'
import { countLawyerRoute , countApplicantRoute,countandfetchCaseRoute,fetchalldetailscasemanagerRoute} from '../../utlis/APIRoutes'
import SuccessLogin from '../../pages/Alerts/SuccessLogin';
import DonutChart from './DountChart';

function Dashborad() {
  const [count, setcount] = useState();
  const [count1, setcount1] = useState();
  const [count2, setcount2] = useState();
  const [empcount, setempcount] = useState()
  const sumUsers = count + count1 + empcount;
  useEffect(() => {
    const countdata = async () => {
      try {
        const response = await axios.post(countLawyerRoute);
        setcount(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    countdata();
  }, []);
  useEffect(() => {
    const countdata = async () => {
      try {
        const response = await axios.post(countApplicantRoute);
        setcount1(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    countdata();
  }, []);
  useEffect(() => {
    const countdata = async () => {
      try {
        const response = await axios.post(countandfetchCaseRoute);
        setcount2(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    countdata();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(fetchalldetailscasemanagerRoute);
        setempcount(response.data.countEmployee);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <SuccessLogin />
<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/managementpanel">Home</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{count2}</h3>
              <p>Total Cases</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to="/managementcaselist" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{sumUsers}<sup style={{fontSize: 20}}></sup></h3>
              <p>Total Users Of System</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{count1}</h3>
              <p>Total Applicant</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link to="/employeelist" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-primary">
            <div className="inner">
              <h3>{count}</h3>
              <p>Total Lawyers</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link to="/lawyerlist" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
      </div>
      <div className="row">
    {/* <DonutChart /> */}
      </div>
    </div>{/* /.container-fluid */}
  </section>
</div>

    </>
  )
}

export default Dashborad