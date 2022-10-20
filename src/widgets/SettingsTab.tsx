import { AnyAaaaRecord } from 'dns';
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddMemberForm from './AddMember';
import AddUserForm from './AddUser';
import ViewUsers from './ViewUsers';

type Props = {
    regDetails: ()=>void
    configs_: any
    changeSomething: (changeParam: string)=>void
    users: AnyAaaaRecord
    getUser: (userid: string)=>void
}

const SettingsTab: React.FC<Props> = ({users, getUser, changeSomething, configs_, regDetails}) => {
    const [key, setKey] = useState('add-user');

    return (
        <Tabs className="settings-tab mb-3" defaultActiveKey="profile"
        onSelect={(k:any) => setKey(k)} activeKey={key}>
            <Tab eventKey="add-user" title="Add User">
                <AddUserForm changeSomething={changeSomething} configs_={configs_} regDetails={regDetails} />
            </Tab>
            <Tab eventKey="modify-user" title="Modify User">
                <ViewUsers getUser={getUser} users={users} regDetails={regDetails} />
            </Tab>
        </Tabs>
    )
}

export default SettingsTab