import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GetScriptPropertiesResult } from '../../../functions/getScriptsProperties';
import {FieldErrors, useForm} from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18n from '../../../libs/i18n';

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

    const { register, handleSubmit, errors } = useForm<GetScriptPropertiesResult>();

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    const onGetPropertiesSuccess = (data) => {
        setFormDefaultValues({
            firebaseFunctionsKey : data.firebaseFunctionsKey,
            targetURL : data.targetURL,
            endPointURL : data.endPointURL
        })
    }

    const saveScriptProperties = (data: GetScriptPropertiesResult) => {
        google.script.run
            .withSuccessHandler((data) => onSavePropertiesSuccess(data))
            .withFailureHandler((error) => console.log(error))
            .saveScriptProperties(data);
    }

    const onSavePropertiesSuccess = (data) => {
        handleClickOpen();
    }

    const getHelperTextForField = (errors: FieldErrors<GetScriptPropertiesResult>, fieldName: string) => {
        if (errors.endPointURL?.type == "required") {
            return i18n.t("message.required", navigator.language ,[fieldName]);
        }
        if (errors.endPointURL?.type == "pattern") {
            return i18n.t("message.invalidPattern", navigator.language, [fieldName]);
        }
        return ' ';
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(saveScriptProperties)}>
            <div>
                <TextField
                    required
                    fullWidth
                    name="endPointURL"
                    id="endPointURL"
                    label="Firebase endpoint URL"
                    value={formDefaultValues.endPointURL}
                    variant="filled"
                    inputRef={register({ required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })}
                    onChange={(e) =>
                        setFormDefaultValues({
                            firebaseFunctionsKey : formDefaultValues.firebaseFunctionsKey,
                            targetURL: formDefaultValues.targetURL ,
                            endPointURL: e.target.value
                        })}
                    error={errors.endPointURL?.type == "required" || errors.endPointURL?.type == "pattern"}
                    helperText={getHelperTextForField(errors, 'Firebase endpoint URL')}
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
                    inputRef={register({ required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })}
                    onChange={(e) =>
                        setFormDefaultValues({
                            firebaseFunctionsKey : formDefaultValues.firebaseFunctionsKey,
                            targetURL: e.target.value ,
                            endPointURL: formDefaultValues.endPointURL
                        })}
                    error={errors.targetURL?.type == "required" || errors.targetURL?.type == "pattern"}
                    helperText={getHelperTextForField(errors, 'Target URL')}
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
                    inputRef={register({ required: true, pattern: /\w/ })}
                    onChange={(e) =>
                        setFormDefaultValues({
                                firebaseFunctionsKey : e.target.value ,
                                targetURL: formDefaultValues.targetURL,
                                endPointURL: formDefaultValues.endPointURL
                            })}
                    error={errors.firebaseFunctionsKey?.type == "required" || errors.firebaseFunctionsKey?.type == "pattern"}
                    helperText={getHelperTextForField(errors, 'API Key')}
                />
            </div>
            <Button variant="contained" color="primary" type="submit">
                {i18n.t("button.save",navigator.language)}
            </Button>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{i18n.t("message.title.resultNotification",navigator.language)}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {i18n.t("message.onSaveSuccess",navigator.language)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        {i18n.t("button.close",navigator.language)}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
// @ts-ignore
export default PropertiesEditor;
