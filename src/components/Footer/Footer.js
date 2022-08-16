import './Footer.css';
import instagram from './../../assets/icon/Instagram.png';
import google from './../../assets/icon/Google.png';
import github from './../../assets/icon/Github.png';
import telegram from './../../assets/icon/Telegram.png';
import linkedin from './../../assets/icon/LinkedIn.png';
import facebook from './../../assets/icon/Facebook.png';

const Footer = () => {
    return (
        <footer className="footer text-center text-white" id='footer'>
            <div className="container p-4 pb-0">
                <section className="mb-4 icon-wrapper">
                    <img src={instagram} alt="" className='mx-3' />
                    <img src={google} alt="" className='mx-3' />
                    <img src={github} alt="" className='mx-3' />
                    <img src={telegram} alt="" className='mx-3' />
                    <img src={linkedin} alt="" className='mx-3' />
                    <img src={facebook} alt="" className='mx-3' />
                </section>
            </div>

            <div className="footer-copyright text-center p-3">
                2022 Created by
                <a className="text-white" href="https://mdbootstrap.com/"> @Adirfanm</a>
            </div>
        </footer>
    )
}

export default Footer;