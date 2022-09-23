import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddMemberForm from './AddMember';


const SettingsTab: React.FC = () => {
    const [key, setKey] = useState('add-member');

    return (
        <Tabs className="settings-tab mb-3" defaultActiveKey="profile"
        onSelect={(k:any) => setKey(k)} activeKey={key}>
            <Tab eventKey="add-member" title="Add Member">
                1st tab
            </Tab>
            <Tab eventKey="modify-member" title="Modify Member">
                2nd tab
            </Tab>
        </Tabs>
    )
}

export default SettingsTab