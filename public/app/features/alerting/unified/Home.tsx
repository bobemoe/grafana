import { css, cx } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data/src';
import { Stack } from '@grafana/experimental';
import { Icon, LinkButton, useStyles2, useTheme2 } from '@grafana/ui/src';

import { AlertingPageWrapper } from './components/AlertingPageWrapper';

export default function Home() {
  const theme = useTheme2();
  const styles = useStyles2(getWelcomePageStyles);

  return (
    <AlertingPageWrapper pageId="alert-home">
      <div className={styles.grid}>
        <WelcomeHeader className={styles.ctaContainer} />
        {/*<ContentBox className={styles.flowBlock}>*/}
        {/*  <img*/}
        {/*    src={`public/img/alerting/notification_policy_${theme.name.toLowerCase()}.svg`}*/}
        {/*    alt="Alerting flow chart"*/}
        {/*  />*/}
        {/*</ContentBox>*/}
        <ContentBox title="How it works at glance" className={styles.howItWorks}>
          <ul>
            <li>
              Grafana alerting periodically queries your data sources and evaluates the alerting condition you define
            </li>
            <li>If the condition is true longer than the specified time period, the alert rule starts firing</li>
            <li>The alert rule takes the labels you defined and labels defined in the data source to produce alerts</li>
            <li>Alerts are sent to the Alertmanager (by default to the built-in Grafana Alertmanager)</li>
            <li>
              Alertmanager keeps the configuration of what to do with the incoming alerts. It groups them and send to
              appropriate contact points (e.g. Slack, email etc.)
            </li>
          </ul>
        </ContentBox>
        <ContentBox title="Getting started" className={styles.gettingStartedBlock}>
          <Stack direction="column" alignItems="space-between">
            <ul>
              <li>Create alert rules for your data sources</li>
              <li>Assign labels to your alerts to give them context and meaning</li>
              <li>Configure where to send your alerts based on assigned labels</li>
              <li>Send notifications to tools, such as Slack, MS Teams, PagerDuty, OpsGenie and more</li>
            </ul>
            <div>
              <ArrowLink href="https://grafana.com/docs/grafana/latest/alerting/" title="Read more in the Docs" />
              <ArrowLink
                href="https://university.grafana.com//lms/index.php?r=coursepath/deeplink&id_path=42&hash=caa235c6321f80e03df017ae9ec6eed5c79da9ec"
                title="Learn more in the Grafana University course"
              />
            </div>
          </Stack>
        </ContentBox>
        <ContentBox className={styles.videoBlock}>
          <iframe
            title="Alerting - Introductory video"
            src="https://player.vimeo.com/video/720001629?h=c6c1732f92"
            width="960"
            height="540"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </ContentBox>
      </div>
    </AlertingPageWrapper>
  );
}

const getWelcomePageStyles = (theme: GrafanaTheme2) => ({
  grid: css`
    display: grid;
    grid-template-rows: min-content auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: ${theme.spacing(2)};
  `,
  ctaContainer: css`
    grid-column: 1 / span 5;
  `,
  flowBlock: css`
    grid-row: 2 / span 2;

    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  `,
  videoBlock: css`
    grid-column: 3 / span 3;
    grid-row: 2 / span 2;
    // Video required
    position: relative;
    padding: 56.25% 0 0 0; /* 16:9 */

    iframe {
      position: absolute;
      top: ${theme.spacing(2)};
      left: ${theme.spacing(2)};
      width: calc(100% - ${theme.spacing(4)});
      height: calc(100% - ${theme.spacing(4)});
      border: none;
    }
  `,
  gettingStartedBlock: css`
    grid-column: 1 / span 2;
    justify-content: space-between;

    ul {
      margin-left: ${theme.spacing(2)};
    }
  `,
  howItWorks: css`
    grid-column: 1 / span 2;

    ul {
      margin-left: ${theme.spacing(2)};
    }
  `,
});

function WelcomeHeader({ className }: { className?: string }) {
  const styles = useStyles2(getWelcomeHeaderStyles);

  return (
    <div className={cx(styles.container, className)}>
      <h2>What you can do</h2>
      <ArrowLink href="https://grafana.com/docs/grafana/latest/alerting/" title="Read more in the Alerting Docs" />

      <div className={styles.ctaContainer}>
        <WelcomeCTABox
          title="Alert rules"
          description="Manage your alert rules. Combine data from multiple data sources"
          icon="list-ul"
          href="/alerting/new"
          hrefText="Create alert rules"
        />
        <WelcomeCTABox
          title="Contact points"
          description="Configure who and how receives notifications"
          icon="comment-alt-share"
          href="/alerting/notifications"
          hrefText="Manage contact points"
        />
        <WelcomeCTABox
          title="Notification policies"
          description="Configure the flow of your alerts and route them to contact points"
          icon="sitemap"
          href="/alerting/routes"
          hrefText="Manage notification policies"
        />
      </div>
    </div>
  );
}

const getWelcomeHeaderStyles = (theme: GrafanaTheme2) => ({
  container: css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(4)};
    background-image: url(public/img/alerting/welcome_cta_bg_${theme.name.toLowerCase()}.svg);
    background-size: cover;
    background-clip: padding-box;

    outline: 1px solid hsla(6deg, 60%, 80%, 0.14);
    outline-offset: -1px;
    border-radius: 3px;
  `,
  ctaContainer: css`
    padding: ${theme.spacing(4)};
    display: flex;
    gap: ${theme.spacing(4)};
    justify-content: space-between;
    flex-wrap: wrap;
  `,
});

interface WelcomeCTABoxProps {
  title: string;
  description: string;
  icon: React.ComponentProps<typeof Icon>['name'];
  href: string;
  hrefText: string;
}

function WelcomeCTABox({ title, description, icon, href, hrefText }: WelcomeCTABoxProps) {
  const styles = useStyles2(getWelcomeCTAButtonStyles);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon name={icon} size="xxl" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.desc}>{description}</div>
      <LinkButton href={href} className={styles.actionButton}>
        {hrefText}
      </LinkButton>
    </div>
  );
}

const getWelcomeCTAButtonStyles = (theme: GrafanaTheme2) => ({
  container: css`
    flex: 1;
    min-width: 240px;
    display: grid;
    gap: ${theme.spacing(1)};
    grid-template-columns: min-content 1fr 1fr 1fr;
    grid-template-rows: min-content auto min-content;
  `,

  title: css`
    grid-column: 2 / span 3;
    grid-row: 1;
  `,

  desc: css`
    grid-column: 2 / span 3;
    grid-row: 2;
  `,

  actionButton: css`
    grid-column: 2 / span 3;
    grid-row: 3;
    max-width: 240px;
  `,

  icon: css`
    grid-column: 1;
    grid-row: 1 / span 2;
    margin: auto;
    color: #ff8833;
  `,
});

function ContentBox({ children, title, className }: React.PropsWithChildren<{ title?: string; className?: string }>) {
  const styles = useStyles2(getContentBoxStyles);

  return (
    <div className={cx(styles.box, className)}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

const getContentBoxStyles = (theme: GrafanaTheme2) => ({
  box: css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    border-radius: 3px;
    outline: 1px solid ${theme.colors.border.strong};
  `,
});

function ArrowLink({ href, title }: { href: string; title: string }) {
  const styles = useStyles2(getArrowLinkStyles);

  return (
    <a href={href} className={styles.link} rel="noreferrer">
      {title} <Icon name="angle-right" size="xl" className={styles.arrow} />
    </a>
  );
}

const getArrowLinkStyles = (theme: GrafanaTheme2) => ({
  link: css`
    display: block;
    color: ${theme.colors.text.link};
  `,
  arrow: css`
    //vertical-align: top;
  `,
});
