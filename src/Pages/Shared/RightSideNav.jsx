import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagram  } from 'react-icons/fa';
import qZone1 from '../.././assets/qZone1.png'
import qZone2 from '../.././assets/qZone2.png'
import qZone3 from '../.././assets/qZone3.png'

const RightSideNav = () => {
    return (
      <div  className='px-4'>
          <div className=' space-y-4'>
            <h2 className="text-2xl font-bold">Login With</h2>
            <button className="btn btn-outline w-full"><FaGoogle></FaGoogle> Google</button>
            <button className="btn btn-outline w-full"><FaGithub></FaGithub> Google</button>
        </div>
        <div className='w-full my-4 space-y-4'>
            <h1 className='text-3xl'>Find Now</h1>
        <a className='w-full flex items-center p-3 border rounded-t-lg' href="#facebook"> <FaFacebook className='mr-4' /> Facebook  </a>
        <a className='w-full flex items-center p-3 border rounded-t-lg' href="twtar"> <FaTwitter className='mr-4' /> Facebook  </a>
        <a className='w-full flex items-center p-3 border rounded-t-lg' href="twtar"> <FaInstagram  className='mr-4' /> Facebook  </a>
        </div>
        <div>
            <h1 className='text-3xl'>Q Zone</h1>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    );
};

export default RightSideNav;