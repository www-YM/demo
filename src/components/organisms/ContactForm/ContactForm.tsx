import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import {
  defineMessage,
  FormattedMessage,
  injectIntl,
  IntlShape,
} from 'react-intl';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const errorMsg = defineMessage({
  defaultMessage: 'is required',
  description: 'is required',
});

const emailErrorMsg = defineMessage({
  defaultMessage: 'It is not a valid email',
  description: 'It is not a valid email',
});

const ContactForm = ({ intl }: { intl: IntlShape }): JSX.Element => {
  const schema = {
    fullname: {
      presence: {
        allowEmpty: false,
        message: `^${intl.formatMessage({
          defaultMessage: 'Full name',
          description: 'Full name',
        })}${intl.formatMessage(errorMsg)}`,
      },
      length: {
        maximum: 128,
      },
    },
    email: {
      presence: {
        allowEmpty: false,
        message: `^${intl.formatMessage({
          defaultMessage: 'E-mail',
          description: 'E-mail',
        })}${intl.formatMessage(errorMsg)}`,
      },
      email: {
        message: `^${intl.formatMessage(emailErrorMsg)}`,
      },
      length: {
        maximum: 300,
      },
    },
    message: {
      presence: {
        allowEmpty: false,
        message: `^${intl.formatMessage({
          defaultMessage: 'Message',
          description: 'Message',
        })}${intl.formatMessage(errorMsg)}`,
      },
    },
  };

  const classes = useStyles();

  const [formState, setFormState] = React.useState<FormStateProps>({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (field: string): boolean =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form
        name="contact-form"
        method="post"
        action="/submition.html?contact-form-submit-success=true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>
                <FormattedMessage
                  defaultMessage="Contact Us"
                  description="Contact Us"
                />
              </strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
              <FormattedMessage
                defaultMessage="We carefully read and answer to all our emails."
                description="We carefully read and answer to all our emails."
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={intl.formatMessage({
                defaultMessage: 'Full name',
                description: 'Full name',
              })}
              label={
                intl.formatMessage({
                  defaultMessage: 'Full name',
                  description: 'Full name',
                }) + ' *'
              }
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              helperText={
                hasError('fullname') ? formState.errors.fullname[0] : null
              }
              error={hasError('fullname')}
              onChange={handleChange}
              type="text"
              value={formState.values.fullname || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={intl.formatMessage({
                defaultMessage: 'E-mail',
                description: 'E-mail',
              })}
              label={
                intl.formatMessage({
                  defaultMessage: 'E-mail',
                  description: 'E-mail',
                }) + ' *'
              }
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder={intl.formatMessage({
                defaultMessage: 'Message',
                description: 'Message',
              })}
              label={
                intl.formatMessage({
                  defaultMessage: 'Message',
                  description: 'Message',
                }) + ' *'
              }
              variant="outlined"
              name="message"
              fullWidth
              helperText={
                hasError('message') ? formState.errors.message[0] : null
              }
              error={hasError('message')}
              onChange={handleChange}
              multiline
              rows={4}
              value={formState.values.message || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              <FormattedMessage
                defaultMessage="Fields that are marked with * sign are required."
                description="Fields that are marked with * sign are required."
              />
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
            >
              <FormattedMessage defaultMessage="Send" description="Send" />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default injectIntl(ContactForm);
