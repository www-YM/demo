import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { FormattedMessage, injectIntl } from 'react-intl';

const useStyles = makeStyles((theme) => {
  const toolbar = theme.mixins.toolbar as any;

  return {
    formContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: `calc(100vh - ${toolbar['@media (min-width:600px)'].minHeight}px)`,
      maxWidth: 500,
      margin: `0 auto`,
    },
    section: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    label: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  };
});

const ServerError = ({ intl }): JSX.Element => {
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            label="500"
            title={intl.formatMessage({
              defaultMessage: 'Internal Server Error',
              description: 'Internal Server Error',
            })}
            subtitle={
              <span>
                <FormattedMessage
                  defaultMessage="There's nothing here, but if you feel this is an error please"
                  description="There's nothing here, but if you feel this is an error please"
                />{' '}
                <LearnMoreLink
                  title={intl.formatMessage({
                    defaultMessage: 'let us know',
                    description: 'let us know',
                  })}
                  href="#"
                  typographyProps={{ variant: 'h6' }}
                />
              </span>
            }
            titleProps={{
              variant: 'h3',
            }}
            labelProps={{
              color: 'secondary',
              className: classes.label,
              variant: 'h5',
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <FormattedMessage
                  defaultMessage="Go Back"
                  description="Go Back"
                />
              </Button>,
            ]}
            disableGutter
          />
        </div>
      </Section>
    </div>
  );
};

export default injectIntl(ServerError);
