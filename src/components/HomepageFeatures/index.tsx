import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/belt.svg').default,
    description: (
      <>
        StomaStrap uses a standard belt to secure your appliance.
      </>
    ),
  },
  {
    title: 'Economical',
    Svg: require('@site/static/img/savings.svg').default,
    description: (
      <>
        Longer times between wafer changes saves you time and money. 
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('@site/static/img/safe.svg').default,
    description: (
      <>
        Feel safe knowing your appliance is fastened securely. Get out and do what you love!
      </>
    ),
  },
  {
    title: 'Discrete',
    Svg: require('@site/static/img/sweater.svg').default,
    description: (
      <>
        StomaStrap is slim, and hides well under your clothing. Fewer leaks means more confidence.
      </>
    ),
  },
  {
    title: 'For Athletes',
    Svg: require('@site/static/img/sports.svg').default,
    description: (
      <>
        StomaStrap gives you support and protection - So you can get back in the game!
      </>
    ),
  },
  {
    title: 'Strong',
    Svg: require('@site/static/img/strong.svg').default,
    description: (
      <>
        You've seen some s&!t. Ostomates are strong. Your bag support system should be too. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
