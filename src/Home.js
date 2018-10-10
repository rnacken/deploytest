import React from 'react';
import { FormattedMessage } from 'react-intl';

class Home extends React.Component {
    render() {
        return (
            <div>
              <p><FormattedMessage
                id="Home.dayMessage"
                defaultMessage="Home... It's a beautiful day outside."
              /></p>
            </div>
            );
    }
}
export default Home;
