import './Layout.css';

import Header from '../../components/Header';
import NeedsPanel from '../../containers/NeedsPanel';
import PeoplePanel from '../../containers/PeoplePanel';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="Layout">
                    <div className="Grid Grid--withGutter">
                        <NeedsPanel className="Grid-cell u-size7of12"/>
                        <PeoplePanel className="Grid-cell u-size5of12"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;