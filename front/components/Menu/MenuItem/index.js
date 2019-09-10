import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

const MenuItem = ({ item, dict }) => {
    return (
        <div
            id={ item.name }
            className='menu_item'
        >
            { dict.translate(item.caption) }
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    dict: PropTypes.object.isRequired,
    //
};

MenuItem.defaultProps = {};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default connect(select)(MenuItem);
