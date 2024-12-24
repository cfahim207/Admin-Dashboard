
import AIPoweredInsights from "../components/Analytics/AIPoweredInsights";
import ChannelPerformance from "../components/Analytics/ChannelPerformance";
import CustomerSegmentation from "../components/Analytics/CustomerSegmentation";
import OverviewCards from "../components/Analytics/OverviewCards";
import ProductPerformance from "../components/Analytics/ProductPerformance";
import RevenueChart from "../components/Analytics/RevenueChart";
import UserRetention from "../components/Analytics/UserRetention";
import Header from "../components/common/Header";

const AnalyticsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title={"Analytics Dashboard"}></Header>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards></OverviewCards>
                <RevenueChart></RevenueChart>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChannelPerformance></ChannelPerformance>
                    <ProductPerformance></ProductPerformance>

                    <UserRetention></UserRetention>

                    <CustomerSegmentation></CustomerSegmentation>
                    
                </div>
                    <AIPoweredInsights></AIPoweredInsights>
              

            </main>

        </div>
    );
};

export default AnalyticsPage;