import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddMemberForm from './AddMember';

type Props = {
    registrationDetails_: any
}

const EditMembersTab: React.FC<Props> = ({registrationDetails_}) => {
    const [key, setKey] = useState('add-member');

    return (
        <Tabs className="settings-tab mb-3" defaultActiveKey="profile"
        onSelect={(k:any) => setKey(k)} activeKey={key}>
            <Tab eventKey="add-member" title="Add Member">
                <AddMemberForm registrationDetails_={registrationDetails_} />
            </Tab>
            <Tab eventKey="modify-member" title="Modify Member">
                <AddMemberForm registrationDetails_={registrationDetails_} />
            </Tab>
        </Tabs>
    )
}

export default EditMembersTab