import "./Loading.scss";
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
    return (
        <div className="spinner__container">
            <CircularProgress size="5rem" disableShrink />
        </div>
    );
}

export default Loading;