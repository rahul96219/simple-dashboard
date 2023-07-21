import TopHeader from '../components/top-header/TopHeader.component';
import DashboardContainer from "../components/dashboard-container/DashboardContainer.component"

export default function Dashboard(){
    return(
        <div className="container">
            <TopHeader/>
            <DashboardContainer/>           
        </div>
    );
}