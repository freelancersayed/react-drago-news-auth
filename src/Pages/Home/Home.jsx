import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BrekingNews from "./BrekingNews";


const Home = () => {
    return (
        <div className="">
            <Header> </Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h1 className="text-4xl">News Comming Soon</h1>
                </div>
                <div className="border">
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;