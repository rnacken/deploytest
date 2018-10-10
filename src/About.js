import React from 'react';
import { FormattedMessage } from 'react-intl';

class About extends React.Component {
    render() {
        return (
            <div>
              <p><FormattedMessage
                id="About.titleMessage"
                defaultMessage="About page title."
              /></p>
            </div>
            );
    }
}
export default About;
