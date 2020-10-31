import React, { useContext } from 'react';
import './TrainingProfile.css'
import img3 from '../../Image_Icon/oc-card3.png'
import { ClassDetailsContext } from '../../App';
import OCHeader from '../OurClasses/OCHeader/OCHeader';
import Footer from '../Home/Footer/Footer';

const TrainingProfile = () => {
    const [classDetails, setClassDetails] = useContext(ClassDetailsContext);
    return (
        <div>
            <OCHeader title="ADVANCED GYM"></OCHeader>
            <div className="container training-profile-root">
            <div className="row my-5">
                <div className="col-md-6">
                    <img width="100%" src={img3} alt=""/>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem nam, doloribus quae ratione facere maiores dolore nisi quam impedit exercitationem repellat officia deleniti voluptatem quasi assumenda ut ipsa obcaecati consequuntur. Aliquam saepe laborum rerum illum voluptates accusamus nobis est cupiditate non dolore animi dicta possimus minus soluta harum unde quasi asperiores, laudantium quos sint maxime? Qui natus optio laborum provident cupiditate minus, pariatur consectetur modi excepturi maxime inventore tempora deleniti quibusdam rerum! Iusto incidunt at itaque odio aspernatur rem!</p>
                    <ul>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Having Slimmer Shapely Thighs
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Getting Stronger Body
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Increased Metabolism
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Increased Muscular Endurance
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Maximum results in Less Time
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Having Slimmer Shapely Thighs
                        </li>
                        <li>
                            <i class="fa fa-check-square" aria-hidden="true"></i> Firm Hips and Tummy
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2><span className="text-warning">CLASS</span> SCHEDULE</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-3 shadow-sm my-5">
                                <h4>Monday</h4>
                                <p className="text-warning"><small>8:00 AM - 9:00 AM</small></p>
                            </div>
                            <div className="p-3 shadow-sm my-5">
                                <h4>Wednesday</h4>
                                <p className="text-warning"><small>7:00 AM - 8:00 AM</small></p>
                            </div>
                            <div className="p-3 shadow-sm my-5">
                                <h4>Friday</h4>
                                <p className="text-warning"><small>6:00 AM - 7:00 AM</small></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 my-5 shadow-sm">
                                <h4>Tuesday</h4>
                                <p className="text-warning"><small>10:00 AM - 11:00 AM</small></p>
                            </div>
                            <div className="p-3 my-5 shadow-sm">
                                <h4>Thursday</h4>
                                <p className="text-warning"><small>5:00 AM - 6:00 AM</small></p>
                            </div>
                            <div className="p-3 my-5 shadow-sm">
                                <h4>Saturday</h4>
                                <p className="text-warning"><small>7:00 AM - 8:00 AM</small></p>
                            </div>

                            <h2 className="btn-warning text-center rounded p-2">JOIN US</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default TrainingProfile;