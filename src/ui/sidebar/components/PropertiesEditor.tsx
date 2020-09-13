import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GetScriptPropertiesResult } from '../../../functions/getScriptsProperties';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 580,
            },
        },
    }),
);

const PropertiesEditor = () => {

    const [formDefaultValues, setFormDefaultValues] = React.useState<GetScriptPropertiesResult>({
        firebaseFunctionsKey : '' ,
        targetURL: '',
        endPointURL: ''
    });

    React.useEffect(() => {
        google.script.run
            .withSuccessHandler((data) => onGetPropertiesSuccess(data))
            .withFailureHandler((error) => console.log(error))
            .getScriptProperties();
    }, []);

    function onGetPropertiesSuccess(data) {
        setFormDefaultValues({
            firebaseFunctionsKey : data.firebaseFunctionsKey,
            targetURL : data.targetURL,
            endPointURL : data.endPointURL
        })
    }

    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        const obj = Object.fromEntries(formData);
        event.preventDefault();
        google.script.run
            .withSuccessHandler((data) => onSavePropertiesSuccess(data))
            .withFailureHandler((error) => console.log(error))
            .saveScriptProperties(obj);
    }
    function onSavePropertiesSuccess(data) {
        console.log('onSavePropertiesSuccess', data);
    }

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
            <TextField
                required
                fullWidth
                name="endPointURL"
                id="endPointURL"
                label="Firebase endpoint URL"
                value={formDefaultValues.endPointURL}
                variant="filled"
            />
        </div>
        <div>
            <TextField
                required
                fullWidth
                name="targetURL"
                id="targetURL"
                label="Target URL"
                value={formDefaultValues.targetURL}
                variant="filled"
            />
        </div>
        <div>
            <TextField
                required
                fullWidth
                name="firebaseFunctionsKey"
                id="firebaseFunctionsKey"
                label="API Key"
                value={formDefaultValues.firebaseFunctionsKey}
                variant="filled"
            />
        </div>
        <Button variant="contained" color="primary" type="submit">
            Save
        </Button>
        </form>
    );
};
// @ts-ignore
export default PropertiesEditor;
