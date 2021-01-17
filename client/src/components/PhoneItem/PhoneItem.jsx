import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./PhoneItem.scss";
import { checkURL } from './../../services/Utils';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500
    },
    '@media (max-width: 768px)': {
        root: {
            maxWidth: 300
        },
    },
    '@media (min-width: 768px)': {
        card: {
            height: 350,
            overflowY: 'scroll',
            padding: 20,
            marginBottom: 20,
        },
    },
    media: {
        height: 0,
        paddingTop: '50%',
        backgroundSize: 'contain'
    },
    text: {
        minHeight: '40px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    information: {
        textTransform: 'capitalize'
    }
}));

export default function PhoneItem(props) {
    const DEFAULT_IMG = 'https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg';
    const IS_IMG_CORRECT = checkURL(props.information.imgUrl);
    const IMG = (IS_IMG_CORRECT) ? props.information.imgUrl : DEFAULT_IMG;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <li className="list__item">
            <Card className={classes.root}>
                <CardHeader
                    title={props.information.name}
                    subheader={props.information.price + '€'}
                />
                <CardMedia
                    className={classes.media}
                    image={IMG}
                    title={props.information.name}
                />
                <CardContent>
                    <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                        {props.information.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.card}>
                        <Typography paragraph className={classes.information}>
                            <span className="card__extraTitle">
                                Color:&nbsp;
                            </span>
                            {props.information.color}
                        </Typography>
                        <Typography paragraph>
                            <span className="card__extraTitle">
                                Manufacturer:&nbsp;
                            </span>
                            {props.information.manufacturer}
                        </Typography>
                        <Typography paragraph>
                            <span className="card__extraTitle">
                                Processor:&nbsp;
                            </span>
                            {props.information.processor}
                        </Typography>
                        <Typography paragraph>
                            <span className="card__extraTitle">
                                RAM:&nbsp;
                            </span>
                            {props.information.ram}
                        </Typography>
                        <Typography paragraph>
                            {props.information.extraInfo}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </li>
    )
}