import { AnyNaptrRecord } from 'dns';
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AnyIfEmpty } from 'react-redux';
import AddMemberForm from './AddMember';
import ViewMembers from './ViewMembers';

type Props = {
    registrationDetails_: any
    regDetails: ()=>void
    members: any
}

const EditMembersTab: React.FC<Props> = ({members, regDetails, registrationDetails_}) => {
    const [key, setKey] = useState('add-member');

    return (
        <Tabs className="settings-tab mb-3" defaultActiveKey="profile"
        onSelect={(k:any) => setKey(k)} activeKey={key}>
            <Tab eventKey="add-member" title="Add Member">
                <AddMemberForm regDetails={regDetails} registrationDetails_={registrationDetails_} />
            </Tab>
            <Tab eventKey="modify-member" title="Modify Member">
                <ViewMembers members={members} regDetails={regDetails} registrationDetails_={registrationDetails_} />
            </Tab>
        </Tabs>
    )
}

export default EditMembersTab