import React from 'react';
import './Team.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

import { FaAward } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'
import CV from '../../assets/CV.pdf'
import { images } from '../../constants';


const Team = () => {
  return (
    <section id="about">

    <div className="about_info">
    <h2 data-aos="zoom-in" className="teamTitle">About me</h2>
    </div>

    <div className="about__container">
        <div className="about__me" data-aos="zoom-in">
            <div className="about__me-image">
            <img src={images.profil} className="teamImg" width="100%" alt="myprofile"/>
            </div>
        </div>

        <div className="about__content" data-aos="zoom-in">

            <div className="about__cards">

                <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5>Full stack dev</h5>
                    <small> UX/UI + frontend + backend </small>
                </article>


                <article className='about__card'>
                    <BiCodeBlock className='about__icon' />
                    <h5>Deep knowledge</h5>
                    <small>of every aspect of any project development </small>
                </article>


                <article className='about__card'>
                    <MdOutlineDesignServices className='about__icon' />
                    <h5>Love to learn</h5>
                    <small> and develop new things in web and blockchain </small>
                </article>
            </div>

            <p>Hello! I'm full stack developer with specialization in traditional Web and Web3 & Blockchain related topics.
                I'm creating any project from scratch - including UX/UI, backend and frontend implementation to full optimization.
            </p>

            <button className="cvbutton">
            <a href={CV} download className="cv-primary" target="_blank" rel="noopener noreferrer">Download CV</a>
            </button>

        </div>

    </div>

</section >
  )
}

export default AppWrap(
  MotionWrap(Team, 'app__team'),
  'team',
  "app__whitebg"
  );



/*

  import React from 'react';
import './Team.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constants';


const Team = () => {
  return (
    <div id="team" className="teamcontainer">
        
      <div className="teamTop">
        <div className="leftC">
        <img src={images.Headr1} className="teamImg" alt="Figma"/>
        </div>

        <div className="rightC">
             <h5 className="subtitle">O Nas</h5>
            <h2 className="teamTitle">Studio <br/> marketingu <br/>internetowego</h2>
            <p className="text">Witaj! <br/> Jesteśmy studiem marketingowym stworzonym przez web developera i graphic designera, skupionym na pozyskiwaniu nowych klientów dla przedsiębiorstw, wykorzystując do tego celu nieograniczone możliwości social mediów, okraszone atrakcyjną i zapadającą w pamięć oprawą graficzną wszystkiego, co tworzymy. </p>
        </div>
      </div>  


        <div className="bottomC">
          <div>
            <button className="aboutInfo"> PROFESJONALNI</button>
            </div>
            <div>
            <button className="aboutInfo"> SKUTECZNI</button>
            </div>
            <div>
            <button className="aboutInfo"> GODNI ZAUFANIA</button>
            </div>
        </div>

    </div>
  )
}

export default AppWrap(
  MotionWrap(Team, 'app__team'),
  'team',
  "app__whitebg"
  );

  */
  