import React from 'react';
import '../App.css';
import course_1 from '../assets/1.jpg';
import course_2 from '../assets/2.jpg';
import course_3 from '../assets/3.jpg';
import course_4 from '../assets/4.jpg';


const Recommend = () => {
  return (
    <div className="recommend">
      <h1 className="recommend_head">Recommended for You</h1>
      <p className="recommend_p">Pick the best fit</p>

      <section className="course_container">
        <div className="course">
          <img src={course_1} alt="Course 1" className="course-img" />
          <p className="course-description">MernStack Devolopment</p>
          <p className='mentor_name'>Mr. S.Abishek</p>
          <p>4.3 ⭐⭐⭐⭐</p>
          <p className='course_off'>₹29,999</p>
          <p className='course_old'>₹35,000</p>
        </div>
        <div className="course">
          <img src={course_2} alt="Course 2" className="course-img" />
          <p className="course-description">Java Devolopment</p>
          <p className='mentor_name'>Ms. S.Harishma</p>
          <p>3.9 ⭐⭐⭐</p>
          <p className='course_off'>₹19,999</p>
          <p className='course_old'>₹30,000</p>
        </div>
        <div className="course">
          <img src={course_3} alt="Course 3" className="course-img" />
          <p className="course-description">Python Programming</p>
          <p className='mentor_name'>Mr. S.Dinesh Prabhu</p>
          <p>4.5 ⭐⭐⭐⭐</p>
          <p className='course_off'>₹24,999</p>
          <p className='course_old'>₹35,000</p>
        </div>
        <div className="course">
          <img src={course_4} alt="Course 4" className="course-img" />
          <p className="course-description">Beginner Level C/C++</p>
          <p className='mentor_name'>Ms. M.Aishwarya</p>
          <p>4.0 ⭐⭐⭐⭐</p>
          <p className='course_off'>₹14,999</p>
          <p className='course_old'>₹25,000</p>
        </div>
      </section>
    </div>
  );
};


export default Recommend;