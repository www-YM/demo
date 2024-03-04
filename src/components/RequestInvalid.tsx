import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import useChat from 'hooks/useChat';

const useStyles = makeStyles((theme) => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    root: {
      '& .hero-shaped': {
        borderBottom: 0,
      },
      '& .hero-shaped__wrapper': {
        [theme.breakpoints.up('md')]: {
          minHeight: `calc(100vh - ${toolbar['@media (min-width:600px)'].minHeight}px)`,
        },
      },
    },
    formContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 500,
        margin: `0 auto`,
      },
    },
    image: {
      objectFit: 'contain',
      padding: theme.spacing(5),
    },
  };
});

const RequestInvalid = (): JSX.Element => {
  const classes = useStyles();
  const { openChat } = useChat();

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Error! Request Data Invalid."
              subtitle="There’s something wrong, please click the button to contact us for help."
              titleProps={{
                variant: 'h3',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={openChat}
                >
                  Contact Us
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <Image
            src="https://wow-assets-us.oss-us-east-1.aliyuncs.com/how-to/warning.svg"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  );
};

export default RequestInvalid;
