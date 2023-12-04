import Layout from "../components/Layout.jsx";
import InfoBox from "../components/InfoBox.jsx";
import IndexImageBoxes from "../components/Index-Image-Box.jsx";

const Home = () =>{
    return (
        <>
            <Layout>
                <IndexImageBoxes>

                </IndexImageBoxes>
                <div className = "index-infoboxes-box">
                    <InfoBox title="ADDRESS" lines={["119 S 7TH ST.", "COLUMBIA, MO 65201"]}/>
                    <InfoBox title="HOURS" lines={["FRIDAY 5PM - 1AM", "SATURDAY 11AM - 1AM"]}/>
                </div>
            </Layout>
        </>
    );
}

export default Home;