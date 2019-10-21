import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../../../contexts/contexts';

// import classnames from 'classnames';

const ServiceBlock = ({ caption, services }) => {
    const { lang } = useContext(AppContext);
    return (
        <div className='ServiceBlock'>
            <div className='site_map_header'>
                {dict.translate(caption, lang)}
            </div>
            <div className='site_map_links'>
                {
                    _.map(services, (service, key) => (
                        <div
                            key={ key }
                            className='site_map_service'
                        >
                            {dict.translate(service.caption, lang)}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

ServiceBlock.propTypes = {
    caption: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
    //
};

ServiceBlock.defaultProps = {};

export default ServiceBlock;
