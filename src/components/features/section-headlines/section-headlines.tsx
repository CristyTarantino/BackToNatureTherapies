import { Theme, Typography, TypographyProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import { Markdown } from '@src/components/features/markdown';

const useStyles = makeStyles((theme: Theme) => ({
  containerCentered: {
    textAlign: 'center',
  },
  headline: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.083,
  },
  subline: {
    fontWeight: 400,
    lineHeight: 1.56,
    marginTop: theme.spacing(6),
    fontSize: '1.8rem',
    color: '#02363a',
  },

  text: {
    '& p': {
      fontSize: '2.5rem',
      lineHeight: 1.52,
    },
  },
}));

interface SectionHeadlinesPropsInterface {
  headline?: string | null;
  headlineProps?: TypographyProps;
  subline?: string | null;
  sublineProps?: TypographyProps;
  body?: string | null;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeadlines = (props: SectionHeadlinesPropsInterface) => {
  const {
    headline,
    headlineProps = {},
    subline,
    sublineProps = {},
    body,
    align = 'center',
    className = '',
  } = props;

  const classes = useStyles();
  const computedHeadlineProps: TypographyProps & { component?: string } = {
    variant: 'h1',
    component: 'h2',
    ...headlineProps,
    className: clsx(headlineProps.className, classes.headline),
  };
  const computedSublineProps: TypographyProps = {
    variant: 'h3',
    ...sublineProps,
    className: clsx(sublineProps.className, classes.subline),
  };

  if (!headline && !subline && !body) {
    return null;
  }

  return (
    <div className={clsx(align === 'center' ? classes.containerCentered : null, className)}>
      {headline && <Typography {...computedHeadlineProps}>{headline}</Typography>}
      {subline && <Typography {...computedSublineProps}>{subline}</Typography>}
      {body && <Markdown text={body} className={classes.text} />}
    </div>
  );
};
