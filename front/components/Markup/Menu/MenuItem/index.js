import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, dict, selected }) => {
    return (
        <Link
            to={ item.path }
            id={ item.name }
            className={ classnames('menu_item', { 'selected': selected }) }
        >
            { dict.translate(item.caption) }
        </Link>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    dict: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
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
