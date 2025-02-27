
import ConnectedAccounts from "../components/Settings/ConnectedAccounts";
import DangerZone from "../components/Settings/DangerZone";
import Notifications from "../components/Settings/Notifications";
import Profile from "../components/Settings/Profile";
import Security from "../components/Settings/Security";
import Header from "../components/Common/Header";


const SettingsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title='Settings'></Header>
            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <Profile></Profile>
                <Notifications></Notifications>
                <Security></Security>
                <ConnectedAccounts></ConnectedAccounts>
                <DangerZone></DangerZone>
                
            </main>
        </div>
    );
};

export default SettingsPage;